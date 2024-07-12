import StudentAchievement from "../models/studentAchievement";

export const createStudentAchievement = async (req, res) => {
  const achievements = req.body;
  try {
    await StudentAchievement.insertMany(achievements);
    res.status(200).send("Data submitted successfully");
  } catch (error) {
    res.status(500).send("Error submitting data");
  }
};

export const getStudentAchievements = async (req, res) => {
  try {
    const data = await StudentAchievement.find();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).send("Error retrieving data");
  }
};
