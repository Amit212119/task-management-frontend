# 📝 Task Management App - Frontend

This is the **frontend** of a full-stack Task Management application built with **React.js** and **Vite**.  
It allows users to register, log in, log out, and manage their tasks efficiently.

---

## 🚀 Live Demo

- 🌐 **Frontend**: [https://task-management-frontend-eight-pi.vercel.app](https://task-management-frontend-eight-pi.vercel.app)  
- 🌐 **Backend**: [https://task-management-backend-production-7e2b.up.railway.app](https://task-management-backend-production-7e2b.up.railway.app)

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
- JWT (via HTTP-only Cookies)

---

## 📁 Folder Structure

```
task-management-frontend/
├── public/
├── src/
│   ├── components/        # Reusable UI components (e.g., Navbar)
│   ├── register/
│   │   ├── index.js       # Registration page logic
│   │   └── index.css      # Styles for registration
│   ├── login/
│   │   ├── index.js
│   │   └── index.css
│   ├── home/
│   │   ├── index.js       # Task management page
│   │   └── index.css
│   ├── services/          # Axios API functions
│   ├── App.jsx
│   └── main.jsx
├── .env                   # Environment variables (e.g., backend URL)
├── package.json
└── vite.config.js
```

---

## ▶️ Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/your-username/task-management-frontend.git
cd task-management-frontend
```

### 2. Install dependencies

```bash
npm install
```

### 3. Configure environment

Create a `.env` file in the root directory and add:

```env
VITE_BACKEND_URL=https://task-management-backend-production-7e2b.up.railway.app
```

> This is used by Axios to communicate with your backend.

### 4. Run the development server

```bash
npm run dev
```

The app will run at: [http://localhost:5173](http://localhost:5173)

---

## 🔐 Authentication

- Authentication is managed using **JWT stored in HTTP-only cookies**.
- Axios is globally configured to send credentials:
  
```js
axios.defaults.withCredentials = true;
axios.defaults.baseURL = import.meta.env.VITE_BACKEND_URL;
```

---

## 📦 Build for Production

```bash
npm run build
```

Deploy the `/dist` folder on Vercel, Netlify, Hostinger, etc.

---

## 📃 License

MIT — use it freely for learning or commercial projects.

---

## 🙋‍♂️ Author

Created by **Amit Kumar**  
GitHub: [@Amit212119](https://github.com/Amit212119)