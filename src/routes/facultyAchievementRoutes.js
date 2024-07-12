import express from "express";
const router = express.Router();
import FacultyAchievement from "../models/facultyAchievement.js";

// Middleware to parse JSON and URL-encoded bodies
router.use(express.json());
router.use(express.urlencoded({ extended: true }));


// Submit new data
router.post("/submit", async (req, res) => {
  try {
    const achievementsArray = req.body;
    console.log("Raw request body:", achievementsArray);

    const savedAchievements = [];
    for (const achievement of achievementsArray) {
      const { name, title, agency, isbnno, chapter } = achievement;

      // Log the parsed data
      console.log("Parsed data:", { name, title, agency, isbnno, chapter });

      // Check if the achievement already exists
      let existingAchievement = await FacultyAchievement.findOne({
        name,
        title,
        agency,
        isbnno,
        chapter,
      });

      if (existingAchievement) {
        console.log("Achievement already exists:", existingAchievement);
        savedAchievements.push(existingAchievement);
      } else {
        // Create a new achievement document
        const newAchievement = new FacultyAchievement({
          name,
          title,
          agency,
          isbnno,
          chapter,
        });

        // Save the new achievement
        const savedAchievement = await newAchievement.save();
        savedAchievements.push(savedAchievement);

        // Log the saved document
        console.log("Saved achievement:", savedAchievement);
      }
    }

    // Send response
    res.status(200).send(savedAchievements);
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
