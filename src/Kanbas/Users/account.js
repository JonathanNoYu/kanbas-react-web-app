import * as client from "./client";
import { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import { useNavigate, Link } from "react-router-dom";
function Account() {
  const [account, setAccount] = useState(null);
  const navigate = useNavigate();
  const fetchAccount = async () => {
    const account = await client.account();
    setAccount(account);
  };
  useEffect(() => {
    fetchAccount();
  }, []);
  const save = async () => {
    await client.updateUser(account);
  };
  const signout = async () => {
    await client.signout();
    navigate("/project/signin");
  };
  return (
    <div className="w-50">
      <h1>Account</h1>
      {account && (
        <div>
          <div className="d-flex flex-column">
            Username
            <input value={account.username}
              onChange={(e) => setAccount({
                ...account,
                username: e.target.value
              })} />
          </div> <br />
          <div className="d-flex flex-column">
            Password
            <input value={account.password}
              onChange={(e) => setAccount({
                ...account,
                password: e.target.value
              })} />
          </div> <br />
          <div className="d-flex flex-column">
            First Name
            <input value={account.firstName}
              onChange={(e) => setAccount({
                ...account,
                firstName: e.target.value
              })} /> </div> <br />
          <div className="d-flex flex-column">
            Last Name
            <input value={account.lastName}
              onChange={(e) => setAccount({
                ...account,
                lastName: e.target.value
              })} /></div> <br />
          <div className="d-flex flex-column">
            Date of Birth
            <input value={account.dob}
              onChange={(e) => setAccount({
                ...account,
                dob: e.target.value
              })} /></div> <br />
          <div className="d-flex flex-column">
            Email
            <input value={account.email}
              onChange={(e) => setAccount({
                ...account,
                email: e.target.value
              })} /></div> <br />
          <div className="d-flex flex-column">
            Role
            <select onChange={(e) => setAccount({
              ...account,
              role: e.target.value
            })}>
              <option value="USER">User</option>
              <option value="ADMIN">Admin</option>
              <option value="FACULTY">Faculty</option>
              <option value="STUDENT">Student</option>
            </select> </div> <br />
          <Button onClick={save} className="btn w-100">
            Save
          </Button> <br />
          <Button onClick={signout} className="btn btn-danger w-100">
            Signout
          </Button> <br />
          <Link to="/project/admin/users" className="btn btn-warning w-100">
            Users
          </Link>
        </div>
      )}
    </div>
  );
}
export default Account;