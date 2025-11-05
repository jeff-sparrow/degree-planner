import mongoose from 'mongoose';

const COMPLETED_CLASS = 'CompletedCourse';

const completedSchema = mongoose.Schema({
  courseCode: { type: String, required: true } // reference by course code (simpler)
});

const CompletedCourse = mongoose.model(COMPLETED_CLASS, completedSchema);

const addCompleted = async (courseCode) => {
  const completed = new CompletedCourse({ courseCode });
  return completed.save();
};

const getCompleted = async () => {
  return CompletedCourse.find({});
};

const deleteCompleted = async (courseCode) => {
  return CompletedCourse.deleteOne({ courseCode });
};

export { addCompleted, getCompleted, deleteCompleted };