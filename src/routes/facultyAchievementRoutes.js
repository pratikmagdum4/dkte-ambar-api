import express from "express";
const router = express.Router();
import FacultyAchievement from "../models/facultyAchievement.js";

// Middleware to parse JSON and URL-encoded bodies
router.use(express.json());
router.use(express.urlencoded({ extended: true }));

// Submit new data
router.post("/submit", async (req, res) => {
  try {
    console.log("The req is ", req.body);

    // Ensure the data is a JSON object
    const jsonData = JSON.parse(JSON.stringify(req.body));
    console.log("The JSON data is ", jsonData);

    // Use the parsed jsonData directly to create a new document
    const newAchievement = new FacultyAchievement(jsonData);
    const savedAchievement = await newAchievement.save();

    console.log("Saved achievement:", savedAchievement);
    res.status(200).send(savedAchievement);
  } catch (error) {
    console.error("Error saving achievement:", error);
    res.status(400).send(error);
  }
});

// Get all data
router.get("/getData", async (req, res) => {
  try {
    const achievements = await FacultyAchievement.find();
    res.status(200).send(achievements);
  } catch (error) {
    res.status(400).send(error);
  }
});

export default router;
