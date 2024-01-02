import { Link } from "@inertiajs/inertia-react";
import React from "react";

const AdminDashboard = () => {
    return (
        <div>
            <h1>Welcome Admin</h1>
            <Link href={route("logout")} method="post">
                <button>Logout</button>
            </Link>
        </div>
    );
};

export default AdminDashboard;
