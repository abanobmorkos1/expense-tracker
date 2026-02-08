# Expense Tracker (ERN + MongoDB + Clerk)

A full-stack expense tracking application built with **Express + React + Node + MongoDB**, secured using **Clerk authentication**. Users can log expenses, categorize spending, and view analytics dashboards.

---


## ✨ Features

- 🔐 Authentication with Clerk
- ➕ Create expenses
- 📄 View all expenses
- 🗑️ Delete expenses
- 🗂️ Category tracking
- 📅 Date filtering
- 💳 Payment method tracking
- 📊 Dashboard-ready data

---

## 🧱 Tech Stack

**Frontend**
- React (Vite)
- Clerk Auth
- Material UI
- Recharts / Chart.js

**Backend**
- Node.js
- Express.js
- MongoDB
- Mongoose
- Clerk Backend SDK

**Hosting**
- Vercel (Frontend)
- Render (Backend)
- MongoDB Atlas (Database)

---

## 📂 Project Structure

```

├── frontend/
└── backend/
    ├── models/
    ├── routes/
    ├── middleware/
    ├── db/
    └── app.js
```

---

## ⚙️ Environment Variables

### Backend `.env`

```
PORT=5000
MONGO_URI=your_mongodb_connection_string
CLERK_SECRET_KEY=sk_test_...
```



```
VITE_CLERK_PUBLISHABLE_KEY=pk_test_...
VITE_API_URL=http://localhost:5000
```

---

## 🛠️ Installation

### Clone repo

```
git clone https://github.com/yourusername/expense-tracker.git
cd expense-tracker
```

---

### Backend setup

```
cd backend
npm install
npm run dev
```

---

### Frontend setup

```
cd frontend
npm install
npm run dev
```

---

# 🔌 API Reference

## Base URL

Local:
```
http://localhost:5000
```

Production:
```
https://your-backend-url.onrender.com
```

---

## ✅ Health Check

**GET /health**

Response:
```
ok
```

---

## 🧾 Expenses API

### Create Expense

**POST** `/api/expenses`

Headers:
```
Authorization: Bearer <token>
Content-Type: application/json
```

Body:
```json
{
  "amount": 45.25,
  "category": "Gas",
  "date": "2026-02-07",
  "paymentMethod": "Card",
  "note": "Shell station"
}
```

---

### Get Expenses

**GET** `/api/expenses`

Headers:
```
Authorization: Bearer <token>
```

Optional Query Params:
- start
- end
- category

Example:
```
/api/expenses?category=Food&start=2026-02-01&end=2026-02-07
```

---

### Delete Expense

**DELETE** `/api/expenses/:id`

Headers:
```
Authorization: Bearer <token>
```

Response:
```json
{ "message": "Deleted" }
```

---

## 👨‍💻 Author

**Abanob Morkos**  
Full‑Stack Developer  
Solutions R Us
