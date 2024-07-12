import mongoose from "mongoose";

const facultyAchievementSchema = new mongoose.Schema({
  name: { type: String, default: "" },
  title: { type: String, default: "" },
  agency: { type: String, default: "" },
  isbnno: { type: String, default: "" },
  chapter: { type: String, default: "" },
});

export default mongoose.model("FacultyAchievement", facultyAchievementSchema);
