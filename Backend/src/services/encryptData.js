const crypto = require("crypto");
const fs = require("fs"); // Import the fs module

// Load the public key for encryption
const publicKey = fs.readFileSync("public_key.pem", "utf8");

// Function to encrypt data using the public key
function encryptData(data) {
  const buffer = Buffer.from(data, "utf-8");
  const encrypted = crypto.publicEncrypt(publicKey, buffer);
  return encrypted.toString("base64");
}

module.exports = encryptData;
