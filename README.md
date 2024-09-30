

# Content Management System (CMS) - Server-Side (NestJS)

This project is the backend of a CMS built using the NestJS framework. It provides secure and scalable API endpoints for managing articles, handling user authentication, and integrating with a MongoDB database.

<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Running Tests](#running-tests)
- [Further Resources](#further-resources)
- [License](#license)

## Overview

This backend application serves as the API for the CMS, providing secure CRUD operations on articles and user management features like registration and login. It integrates with MongoDB for persistent storage and uses JWT for authentication.

## Features

- **User Authentication**: Register and login with JWT authentication.
- **Article Management**: CRUD operations (Create, Read, Update, Delete) for articles.
- **MongoDB Integration**: Handles persistent data storage for users and articles.
- **Security**: JWT authentication for protected routes.
- **Validation & Error Handling**: Robust input validation and detailed error feedback.

## Technologies Used

- **NestJS**: A progressive Node.js framework for building efficient server-side applications.
- **MongoDB**: NoSQL database for storing articles and user data.
- **JWT**: JSON Web Tokens for secure authentication.
- **TypeScript**: Typed JavaScript to enhance code maintainability.

## Installation

1. **Clone the repository**:
   ```bash
   git clone <repository-url>
   ```
   
3. **Install dependencies**:
   ```bash
   npm install
   ```

## Usage

1. **Compile and Run the Project**:
   ```bash
   # Development mode
   npm run start

   # Watch mode for auto-reload
   npm run start:dev

   # Production mode
   npm run start:prod
   ```

2. **Environment Variables**:
   Configure your environment variables for MongoDB connection, JWT secret, etc. Create an `.env` file in the root directory and include:
   ```bash
   MONGODB_URI=<your-mongodb-uri>
   JWT_SECRET=<your-secret-key>
   ```

## Project Structure

- **src/app**: Contains modules, controllers, and services.
  - **auth**: Handles user authentication and JWT management.
  - **articles**: Manages CRUD operations for articles.
  - **database**: Handles database connection with MongoDB.

## Running Tests

- **Unit Tests**:
  ```bash
  npm run test
  ```

- **End-to-End (e2e) Tests**:
  ```bash
  npm run test:e2e
  ```

- **Test Coverage**:
  ```bash
  npm run test:cov
  ```

## Further Resources

- **NestJS Documentation**: [https://docs.nestjs.com](https://docs.nestjs.com)
- **NestJS Discord Community**: [Join the Discussion](https://discord.gg/G7Qnnhy)

## License

This project is licensed under the [MIT License](https://github.com/nestjs/nest/blob/master/LICENSE).