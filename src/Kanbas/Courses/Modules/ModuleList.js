import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import CollapseList from "./Module";
import Collapse from 'react-bootstrap/Collapse';
import { Button } from 'react-bootstrap';
import { useSelector, useDispatch } from "react-redux";
import {
  addModule,
  updateModule,
  setModule,
  setModules,
} from "./modulesReducer";
import * as client from "./client";

function ModuleList() {
  const [open, setOpen] = useState(false);
  const { courseId } = useParams();
  const modules = useSelector((state) => state.modulesReducer.modules);
  const module = useSelector((state) => state.modulesReducer.module);
  const dispatch = useDispatch();
  useEffect(() => {
    client.findModulesForCourse(courseId)
      .then((modules) =>
        dispatch(setModules(modules))
      );
  }, [courseId]);
  const handleAddModule = () => {
    client.createModule(courseId, module).then((module) => {
      dispatch(addModule(module));
    });
  };
  const handleUpdateModule = async () => {
    const status = await client.updateModule(module);
    dispatch(updateModule(module));
  };

  if (modules.length > 0) {
    const firstModule = modules[0]
    const collapse_id = firstModule.collapse
    return (
      <ul className="list-group w-100">
        <li className="list-group-item">
          <Button className='float-end me-1'
            onClick={() => handleUpdateModule(module)}>
            Update
          </Button>
          <Button className='float-end me-1' variant="success"
            onClick={() => {
              handleAddModule()}}>
            Add
          </Button>
          <div className='d-flex flex-column'>
            <input className='w-50 mb-1' value={module.name}
              onChange={(e) =>
                dispatch(setModule({ ...module, name: e.target.value }))
              } />
            <textarea className='w-50 rounded-2' value={module.description}
              onChange={(e) =>
                dispatch(setModule({ ...module, description: e.target.value }))
              } />
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
    );
  }
  else {
    return (
      <ul className="list-group w-100">
        <li className="list-group-item">
          <Button className='float-end me-1'
            onClick={() => dispatch(updateModule(module))}>
            Update
          </Button>
          <Button className='float-end me-1' variant="success"
            onClick={() => {
              handleAddModule();
            }}>
            Add
          </Button>
          <div className='d-flex flex-column'>
            <input className='w-50 mb-1' value={module.name}
              onChange={(e) =>
                dispatch(setModule({ ...module, name: e.target.value }))
              } />
            <textarea className='w-50 rounded-2' value={module.description}
              onChange={(e) =>
                dispatch(setModule({ ...module, description: e.target.value }))
              } />
          </div>
        </li>
      </ul>
    );
  }

}
export default ModuleList;