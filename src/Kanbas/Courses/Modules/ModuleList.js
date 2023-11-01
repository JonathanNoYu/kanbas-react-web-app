import { useState, React } from 'react';
import { useParams } from "react-router-dom";
import db from "../../Database";
import CollapseList from "./Module";
import Collapse from 'react-bootstrap/Collapse';
import { Button } from 'react-bootstrap';

function ModuleList() {
  const [open, setOpen] = useState(false);
  const { courseId } = useParams();
  const filter_Module = db.modules.filter((module) => module.course === courseId);
  const [modules, setModules] = useState(filter_Module);
  const firstModule = modules[0]
  const collapse_id = firstModule.collapse
  const [module, setModule] = useState({
    name: "New Module",
    description: "New Description",
    course: courseId,
    collapse_id: collapse_id
  });
  const addModule = (module) => {
    setModules([ ...modules,
      { ...module, _id: new Date().getTime().toString() }
    ]);
  };
  const updateModule = () => {
    setModules(
      modules.map((m) => {
        if (m._id === module._id) {
          return module;
        } else {
          return m;
        }
      })
    );
  }

  console.log(modules)
  return (
    <ul className="list-group w-100">
      <li className="list-group-item">
        <Button className='float-end me-1' onClick={updateModule}>
                Update
        </Button>
        <Button className='float-end me-1' variant="success" onClick={() => { addModule(module) }} >Add</Button>
        <div className='d-flex flex-column'>
          <input className='w-50 mb-1' value={module.name}
            onChange={(e) => setModule({
              ...module, name: e.target.value
            })}
          />
          <textarea className='w-50 rounded-2' value={module.description}
            onChange={(e) => setModule({
              ...module, description: e.target.value
            })}
          />
        </div>
      </li>
      {CollapseList(modules, 0, true, false, setModules, setModule, open, setOpen)}
      <Collapse in={open}>
        <div id={`${modules[0].collapse}`}>
          {
            modules.map((module, index) => (
                CollapseList(modules, index, false, setModules, setModule)
              ))
          }
        </div>
      </Collapse>
    </ul>
  );
}
export default ModuleList;