import express from "express";
import isAuth from "../middleware/isAuth.js";
import { upload } from "../middleware/multer.js";
import { analyzeResume, finishInterview, generateQuestions, submitAnswer } from "../controllers/interviewcontroller.js";

const interviewRouter = express.Router();

interviewRouter.post("/resume", isAuth, upload.single("resume"), analyzeResume);
interviewRouter.post("/generate-questions",isAuth,generateQuestions);
interviewRouter.post("/sumit-answer",isAuth,submitAnswer);
interviewRouter.post("/finish",isAuth,finishInterview);

export default interviewRouter;