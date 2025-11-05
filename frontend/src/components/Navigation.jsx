import { Link } from 'react-router-dom';

function Navigation() {
  return (
    <nav className="app-nav">
      <Link to="/">Home</Link>
      <Link to="/courses">Show All Courses</Link>
      <Link to="/completed">View Completed Courses</Link>
    </nav>
  );
}

export default Navigation;