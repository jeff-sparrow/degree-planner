import { connect, createCourse, getCourses } from './courses_model.mjs';
import mongoose from 'mongoose';

await connect();

// Delete existing courses
await mongoose.model('Course').deleteMany({});
console.log("All existing courses deleted.");

// Add courses to DB
await createCourse('CS101', 'Computers: Applications and Implications', 4, []);
await createCourse('CS161', 'Intro to Computer Science I', 4, []);
await createCourse('CS162', 'Intro to Computer Science II', 4, ['CS161']);
await createCourse('CS175', 'Communications Security and Social Movements', 3, ['CS161']);
await createCourse('CS201', 'Computer Programming for Non-CS Majors', 3, ['']); // HANDLE CHOICE OF PREREQS
await createCourse('CS225', 'Discrete Structures in Computer Science', 4, ['MTH 111']);
await createCourse('CS261', 'Data Structures', 4, ['CS162', 'CS225']);
await createCourse('CS271', 'Computer Architecture and Assembly Language', 4, ['CS161']);
await createCourse('CS274', 'Intro to Systems Programming', 4, ['CS162']);
await createCourse('CS290', 'Web Development', 4, ['CS162']);
await createCourse('CS321', 'Intro to Theory of Computation', 3, ['CS261']);
await createCourse('CS325', 'Analysis of Algorithms', 4, ['CS261']);
await createCourse('CS332', 'Intro to Applied Data Science with Programming', 4, ['CS261']);
await createCourse('CS340', 'Intro to Databases', 4, ['CS290']);
await createCourse('CS352', 'Intro to Usability Engineering', 4, ['CS161']);
await createCourse('CS361', 'Software Engineering I', 4, ['CS261']);
await createCourse('CS362', 'Software Engineering II', 4, ['CS261']);
await createCourse('CS370', 'Intro to Security', 4, ['CS374']);
await createCourse('CS372', 'Intro to Computer Networks', 4, ['CS261']);
await createCourse('CS373', 'Defense Aganst the Dark Arts', 4, ['CS340', 'CS372']);
await createCourse('CS374', 'Operating Systems I', 4, ['CS261']);
await createCourse('CS381', 'Programming Language Fundamentals', 4, ['CS225', 'CS261']);
await createCourse('CS391', 'Social and Ethical Issues in Computer Science', 3, []);
await createCourse('CS427', 'Cryptography', 4, ['CS261', 'MTH355']);
await createCourse('CS432', 'Intro to Applied Machine Leaerning', 4, ['CS332']);
await createCourse('CS534', 'Applied Deep Learning', 4, ['CS432']);
await createCourse('CS450', 'Intro to Computer Graphics', 4, ['CS261']);
await createCourse('CS457', 'Computer Graphics Shaders', 4, ['CS457']);
await createCourse('CS464', 'Open Source Software', 4, ['CS361']); // HANDLE CHOICE OF PREREQS


console.log("Courses seeded successfully!");
process.exit();