CREATE TABLE students (
  id SERIAL PRIMARY KEY,
  first_name VARCHAR(255) NOT NULL,
  last_name VARCHAR(255) NOT NULL,
  student_id VARCHAR(255) UNIQUE NOT NULL,
  email VARCHAR(255) UNIQUE NOT NULL,
  date_of_birth DATE NOT NULL,
  contact_number VARCHAR(255) UNIQUE NOT NULL,
  enrollment_date DATE NOT NULL,
  profile_picture VARCHAR(255)
);
