import mongoose from "mongoose";

const facultyAchievementSchema = new mongoose.Schema({
  name: { type: String, default: "" },
  title: { type: String, default: "" },
  agency: { type: String, default: "" },
  isbnno: { type: String, default: "" },
  chapter: { type: String, default: "" },
});

const FacultyAchievement = mongoose.model("FacultyAchievement", facultyAchievementSchema);
export default FacultyAchievement;
