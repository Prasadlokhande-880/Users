---

## Project README

### Overview

This project is a **User Management System** consisting of both a **Backend** (Node.js/Express) and a **Frontend** (React). The application allows admins to fetch, decrypt, and create user data securely.

### Features

- **Backend**:
  - Fetch user data stored in the database.
  - Decrypt sensitive information like name and email using RSA encryption with a private key.
  - Create new users with role-based access (admin or student).
  - Exposes a REST API with endpoints to manage users (`GET` and `POST` requests).

- **Frontend**:
  - Display a list of users fetched from the backend.
  - Decrypt user data on the client side using a private key.
  - Allow the admin to create new users through a form with name, email, password, and role.

---

### Backend Setup

#### 1. Prerequisites

- Node.js (version 14 or later)
- PostgreSQL (or any database of your choice, with necessary adjustments to database configuration)

#### 2. Installation

1. Clone the repository:

   ```bash
   git clone <repository-url>
   cd backend
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Set up the `.env` file:

   Create a `.env` file in the root directory and add the following environment variables:

   ```env
   REACT_APP_PRIVATE_KEY=<your-private-key-here>
   ```

4. Start the server:

   ```bash
   npm start
   ```

   This will start the backend server on `http://localhost:3000`.

---

### Frontend Setup

#### 1. Prerequisites

- Node.js (version 14 or later)
- Create React App (or similar project setup)

#### 2. Installation

1. Clone the repository:

   ```bash
   git clone <repository-url>
   cd frontend
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Set up the `.env` file:

   Create a `.env` file in the root directory and add the following environment variables:

   ```env
   REACT_APP_PRIVATE_KEY=<your-private-key-here>
   ```

4. Start the frontend:

   ```bash
   npm start
   ```

   This will start the frontend server on `http://localhost:3001`.

---

### How to Use

#### Backend

- **GET `/admin`**:

  - Fetch all users from the database.
  - Returns the list of users with encrypted name and email.

- **POST `/admin`**:
  - Create a new user with the following data:
    - `name`: The user's full name.
    - `email`: The user's email address.
    - `password`: The user's password.
    - `role`: The user's role (either `STUDENT` or `ADMIN`).

#### Frontend

- **View Users**:

  - Click the "Fetch All Users" button to retrieve and display the list of users from the backend.
  - The decrypted user data (name and email) will be displayed.

- **Create User**:
  - Fill in the form with a new user's name, email, password, and role, then click "Create User" to add the new user to the database.
  - The newly created user will appear in the list.

---

### Decryption Process

- **Private Key Storage**:

  - The private key used for decrypting user data (name, email) is stored in the `.env` file, ensuring it is not exposed in the codebase.

- **Decryption**:
  - The frontend decrypts the user data (name and email) using the private key. The private key is used to decode the encrypted data using the RSA-OAEP algorithm.

---

### Running the Full Application (Frontend + Backend)

1. Start the **backend** server on port `3000`:

   ```bash
   cd backend
   npm start
   ```

2. Start the **frontend** server on port `3001`:

   ```bash
   cd frontend
   npm start
   ```

3. Open the frontend in a web browser:

   ```bash
   http://localhost:3001
   ```

---

### Conclusion

This project provides a simple yet secure user management system with encryption and decryption features. It demonstrates how to handle sensitive user data with private key encryption in both the frontend and backend.

---
