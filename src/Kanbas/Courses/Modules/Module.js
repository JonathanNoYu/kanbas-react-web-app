import {React, useState } from "react";
import { FaGripVertical, FaEllipsisVertical, FaCircleCheck, FaCaretDown, FaPlus } from "react-icons/fa6";
import Button from 'react-bootstrap/Button';

function CollapseList(module, firstModule, assignmnet, open, setOpen) {
    if (firstModule && assignmnet) {
        return (
            <Button className="btn-light rounded-0 wd-text-left"
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
            <Button className="btn-light rounded-0 wd-text-left"
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
            <div className="list-group-item">
                    <FaGripVertical className="pe-3 text-success" />
                    {module.name}
                    <FaEllipsisVertical className="fa-xl text-black float-end mt-2" />
                    <FaCircleCheck className="float-end wd-green me-4 text-success" />
            </div>
        );
    }
}
export default CollapseList;