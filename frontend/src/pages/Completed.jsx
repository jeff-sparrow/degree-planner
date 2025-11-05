import { useState, useEffect } from 'react';

function CompletedPage() {
  const [completed, setCompleted] = useState([]);

  useEffect(() => {
    const loadCompleted = async () => {
      const res = await fetch('/completed');
      const data = await res.json();
      setCompleted(data);
    };
    loadCompleted();
  }, []);

  const handleRemoveCompleted = async (code) => {
    if (!window.confirm(`Are you sure you want to remove ${code} from completed courses?`)) return;

    try {
      const res = await fetch(`/completed/${code}`, { method: 'DELETE' });
      if (res.ok) {
        setCompleted(completed.filter(c => c.courseCode !== code));
      } else {
        alert('Failed to remove course.');
      }
    } catch (err) {
      console.error('Error removing course:', err);
    }
  };

  return (
    <div>
      <h2>Completed Courses</h2>
      {completed.map(c => (
        <p key={c.courseCode}>
          {c.courseCode}
          <button
            onClick={() => handleRemoveCompleted(c.courseCode)} // 🔹 CHANGE
            style={{ marginLeft: '0.5rem' }}
          >
            Remove
          </button>
        </p>
      ))}
    </div>
  );
}

export default CompletedPage;