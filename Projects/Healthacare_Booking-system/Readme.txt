# 🏥 Medicare - Healthcare Management System

![License](https://img.shields.io/badge/License-MIT-blue.svg)
![MERN Stack](https://img.shields.io/badge/Stack-MERN-green)
![Status](https://img.shields.io/badge/Status-Completed-success)

## 📖 Table of Contents
* [Introduction](#introduction)
* [Key Features](#key-features)
* [Tech Stack](#tech-stack)
* [Installation](#installation)
* [Environment Variables](#environment-variables)
* [API Endpoints](#api-endpoints)
* [Screenshots](#screenshots)
* [Contact](#contact)

---

## 💡 Introduction
The **Healthcare Management System** is a full-stack web application built to digitize hospital operations. It bridges the gap between doctors, patients, and hospital administrators. The platform allows for secure user authentication, appointment scheduling, and management of medical records.

This project was built to demonstrate proficiency in the **MERN Stack (MongoDB, Express, React, Node.js)** and RESTful API development.

---

## ✨ Key Features

### 👤 Patient Portal
* **Registration & Login:** Secure signup using JWT authentication.
* **Book Appointments:** Browse doctor availability and book slots.
* **Medical History:** View past appointments and prescriptions.
* **Profile Management:** Update personal details and contact info.

### 👨‍⚕️ Doctor Dashboard
* **Appointment Management:** Accept, reject, or reschedule patient appointments.
* **Patient Records:** Access patient history before consultations.
* **Prescription Module:** Digitally write and save prescriptions for patients.

### 🛠 Admin Panel
* **User Management:** Add/Remove doctors and staff.
* **Analytics:** View total patients, appointments, and active doctors.
* **System Settings:** Manage hospital departments and services.

---

## 🛠 Tech Stack

| Component | Technology |
| :--- | :--- |
| **Frontend** | React.js, Tailwind CSS, Redux Toolkit (State Management), Axios |
| **Backend** | Node.js, Express.js |
| **Database** | MongoDB, Mongoose ODM |
| **Authentication** | JSON Web Tokens (JWT), Bcrypt.js |
| **Tools** | VS Code, Postman, Git |

---

## ⚙️ Installation

Follow these steps to run the project locally.

### 1. Clone the Repository
```bash
git clone [https://github.com/yourusername/healthcare-management-system.git](https://github.com/gaurav-thakare/healthcare-management-system.git)
cd healthcare-management-system
2. Backend Setup
Bash

cd backend
npm install
Create a .env file in the backend folder (see Environment Variables).

Start the server:

Bash

npm run server
3. Frontend Setup
Open a new terminal tab:

Bash

cd frontend
npm install
npm start
The app should now be running on http://localhost:3000.

🔐 Environment Variables
To run this project, you will need to add the following environment variables to your .env file in the backend folder:

Code snippet

PORT=5000
MONGO_URI=mongodb+srv://<username>:<password>@cluster0.mongodb.net/hospital_db
JWT_SECRET=your_super_secret_key_123
NODE_ENV=development
📡 API Endpoints (Examples)
Auth

POST /api/auth/register - Register a new user

POST /api/auth/login - Login user

Appointments

GET /api/appointments - Get all appointments

POST /api/appointments/book - Book a new appointment

Doctors

GET /api/doctors - Get list of all doctors

POST /api/doctors/add - Add a new doctor (Admin only)
