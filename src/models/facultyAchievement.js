const mongoose = require("mongoose");

const facultyAchievementSchema = new mongoose.Schema({
  name: { type: String, default: "" },
  title: { type: String, default: "" },
  agency: { type: String, default: "" },
  isbnno: { type: String, default: "" },
  chapter: { type: String, default: "" },
});

module.exports = mongoose.model("FacultyAchievement", facultyAchievementSchema);
