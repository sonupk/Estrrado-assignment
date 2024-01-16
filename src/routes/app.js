const express = require('express');
const router = express.Router();
const Student = require('../model/studentModel');
const { v4: uuidv4 } = require('uuid');

// Student Registration route
router.post('/register', async (req, res) => {
    try {
        // Generate a unique student ID using uuid
        const studentId = uuidv4();
// Handle multiple qualifications
        const qualifications = req.body.qualifications.map(q => ({
            courseName: q.courseName,
            university: q.university,
            year: q.year,
            percentage: q.percentage
        }));

        const studentData = {
            studentId,
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            age: req.body.age,
            dob: req.body.dob,
            gender: req.body.gender,
            email: req.body.email,
            phoneNumber: req.body.phoneNumber,
            username: req.body.username,
            password: req.body.password,
            qualifications
        };

        const student = new Student(studentData);
             await student.save();
        res.status(201).send(student);
    } catch (error) {
        res.status(400).send(error);
    }
});

// Student Login route
router.post('/login', async (req, res) => {
    try {
        const { username, password } = req.body;

        // logic to validate login credentials
        const student = await Student.findOne({ username, password });
         if (student) {
            res.status(200).send('Student Logged in successfully');
        } else {
            res.status(401).send('Invalid credentials');
        }
    } catch (error) {
        res.status(400).send(error);
    }
});

module.exports = router;
