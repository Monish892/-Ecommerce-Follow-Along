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




