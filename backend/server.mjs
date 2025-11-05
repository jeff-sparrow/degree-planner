// import express from 'express';
// import asyncHandler from 'express-async-handler';
// import * as courses from './courses_model.mjs';
// import * as completed from './completed_model.mjs';
// import 'dotenv/config';

// const PORT = process.env.PORT;
// const app = express();

// app.use(express.json());

// app.listen(PORT, async () => {
//     await courses.connect()
//     console.log(`Server listening on port ${PORT}...`);
// });

// // ----- COURSE ROUTES -----
// app.get('/courses', asyncHandler(async (req, res) => {
//   const allCourses = await courses.getCourses();
//   res.status(200).json(allCourses);
// }));

// app.post('/courses', asyncHandler(async (req, res) => {
//   const { code, name, credits, prerequisites } = req.body;
//   if (!code || !name || !credits) return res.status(400).json({ error: 'Invalid request' });
  
//   const newCourse = await courses.createCourse(code, name, credits, prerequisites || []);
//   res.status(201).json(newCourse);
// }));

// // ----- COMPLETED COURSE ROUTES -----
// app.get('/completed', asyncHandler(async (req, res) => {
//   const allCompleted = await completed.getCompleted();
//   res.status(200).json(allCompleted);
// }));

// app.post('/completed', asyncHandler(async (req, res) => {
//   const { courseCode } = req.body;
//   if (!courseCode) return res.status(400).json({ error: 'Course code required' });
//   const result = await completed.addCompleted(courseCode);
//   res.status(201).json(result);
// }));

// app.delete('/completed/:courseCode', asyncHandler(async (req, res) => {
//   const deleted = await completed.deleteCompleted(req.params.courseCode);
//   if (deleted.deletedCount === 0) return res.status(404).json({ error: 'Not found' });
//   res.status(204).send();
// }));

import express from 'express';
import asyncHandler from 'express-async-handler';
import cors from 'cors';
import * as courses from './courses_model.mjs';
import * as completed from './completed_model.mjs';
import 'dotenv/config';

const PORT = process.env.PORT || 1337;
const app = express();

app.use(cors());
app.use(express.json());

app.get('/courses', asyncHandler(async (req, res) => {
  const allCourses = await courses.getCourses();
  res.status(200).json(allCourses);
}));

app.post('/courses', asyncHandler(async (req, res) => {
  const { code, name, credits, prerequisites } = req.body;
  if (!code || !name || !credits) return res.status(400).json({ error: 'Invalid request' });
  const newCourse = await courses.createCourse(code, name, credits, prerequisites || []);
  res.status(201).json(newCourse);
}));

app.get('/completed', asyncHandler(async (req, res) => {
  const allCompleted = await completed.getCompleted();
  res.status(200).json(allCompleted);
}));

app.post('/completed', asyncHandler(async (req, res) => {
  const { courseCode } = req.body;
  if (!courseCode) return res.status(400).json({ error: 'Course code required' });
  const result = await completed.addCompleted(courseCode); // adds to MongoDB
  res.status(201).json(result);
}));

app.delete('/completed/:courseCode', asyncHandler(async (req, res) => {
  const deleted = await completed.deleteCompleted(req.params.courseCode);
  if (!deleted || deleted.deletedCount === 0) return res.status(404).json({ error: 'Not found' });
  res.status(204).send();
}));

app.listen(PORT, async () => {
  await courses.connect();   // <-- fixed typo
  console.log(`Server listening on port ${PORT}...`);
});