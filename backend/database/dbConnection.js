// Import the mongoose library for MongoDB interaction
import mongoose from "mongoose";

// Define a function to establish a connection to the MongoDB database
export const dbConnection = () => {
  // Use mongoose to connect to the database using the connection string from environment variables
  mongoose
    .connect(process.env.MONGO_URI, {
      dbName: "DeepInfluence_DB", // Specify the database name
    })
    .then(() => {
      console.log("Connected to the database."); // Log a message if the connection is successful
    })
    .catch((err) => {
      console.log(`An error occurred. ${err}`); // Log an error message if the connection fails
    });
};
