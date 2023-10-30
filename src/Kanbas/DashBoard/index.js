import { Link } from "react-router-dom";
import db from "../Database";
import courseCard from "./courseCard";
import "./dashboard.css"
import { useState } from "react";

function Dashboard() {
  const [courses, setCourses] = useState(db.courses);
  return (
    <div className="wd-right-row-pane d-flex flex-column w-100">
      <div class="wd-top-pane">
        <div class="wd-top-container d-flex flex-row align-middle">
          <div class="wd-top-text">
            Dashboard
          </div>
        </div>
        <hr />
      </div>
      <div className="wd-dashboard-pane">
        <div class="wd-top-pane">
          <div class="wd-top-container d-flex flex-row align-middle">
            <div class="wd-top-text">
              Published Courses ({courses.length})
            </div>
          </div>
          <hr />
        </div>
        <div className="wd-dashboard-card-container d-flex flex-row flex-wrap">
          {courses.map((course) => (
            <Link key={course._id} to={`/Kanbas/Courses/${course._id}`} className="list-group-item">
              {courseCard(course)}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
export default Dashboard;