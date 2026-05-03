const mongoose = require("mongoose");

const analysisSchema = new mongoose.Schema({
  resume: {
    fileName: String,
    extractedText: String,
  },

  jobDescription: {
    text: String,
  },

  result: {
    matchScore: Number, // e.g. 78
    missingKeywords: [String],
    matchedKeywords: [String],
    suggestions: [String],
  },

   rawAIResponse: String,


  status: {
    type: String,
    enum: ["pending", "completed", "failed"],
    default: "pending",
  },

  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Analysis", analysisSchema);