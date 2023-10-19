import {React, useState } from "react";
import { FaGripVertical, FaEllipsisVertical, FaCircleCheck, FaCaretDown, FaPlus } from "react-icons/fa6";
import Button from 'react-bootstrap/Button';

function CollapseList(module, firstModule, assignmnet, open, setOpen) {
    if (firstModule && assignmnet) {
        return (
            <Button className="rounded-0 wd-text-left" variant="secondary"
            onClick={() => setOpen(!open)}
            aria-controls={`${module.collapse}`}
            aria-expanded={open}>
                <FaGripVertical className="pe-2"/>
                <FaCaretDown className="me-1"/>
                {module.name}
                <FaEllipsisVertical className="mt-1 float-end"/>
                <FaPlus className="float-end mt-1 me-3"/>
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
                <FaGripVertical className="pe-2"/>
                <FaCaretDown className="me-1"/>
                {module.name}
                <FaEllipsisVertical className="mt-1 float-end"/>
                <FaPlus className="float-end mt-1 me-3"/>
            </Button>
        );
    }
    else {
        return (
            <div className="list-group-item d-flex flex-row w-100">
                        <FaGripVertical className="pe-3 text-success" />
                        <div className="d-flex flex-column">
                            <div>{module.name}</div>
                            <div>- {module.description}</div>
                        </div>
                        <FaEllipsisVertical className="fa-xl text-black float-right mt-3" />
                        <FaCircleCheck className="float-right wd-green me-4 mt-3 text-success" />
            </div>
        );
    }
}
export default CollapseList;