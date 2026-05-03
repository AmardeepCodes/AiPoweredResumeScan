import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import analyseDataRoutes from "./routes/analyseData.routes.js";
import authRoutes from "./routes/auth.routes.js";


const app = express();
// allow frontend to talk to backend
app.use(cors({
     origin: "http://localhost:5173"
}));

app.use(express.json());
app.use(cookieParser());

app.use("/api/analyse", analyseDataRoutes);
app.use("/api/auth", authRoutes);

app.get('/health', (req, res)=> {
    res.status(200).json({message: 'Server is Healthy'})
})


export default app;