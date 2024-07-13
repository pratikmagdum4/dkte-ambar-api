import FacultyAchievement from "../models/facultyAchievement.js";

const createFacultyAchievement = async (req, res) => {
   try {
    console.log("hi i m in controller")
     const achievementsArray = req.body;
    //  console.log("Raw request body:", achievementsArray);

     const savedAchievements = [];
     for (const achievement of achievementsArray) {
       const { name, title, agency, isbnno, chapter } = achievement;

       // Log the parsed data
      //  console.log("Parsed data:", { name, title, agency, isbnno, chapter });

       // Check if the achievement already exists
       let existingAchievement = await FacultyAchievement.findOne({
         name,
         title,
         agency,
         isbnno,
         chapter,
       });

       if (existingAchievement) {
        //  console.log("Achievement already exists:", existingAchievement);
         savedAchievements.push(existingAchievement);
       } else {
         // Create a new achievement document
         const newAchievement = new FacultyAchievement({
           name,
           title,
           agency,
           isbnno,
           chapter,
         });

         // Save the new achievement
         const savedAchievement = await newAchievement.save();
         savedAchievements.push(savedAchievement);

         // Log the saved document
        //  console.log("Saved achievement:", savedAchievement);
       }
     }

     // Send response
     res.status(200).send(savedAchievements);
   } catch (error) {
     console.error("Error saving achievement:", error);
     res.status(400).send(error);
   }
};

const getFacultyAchievements = async (req, res) => {
  try {
    const achievements = await FacultyAchievement.find();
    res.status(200).send(achievements);
  } catch (error) {
    res.status(400).send(error);
  }
};

 const deleteAchievement = async (req, res) => {
  const { id } = req.params;
  console.log("hi i here in delete ")
  try {
    const achievement = await FacultyAchievement.findByIdAndDelete(id);
    if (!achievement) {
      return res.status(404).json({ message: "Achievement not found" });
    }
    res.status(200).json({ message: "Achievement deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting achievement" });
  }
};
export { createFacultyAchievement, getFacultyAchievements, deleteAchievement };
