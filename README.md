# LeadDesk Mini

A full-stack Lead Management application built using **React, Node.js, Express.js, and MongoDB Atlas**. The application allows users to submit leads through a public form while administrators can securely log in to manage, search, and update lead statuses through a protected dashboard.

---

# Live Demo

### Frontend
https://lead-desk-mini-bay.vercel.app

### Backend
https://leaddesk-mini-wiv8.onrender.com

### GitHub Repository
https://github.com/abhass450-code/LeadDesk-Mini

---

# Features

## Public Side

- Public Lead Capture Form
- Client-side Validation
- Server-side Validation
- Responsive User Interface

## Admin Side

- Secure Admin Login
- JWT Authentication
- Password Hashing using bcrypt
- Protected Dashboard
- View All Leads
- Search Leads
- Update Lead Status (New, Contacted, Closed)

---

# Tech Stack

## Frontend

- React
- Vite
- Axios
- CSS

## Backend

- Node.js
- Express.js
- MongoDB Atlas
- Mongoose
- JWT (jsonwebtoken)
- bcryptjs

## Deployment

- Vercel (Frontend)
- Render (Backend)

---

# Folder Structure

```text
LeadDesk-Mini
│
├── client
│   ├── src
│   ├── public
│   ├── package.json
│   └── vite.config.js
│
├── server
│   ├── Config
│   ├── Controllers
│   ├── Middleware
│   ├── Models
│   ├── Routes
│   ├── server.js
│   ├── package.json
│   └── .env
│
└── README.md
```

---

# Authentication

The application uses **JWT (JSON Web Token)** for secure authentication.

- Admin login is protected using JWT.
- Passwords are securely stored using bcrypt hashing.
- Protected routes are accessible only after successful authentication.
- JWT tokens expire automatically after the configured duration.

---

# Database

MongoDB Atlas is used as the cloud database.

Collections include:

- Admin Credentials
- Leads

Each lead stores:

- Name
- Email
- Phone
- Status
- Created Date

---

# API Endpoints

## Authentication

| Method | Endpoint | Description |
|---------|----------|-------------|
| POST | `/api/auth/login` | Admin Login |

## Leads

| Method | Endpoint | Description |
|---------|----------|-------------|
| POST | `/api/leads` | Create Lead |
| GET | `/api/leads` | Get All Leads |
| PUT | `/api/leads/:id` | Update Lead Status |

---

# Installation

## Clone Repository

```bash
git clone https://github.com/abhass450-code/LeadDesk-Mini.git
```

## Install Client

```bash
cd client
npm install
npm run dev
```

## Install Server

```bash
cd server
npm install
npm run dev
```

---

# Environment Variables

Create a `.env` file inside the **server** folder.

```env
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
PORT=5000
```

---

# Test Credentials

```
Email: admin@digitalheroes.com
Password: 1234567890a
```

---

# Design Decisions

### 1. JWT Authentication

JWT was chosen to securely authenticate administrators without maintaining server-side sessions. This keeps the backend lightweight and scalable.

### 2. MongoDB Atlas

MongoDB Atlas provides a cloud-hosted NoSQL database that integrates seamlessly with Mongoose and simplifies deployment.

### 3. React + Express Architecture

The frontend and backend are separated, making the application modular, easier to maintain, and independently deployable.

---

# Future Improvements

- Pagination for large datasets
- Dashboard analytics
- Export leads as CSV
- Email notifications
- Role-based access control
- Filter leads by status

---
---

# Use of AI

AI tools were used to assist during the development process, including:

- Debugging backend errors
- Resolving deployment issues on Render and Vercel
- Improving project documentation (README)
- Reviewing code structure and suggesting optimizations
- Troubleshooting JWT authentication and MongoDB integration

All architecture decisions, implementation, testing, and final code verification were completed by the developer.

# Author

**Abhas Singh**

Developed as part of the **Digital Heroes Internship Qualification Task**.