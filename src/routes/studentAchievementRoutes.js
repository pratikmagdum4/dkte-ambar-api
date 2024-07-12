const express = require("express");
const router = express.Router();
const studentAchievementController = require("../controllers/studentAchievementController");

router.post("/submit", studentAchievementController.createStudentAchievement);
router.get("/getData", studentAchievementController.getStudentAchievements);

module.exports = router;
