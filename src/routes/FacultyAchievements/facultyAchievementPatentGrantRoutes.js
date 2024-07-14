import express from "express";

const router = express.Router();

import {
  createFacultyAchievementPatentGrant,
  getFacultyAchievementsPatentGrant,
  deleteFacultyAchievementPatentGrant,
  updateFacultyAchievementPatentGrant,
} from "../../controllers/FacultyAchievements/facultyAchievementPatentGrantController.js";

router.use(express.json());
router.use(express.urlencoded({ extended: true }));

router.post("/submit", createFacultyAchievementPatentGrant);
router.get("/getData", getFacultyAchievementsPatentGrant);
router.delete("/:id", deleteFacultyAchievementPatentGrant);
router.put("/:id", updateFacultyAchievementPatentGrant);

export default router;
