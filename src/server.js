const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const facultyAchievementRoutes = require("./routes/facultyAchievementRoutes");
const studentAchievementRoutes = require("./routes/studentAchievementRoutes");

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Connect to MongoDB
mongoose
  .connect("mongodb://localhost:27017/achievements", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.error("MongoDB connection error:", error);
    process.exit(1); // Exit process with failure
  });

// Routes
console.log("hi there ")
app.use("/api/facultyAchievements", facultyAchievementRoutes);
app.use("/api/studentAchievements", studentAchievementRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
