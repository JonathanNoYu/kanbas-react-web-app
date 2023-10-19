import ModuleList from "../Modules/ModuleList";
import Dropdown from 'react-bootstrap/Dropdown';
import "./home.css"
import { useState } from "react";

function Home() {
  var [open, setOpen] = useState(false)
  return (
    <div className="wd-right-column-plane d-flex w-100">
      <div className="w-100 me-5">
        <div className="wd-module-menu float-end">
          <button className="btn btn-secondary btn-sm ms-2" onClick={() => setOpen(false)}>Collapse
            All</button>
          <button className="btn btn-secondary btn-sm ms-2">View Progress</button>
          <button className="btn btn-secondary dropdown-toggle btn-sm ms-2" type="button"
            data-bs-toggle="dropdown" aria-expanded="false"><i
              className="fa-regular fa-check-circle mx-1" aria-hidden="true"></i>Publish
            All</button>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#">Action</a></li>
            <li><a className="dropdown-item" href="#">Another action</a></li>
            <li><a className="dropdown-item" href="#">Something else here</a></li>
          </ul>
          <button className="btn-danger btn btn-sm ms-2"><i className="fa fa-plus" aria-hidden="true"></i>
            Modules</button>
        </div>
        <hr className="mt-5 w-100" />
        <ModuleList />
      </div>
      <div className="w-25 d-none d-xl-block">
        <div className="wd-course-status d-flex flex-column">
          <h6>Coures Status</h6>
          <div className="d-flex flex-column pe-5 mb-3">
            <div className="flex-row mb-2 w-100">
              <button className="btn btn-secondary btn-sm me-1"><i className="fa-solid fa-ban"></i>Unpublish</button>
              <button className="btn btn-secondary btn-sm bg-success"><i className="fa-regular fa-check-circle text-white"></i>Published</button>
            </div>
            <button className="btn btn-secondary btn-sm mb-1 text-left"><i
              className="fa-solid fa-file-import"></i>Import Existing Content</button>
            <button className="btn btn-secondary btn-sm mb-1 text-left"><i
              className="fa-solid fa-file-export"></i>Import From Commons</button>
            <button className="btn btn-secondary btn-sm mb-1 text-left"><i
              className="fa-solid fa-location-crosshairs"></i>Choose Home Page</button>
            <button className="btn btn-secondary btn-sm mb-1 text-left"><i
              className="fa-solid fa-chart-simple"></i>View Course Stream</button>
            <button className="btn btn-secondary btn-sm mb-1 text-left"><i
              className="fa-solid fa-bullhorn"></i>New Announcment</button>
            <button className="btn btn-secondary btn-sm mb-1 text-left"><i
              className="fa-solid fa-chart-simple"></i>New Analytics</button>
            <button className="btn btn-secondary btn-sm mb-1 text-left"><i
              className="fa-regular fa-bell"></i>View Course Notifications</button>
          </div>
          <div className="wd-to-do d-flex flex-column">
            <label className="font-weight-bold">To Do</label>
            <hr className="my-2" />
              <div className="wd-notif d-flex flew-row mb-3">
                <label
                  className="rounded-circle bg-danger text-white justify-content-center wd-center me-2 pb-1">1</label>
                <div className="flex-column">
                  <a className="wd-red_link" href="#">Grade 1 - ENV + HTML</a> <br/>
                    100 points . Sept 18 at 11:59pm
                </div>
              </div>
          </div>
          <div className="wd-come-up d-flex flex-column">
            <div className="d-flex flew-row justify-content-between">
              <label className="font-weight-bold">Coming Up</label>
              <div>
                <i className="fa-regular fa-calendar me-2"></i>
                <a className="wd-red_link" href="#">View Calendar</a>
              </div>
            </div>
            <hr className="my-2" />
              <ul className="pe-5 me-5">
                <li><a href="#">Lecutre CS4550.12631.202410 Sep 7 at 11:45am</a></li>
                <li><a href="#">Lecutre CS4550.12631.202410 Sep 11 at 11:45am</a></li>
                <li><a href="#">CS5610 06 SP23 Lecture Sep 11 at 6pm</a></li>
              </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Home;