# Student Management System - Development Journey

This document tracks the development process of the Student Management System project.

## Backend Development (Server)

- Initialized a Node.js project with `npm init -y`.
- Installed dependencies: `express`, `pg`, `nodemon`, and `dotenv`.
- Created a basic Express server in `index.js`.
- Added a `start` script to `package.json` for running the server with `nodemon`.
- Created a `.gitignore` file to exclude `node_modules` and `.env`.
- Set up a PostgreSQL database connection in `db.js`.
- Created an `init.sql` script to define the `students` table schema.
- Implemented the following RESTful API endpoints:
    - `POST /api/students`: Create a new student record.
    - `GET /api/students`: Retrieve all students with pagination.
    - `GET /api/students/:id`: Retrieve a specific student's details.
    - `PUT /api/students/:id`: Update an existing student's record.
    - `DELETE /api/students/:id`: Delete a student's record.
    - `GET /api/students/search`: Search and filter students by name.

## Frontend Development (Client)

- Created a new React.js project using Vite.
- Installed dependencies: `react-router-dom`.
- Cleaned up the default boilerplate files.
- Created a basic file structure with `pages` and `components` directories.
- Set up routing in `App.jsx` using React Router.