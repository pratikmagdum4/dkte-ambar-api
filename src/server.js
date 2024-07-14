// server.js
import express from "express";
import dotenv from "dotenv";
import chalk from "chalk";
import cookieParser from "cookie-parser";
import cors from "cors";
import connectToDB from "./db/connectToDB.js"; // Corrected path
import facultyAchievementBookPublicationRoutes from "./routes/FacultyAchievements/facultyAchievementBookPublicationRoutes.js";
import facultyAchievementPaperPublicationRoutes from "./routes/FacultyAchievements/facultyAchievementPaperPublicationRoutes.js";
import facultyAchievementOtherSpecialRoutes from "./routes/FacultyAchievements/facultyAchievementOtherSpecialRoutes.js";
dotenv.config();
import facultyAchievementPaperPresentationRoutes from "./routes/FacultyAchievements/facultyAchievementPaperPresentationRoutes.js";
import FacultyAchievementPatentGrant from "./routes/FacultyAchievements/facultyAchievementPatentGrantRoutes.js";
import FacultyAchievementTrainingProgrammes from "./routes/FacultyAchievements/facultyAchievementTrainingProgrammesRoutes.js";
import FacultyAchievementWorkshop from "./routes/FacultyAchievements/facultyAchievementWorkshopRoutes.js";


const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true })); // For parsing application/x-www-form-urlencoded
app.use(cookieParser());
app.use(cors());

// Routes
app.use(
  "/api/facultyachievements/bookpublication",
  facultyAchievementBookPublicationRoutes
);
app.use(
  "/api/facultyachievements/paperpublication",
  facultyAchievementPaperPublicationRoutes
);
app.use(
  "/api/facultyachievements/otherspecial",facultyAchievementOtherSpecialRoutes
);
app.use(
  "/api/facultyachievement/paperpresentaion",
  facultyAchievementPaperPresentationRoutes
);
app.use(
  "/api/facultyachievement/patentgrant",FacultyAchievementPatentGrant
)
app.use(
  "/api/facultyachievement/trainingprogrammes",FacultyAchievementTrainingProgrammes
)
app.use("/api/facultyachievement/workshop", FacultyAchievementWorkshop);
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
