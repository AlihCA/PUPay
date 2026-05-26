# PUPay — Final MVP Features

PUPay is a web-based automated payment collection and tracking system designed for PUP Parañaque. The system streamlines collection management, payment tracking, reminders, and AI-assisted administrative tasks.

---

# 1. Authentication & Role System

## Features

* Clerk Authentication
* Login
* Register
* Logout
* Protected Routes
* Role-Based Access

## Roles

* Admin / Treasurer
* Student

## Access Rules

### Admin

Can:

* Manage collections
* Manage payments
* Manage students
* Manage announcements

### Student

Can:

* View own collections
* View own payment records
* Pay assigned collections
* View announcements/reminders

---

# 2. Admin Features

## Admin Dashboard

### Features

* Total collections summary
* Total collected amount
* Pending payments count
* Overdue payments count
* Student payment statistics
* Collection progress overview

---

## Collection Management

### Features

* Create collection event
* Edit collection event
* Delete collection event
* View all collections
* Collection status tracking
* Due dates
* Collection target section/class

### Example Collection Events

```txt
Foundation Day Contribution
Class Fund
Project Fee
```

---

## Payment Management

### Features

* View payment records
* View payment status
* Filter/search payments
* Pending / Paid / Overdue statuses
* Cash payment recording
* PayMongo payment tracking

### Payment Methods

* PayMongo (GCash / Card)
* Cash

---

## Student Management

### Features

* View students
* View student payment history
* View student collection status
* Payment progress tracking

---

## Announcement Management

### Features

* Create announcements
* Edit announcements
* Delete announcements
* Send payment reminders
* Section-based announcements

---

# 3. Student Features

## Student Dashboard

### Features

* View active collections
* View payment summary
* View paid/pending collections
* View announcements/reminders

---

## My Collections

### Features

* View all assigned collections
* View due dates
* View collection details
* Track payment progress

---

## My Payments

### Features

* View payment history
* View payment status
* View payment method
* View payment dates

---

## Student Announcements

### Features

* View announcements
* View reminders
* View deadlines

---

# 4. AI Features (Finalized)

The AI features were intentionally designed to:

* automate admin work
* fit the project scope
* remain realistic for MVP
* provide useful assistance instead of overcomplicated automation

---

## AI Reminder Generator

### Purpose

Generate professional payment reminders automatically.

### Example

```txt
Good day BSIT 3-2 students,
please settle your Foundation Day contribution...
```

### Endpoint

```txt
POST /api/ai/generate-reminder
```

---

## AI Collection Summary

### Purpose

Automatically summarize payment progress.

### Example

```txt
42 out of 60 students have already paid...
```

### Endpoint

```txt
POST /api/ai/generate-summary
```

---

## AI Insights

### Purpose

Provide suggestions and observations based on payment data.

### Example

```txt
Many students are still unpaid near the due date.
Sending reminders is recommended.
```

### Endpoint

```txt
POST /api/ai/generate-insights
```

---

## AI Announcement Generator

### Purpose

Generate announcement drafts automatically.

### Example

```txt
The Foundation Day contribution collection is now open...
```

### Endpoint

```txt
POST /api/ai/generate-announcement
```

---

# 5. Payment Gateway Integration

## PayMongo

### Features

* GCash payments
* Card payments
* Checkout links
* Automatic payment success updates

### Important

PayMongo automatically handles online payment verification.

---

# 6. Backend Features

## APIs

* Collections API
* Payments API
* Students API
* Announcements API
* AI API
* Auth API

---

## Database

* MySQL relational database
* Payment records
* Student records
* Collection records
* Announcement records

---

# 7. Deployment

## Frontend

* Vercel

## Backend

* Railway

---

# Features Removed from MVP

The following features were intentionally removed to keep the MVP realistic and achievable:

* AI receipt verification
* OCR screenshot validation
* Manual proof approval system
* Real-time chat
* Advanced analytics/charts
* Complex notification system
* Multi-school support
* Parent portal
* Super admin system

### Reason

These features:

* significantly increase complexity
* slow development
* are not necessary for MVP
* can become future improvements later

---

# Final MVP Philosophy

PUPay focuses on:

```txt
Automating school payment tracking,
collection management,
and reminders
with practical AI assistance.
```

Instead of:

```txt
Overcomplicated AI automation everywhere.
```

The goal is to build a clean, realistic, and actually useful school payment management system.
