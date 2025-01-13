import React, { useState, useEffect } from "react";
import axios from "axios";
import * as forge from "node-forge";
import "./App.css";

function App() {
  const [allData, setAllData] = useState([]);
  const [decryptedData, setDecryptedData] = useState([]);

  // Load private key from environment variable
  const privateKey = process.env.PRIVATE_KEY;

  const getAllData = async () => {
    try {
      // Fetching all users' data
      const response = await axios.get("http://localhost:3000/admin");
      setAllData(response.data);
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };

  // Function to decrypt data using the private key
  const decryptData = (encryptedData) => {
    try {
      // Decode base64
      const buffer = forge.util.decode64(encryptedData);
      // Parse PEM private key
      const privateKeyObject = forge.pki.privateKeyFromPem(privateKey);
      // Decrypt the buffer
      const decrypted = privateKeyObject.decrypt(buffer, "RSA-OAEP");
      return decrypted; // Return the decrypted data as a string
    } catch (error) {
      console.error("Error decrypting data:", error);
      return "Decryption failed";
    }
  };

  // this is the code for the decrypt the total data

  const decryptedDataJson = () => {
    const data = allData;
    let temp = [];

    for (let i = 0; i < data.length; i++) {
      const encryptedData1 = data[i].name;
      const encryptedData2 = data[i].email;
      const decrypted1 = decryptData(encryptedData1);
      const decrypted2 = decryptData(encryptedData2);

      console.log("decrypted1", decrypted1);
      console.log("decrypted2", decrypted2);

      // Push the decrypted data into temp
      temp.push({
        id: data[i].id,
        password: data[i].password,
        role: data[i].role,
        name: decrypted1,
        email: decrypted2,
      });
    }

    setDecryptedData(temp);
  };

  return (
    <div className="App">
      <button onClick={getAllData}>Fetch All Users</button>
      <div>
        <h3>All User Data:</h3>
        <pre>{JSON.stringify(allData, null, 2)}</pre>
      </div>
      <div>
        <button onClick={decryptedDataJson}>Fetch All Users</button>
        <h3>All User decryptedData:</h3>
        <pre>{JSON.stringify(decryptedData, null, 2)}</pre>
      </div>
    </div>
  );
}

export default App;
