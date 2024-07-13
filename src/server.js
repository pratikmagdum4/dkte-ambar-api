import express from "express";
import dotenv from "dotenv";
import chalk from "chalk";
import cookieParser from "cookie-parser";
import connectToDB from "./db/connectToDB.js"; // Corrected path
import cors from "cors";
import facultyAchievementRoutes from "./routes/facultyAchievementRoutes.js";
// import studentAchievementRoutes from "./routes/studentAchievementRoutes.js";
import bodyParser from "body-parser";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middlewares
app.use(express.json());
app.use(cookieParser());
app.use(cors());
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.json({ message: "hello from Amber server" });
});

// Routes
app.use("/api/facultyAchievements", facultyAchievementRoutes);
// app.use("/api/studentAchievements", studentAchievementRoutes);

app.listen(PORT, () => {
  connectToDB();
  console.log(chalk.blueBright(`Server Running on port ${PORT}`));
});
