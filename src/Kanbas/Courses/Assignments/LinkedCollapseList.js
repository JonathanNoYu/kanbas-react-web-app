import { React, } from "react";
import { FaGripVertical, FaEllipsisVertical, FaCircleCheck, FaPenToSquare } from "react-icons/fa6";
import { Link } from "react-router-dom";

function LinkedCollapseLink(assignment, courseId, open, setOpen) {
    return (
        <Link key={assignment._id}
            to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`}
            className="list-group-item"
            onClick={() => setOpen(!open)}
            aria-controls={`${module.collapse}`}
            aria-expanded={open}>
            <FaGripVertical size={28}  className="pe-3 text-success" />
            <FaPenToSquare size={33} className="pe-3 text-success"/>
            {assignment.name}
            <FaEllipsisVertical className="fa-xl text-black float-end mt-2" />
            <FaCircleCheck className="float-end wd-green mt-2 me-4 text-success" />
        </Link>
    );
} export default LinkedCollapseLink