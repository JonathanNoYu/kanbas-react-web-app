import { FaRegCircleUser, FaGauge, FaBook, FaCalendarDays, FaInbox, FaClock, FaYoutube, FaArrowRightFromBracket, FaCircleQuestion } from "react-icons/fa6";
import { useLocation } from "react-router-dom";

function iconThis(link, pathname) {
    switch (link.name) {
        case 'NEU':
            return (<img className="d-block m-auto" src="./NEU-N.png" alt="NEU LOGO" height="45px" width="54px"></img>);
        case 'Account':
            return (<FaRegCircleUser className={`fa-xl d-block m-auto ${pathname.includes("Account") ? "wd-grey" : ""}`}/>);
        case 'Dashboard':
            return (<FaGauge className="fa-lg d-block m-auto wd-red" />);
        case 'Courses':
            return (<FaBook className="fa-lg d-block m-auto wd-red" />);
        case 'Calendar':
            return (<FaCalendarDays className="fa-lg d-block m-auto wd-red" />);
        case 'Inbox':
            return (<FaInbox className="fa-lg d-block m-auto wd-red" />);
        case 'History':
            return (<FaClock className="fa-lg d-block m-auto wd-red" />);
        case 'Studio':
            return (<FaYoutube className="fa-lg d-block m-auto wd-red" />);
        case 'Commons':
            return (<FaArrowRightFromBracket className="fa-lg d-block m-auto wd-red" />);
        case 'Help':
            return (<FaCircleQuestion className="fa-lg d-block m-auto wd-red" />);
        default:
            return (<div></div>);
    }
} export default iconThis;