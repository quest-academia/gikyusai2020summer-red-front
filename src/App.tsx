import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from "./Home";
import MyPage from "./pages/MyPage";
import CourseList from "./pages/CourseList";
import ApiTest from "./pages/ApiTest";

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <div className="navbar">
            <Link to="/">Home</Link>
            <Link to="mypage">マイページ</Link>
            <Link to="/course-list">Course List</Link>
            <Link to="/api-test">API Test</Link>
          </div>
          <Route exact path="/" component={Home} />
          <Route exacr path="/mypage" component={MyPage} />
          <Route exact path="/course-list" component={CourseList} />
          <Route exact path="/api-test" component={ApiTest} />
        </div>
      </Router>
    </div>
  );
}

export default App;
