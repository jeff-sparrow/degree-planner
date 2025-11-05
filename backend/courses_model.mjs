import mongoose from 'mongoose';
// import 'dotenv/config';
import dotenv from 'dotenv';

dotenv.config();

const DB_NAME = 'degree_planner_db';
const COURSE_CLASS = 'Course';

let connection = undefined;

// Connect to MongoDB
async function connect() {
  try {
    connection = await mongoose.connect(process.env.MONGODB_CONNECT_STRING, {dbName: DB_NAME});
    console.log("Connected to MongoDB (Degree Planner)");
  } catch (err) {
    console.log(err);
    throw Error(`Could not connect to MongoDB: ${err.message}`);
  }
}

// Schema: courses in the catalog
const courseSchema = mongoose.Schema({
  code: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  credits: { type: Number, required: true },
  prerequisites: { type: [String], default: [] } // store prerequisite course codes
});

const Course = mongoose.model(COURSE_CLASS, courseSchema);

// CRUD-like operations
const createCourse = async (code, name, credits, prerequisites) => {
  const course = new Course({ code, name, credits, prerequisites });
  return course.save();
};

const getCourses = async () => {
  return Course.find({});
};

const getCourseByCode = async (code) => {
  return Course.findOne({ code }).exec();
};

export { connect, createCourse, getCourses, getCourseByCode };