# PUPay

PUPay is a web-based automated payment collection and tracking system for PUP Parañaque. The system helps administrators manage collections, payments, announcements, and AI-assisted reminders while allowing students to track their payment status and collection history.

---

# Tech Stack

## Frontend

* React + Vite
* React Router DOM
* Lucide React

## Backend

* Node.js
* Express.js

## Database

* MySQL

## Authentication

* Clerk

## Payment Gateway

* PayMongo

## Deployment

* Vercel
* Railway

---

# Team Workflow

## IMPORTANT RULES

❌ NEVER code directly in:

* main
* dev

✅ ALWAYS create/use your assigned feature branch.

---

# Branch Structure

```txt
main = Production branch
dev = Main development branch

feature/admin-collections-ui
feature/student-payments-ui
feature/collections-payments-api
feature/students-announcements-api
feature/auth-role-deployment
feature/ai-helper
```

---

# First Time Setup

## 1. Clone Repository

```bash
git clone REPOSITORY_LINK
```

---

## 2. Open Project

```bash
cd PUPay
```

---

# Frontend Setup

## Install Frontend Dependencies

```bash
cd client
npm install
```

## Run Frontend

```bash
npm run dev
```

---

# Backend Setup

## Install Backend Dependencies

```bash
cd ../server
npm install
```

## Run Backend

```bash
npm run dev
```

---

# IMPORTANT GIT WORKFLOW

## Before Coding

```bash
git checkout dev
git pull origin dev
```

## Switch To Your Assigned Branch

Example:

```bash
git checkout feature/student-payments-ui
git pull origin feature/student-payments-ui
```

---

# Before Pushing Changes

```bash
git add .
git commit -m "Your commit message"
git push origin your-branch-name
```

Example:

```bash
git push origin feature/student-payments-ui
```

---

# Pull Request Workflow

After finishing your feature:

1. Push your branch
2. Open GitHub
3. Create Pull Request
4. Request review
5. Wait for approval before merge

---

# FRONTEND RULE

Whenever using dummy data, ALWAYS add future API comments.

Example:

```js
// ========================================
// FUTURE API
// GET /api/collections
// Returns all collection events
// ========================================

const collections = [];
```

Required for:

* collections
* payments
* students
* announcements
* AI responses

---

# IMPORTANT RULES

❌ Do NOT modify files outside your assigned folders.
❌ Do NOT upload .env files.
❌ Do NOT upload API keys.
❌ Do NOT delete other members' files.
❌ Do NOT merge your own PR without approval.

---

# Shared Protected Files

ONLY ALIH can modify:

```txt
client/src/routes/AppRoutes.jsx
client/src/App.jsx

client/src/styles/global/

client/src/components/layout/Sidebar.jsx
client/src/components/layout/Topbar.jsx
```

---

# Install Notes

The repository does NOT include:

* node_modules
* .env
* dist

because they are included in `.gitignore`.

Every member must run:

```bash
npm install
```

inside:

* client
* server

after cloning.

---

# Project Structure

```txt
client/
server/
```

Frontend code goes inside:

```txt
client/src/
```

Backend code goes inside:

```txt
server/src/
```

---

# Merge Order

1. Auth setup
2. Admin collections/dashboard
3. Student/payment pages
4. Backend APIs
5. AI integration
6. Final testing
7. Deployment

---

# AI Features

* AI Reminder Generator
* AI Collection Summary
* AI Insights
* AI Announcement Generator

---

# Reminder

Always pull the latest changes before coding:

```bash
git pull origin dev
```

before switching to your branch.
