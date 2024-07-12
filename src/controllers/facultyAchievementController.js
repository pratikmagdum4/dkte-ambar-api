import FacultyAchievement from "../models/facultyAchievement.js";

const createFacultyAchievement = async (req, res) => {
  const achievements = req.body;
  console.log("The received data is ", achievements);
  try {
    await FacultyAchievement.insertMany(achievements);
    console.log("Submitted");
    res.status(200).send("Data submitted successfully");
  } catch (error) {
    console.log("Error is ", error);
    res.status(500).send("Error submitting data");
  }
};

const getFacultyAchievements = async (req, res) => {
  try {
    const data = await FacultyAchievement.find();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).send("Error retrieving data");
  }
};

export { createFacultyAchievement, getFacultyAchievements };
