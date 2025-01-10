import React, { useState, useEffect } from "react";
import axios from "axios";
import * as forge from "node-forge";
import "./App.css";

function App() {
  const [allData, setAllData] = useState([]);
  const [decryptedData, setDecryptedData] = useState([]);

  // Load private key from environment variable
  const privateKey = `-----BEGIN RSA PRIVATE KEY-----
MIIEowIBAAKCAQEAi7qRfjt4zkhhx+W+pHYeYcYuknsfLLCIXuQt+Lq7Ul8qucQW
9r4XCJY5vFEpo0QZ9LhaNowlkvjxPO0rzVN8H0JCWYSIE/IeQGvco4FuyPhKRx3M
e6fJSMx+Eg0ciFCzVi/uxpqETSxwVSPq2rfkvi2hE86dwvR++pfwvj1Wyzkn32kN
vXkk0O5zoPY7Zy1IX3NkoS1QuCL0/jhZtAk1OMY2MkI30a3+bcve2CZ6xOWnyjRz
2oB+Nz2louxKJnQwfbvdsYOAvAcxBozccAE2t2rB/HsTjbZBXXP1f0cc9Y2pu0zv
dPnpiu+Mcvi6Rt12ageTurPFidsHBaG8+GER7wIDAQABAoIBAB9ljqe0qVKAxSfr
ocjGmdESfQiBDeI20I2x6/qFyu2ZYLpZK2fKEtblGpgMDLUY6lQo0GyNVSwPL/Wm
vT7n0W4cr1f6BbGlp9KF6g/7V29lCxurwHTQoNPwzyszMwQWThXBs3+A3NWSdLNM
3MrEo2twSU9wD9bspVOdrISyt7v2CNAPJmyCfAub26/rjECB5mDNMmJo6kaRa3LT
3qvSssu7c6E+HoLMhWUS4/vXlUnIH6bptty2pwKoWgZOKkJOZLhUvdXtYBweoljL
gpFIh88Gm7Q1L1xxDAPrVYglEb1QtA8/j4DYnHVLylyAueH/s5jEJuSZUzq1fF+U
h1ORivECgYEAwdcM/jRpeUoqiwLehlEJbw+V2dOixfR2nGopWFTh3bAz0tvT/7FJ
QugLUKceZH5Z2RFCTozA9gyWl+CKLt9IVN9XFNZ3NQ1WpasKS4drrnK0dPGP+SMZ
nlgPjrko0XmAhR7KE0h+W6utTbHbOYmiAt7DZ9l7tuj1+URU5xuupHUCgYEAuIlZ
5YqBdRy5JIcFCKJS4At7t8zSvoI+jAgF8IOr5zlUi8vHQ/dz/hOIa7koVRz5KgGf
eGSQkIXlYbayntVlzI0obHbb7p21rpZ60uKen2WqU/KHvhP2OiSFcOaL/cU7L/Jc
bYiVDTIbjcclY3yAKSqLfMXaOFmbZTbEWoCCwFMCgYAS+syR423ka2eo/tntCuhC
kKMalgddHKe0fwyXUpBfFY6tecrTQXer7m6VMhfevSRtBayZZlzKescQDfNZzZEW
hlvPdYRslGbEh+/VH2hix2Z2AOUY/t/WSkcTsXuWry/vWOluY+3DahbpAZ42jwxm
/Yrikz/y0/KpupAZpPM/tQKBgGHE044bvc7wct75ch9K8SGms9uDdzxcAQtrzMnK
2S7eXv7Z7i8CUcARVTvNk6LUgOZSiczdawJHDmqgwy4H3bFsMDiXGJrpj7J6I4TL
cEL/OCjV3DlGljPj2ZchbpX7Awq6G2Ik9ONS4upQ0mxNMBGfatumb6FfSEdtpsZU
Q/HlAoGBAMCL1Blf8gazmTyfMxb9KVFYE9hPvbgQ4XAbeqppEqhNSRv+Y5WeXpXJ
Pz/K3/4zCSyNA/Wjo9PEv7VRzYUVC9fvT4A13xsgCmahtV7IGlmpAVB3x99o8Oj5
WVMbSSEGXQOmjIGw9gTCeMSL+XrnWGil9SeM+q4mBb4q1YPirtJy
-----END RSA PRIVATE KEY-----`;

  const getAllData = async () => {
    try {
      // Fetching all users' data
      const response = await axios.get("http://localhost:3000/admin"); // Replace with correct server endpoint
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
