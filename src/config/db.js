const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/achievements", {
      // MongoDB driver version 4.0.0 and above
      // useNewUrlParser and useUnifiedTopology are no longer necessary
      // But you can include them for backward compatibility with older versions
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("MongoDB connected");
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

module.exports = connectDB;
