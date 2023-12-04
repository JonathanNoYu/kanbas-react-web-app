import { Link, useLocation } from "react-router-dom";
function ProjectNav() {
  const { pathname } = useLocation();
  return (
    <div className="list-group">
    <div className="list-group-item">
      <Link className="nav-link" to="/project">
        Home</Link>
    </div>
    <div className="list-group-item">
      <Link className="nav-link" to="/project/search">
        Search</Link>
    </div>
    <div className="list-group-item">
      <Link className="nav-link" to="/project/signin">
        Signin</Link>
    </div>
    <div className="list-group-item">
      <Link className="nav-link" to="/project/signup">
        Signup</Link>
    </div>
    <div className="list-group-item">
      <Link className="nav-link" to="/project/account">
        Account</Link>
    </div>
  </div>
  );
}
export default ProjectNav;