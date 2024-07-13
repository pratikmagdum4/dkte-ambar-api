import express from "express";
const router = express.Router();
import {
  createFacultyAchievementBookPublication,
  deleteFacultyAchievementBookPublication,
  getFacultyAchievementsBookPublication,
  updateFacultyAchievementBookPublication,
} from "../../controllers/FacultyAchivements/facultyAchievementBookPublicationController.js";
// Middleware to parse JSON and URL-encoded bodies
router.use(express.json());
router.use(express.urlencoded({ extended: true }));

router.post("/submit", createFacultyAchievementBookPublication);
router.delete("/:id", deleteFacultyAchievementBookPublication);
router.get("/getData", getFacultyAchievementsBookPublication);
router.put("/:id", updateFacultyAchievementBookPublication);

export default router;
