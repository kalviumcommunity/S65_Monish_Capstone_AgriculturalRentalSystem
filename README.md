# Agricultural Equipment Rental System

##  Project Overview
Many small-scale farmers struggle to afford expensive agricultural machinery like tractors, harvesters, and irrigation systems. The high cost of ownership and the lack of a streamlined rental process make it difficult for farmers to access necessary equipment efficiently.

###  **Solution**
The **Agricultural Equipment Rental System** is a **MERN stack web application** that connects farmers with equipment owners. This platform allows owners to list their machinery for rent, while farmers can browse, book, and make secure online payments for rentals. It ensures **affordability, transparency, and ease of access.**

---
##  Features & Functionality

###  **User Roles**
#### 1. Owner (Service Provider)
- Registers/Login
- Lists farming equipment
- Sets availability & pricing
- Manages bookings & payments
- Reviews customers

#### 2. Farmer (Customer)
- Registers/Login
- Browses available equipment
- Books equipment for rent
- Makes online payments
- Reviews service providers

###  **Core Functionalities**
 **Authentication & Authorization**
- User Registration (Owner/Farmer)
- Login with JWT-based authentication
- Role-based access control

 **Equipment Management**
- Owners can add, update, and delete their listed equipment
- Farmers can view available equipment and see details

 **Booking System**
- Farmers can book equipment for a specific duration
- Owners get notified of new bookings

 **Payment Integration**
- Secure payment system (**Stripe/PayPal**) for booking confirmation

 **Ratings & Reviews**
- Farmers can leave feedback on service providers
- Helps improve reliability & trust

 **Admin Panel (Optional)**
- Manage users, transactions, and reported issues

---
##  Tech Stack

**Frontend:** React.js, CSS  
**Backend:** Node.js, Express.js  
**Database:** MongoDB (Atlas)  
**Authentication:** JWT (JSON Web Tokens)  
**Hosting:** Backend → Render, Frontend → Vercel  
**Payments:** Stripe/PayPal  


##  Development Roadmap

### **Phase 1: Backend Setup & API Development** (Days 1-2)
- Initialize **Node.js** project & install dependencies (**Express, Mongoose, JWT, CORS, bcrypt, dotenv, multer**)
- Configure **MongoDB Atlas** & establish database connection
- Define Mongoose schemas (**User, Equipment**)
- Implement **authentication routes** (Register/Login with JWT)
- Develop **CRUD APIs** for equipment management
- Secure routes with **authentication middleware**
- Test all API endpoints using **Postman**

### **Phase 2: Frontend Development & User Authentication** (Days 3-4)
- Initialize the **React.js project with Vite**
- Build **authentication pages** (Login/Register) & **role-based protected routes**
- Design and implement **UI for equipment listings & details**
- Develop the **booking system** for renting equipment
- Integrate **Stripe/PayPal for secure payment processing**
- Add **real-time booking notifications** for owners

### **Phase 3: Ratings, Reviews & Feature Enhancements** (Days 5-6)
- Implement **ratings & reviews** for farmers to rate service providers
- Develop **search & filtering functionality**
- Enhance **UI/UX** with responsiveness and styling
- Fix bugs & optimize API performance

### **Phase 4: Final Testing, Deployment & Admin Panel** (Days 7-8)
- Conduct **end-to-end testing** to ensure smooth functionality
- Fix any remaining issues
- Deploy **backend on Render & frontend on Vercel**
- Set up an **admin panel** for managing users, transactions & reports (optional)

---


 **Let's build a smarter agricultural future!**


### **Deployment Link** 

-**https://s65-monish-capstone-o509.onrender.com/**
