import { Link, useLocation } from "react-router-dom";
import "../../gen-style.css"

function KanbasNavigation() {
  const links = ["Account", "Dashboard", "Courses", "Calendar","Inbox","History","Studio","Commons","Help"];
  const { pathname } = useLocation();
  return (
    <div className="wd-kanbas-nav">
      {links.map((link, index) => (
        <Link
          key={index}
          to={`/Kanbas/${link}`}
          className={`wd-menu_item d-flex justify-content-center wd-white_link ${pathname.includes(link) && "active"}`}>
          {link}
        </Link>
      ))}
    </div>
  );
}
export default KanbasNavigation;