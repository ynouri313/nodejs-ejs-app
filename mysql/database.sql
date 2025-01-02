-- Create the teachers table
CREATE TABLE teachers (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100) NOT NULL
);

-- Create the courses table
CREATE TABLE courses (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  teacher_id INT,
  FOREIGN KEY (teacher_id) REFERENCES teachers(id)
);

-- Create the students table
CREATE TABLE students (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  course_id INT,
  FOREIGN KEY (course_id) REFERENCES courses(id)
);

-- Insert teachers
INSERT INTO teachers (name) VALUES 
('Mr. Smith'),
('Ms. Johnson'),
('Dr. Brown'),
('Prof. White'),
('Mrs. Green');

-- Insert courses
INSERT INTO courses (name, teacher_id) VALUES 
('Math', 1),
('Science', 2),
('History', 3),
('English', 4),
('Art', 5),
('Computer Science', 1),
('Biology', 2),
('Physics', 3);

-- Insert students
INSERT INTO students (name, course_id) VALUES 
('Alice', 1),
('Bob', 2),
('Charlie', 3),
('Daisy', 4),
('Ethan', 5),
('Fiona', 6),
('George', 7),
('Hannah', 8),
('Isla', 1),
('Jack', 2),
('Kylie', 3),
('Leo', 4),
('Maya', 5),
('Nathan', 6),
('Olivia', 7),
('Paul', 8);
