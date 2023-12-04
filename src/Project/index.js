import Signin from "../Kanbas/Users/signin";
import Signup from "../Kanbas/Users/signup";
import Account from "../Kanbas/Users/account";
import UserTable from "../Kanbas/Users/table";
import { Routes, Route, Navigate } from "react-router-dom";
import Nav from "../Nav";
import ProjectNav from "./Nav";
function Project() {
    return (
        <div className="flex-row">
            <Nav />
            <ProjectNav />
            <div>
                <Routes>
                    <Route path="/admin/users" element={<UserTable />} />
                    <Route path="/" element={<Signin />} />
                    <Route path="/signin" element={<Signin />} />
                    <Route path="/signup" element={<Signup />} />
                    <Route path="/account" element={<Account />} />
                    <Route path="/account/:id" element={<Account />} />
                </Routes>
            </div>
        </div>
    );
}
export default Project;