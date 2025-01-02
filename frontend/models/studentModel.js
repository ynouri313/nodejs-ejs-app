const db = require('../config/database');

// Fetch all students with their courses and teachers
const getAllStudents = async () => {
  const [students] = await db.query(`
    SELECT students.name AS student, courses.name AS course, teachers.name AS teacher
    FROM students
    JOIN courses ON students.course_id = courses.id
    JOIN teachers ON courses.teacher_id = teachers.id
  `);
  return students;
};

module.exports = {
  getAllStudents,
};
