import express from "express";
const router = express.Router();
import { createFacultyAchievement, deleteAchievement, getFacultyAchievements } from "../controllers/facultyAchievementController.js";
// Middleware to parse JSON and URL-encoded bodies
router.use(express.json());
router.use(express.urlencoded({ extended: true }));

console.log("i im in routes of submit");



router.post("/submit", createFacultyAchievement);
console.log("i im in routes of delete")
router.delete('delete/:id',deleteAchievement);
router.get("/getData", getFacultyAchievements);


export default router;
