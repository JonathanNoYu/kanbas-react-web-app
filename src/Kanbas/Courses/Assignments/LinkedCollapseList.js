import { React, } from "react";
import { FaGripVertical, FaEllipsisVertical, FaCircleCheck, FaCaretDown, FaPlus } from "react-icons/fa6";
import { Link } from "react-router-dom";

function LinkedCollapseLink(assignment, courseId, open, setOpen) {
    return (
        <Link key={assignment._id}
            to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`}
            className="list-group-item"
            onClick={() => setOpen(!open)}
            aria-controls={`${module.collapse}`}
            aria-expanded={open}>
            <FaGripVertical className="pe-3 text-success" />
            {assignment.name}
            <FaEllipsisVertical className="fa-xl text-black float-end mt-2" />
            <FaCircleCheck className="float-end wd-green me-4 text-success" />
        </Link>
    );
} export default LinkedCollapseLink