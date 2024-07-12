import express from "express";
const router = express.Router();
import { createStudentAchievement, getStudentAchievements } from "../controllers/studentAchievementController.js";

router.post("/submit", studentAchievementController.createStudentAchievement);
router.get("/getData", studentAchievementController.getStudentAchievements);

export default router;
