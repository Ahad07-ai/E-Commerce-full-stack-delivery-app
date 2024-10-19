import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    await mongoose.connect('mongodb+srv://Ahad07:Ahad0707@cluster0.ofv3m.mongodb.net/food-del', {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log("DB Connected");
  } catch (error) {
    console.error("Error connecting to DB", error);
    process.exit(1); // Exit the process with a failure code if DB connection fails
  }
};


// add your mongoDB connection string above.
// Do not use '@' symbol in your databse user's password else it will show an error.