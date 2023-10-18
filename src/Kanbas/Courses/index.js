import db from "../../Kanbas/Database";
import { Link, Navigate, Route, Routes, useParams, useLocation } from "react-router-dom";
import CourseNavigation from "./CourseNavigation";
import Modules from "./Modules";
import Home from "./Home";
import Assignments from "./Assignments";
import AssignmentEditor from "./Assignments/AssignmentEditor";
import { FaBars } from "react-icons/fa6";


function Courses() {
  const { courseId } = useParams();
  const currPage =  useParams()['*'];
  const crumbs = useLocation().pathname.split("/").filter(crumb => crumb !== "" && crumb !== 'Kanbas' && crumb !== "Courses")
  console.log(crumbs)
  return (
    <div className="wd-right-row-pane d-flex flex-column w-100">
      <div className="wd-top-pane">
        <div className="wd-top-container d-flex flex-row align-middle">
          <button className="wd-course-nav-menu-btn">
            <FaBars/>
          </button>
          <div className="wd-top-text">
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb m-0">
                {crumbs.map((crumb) => {
                  return(
                    <Link className={`breadcrumb-item ${currPage.includes(crumb) ? "active wd-no-underline" : "wd-red wd-no-underline-standalone"}`} to={`/Kanbas/Courses/${courseId}`}>{crumb}</Link>
                  );
                })}
              </ol>
            </nav>
          </div>
        </div>
        <hr />
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
              <Route path="Grades" element={<h1>Grades</h1>} />
            </Routes>
          </div>
        </div>
    </div>
  );
}
export default Courses;