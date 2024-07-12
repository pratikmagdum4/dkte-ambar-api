import express from "express";
const router = express.Router();
import studentAchievementController from "../controllers/studentAchievementController";

router.post("/submit", studentAchievementController.createStudentAchievement);
router.get("/getData", studentAchievementController.getStudentAchievements);

export default router;
