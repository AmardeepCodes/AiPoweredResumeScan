import express from 'express';
import multer from 'multer';
import * as pdfParse from "pdf-parse";
import fs from 'fs';
import OpenAI from "openai";

const router = express.Router();

const storage = multer.diskStorage({
    destination:(req, file, cb) => {
        cb(null, "uploads/");
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + "-" + file.originalname);
    }
});

const upload = multer({storage: storage});

// const openai = new OpenAI({
//     apiKey: process.env.OPENAI_API_KEY
// });

router.post("/analyse", upload.single("resume"), async (req, res) => {

    const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY
});

  try {
    const filePath = req.file.path; // ✅ now we get file path
    const jd = req.body.jd;

    // 🔥 Read file from disk
    const fileBuffer = fs.readFileSync(filePath);

    // Extract text (PDF)
    const pdfData = await pdfParse(fileBuffer);
    const resumeText = pdfData.text;

    // 🔥 Send to OpenAI
    const completion = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        {
          role: "system",
          content: "You are an expert ATS resume analyzer.",
        },
        {
          role: "user",
          content: `
Compare the following RESUME with JOB DESCRIPTION.

Give:
1. Match percentage
2. Missing skills
3. Strong points
4. Suggestions

RESUME:
${resumeText}

JOB DESCRIPTION:
${jd}
          `,
        },
      ],
    });

    const result = completion.choices[0].message.content;

    // ❗ Optional: delete file after processing (important)
    fs.unlinkSync(filePath);

    res.json({ result });

    console.log("Analysis Result: ", result);

  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Analysis failed" });
  }
});

export default router;