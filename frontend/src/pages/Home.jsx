// import { useState, useEffect } from 'react';

// function HomePage() {
//   const [courses, setCourses] = useState([]);
//   const [completed, setCompleted] = useState([]);

//   // Load all courses and completed courses from backend
//   useEffect(() => {
//     const loadData = async () => {
//       try {
//         const resCourses = await fetch('/courses');
//         const coursesData = await resCourses.json();
//         setCourses(coursesData);

//         const resCompleted = await fetch('/completed');
//         const completedData = await resCompleted.json();
//         setCompleted(completedData.map(c => c.courseCode));
//       } catch (err) {
//         console.error('Failed to load data:', err);
//       }
//     };

//     loadData();
//   }, []);

//   // Add course to completed
//   const addCompleted = async (code) => {
//     try {
//       const res = await fetch('/completed', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({ courseCode: code })
//       });
//       if (res.ok) {
//         setCompleted([...completed, code]);
//       } else {
//         alert('Failed to add course.');
//       }
//     } catch (err) {
//       console.error('Error adding completed course:', err);
//     }
//   };

//   return (
//     <div>
//       <h2>All Courses</h2>
//       <h3>Select a course to add to your courses.</h3>
//       {/* <ul> */}
//         {courses.map(course => (
//           <p>
//             <strong>{course.code}</strong> — {course.name} ({course.credits} credits)
//             {!completed.includes(course.code) && (
//               <button onClick={() => addCompleted(course.code)}>
//                 Add to Completed Courses
//               </button>
//             )}
//             {completed.includes(course.code) && <span> Completed</span>}
//           </p>
//         ))}
//       {/* </ul> */}
//     </div>
//   );
// }

// export default HomePage;

import { useNavigate } from 'react-router-dom';

function HomePage() {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate('/courses');  // route to your current courses page
  };

  return (
    <div>
      <h2>Welcome to the CS Degree Planner</h2>
      <h3>
        This tool helps you track completed courses, explore available courses,
        and plan your degree.
      </h3>
      <p>Click below to get started!</p>
      <button onClick={handleGetStarted}>Show Courses</button>
    </div>
  );
}

export default HomePage;