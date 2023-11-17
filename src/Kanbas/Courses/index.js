import { Link, Navigate, Route, Routes, useParams, useLocation } from "react-router-dom";
import CourseNavigation from "./CourseNavigation";
import Modules from "./Modules";
import Home from "./Home";
import Assignments from "./Assignments";
import AssignmentEditor from "./Assignments/AssignmentEditor";
import Grades from "./Grades";
import { FaBars } from "react-icons/fa6";
import { useState, useEffect } from "react";
import axios from "axios";

function Courses() {
  const { courseId } = useParams();
  const URL = "http://localhost:4000/api/courses";
  const [course, setCourse] = useState({});
  const findCourseById = async (courseId) => {
    const response = await axios.get(
      `${URL}/${courseId}`
    );
    setCourse(response.data);
  };
  useEffect(() => {
    findCourseById(courseId);
  }, [courseId])
  const currPage =  useParams()['*'];
  const pathname = useLocation().pathname;
  const crumbs = pathname.split("/")
  .filter(crumb => crumb !== "" && crumb !== 'Kanbas' && crumb !== "Courses")
  crumbs[0] = course.number
  return (
    <div className="wd-right-row-pane d-flex flex-column w-100">
      <div className="wd-top-pane">
        <div className="wd-top-container d-flex flex-row align-middle">
          <button className="wd-course-nav-menu-btn">
            <FaBars size="1.5em"/>
          </button>
          <div className="wd-top-text">
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb m-0">
                {crumbs.map((crumb, index) => {
                  return(
                    <Link key={crumb} className={`breadcrumb-item wd-font-size ${currPage.includes(crumb) ? "active wd-no-underline" : "wd-red wd-no-underline-standalone"}`} 
                    to={`${createPathName(pathname.split("/").filter(name => name !== ""), index + 3)}`}>
                      {crumb}</Link>
                  );
                })}
              </ol>
            </nav>
          </div>
        </div>
        <hr className="m-0 p-0" />
      </div>
      <div className="wd-right-column-plane d-flex">
        <CourseNavigation />
          <div className="wd-content-pane w-100">
            <Routes>
              <Route path="/" element={<Navigate to="Home" />} />
              <Route path="Home" element={<Home />} />
              <Route path="Modules" element={<Modules />} />
              <Route path="Assignments" element={<Assignments />} />
              <Route path="Assignments/:assignmentId"
                element={<AssignmentEditor />} />
              <Route path="Grades" element={<Grades/>} />
            </Routes>
          </div>
        </div>
    </div>
  );
}
export default Courses;

function createPathName(crumbs, index) {
  var path = ""
  for (let i = 0; i < index; i++) {
    path = path + "/" + crumbs[i] 
  }
  return path
} 