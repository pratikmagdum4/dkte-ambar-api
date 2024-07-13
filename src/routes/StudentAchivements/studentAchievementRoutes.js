import express from "express";
const router = express.Router();
import {
  createStudentAchievement,
  getStudentAchievements,
} from "../../controllers/StudentAchivements/studentAchievementController.js";

// router.post("/submit", createStudentAchievement.createStudentAchievement);
// router.get("/getData", getStudentAchievements.getStudentAchievements);

export default router;
