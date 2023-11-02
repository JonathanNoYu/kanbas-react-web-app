import db from "../Database";
import courseCard from "./courseCard";
import "./dashboard.css"
import { useState } from "react";
import { Button } from "react-bootstrap";

function Dashboard() {
  const [courses, setCourses] = useState(db.courses);
  const [course, setCourse] = useState({
    name: "New Course", number: "New Number",
    startDate: "2023-09-10", endDate: "2023-12-15",
  });
  const addNewCourse = () => {
    setCourses([...courses,
    { ...course,
      _id: new Date().getTime()
    }]);
  };
  const updateCourse = () => {
    setCourses(
      courses.map((c) => {
        if (c._id === course._id) {
          return course;
        } else {
          return c;
        }
      })
    );
  };
  const deleteCourse = (courseId) => {
    setCourses(courses.filter((course) => course._id !== courseId));
  };
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