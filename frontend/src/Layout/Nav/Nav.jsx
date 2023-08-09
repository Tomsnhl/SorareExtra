import { useState } from "react";
import close from "../../assets/close.svg";
import burger from "../../assets/hamburger.svg";
import logo from "../../assets/logo-sorare-extra.png";

import { NavLink } from "react-router-dom";

const NavSorare = () => {
    const [showMenu, setShowMenu] = useState(false);

    return (
        <>
            <nav className="w-full flex justify-start p-4 bg-slate-200">
                <ul
                    className={`${
                        showMenu ? "flex" : "hidden"
                    } flex-col items-start bg-slate-200 w-full absolute top-full pb-3 -ml-4 pl-5 sm:pl-0 sm:flex sm:relative sm:flex-row sm:pb-0 justify-center sm:mb-0 sm:items-center`}
                >
                    <li className="inline-block py-2 mx-4 text-lg sm:py-0">
                        <NavLink to="/">Sorare Extra</NavLink>
                    </li>
                    <li className="inline-block py-2 mx-4 text-lg sm:py-0">
                        <NavLink to="/vestiaire">Vestiaire</NavLink>
                    </li>
                    <li className="inline-block py-2 mx-4 text-lg sm:py-0">
                        <NavLink to="/thomas">Thomas</NavLink>
                    </li>
                </ul>
                <button
                    className="block sm:hidden"
                    onClick={() => setShowMenu(!showMenu)}
                >
                    <img
                        className="w-4"
                        src={showMenu ? close : burger}
                        alt=""
                    />
                </button>
            </nav>
            <div>
                <img src={logo} className="logo mx-auto" />
            </div>
        </>
    );
};
export default NavSorare;
