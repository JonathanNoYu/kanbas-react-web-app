import { React, useState } from "react";
import { Link, useParams } from "react-router-dom";
import db from "../../Database";
import CollapseList from "../Modules/Module";
import LinkedCollapseLink from "./LinkedCollapseList";
import "./assignment.css"
import { Collapse } from "react-bootstrap";

function Assignments() {
  const { courseId } = useParams();
  const [open, setOpen] = useState(false);
  const assignments = db.assignments;
  const courseAssignments = assignments.filter(
    (assignment) => assignment.course === courseId);
  const firstAssignment = courseAssignments[0]
  return (
    <ul className="list-group">
      {CollapseList(firstAssignment, true, true, open, setOpen)}
      <Collapse in={open}>
        <div id={`${firstAssignment.collapse}`}>
          {courseAssignments.map((assignment) => (
            LinkedCollapseLink(assignment, courseId, open, setOpen)
          ))}
        </div>
      </Collapse>
    </ul>
  );
}
export default Assignments;