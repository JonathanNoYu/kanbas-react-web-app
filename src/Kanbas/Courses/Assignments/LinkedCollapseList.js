import { React, } from "react";
import { FaGripVertical, FaEllipsisVertical, FaCircleCheck, FaPenToSquare } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

function LinkedCollapseLink(assignment, courseId, open, setOpen, assignments, setAssignments) {
    const deleteAssignment = (assignmentId) => {
        setAssignments(assignments.filter(
          (assignment) => assignment._id !== assignmentId));
      };
    return (
        <div className="list-group-item">
            <Button className="wd-text-left float-end"  variant="danger"
                            onClick={() => deleteAssignment(assignment._id)}>
                            Delete
            </Button>
            <Link key={assignment._id}
                to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`}
                onClick={() => setOpen(!open)}
                aria-controls={`${module.collapse}`}
                aria-expanded={open}>
                <FaGripVertical size={28}  className="pe-3 text-success" />
                <FaPenToSquare size={33} className="pe-3 text-success"/>
                {assignment.name}
            
                <FaEllipsisVertical className="fa-xl text-black float-end mt-2" />
                <FaCircleCheck className="float-end wd-green mt-2 me-4 text-success" />
            </Link>
            
        </div>
    );
} export default LinkedCollapseLink