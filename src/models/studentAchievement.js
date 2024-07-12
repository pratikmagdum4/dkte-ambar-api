import mongoose from "mongoose";

const studentAchievementSchema = new mongoose.Schema({
  studentName: { type: String, required: true },
  achievementTitle: { type: String, required: true },
  event: { type: String, required: true },
  date: { type: Date, required: true },
  description: { type: String },
});

export default mongoose.model("StudentAchievement", studentAchievementSchema);
