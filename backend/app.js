// Imports necessary modules
import express from "express";
import { config } from "dotenv";
import { dbConnection } from "./database/dbConnection.js";

// Initialize an Express application
const app = express();

// Load environment variables from a .env file into process.env
config({ path: "../.env" });
// Establish a connection to the MongoDB database
dbConnection();

app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Start the server and listen on the port defined in the .env file or default to port 3000
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
