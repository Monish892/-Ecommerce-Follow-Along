# E-Commerce App

## Overview
An E-Commerce application that allows users to browse products, add them to a shopping cart, and complete purchases. The app includes features for user authentication, product management, and order tracking.

## Features
1. *User Authentication*:
   - Registration and login system.
   - Password encryption for secure accounts.

2. *Product Management*:
   - Product listing with details (name, description, price, image, category).
   - Search and filter functionality.

3. *Shopping Cart*:
   - Add, update, or remove items from the cart.
   - View total price dynamically.

4. *Checkout and Payment*:
   - Order summary before purchase.
   - Integration with payment gateways (e.g., Stripe, PayPal).

5. *Admin Dashboard*:
   - Manage products (add, update, delete).
   - View and manage orders.
   - View user activity.

6. *Order Management*:
   - Track order status (pending, shipped, delivered).
   - View order history.

## Tech Stack
- *Frontend*:
  - React.js 
  - HTML and CSS

- *Backend*:
  - Node.js with Express.js
  - RESTful API development

- *Database*:
  - MongoDB

- *Authentication*:
  - JWT (JSON Web Tokens) for secure login sessions

- *Payment Gateway*:
  - Stripe or PayPal integration

- *Deployment*:
  - Hosting:Vercel
  - Version control: Git/GitHub


# Milestone 2 Progress

In this milestone, I have made significant progress in setting up the project structure and developing the frontend and backend components. Below is a summary of the work completed:

## Project Folder Structure
- Organized the project into two main directories: `frontend` and `backend`.
  - `frontend/`: Contains the React app and all related files for the user interface.
  - `backend/`: Contains the Node.js server and the backend setup for API integration in future milestones.

## Frontend Development
- Set up a React application for the frontend using Vite.
- Created and styled a **functional Login Page** with the following features:
  - Email and password input fields.
  - A submit button for logging in.
  

## Backend Development
- Set up a basic Node.js server using **Express**.
- Configured the server to handle basic routes and responses.


## Milestone 3 Progress

## Overview

Milestone 3 focuses on setting up the backend infrastructure, configuring database connectivity, and implementing basic error-handling mechanisms. This document outlines the progress made so far and also added some advanced css.

 ## Progress

## Setting Up Backend Folders and Files

Created a clear folder structure to organize backend components:

Initialized the project with:

package.json

.gitignore (includes node_modules and .env)

.env file for environment variables.

## Features Added"

## Advanced CSS Styling"

"The CSS styling was enhanced to provide a modern and visually appealing interface."

"Key styling improvements include:"

"Responsive design for various screen sizes."

"Use of animations and hover effects for interactivity."

"Consistent color schemes and typography for better user experience."


## milestone-4 progress

# User Management System

## Features
- Create a new user with name, email, password, and profile picture.
- Retrieve user information by ID.
- File uploads handled using Multer.

## Setup
1. Install dependencies:
   ```bash
   npm install

## milestone-5 progress

# User Registration Frontend

## Features
- **Sign-Up Page**:
  - Users can enter their Name, Email, and Password to register.
  - Includes a clean and simple UI.
- **Form Validation**:
  - Validates that the name is at least 3 characters.
  - Ensures email is in a valid format.
  - Checks that the password is at least 6 characters long.
- Displays appropriate error messages for invalid inputs.

## Technologies Used
- **HTML**: For the structure of the sign-up form.
- **CSS**: For styling and improving the user interface.
- **JavaScript**: For handling form validation.

## How to Use
1. Open `signup.html` in a browser.
2. Fill out the form fields and click "Register."
3. If the inputs are valid, you'll see a success message.


### # Milestone 6: Secure User Signup Implementation

## Overview
In Milestone 6, we focused on implementing a secure backend endpoint to handle user signups. This included encrypting user passwords and securely storing complete user data in the database.

---

## Key Objectives
1. **Encrypt User Passwords:**
   - Used the `bcrypt` library to hash user passwords during the signup process.
   - Ensured passwords are stored securely and not in plain text.

2. **Store Complete User Data Securely:**
   - Captured user details such as name, email, and hashed password.
   - Integrated a database to save user data while adhering to security best practices.

3. **Enhance Security:**
   - Incorporated password salting and hashing for added protection.
   - Minimized the risk of exposing sensitive data by sanitizing API responses.

---

## Implementation Summary

### Password Encryption:
- Used `bcrypt` to salt and hash user passwords.
- Implemented the hashing process during the signup phase to enhance security.

### Database Integration:
- Configured MongoDB for storing user data.
- Ensured schema validation to maintain data integrity.

### Signup Flow:
1. **User Input:** Name, email, and password are provided by the user.
2. **Password Hashing:** The password is encrypted using `bcrypt` before being saved.
3. **Data Storage:** All details, including the hashed password, are stored in the database.
4. **API Response:** A success message is returned without exposing sensitive information.



---

## Next Steps
- Add email verification functionality for added security.
- Implement JWT-based authentication for user sessions.
- Enhance input validation to prevent malicious user input.

---

Milestone 6 has laid a strong foundation for secure user authentication and data handling. Future improvements will build on these practices to further enhance the application’s security and user experience.


## milestone-7

# Login Authentication System

## Overview
This document outlines the implementation of a secure login authentication system. It describes the purpose, the key components, and the steps required to validate user credentials and ensure secure password handling.

---

## Why Encrypting Passwords?
### Benefits:
1. **Protect User Data:** Prevents exposure of passwords even if the database is compromised.
2. **Privacy:** Ensures that passwords are not stored in plain text.
3. **Compliance:** Satisfies security standards like GDPR and PCI-DSS.
4. **Prevents Password Theft:** Hashed passwords are computationally difficult to reverse, enhancing security.

---

## How Login Authentication Works 🔑

### 1. **User Enters Credentials:**
   - The user provides their email/username and password on the login page.

### 2. **Fetch User Data from Database:**
   - The backend retrieves the user record matching the provided email/username.
   - If no matching record exists, the system returns an error: _"User does not exist."_

### 3. **Compare Encrypted Passwords:**
   - The user-provided password is hashed using the same hashing algorithm (e.g., **bcrypt**).
   - The hashed input is compared with the stored hashed password.
   - If they match, the user is authenticated; otherwise, an error is returned.

---

## Steps for Implementation (Milestone 7) 📝

### 1. **Create Login Endpoint:**
   - Accept user credentials (email/username and password).
   - Validate the input to ensure that all required fields are provided.

### 2. **Retrieve User Data:**
   - Query the database for a user record matching the provided email/username.
   - If the user does not exist, return an error response.

### 3. **Validate Password:**
   - Use **bcrypt** to hash the entered password.
   - Compare the resulting hash with the stored hashed password.
   - If they match, authenticate the user. Otherwise, return an error response.

---

## Milestone-8


# Card Component and Homepage Layout with Normal CSS

## Overview
This project demonstrates how to create a reusable **Card Component** to showcase products and display them on a **Homepage** using normal CSS. It focuses on building a clean, visually appealing, and responsive layout without relying on CSS frameworks.

---

## Features

### 1. **Card Component**
- Displays individual product details such as:
  - Product name
  - Product image
  - Product price
- Designed as a reusable component.
- Styled using normal CSS for simplicity and flexibility.

### 2. **Homepage Layout**
- Organizes multiple product cards in a grid layout.
- Fully responsive design using CSS Grid.
- Clean and structured presentation for better user experience.

---


# Milestone 9: Product Form Creation

## Objective
The goal of this milestone is to create a user-friendly product form that allows users to input all necessary product details and upload multiple images. The data will eventually be saved to a database and displayed on the product home page created in a previous milestone.

---

## Why Create a Product Form?

This lesson is focused on understanding how to build forms in React for collecting and handling user input.

- **Purpose**: To create a system where product details can be submitted by users or admins.
- **Outcome**: Details collected through the form will be stored in a database and later displayed on the product page.
- **Additional Features**: You can enhance the form by:
  - Adding admin access for product uploads.
  - Associating products with specific shop profiles.

---

## Features of the Product Form

1. **Input Fields**:
   - Product Name
   - Product Description
   - Price
   - Stock Quantity

2. **File Upload**:
   - Multiple images can be uploaded for a product.
   - Image previews are displayed before submission.

3. **Validation**:
   - Required fields must be filled out before submission.

4. **Backend Integration**:
   - Data is sent to the backend using a `POST` request.

---

## Steps to Create the Product Form

### 1. **React Component Setup**
- Create a new React component named `ProductForm.jsx`.
- Use state to manage input data.
- Handle form submission and file input events.

### 2. **Styling**
- Add normal CSS for styling the form.
- Create a separate `ProductForm.css` file for styles.

### 3. **Image Previews**
- Generate preview URLs for images using `URL.createObjectURL()`.

### 4. **Backend Communication**
- Prepare a `FormData` object to send data to the backend.

---



