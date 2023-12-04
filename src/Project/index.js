import Signin from "../Kanbas/Users/signin";
import Account from "../Kanbas/Users/account";
import UserTable from "../Kanbas/Users/table";
import { Routes, Route, Navigate } from "react-router-dom";
import Nav from "../Nav";
function Project() {
    return (
        <div className="flex-row">
            <Nav />
            <div>
                <Routes>
                    <Route path="/admin/users" element={<UserTable />} />
                    <Route path="/" element={<Signin />} />
                    <Route path="/signin" element={<Signin />} />
                    <Route path="/account" element={<Account />} />
                </Routes>
            </div>
        </div>
    );
}
export default Project;