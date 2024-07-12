import express from "express";
import dotenv from "dotenv";
import chalk from "chalk";
import cookieParser from "cookie-parser";
import connectToDB from "../src/db/connectToDB.js";
import cors from "cors"
import facultyAchievementRoutes from "../src/routes/facultyAchievementRoutes.js"
// import studentAchievementRoutes from "./src/routes/studentAchievementRoutes.js"
import bodyParser from "body-parser";

const app = express();
const PORT = process.env.PORT || 5000;

dotenv.config();

// Middlewares
app.use(express.json());
app.use(cookieParser());
app.use(cors());
app.use(bodyParser.json());

// Routes
console.log("hi there ")
app.use("/api/facultyAchievements", facultyAchievementRoutes);
// app.use("/api/studentAchievements", studentAchievementRoutes);

app.listen(PORT, () => {
    connectToDB();
    console.log(chalk.blueBright(`Server Running on port ${PORT}`)); 
});
