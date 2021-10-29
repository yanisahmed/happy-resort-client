import { faBars, faWindowClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export default function HeaderNav({ fixed }) {
    const [navbarOpen, setNavbarOpen] = React.useState(false);
    return (
        <>
            <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 mb-3">
                <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
                    <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
                        <a
                            className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase "
                            href="#pablo"
                        >
                            Happy Resort
                        </a>
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
                                <a
                                    className="md:px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug  hover:opacity-75"
                                    href="#pablo"
                                >
                                    <i className="fab fa-facebook-square text-lg leading-lg  opacity-75"></i><span className="md:ml-2">Share</span>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a
                                    className="md:px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug  hover:opacity-75"
                                    href="#pablo"
                                >
                                    <i className="fab fa-twitter text-lg leading-lg opacity-75"></i><span className="md:ml-2">Tweet</span>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a
                                    className="md:px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug  hover:opacity-75"
                                    href="#pablo"
                                >
                                    <i className="fab fa-pinterest text-lg leading-lg  opacity-75"></i><span className="md:ml-2">Pin</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
}