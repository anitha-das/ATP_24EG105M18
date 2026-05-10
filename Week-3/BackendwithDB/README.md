This week we developed  a backend REST API application using Node.js, Express.js, MongoDB, and Mongoose. The application provides APIs for managing users and products along with authentication and cart functionality.

The project demonstrates:

* REST API development
* MongoDB database integration
* JWT authentication
* Password encryption using bcrypt
* Middleware implementation
* Error handling
* Cookie-based authentication

---

# Technologies Used

* Node.js
* Express.js
* MongoDB
* Mongoose
* JWT (JSON Web Token)
* bcryptjs
* dotenv
* cookie-parser

---

# Project Creation Flow

## Step 1: Create Project Folder

Create a new project folder and open it in VS Code.

---

## Step 2: Initialize Node Project

Initialize the project using:

* npm init -y

This creates the package.json file.

---

## Step 3: Install Required Packages

Install all required dependencies:

* express
* mongoose
* bcryptjs
* jsonwebtoken
* dotenv
* cookie-parser

---

## Step 4: Configure ES Modules

Inside package.json, add:

* "type": "module"

This allows the use of import/export syntax.

---

## Step 5: Create Project Structure

Create the following folders and files:

### Folders

* APIs
* models
* middlewares

### Files

* server.js
* req.http
* .env

Inside APIs folder:

* ProductAPI.js
* UserAPI.js

Inside models folder:

* ProductModel.js
* UserModel.js

Inside middlewares folder:

* verifyToken.js

---

# Server Setup Flow

## Express Server Setup

* Import express
* Create express application
* Add middleware to parse JSON
* Add cookie-parser middleware
* Connect MongoDB database
* Forward requests to APIs
* Start server

---

# MongoDB Connection

The application connects to MongoDB using mongoose connect method.

Database connection string is stored inside the .env file.

---

# Environment Variables

The .env file stores:

* PORT number
* MongoDB connection URL
* JWT secret key

This helps keep sensitive information secure.

---

# Authentication System

The application uses JWT-based authentication.

## Authentication Flow

1. User registers with email and password
2. Password is encrypted using bcrypt before storing in database
3. User logs in using email and password
4. JWT token is generated after successful login
5. Token is stored in HTTP-only cookies
6. Protected routes verify token using middleware

---

# Middleware

## verifyToken Middleware

The verifyToken middleware is used to protect private routes.

### Responsibilities

* Reads JWT token from cookies
* Verifies the token
* Extracts user information from token
* Allows access only for authenticated users

### Protected Routes

* Read all users
* Read logged-in user
* Update user
* Add product to cart

---

# Database Models

## Product Model

The Product model stores product-related information.

### Fields

* productId
* productName
* price
* brand

### Validations

* productId is required
* productName is required
* price must be within specified range
* brand is required

---

## User Model

The User model stores user information.

### Fields

* username
* password
* email
* age
* cart

### Validations

* username length restrictions
* unique email
* password required

---

## Cart Schema

The cart schema is embedded inside the user model.

### Fields

* product reference
* count of products

The product field references the Product model using ObjectId.

---

# Features

## User Management

* Create new users
* User login authentication
* Read all users
* Read logged-in user details
* Update user details
* Delete users
* Add products to cart

---

## Product Management

* Create products
* Read all products
* Read product by ID
* Update products
* Delete products

---

# API Endpoints

## User APIs

### User Registration

Creates a new user account.

### User Login

Authenticates the user and generates JWT token.

### Read All Users

Returns all users from the database.

### Read Logged-in User

Returns currently authenticated user details.

### Update User

Updates user information.

### Delete User

Deletes a user from the database.

### Add Product to Cart

Adds selected product to user cart.

---

## Product APIs

### Create Product

Creates a new product.

### Read All Products

Returns all products from the database.

### Read Product By ID

Returns product using productId.

### Update Product

Updates product information.

### Delete Product

Deletes product from database.

---

# API Testing

The APIs are tested using the REST Client extension in VS Code through the req.http file.

The req.http file contains:

* User API requests
* Product API requests
* Authentication requests
* Protected route testing

---

# Error Handling

Global error handling middleware is implemented in the server.

The application handles:

* Validation errors
* Invalid object IDs
* Authentication failures
* Internal server errors

Proper error messages are returned to the client.

---

# Security Features

* Password encryption using bcryptjs
* JWT token authentication
* HTTP-only cookies
* Protected routes using middleware

---

# Learning Outcomes

Through this project, the following concepts are implemented and understood:

* Express routing
* REST APIs
* MongoDB CRUD operations
* Mongoose schemas and models
* Middleware creation
* JWT authentication
* Password hashing
* Cookie handling
* API testing
* Error handling

---
