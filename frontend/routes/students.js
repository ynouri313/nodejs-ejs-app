const express = require('express');
const router = express.Router();
const studentModel = require('../models/studentModel');

// Route to display students, courses, and teachers
router.get('/', async (req, res) => {
  try {
    const students = await studentModel.getAllStudents();
    res.render('students', { students });
  } catch (error) {
    console.error(error);
    res.status(500).send('Database query failed');
  }
});

module.exports = router;
