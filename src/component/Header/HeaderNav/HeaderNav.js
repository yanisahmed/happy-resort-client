import { faBars, faSmile, faWindowClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";

export default function HeaderNav({ fixed }) {
    const [navbarOpen, setNavbarOpen] = React.useState(false);
    const { user, logOut } = useAuth();
    return (
        <>
            <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 mb-3">
                <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
                    <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
                        <Link to="/">
                            <FontAwesomeIcon icon={faSmile} className="mr-2 text-yellow-300" />
                            <span className="uppercase font-semibold">Happy Resort</span>
                        </Link>
                        <button
                            className="cursor-pointer text-xl leading-none px-4 py-1 border border-solid border-transparent rounded bg-gray-300 text-white block lg:hidden outline-none focus:outline-none"
                            type="button"
                            onClick={() => setNavbarOpen(!navbarOpen)}
                        >
                            {navbarOpen ? <FontAwesomeIcon icon={faWindowClose} /> : <FontAwesomeIcon icon={faBars} />}
                        </button>
                    </div>
                    <div
                        className={
                            "lg:flex flex-grow items-center" +
                            (navbarOpen ? " flex" : " hidden")
                        }
                        id="example-navbar-danger"
                    >
                        <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
                            <li className="nav-item">
                                <Link to="/" className="md:mr-2">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/rooms" className="md:mr-2">Rooms</Link>
                            </li>
                            {user.displayName && <li className="nav-item">
                                <Link to="/services" className="md:mr-2">Services</Link>
                            </li>}
                            {user.displayName && <li className="nav-item">
                                <Link to="/manage-orders" className="md:mr-2">Manage Order</Link>
                            </li>}
                            {user.displayName && <li className="nav-item">
                                <Link to="/my-orders" className="md:mr-2">My Order</Link>
                            </li>}

                            <li className="nav-item">
                                {!user.displayName ? <Link to="/login" className="md:mr-2">Login</Link> : <Link to="/login" className="md:mr-2"><span onClick={logOut} type="button">Log Out</span></Link>}

                            </li>

                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
}