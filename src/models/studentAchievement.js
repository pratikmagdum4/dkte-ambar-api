const mongoose = require("mongoose");

const studentAchievementSchema = new mongoose.Schema({
  studentName: { type: String, required: true },
  achievementTitle: { type: String, required: true },
  event: { type: String, required: true },
  date: { type: Date, required: true },
  description: { type: String },
});

module.exports = mongoose.model("StudentAchievement", studentAchievementSchema);
