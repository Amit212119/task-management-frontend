# 📝 Task Management App - Frontend

This is the **frontend** of a full-stack Task Management application built with **React.js** and **Vite**. It allows users to register, log in, log out, and manage their tasks efficiently.

---

## 🚀 Live Demo

🌐 Frontend: [https://task-management-frontend-eight-pi.vercel.app](https://task-management-frontend-eight-pi.vercel.app)  
🌐 Backend: [https://task-management-backend-production-7e2b.up.railway.app](https://task-management-backend-production-7e2b.up.railway.app)

---

## 🔧 Features

- ✅ User Registration
- ✅ User Login with JWT (via cookies)
- ✅ Protected Routes
- ✅ Logout
- ✅ Create, Edit, Delete Tasks
- ✅ Responsive UI
- ✅ Error Handling with Toast Notifications

---

## 🛠️ Tech Stack

- React.js (Vite)
- Axios
- React Router DOM
- React Toastify
- JWT (handled via HTTP-only cookies)

---

## 📁 Folder Structure

task-management-frontend/
├── public/
├── src/
│ ├── components/ # Reusable UI components (e.g., Navbar)
│ ├── register/
│ │ ├── index.js # Registration page logic
│ │ └── index.css # Styles for register page
│ ├── login/
│ │ ├── index.js
│ │ └── index.css
│ ├── home/
│ │ ├── index.js # Task management UI
│ │ └── index.css
│ ├── services/ # API service functions (e.g., axios)
│ ├── App.jsx
│ └── main.jsx
├── .env
├── package.json
└── vite.config.js

Install dependencies
npm install


Run the app
npm run dev