import { useState, React } from 'react';
import { useParams } from "react-router-dom";
import db from "../../Database";
import CollapseList from "./Module";
import Collapse from 'react-bootstrap/Collapse';

function ModuleList() {
  const [open, setOpen] = useState(false);
  const { courseId } = useParams();
  const modules = db.modules.filter((module) => module.course === courseId);
  const firstModule = modules[0]
  return (
    <ul className="list-group">
      {CollapseList(firstModule, true, false, open, setOpen)}
      <Collapse in={open}>
        <div id={`${modules[0].collapse}`}>
          {
            modules.filter((module) => module !== firstModule)
              .map((module) => (
                CollapseList(module, false)
              ))
          }
        </div>
      </Collapse>
    </ul>
  );
}
export default ModuleList;