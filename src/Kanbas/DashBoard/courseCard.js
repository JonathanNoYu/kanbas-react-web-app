import { FaEllipsisVertical } from "react-icons/fa6";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
function courseCard(course, setCourse, deleteCourse) {
    return (
        <div className="list-group-item">
            <div className="card" style={{ width: "18rem" }}>
                <Link key={course._id} to={`/Kanbas/Courses/${course._id}`}
                    className="wd-card-rectangle bg-success position-relative">
                    <FaEllipsisVertical className="text-white float-end m-2" />
                </Link>
                <Link key={course._id} to={`/Kanbas/Courses/${course._id}`} className="card-body">
                    <p className="wd-card-title">{course.number} {course.name}</p>
                    <p className="card-text">{course.number}</p>
                </Link>
                <div className="position-absolute bottom-0 end-0 me-1 mb-1">
                    <Button className="ms-1 border border-black" variant="secondary"
                        onClick={(event) => {
                            event.preventDefault();
                            setCourse(course)
                        }}>Edit</Button>
                    <Button className="ms-1 border border-black" variant="danger"
                        onClick={(event) => {
                            event.preventDefault();
                            deleteCourse(course._id);
                        }}>Delete</Button>
                </div>
            </div >
        </div>
    );
} export default courseCard