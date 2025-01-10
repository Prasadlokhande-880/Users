const publicKey = fs.readFileSync("public_key.pem", "utf8");

// // Function to encrypt data using public key
// function encryptData(data) {
//   const publicKey = fs.readFileSync("public_key.pem", "utf8");

//   const buffer = Buffer.from(data, "utf-8");
//   const encrypted = crypto.publicEncrypt(publicKey, buffer);

//   return encrypted.toString("base64"); // Return encrypted data as base64 string
// }

// // Example: Encrypt some data
// const data = "Hello, this is secret!";
// const encryptedData = encryptData(data);
// console.log("Encrypted Data:", encryptedData);
