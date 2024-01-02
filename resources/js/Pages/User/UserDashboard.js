import { Link } from "@inertiajs/inertia-react";
import React from "react";

const UserDashboard = () => {
    return (
        <div>
            <h1>Welcome back</h1>
            <Link href={route("logout")} method="post">
                <button>Logout</button>
            </Link>
        </div>
    );
};

export default UserDashboard;
