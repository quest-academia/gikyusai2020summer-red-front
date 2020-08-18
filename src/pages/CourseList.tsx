import React from 'react';

import CourseDetail from './CourseDetail';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
class CourseList extends React.Component {
  render() {
    return (
      <div>
        <h1>CourseList</h1>
        <h2>I am Yuto. I am Perfect Human.</h2>
         <Router>
          <div className="App">
            <div>
              <Link to="/course-detail">詳細</Link>
            </div>
          </div>
        </Router>
      </div>
    );
  }
}

export default CourseList;
