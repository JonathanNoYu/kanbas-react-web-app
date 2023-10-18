import { FaEllipsisVertical } from "react-icons/fa6";
function courseCard(course) {
    return (
        <div class="card" style={{ width: "18rem"}}>
            <div class="wd-card-rectangle bg-success">
                <FaEllipsisVertical className="text-white float-end m-2"/>
            </div>
            <div class="card-body">
                    <p class="wd-card-title">{course.number} {course.name}</p>
                    <p class="card-text">{course.number}</p>
            </div>
        </div >
    );
} export default courseCard