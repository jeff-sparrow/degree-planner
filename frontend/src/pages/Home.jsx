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