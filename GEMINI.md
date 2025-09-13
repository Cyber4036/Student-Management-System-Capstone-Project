# **Student Management System Capstone Project**

## Figma design : https://www.figma.com/design/a8BMeHG4ywOMLqP2CzJhPD/Student-management-system?node-id=0-1&p=f&t=i7gWtC4oZB9n3DFX-0

## **Project Objective:**

Develop a comprehensive web application for managing student information, demonstrating full-stack development skills through a robust, user-friendly student management system. The project aims to showcase an understanding of web development technologies, API design, and responsive application development.

## **Note to Developer:**

While the core functionality of the application is listed below, there are some additional but optional features. Use your time wisely to finish mandatory features first, and if you get time later, you can start implementing these optional features.

## **Project Requirements:**

### **Technological Requirements:**

1. Implement the application using modern JavaScript ES6+ features where necessary, including:
    - Arrow functions
    - Template literals
    - Destructuring
    - Let and const
    - Async/await for asynchronous operations
2. **Frontend Development:**
    - Use React.js with functional components and hooks
    - Use React Router for navigation
3. **Backend Development:**
    - Create a Node.js/Express backend with RESTful API endpoints
    - Use PostgreSQL for persistent data storage
4. Implement comprehensive error handling and validation
5. Use a public GitHub repository for version control
6. Deploy the full-stack application to a cloud platform (e.g., Netlify, Render)

### **UI/UX Requirements:**

### **Home Page (Student Overview Page)**

- Display a list of all registered students in a table with the following columns: Name, Student ID, Enrollment Date, Status, and an **Action** column with an **eye icon**. Clicking the eye icon should navigate to the student's detail page displaying detailed information.
- A **clear and visible Add icon** should be present. Clicking it should open a form to add a new student to the system.
- The design should be fully **responsive** on desktops, tablets, and mobile devices.

### **User Experience (UX):**

1. **Student List Page:**
    - Paginated list of students
    - Sorting and filtering capabilities
    - Clean and readable display of basic student information
2. **Student Detail Page:**
    - Display comprehensive student profile information
    - Include **Edit (Pen) and Delete (Trash) icons**
    - Clicking the **Edit icon** should open a form to edit student details
    - Clicking the **Delete icon** should allow deletion of the student
3. **Add/Edit Student Form:**
    - User-friendly form for adding and updating student records
    - Real-time validation and clear error messaging for invalid inputs
4. **Search and Filter Functionality:**
    - Allow users to search students by name

### **Student Profile Fields:**

- **First Name** (Required)
- **Last Name** (Required)
- **Student ID** (Unique, Required)
- **Email** (Required, Unique, Validated)
- **Date of Birth** (Required)
- **Contact Number** (Required, Unique)
- **Enrollment Date** (Required)
- **Profile Picture** (Optional)

### **Backend API Endpoints:**

- `GET /api/students` (Retrieve all students with pagination)
- `GET /api/students/:id` (Retrieve specific student details)
- `POST /api/students` (Create a new student record)
- `PUT /api/students/:id` (Update an existing student record)
- `DELETE /api/students/:id` (Delete a student record)
- `GET /api/students/search` (Search and filter students)

### **Validation and Error Handling:**

- **Ensure unique fields** (Student ID, Email, Contact Number) to prevent duplicates.
- **Required fields:** First Name, Last Name, Student ID, Email, Date of Birth, Contact Number, and Enrollment Date.
- Proper **data validation** and **error handling** should be implemented.
    - If an API request includes an incorrect data type (e.g., a phone number instead of a date), return an appropriate **400 Bad Request** error.
    - If a student with an existing **Student ID, Email, or Contact Number** is being created, return a **409 Conflict** error.
    - Ensure the API returns appropriate **HTTP status codes**:
        - **200 OK** – Successful request
        - **400 Bad Request** – Invalid input
        - **409 Conflict** – Duplicate record detected
- Any backend errors during form submission should be displayed on the frontend with proper error messages.
