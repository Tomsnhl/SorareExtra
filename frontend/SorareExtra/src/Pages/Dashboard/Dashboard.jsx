import { Outlet, NavLink } from "react-router-dom";

const Dashboard = () => {
    return (
        <>
            <h1 className="text-center text-3xl m-5">Vestiaire</h1>
            <nav className="text-center pt-10 mb-16 text-2xl">
                <NavLink
                    className={({ isActive }) =>
                        `${isActive && "underline"} mx-5`
                    }
                    to="/vestiaire/v1"
                >
                    V1
                </NavLink>
                <NavLink
                    className={({ isActive }) =>
                        `${isActive && "underline"} mx-5`
                    }
                    to="/vestiaire/v2"
                >
                    V2
                </NavLink>
                <NavLink
                    className={({ isActive }) =>
                        `${isActive && "underline"} mx-5`
                    }
                    to="/vestiaire/v3"
                >
                    V3
                </NavLink>
            </nav>
            <Outlet />
        </>
    );
};
export default Dashboard;
