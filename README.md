
# 🛒 KJM E-Store

![Status](https://img.shields.io/badge/Project-E--Commerce-blueviolet)
![Frontend](https://img.shields.io/badge/Frontend-Angular-orange)
![Backend](https://img.shields.io/badge/Backend-Node.js-green)
![Database](https://img.shields.io/badge/Database-SQL-lightblue)

An end-to-end **E-Commerce Shopping Platform** designed to simplify online shopping.  
   
---

## 📌 Introduction
KJM E-Store is a **full-stack web application** that allows users to browse products, manage a shopping cart, and securely check out.  
The platform supports **multiple categories** and provides a seamless user experience with authentication and cart management.

Core user actions:
- 🔎 Browse products across categories: **Books, Fashion, Beauty, Food**
- 🛒 Add/remove products from the cart
- 🔑 Create an account, log in, and manage profile
- 📦 Securely check out with shipping details stored in the database

---

## 🚀 Features
- 🔑 **User Authentication** – Sign up & login  
- 🏠 **Home Page** – Slideshow & category-based navigation  
- 📚 **Product Pages** – 6 items per category (Books, Fashion, Beauty, Food)  
- 🛒 **Shopping Cart** – View cart, remove items, continue shopping, checkout  
- 📦 **Checkout** – Enter shipping details, saved in SQL database  
- 📬 **Header & Footer** – Navigation links & newsletter subscription  

---

## 🏗️ System Architecture

**Workflow Overview**:  
**Frontend (Angular + Bootstrap)** ⟶ **Backend (Node.js + Express)** ⟶ **Database (SQL Workbench)**  

```mermaid
graph TD
A[User Interface - Angular] --> B[Backend API - Node.js/Express]
B --> C[SQL Database - Workbench]
````



---

## 🛠️ Tech Stack

* **Frontend:** Angular, Bootstrap
* **Backend:** Node.js, Express.js
* **Database:** SQL Workbench
* **Other Tools:** REST APIs, Routing modules, GitHub

---

## ⚙️ Installation & Setup

1. **Clone the repository**

   ```bash
   git clone https://github.com/yourusername/kjm-e-store.git
   cd kjm-e-store
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start backend server**

   ```bash
   node server.js
   ```

4. **Run frontend**

   ```bash
   ng serve
   ```

5. **Open in browser**
   Visit 👉 [http://localhost:4200](http://localhost:4200)

---

## ▶️ Usage

* Sign up or log in to your account
* Browse products by category
* Add/remove items from the shopping cart
* Proceed to checkout & fill shipping details
* View confirmation

---

## 📌 Future Enhancements

* 💳 **Payment Gateway Integration** (Stripe/PayPal)
* 🔍 **Advanced Search & Filters** (price range, reviews, ratings)
* 🤖 **Personalized Recommendations** using ML
* 📊 **Admin Dashboard** for inventory & order management
* 🌐 **Deployment on AWS/GCP** for scalability

---

## 👩‍💻 Contributors
* **Maitrri Jayant Chandra** – Full Project Development & Technical Ownership

---

## 📜 License

This project is licensed under the MIT License – see the [LICENSE](LICENSE) file for details.

```
