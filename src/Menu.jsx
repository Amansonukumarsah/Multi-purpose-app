import React from "react";
import { NavLink } from "react-router-dom";

// {/* <Navlink to="/"> About_us<Navlink/> */}

const Menu = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <NavLink exact className="navbar-brand nav" to="/">Home</NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">


                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item mx-2">
                                <NavLink exact className="nav-link dctive" drid-current="pNavLinkge" to="/about">About</NavLink>
                            </li>
                            <li className="nav-item mx-2">
                                <NavLink exact className="nav-link" to="/Contact">Contact</NavLink>
                            </li>

                            <li className="nav-item mx-2">
                                <NavLink exact className="nav-link" to="/services" tabindex="-1" aria-disabled="true">Services</NavLink>
                            </li>

                            <li className="nav-item mx-2">
                                <NavLink exact className="nav-link" to="/todo" tabindex="-1" aria-disabled="true">Todo</NavLink>
                            </li>

                            <li className="nav-item mx-2">
                                <NavLink exact className="nav-link" to="/digital" tabindex="-1" aria-disabled="true">Digital_clock</NavLink>
                            </li>

                            <li className="nav-item mx-2">
                                <NavLink exact className="nav-link" to="/slider" tabindex="-1" aria-disabled="true">Img_Slider</NavLink>
                            </li>

                            <li className="nav-item mx-2">
                                <NavLink exact className="nav-link" to="/weather" tabindex="-1" aria-disabled="true">Weather</NavLink>
                            </li>

                            <li className="nav-item mx-2">
                                <NavLink exact className="nav-link" to="/calculator" tabindex="-1" aria-disabled="true">Calculator</NavLink>
                            </li>

                            <li className="nav-item mx-2">
                                <NavLink exact className="nav-link" to="/gmail" tabindex="-1" aria-disabled="true">Gmail</NavLink>
                            </li>

                        </ul>

                        <form className="d-flex">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                                <button className="btn btn-outline-success" type="submit">Search</button>
                        </form>

                    </div>
                </div>
            </nav>
        </>
    )
}

export default Menu;