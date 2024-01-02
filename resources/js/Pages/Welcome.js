import React from "react";
import { Link, Head } from "@inertiajs/inertia-react";

export default function Welcome(props) {
    return (
        <>
            <Head title="Welcome" />
            <div className="text-center mt-3 text-green-500">
                <h1>Champions of the worlds</h1>
                <Link href="/about">About</Link>
            </div>
        </>
    );
}
