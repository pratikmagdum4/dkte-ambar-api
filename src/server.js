// server.js
import express from "express";
import dotenv from "dotenv";
import chalk from "chalk";
import cookieParser from "cookie-parser";
import cors from "cors";
import connectToDB from "./db/connectToDB.js"; // Corrected path
import facultyAchievementBookPublicationRoutes from "./routes/FacultyAchievements/facultyAchievementBookPublicationRoutes.js";
import facultyAchievementPaperPublicationRoutes from "./routes/FacultyAchievements/facultyAchievementPaperPublicationRoutes.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true })); // For parsing application/x-www-form-urlencoded
app.use(cookieParser());
app.use(cors());

// Routes
app.use(
  "/api/facultyachievementsbookpublication",
  facultyAchievementBookPublicationRoutes
);
app.use(
  "/api/facultyachievementspaperpublication",
  facultyAchievementPaperPublicationRoutes
);

app.get("/", (req, res) => {
  res.json({ message: "hello from Amber server" });
});

app.listen(PORT, () => {
  connectToDB()
    .then(() => {
      console.log(chalk.blueBright(`Server Running on port ${PORT}`));
    })
    .catch((error) => {
      console.error(chalk.red("Failed to connect to MongoDB:", error.message));
      process.exit(1); // Exit the process if MongoDB connection fails
    });
});
