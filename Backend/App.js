/**
 * Express application setup and routing.
 *
 * This is the main server file where the Express app is configured. It uses the
 * `body-parser` middleware to parse JSON and URL-encoded data, loads a private
 * key from a file, sets up a test route, and mounts the admin-related routes
 * from the `adminRoutes` module.
 *
 * @module server
 */
const cors = require("cors");
const express = require("express");
const bodyParser = require("body-parser");
const fs = require("fs");
const adminRoutes = require("./src/routes/adminRoutes");

const app = express();

// Enable CORS for all routes
app.use(cors());

// Middleware to parse JSON and URL-encoded data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Load the private key from a file
const privateKey = fs.readFileSync("private_key.pem", "utf8");

/**
 * Test route to check server status and return the private key.
 *
 * This route responds with a message containing the private key from the
 * `private_key.pem` file. It's intended for testing purposes and logs a
 * greeting message to the console when accessed.
 *
 * @route GET /
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 * @returns {Object} - JSON object with the private key message.
 */
app.get("/", (req, res) => {
  console.log("Hi from the server!");
  res.status(200).json({ message: privateKey });
});

// Mount admin routes
app.use("/admin", adminRoutes);

module.exports = app;
