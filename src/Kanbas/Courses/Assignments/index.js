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
  const filter_assignments = db.assignments.filter(
    (assignment) => assignment.course === courseId);
  const [assignments, setAssignments] = useState(filter_assignments)
  const collapse_id = assignments[0].collapse
  return (
    <ul className="list-group">
      {CollapseList(assignments[0], true, true, open, setOpen)}
      <Collapse in={open}>
        <div id={`${collapse_id}`}>
          {assignments.map((assignment) => (
            LinkedCollapseLink(assignment, courseId, open, setOpen, assignments, setAssignments)
          ))}
        </div>
      </Collapse>
    </ul>
  );
}
export default Assignments;