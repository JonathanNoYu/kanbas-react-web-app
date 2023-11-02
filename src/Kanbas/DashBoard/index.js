import db from "../Database";
import courseCard from "./courseCard";
import "./dashboard.css"
import { useState } from "react";
import { Button } from "react-bootstrap";

function Dashboard(
  { courses, course, setCourse, addNewCourse,
  deleteCourse, updateCourse }
) {
  return (
    <div className="wd-right-row-pane d-flex flex-column w-100">
      <div className="wd-top-pane">
        <div className="wd-top-container d-flex flex-row align-middle">
          <div className="wd-top-text">
            Dashboard
          </div>
        </div>
        <hr />
      </div>
      <div className="wd-dashboard-pane">
        <div className="wd-top-pane">
          <div className="wd-top-container d-flex flex-row align-middle">
            <div className="wd-top-text">
              Published Courses ({courses.length})
            </div>
          </div>
          <hr />
          <h5>Course</h5>
          <Button className='float-end me-1' variant="success"
            onClick={addNewCourse}>
            Add
          </Button>
          <Button className='float-end me-1' 
            onClick={updateCourse} >
            Update
          </Button>
          <input value={course.name} className="form-control w-25"
            onChange={(e) => setCourse({ ...course, name: e.target.value })} />
          <input value={course.number} className="form-control w-25"
            onChange={(e) => setCourse({ ...course, number: e.target.value })} />
          <input value={course.startDate} className="form-control w-25" type="date"
            onChange={(e) => setCourse({ ...course, startDate: e.target.value })} />
          <input value={course.endDate} className="form-control w-25" type="date"
            onChange={(e) => setCourse({ ...course, endDate: e.target.value })} />
        </div>
        <div className="wd-dashboard-card-container d-flex flex-row flex-wrap">
          {courses.map((course) => (
            courseCard(course, setCourse, deleteCourse)
          ))}
        </div>
      </div>
    </div>
  );
}
export default Dashboard;