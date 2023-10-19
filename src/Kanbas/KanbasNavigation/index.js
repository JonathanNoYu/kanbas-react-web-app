import { Link, useLocation } from "react-router-dom";
import "../../gen-style.css"
import db from "../Database"
import iconThis from "./iconThis"

function KanbasNavigation() {
  const links = db.kanbasNav
  //const links = ["Account", "Dashboard", "Courses", "Calendar","Inbox","History","Studio","Commons","Help"];
  const { pathname } = useLocation();
  return (
    <div className="wd-kanbas-nav">
      {links.map((link, index) => (
        <div className={`wd-menu_item justify-content-center 
        ${link.name.includes("Account") ? "wd-account_icon" : "d-flex"}
        ${pathname.includes(link.name) ? "wd-active" : ""}`}>
          <Link
            key={index}
            to={`${link.name.includes("NEU") ? "/Kanbas/Dashboard" : `/Kanbas/${link.name}`}`}
            className={`d-flex flex-column  
            ${pathname.includes(link.name) ? "wd-red_link" : "wd-white_link"}`}>
              {iconThis(link, pathname)}
              {link.name.includes("NEU") ? "" : link.name}
          </Link>
        </div>
      ))}
      
    </div>
  );
}
export default KanbasNavigation;