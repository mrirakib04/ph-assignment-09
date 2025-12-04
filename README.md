# PH Assignment-09 SkillSwap - Training Provider

A modern web application built with **React.js**, **Firebase Authentication**, and **Tailwind CSS**, designed to connect learners with top-rated instructors and trending skills.

---

## Project Overview

**SkillSwap** is a skill-sharing and training platform where users can:

- Explore **popular skills** offered by various providers.
- View **detailed skill pages** (protected routes).
- See **top-rated providers** with ratings and specialties.
- Learn how the platform works through a structured section.
- Create an account, log in, or sign in with Google.
- Update their profile name and image from the **My Profile** page.
- Recover their account using the **Forgot Password** feature.

---

## Key Features

### Home Page

- **Hero Slider** using Swiper.js / DaisyUI.
- **Popular Skills Section** – shows top skills sorted by rating.
- **Top Rated Providers Section** – displays featured instructors (static data).
- **How It Works Section** – guides users on using the platform.

### Authentication

- Firebase Email/Password Registration.
- Google Authentication (Popup Login).
- Protected routes using **Private Route (IsLogin)**.
- Forgot Password system.
- Update Profile (name & photo) with Firebase’s `updateProfile()` method.

### Skill Details Page (Protected)

- Displays full details of a selected skill.
- Includes a **Book Session** form (Name, Email, Submit).
- Shows success toast on submission.

### Toast Notifications

- Implemented using `react-toastify` for user feedback (login, logout, update, etc).

---

## Technologies Used

- **Frontend:** React.js, Vite, Tailwind CSS, DaisyUI, Material UI
- **Routing:** React Router DOM
- **Authentication:** Firebase Authentication
- **Animation & UI Enhancements:** AOS, Swiper.js, Animate.css
- **Notifications:** React Hot Toast / React Toastify
- **State Management:** React Context API

---

## NPM Packages Used

- `aos` – For scroll animations.
- `swiper` – For Hero Slider.
- `animate.css` – For continuous heading animations.
- `react-toastify` – For alerts and feedback messages.
- `@mui/material` – For stylish UI components.

---

## Protected Routes

- `/skill/:id` → Skill Details Page
- `/profile` → My Profile Page
  (Only accessible if logged in. Redirects to login otherwise.)

---

## Live Site Link

- [https://mrirakib-ph-assignment-09.netlify.app/](https://mrirakib-ph-assignment-09.netlify.app/)

## GitHub Repository

- [https://github.com/programming-hero-web-course2/b12-a9-firesheild-mrirakib04](https://github.com/programming-hero-web-course2/b12-a9-firesheild-mrirakib04)
