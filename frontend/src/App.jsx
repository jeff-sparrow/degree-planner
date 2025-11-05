import './App.css';
import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/Home';
import CoursesPage from './pages/AllCourses';
import CompletedPage from './pages/Completed';
import Navigation from './components/Navigation';

function App() {
  const [courseToEdit, setCourseToEdit] = useState();

  return (
    <div className="app">
      <header>
        <h1>OSU Computer Science Degree Planner</h1>
        <p>This site lets you browse Oregon State Univeristy Computer Science courses, add completed courses, and view courses you've completed.</p>
      </header>
      <Router>
        <Navigation />
        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/courses" element={<CoursesPage setCourseToEdit={setCourseToEdit} />} />          
          <Route path="/completed" element={<CompletedPage />} />
        </Routes>
      </Router>
      <footer>&copy; 2025 Jeffrey Sparrow</footer>
    </div>
  );
}

export default App;