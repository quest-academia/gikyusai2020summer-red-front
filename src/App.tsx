import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Home from './Home';
import CourseList from './pages/CourseList';


function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <div className="navbar">
            <Link to="/">Home</Link>
            <Link to="/course-list">Course List</Link>
          </div>
          <Route exact path="/" component={Home} />
          <Route exact path="/course-list" component={CourseList} />
        </div>
      </Router>
    </div>
  );
}

export default App;
