import db from "../../Database";
import { useParams } from "react-router-dom";
import { FaFileImport, FaFileExport, FaGear, FaFilter } from "react-icons/fa6";

function Grades() {
  const { courseId } = useParams();
  const grades = db.grades;
  const assignments = db.assignments.filter((assignment) => assignment.course === courseId);
  const enrollments = db.enrollments.filter((enrollment) => enrollment.course === courseId);
  return (
    <div>
      <div class="mb-2">
        <button className="btn btn-secondary float-end"><FaGear/></button>
        <button className="btn btn-secondary float-end mx-1"><FaFileExport/> Export</button>
        <button className="btn btn-secondary float-end"><FaFileImport size={20}/>
          Import</button>
      </div>
      <div class="d-flex flex-row mb-2 w-100">
        <div class="w-50 me-2">
          <h3>Student Names</h3>
          <input class="form-control" type="text" placeholder="Search Student" />
        </div>
        <div class="w-50">
          <h3>Assignment Names</h3>
          <input class="form-control" type="text" placeholder="Search Assignmnet" />
        </div>
      </div>
      <div class="mb-2">
        <button class="btn btn-secondary btn-sm"><FaFilter/> Apply
          Filters</button>
      </div>
      <div className="table-responsive">
        <table className="table table-bordered w-100">
          <thead className="wd-bg-grey">
            <th>Student Name</th>
            {assignments.map((assignment) => (<th>{assignment.name}</th>))}
          </thead>
          <tbody>
            {enrollments.map((enrollment, index) => {
              const user = db.users.find((user) => user._id === enrollment.user);
              const color = index % 2 == 0 ? "lightgrey" : ""
              return (
                <tr bg={`${color}`}>
                  <td bg={`${color}`}>{user.firstName} {user.lastName}</td>
                  {assignments.map((assignment) => {
                    const grade = grades.find(
                      (grade) => grade.student === enrollment.user && grade.assignment === assignment._id);
                    return (<td bg={`${color}`}>{grade?.grade || "Not Graded"}</td>);
                  })}
                </tr>);
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
} export default Grades