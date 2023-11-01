import { React, useState } from "react";
import { FaGripVertical, FaEllipsisVertical, FaCircleCheck, FaCaretDown, FaPlus } from "react-icons/fa6";
import Button from 'react-bootstrap/Button';

function CollapseList(modules, index, firstModule, setModules, setModule, assignmnet, open, setOpen) {
    const module = modules[index];
    const deleteModule = (moduleId) => {
        setModules(modules.filter(
          (module) => module._id !== moduleId));
      };
    if (firstModule && assignmnet) {
        return (
            <Button className="rounded-0 wd-text-left" variant="secondary"
                onClick={() => setOpen(!open)}
                aria-controls={`${module.collapse}`}
                aria-expanded={open}>
                <FaGripVertical className="pe-2" />
                <FaCaretDown className="me-1" />
                {module.name}
                <FaEllipsisVertical className="mt-1 float-end" />
                <FaPlus className="float-end mt-1 me-3" />
                <div class="rounded float-end bg-light px-1 mx-1 text-black">{module.percent}</div>
            </Button>
        );
    }
    if (firstModule) {
        return (
            <Button className="rounded-0 wd-text-left" variant="secondary"
                onClick={() => setOpen(!open)}
                aria-controls={`${module.collapse}`}
                aria-expanded={open}>
                <FaGripVertical className="pe-2" />
                <FaCaretDown className="me-1" />
                {module.name}
                <FaEllipsisVertical className="mt-1 float-end" />
                <FaPlus className="float-end mt-1 me-3" />
            </Button>
        );
    }
    else {
        return (
            <div className="list-group-item d-flex flex-row w-100">
                <FaGripVertical size={28} className="pe-3 text-success mt-2" />
                <div className="flex-column m-auto ms-0">
                    <div>{module.name}</div>
                    - {module.description}
                </div>
                <div className="flex-row-reverse">
                    <Button className="mx-2 float-end" variant="secondary"
                        onClick={(event) => { setModule(module); }}>
                        Edit
                    </Button>
                    <Button className="wd-text-left float-end" variant="danger"
                        onClick={() => deleteModule(module._id)}>
                        Delete
                    </Button>
                    <FaEllipsisVertical className="fa-xl text-black text-end float-end mt-3" />
                    <FaCircleCheck className="float-end text-end wd-green mt-3 text-success" />
                </div>
            </div>
        );
    }
}
export default CollapseList;