import React from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import db from "../../../Database";
import { Button } from "react-bootstrap";
import { FaEllipsisVertical, FaCircleCheck } from "react-icons/fa6";


function AssignmentEditor() {
  const { assignmentId } = useParams();
  const assignment = db.assignments.find(
    (assignment) => assignment._id === assignmentId);
  const { courseId } = useParams();
  const navigate = useNavigate();
  const handleSave = () => {
    console.log("Actually saving assignment TBD in later assignments");
    navigate(`/Kanbas/Courses/${courseId}/Assignments`);
  };
  return (
    <div className="wd-content-pane d-flex flex-column">
      <div class="wd-top-content-pane">
        <div class="d-flex flex-row float-end">
          <FaCircleCheck className="float-end text-success wd-green me-1 mt-2" />
          <h7 class="text-success font-weight-bold mt-1 me-3">Published</h7>
          <Button class="btn btn-secondary btn-sm float-end ms-2">
            <FaEllipsisVertical /></Button>
        </div>
      </div>
      <hr class="my-2" />
      <h2>Assignment Name</h2>
      <input value={assignment.name}
        className="form-control mb-2" />
      <textarea className="form-control py-5">{assignment.description}</textarea>
      <div class="d-flex flex-column m-auto mt-3 w-50">
        <div class="d-flex flew-row mt-4">
          <h8 class="m-auto">Points</h8>
          <input class="form-control w-75" type="number" value="100" />
        </div>
        <div class="d-flex flew-row mt-4">
          <h8 class="m-auto">Assignment Group</h8>
          <select class="form-select w-75">
            <option>ASSIGNMENTS</option>
            <option>QUIZZES</option>
            <option>PROJECTS</option>
            <option>EXAMS</option>
          </select>
        </div>
        <div class="d-flex flew-row mt-4">
          <h8 class="m-auto">Display Grade as</h8>
          <select class="form-select w-75">
            <option>Percentage</option>
            <option>Number</option>
          </select>
        </div>
        <div class="d-flex flew-row ms-5 me-0 mt-4 mb-0">
          <div class="m-auto">
            <input class="form-check-input" type="checkbox" />
              <h9 class="ms-2">Do not count this assignment towards the final grade</h9>
          </div>
        </div>
        <div class="d-flex flew-row mt-4">
          <h8 class="m-auto mt-2">Submission Type</h8>
          <div class="w-75 border rounded float-left p-3">
            <select class="form-select w-50 mb-2">
              <option>Online</option>
              <option>In-Person</option>
            </select>
            <label class="font-weight-bold mb-2">Online Entry Option</label>
            <div class="d-flex flex-column">
              <div class="mb-2">
                <input class="form-check-input" checked type="checkbox" />
                  <h9 class="ms-2">Text Entry</h9>
              </div>
              <div class="mb-2">
                <input class="form-check-input" checked type="checkbox" />
                  <h9 class="ms-2">Website IRL</h9>
              </div>
              <div class="mb-2">
                <input class="form-check-input" checked type="checkbox" />
                  <h9 class="ms-2">Media Recordings</h9>
              </div>
              <div class="mb-2">
                <input class="form-check-input" type="checkbox" />
                  <h9 class="ms-2">Text Entry</h9>
              </div>
              <div class="mb-2">
                <input class="form-check-input" type="checkbox" />
                  <h9 class="ms-2">Text Entry</h9>
              </div>
            </div>
          </div>
        </div>
        <div class="d-flex flew-row mt-4">
          <h8 class="m-auto mt-2">Assign</h8>
          <div class="w-75 border rounded float-left">
            <div class="p-3">
              <h6 class="font-weight-bold">Assign To</h6>
              <select class="form-control mb-2">
                <option>Everyone</option>
                <option>Students</option>
              </select>
              <div class="d-flex flex-column">
                <div class="d-flex flex-column mb-2">
                  <label class="font-weight-bold">Due</label>
                  <div class="input-group">
                    <input type="date" class="form-control" placeholder="MM/DD/YYYY" />
                  </div>
                </div>
                <div class="d-flex flew-row mb-2 justify-content-between">
                  <div>
                    <label class="font-weight-bold">Available from</label>
                    <div class="input-group w-100">
                      <input type="date" class="form-control p-auto" placeholder="MM/DD/YYYY" />
                    </div>
                  </div>
                  <div>
                    <label class="font-weight-bold">Until</label>
                    <div class="input-group">
                      <input type="date" class="form-control" placeholder="MM/DD/YYYY" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <button type="button"
              class="btn btn-outline-secondary d-flex align-items-center w-100 justify-content-center rounded-0 rounded-bottom bg-light">
              <i class="fa-solid fa-plus pe-1"></i> Add
            </button>
          </div>
        </div>
      </div>
      <div className="float-right flex-row">
        <div className="float-right">
          <Link to={`/Kanbas/Courses/${courseId}/Assignments`}
            className="btn btn-outline-secondary me-2 bg-light text-black wd-no-underline">
            Cancel
          </Link>
          <Button onClick={handleSave} className="btn btn-danger me-2">
            Save
          </Button>
        </div>
      </div>
    </div>
  );
}


export default AssignmentEditor;