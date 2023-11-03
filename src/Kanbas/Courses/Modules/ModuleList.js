import { useState, React } from 'react';
import { useParams } from "react-router-dom";
import db from "../../Database";
import CollapseList from "./Module";
import Collapse from 'react-bootstrap/Collapse';
import { Button } from 'react-bootstrap';
import { useSelector, useDispatch } from "react-redux";
import {
  addModule,
  deleteModule,
  updateModule,
  setModule,
} from "./modulesReducer";

function ModuleList() {
  const [open, setOpen] = useState(false);
  const { courseId } = useParams();
  var modules = useSelector((state) => state.modulesReducer.modules);
  modules = modules.filter((module) => module.course === courseId);
  const module = useSelector((state) => state.modulesReducer.module);
  const dispatch = useDispatch();
  if (modules.length > 0) {
  const firstModule = modules[0]
  const collapse_id = firstModule.collapse

  return (
    <ul className="list-group w-100">
      <li className="list-group-item">
        <Button className='float-end me-1' 
          onClick={() => dispatch(updateModule(module))}>
                Update
        </Button>
        <Button className='float-end me-1' variant="success" 
          onClick={() => dispatch(addModule({ ...module, course: courseId }))}>
          Add
          </Button>
        <div className='d-flex flex-column'>
          <input className='w-50 mb-1' value={module.name}
            onChange={(e) =>
              dispatch(setModule({ ...module, name: e.target.value }))
            }/>
          <textarea className='w-50 rounded-2' value={module.description}
            onChange={(e) =>
              dispatch(setModule({ ...module, description: e.target.value }))
            }/>
        </div>
      </li>
      {CollapseList(firstModule, true, false, open, setOpen)}
      <Collapse in={open}>
        <div id={`${collapse_id}`}>
          {
            modules.map((module, index) => (
                CollapseList(module, false, false)
              ))
          }
        </div>
      </Collapse>
    </ul>
  );}
  else {
    return (
      <ul className="list-group w-100">
        <li className="list-group-item">
          <Button className='float-end me-1' 
            onClick={() => dispatch(updateModule(module))}>
                  Update
          </Button>
          <Button className='float-end me-1' variant="success" 
            onClick={() => dispatch(addModule({ ...module, course: courseId }))}>
            Add
            </Button>
          <div className='d-flex flex-column'>
            <input className='w-50 mb-1' value={module.name}
              onChange={(e) =>
                dispatch(setModule({ ...module, name: e.target.value }))
              }/>
            <textarea className='w-50 rounded-2' value={module.description}
              onChange={(e) =>
                dispatch(setModule({ ...module, description: e.target.value }))
              }/>
          </div>
        </li>
      </ul>
    );
  }
  
}
export default ModuleList;