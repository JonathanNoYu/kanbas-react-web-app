import { Link, useParams, useLocation } from "react-router-dom";


function CourseNavigation() {
  const links = ["Home", "Modules", "Assignments", "Grades"];
  const { courseId } = useParams();
  const { pathname } = useLocation();
  return (
    <ul className="wd-gen-nav list-group pt-4 rounded-0">
      <div class="wd-semester-text wd-ellipsis text-secondary">
        202410_1 Fall 2023 Semester
      </div>
      {links.map((link, index) => (
        <Link
          key={index}
          to={`/Kanbas/Courses/${courseId}/${link}`}
          className={`list-group-item ${pathname.includes(link) ? "wd-active" : ""}`}>
          {link}
        </Link>
      ))}
    </ul>
  );
}


export default CourseNavigation;