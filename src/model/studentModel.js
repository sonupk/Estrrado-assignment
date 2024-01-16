const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
    studentId: { type: String, required: true, unique: true },
    firstName: { type: String, required: true },
    lastName: { type: String },
    age: { type: Number, required: true },
    dob: { type: Date, required: true },
    gender: { type: String, required: true },
    email: { type: String, required: true },
    phoneNumber: { type: String, required: true },
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    qualifications: [{
        courseName: { type: String, required: true },
        university: { type: String },
        year: { type: Number },
        percentage: { type: Number }
    }]
});

const Student = mongoose.model('Student', studentSchema);

module.exports = Student;
