import { useState, useEffect } from 'react';

function CoursesPage() {
  const [courses, setCourses] = useState([]);
  const [completed, setCompleted] = useState([]);

  // Load all courses and completed courses from backend
  useEffect(() => {
    const loadData = async () => {
      try {
        const resCourses = await fetch('/courses');
        const coursesData = await resCourses.json();
        setCourses(coursesData);

        const resCompleted = await fetch('/completed');
        const completedData = await resCompleted.json();
        setCompleted(completedData.map(c => c.courseCode));
      } catch (err) {
        console.error('Failed to load data:', err);
      }
    };

    loadData();
  }, []);

  // Add course to completed
  const addCompleted = async (code) => {
    try {
      const res = await fetch('/completed', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ courseCode: code })
      });
      if (res.ok) {
        setCompleted([...completed, code]);
      } else {
        alert('Failed to add course.');
      }
    } catch (err) {
      console.error('Error adding completed course:', err);
    }
  };

  const handleAddCompleted = (code) => {
  if (window.confirm(`Are you sure you want to add ${code} to your completed courses?`)) {
    addCompleted(code);
  }
};

  const handleRemoveCompleted = async (code) => {
    if (!window.confirm(`Are you sure you want to remove ${code} from completed courses?`)) return;

    try {
      const res = await fetch(`/completed/${code}`, { method: 'DELETE' });
      if (res.ok) {
        setCompleted(completed.filter(c => c !== code));
      } else {
        alert('Failed to remove course.');
      }
    } catch (err) {
      console.error('Error removing course:', err);
    }
  };

  return (
    <div>
      <h2>All Courses</h2>
      <h3>Select a course to add or remove from your completed courses.</h3>

      {courses.map(course => (
        <p key={course.code}>
          <strong>{course.code}</strong> — {course.name} ({course.credits} credits)
          {!completed.includes(course.code) && (
            <button
              onClick={() => handleAddCompleted(course.code)} // 🔹 CHANGE
              style={{ marginLeft: '0.5rem' }}
            >
              Add to Completed Courses
            </button>
          )}
          {completed.includes(course.code) && (
            <>
              <span> Completed</span>
              <button
                onClick={() => handleRemoveCompleted(course.code)} // 🔹 CHANGE
                style={{ marginLeft: '0.5rem' }}
              >
                Remove
              </button>
            </>
          )}
        </p>
      ))}
    </div>
  );
}

export default CoursesPage;