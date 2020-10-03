import React from "react";
import { Link, useLocation } from "react-router-dom";

function Header() {
    const location = useLocation();
    return (
        <header>
            <nav className="navbar navbar-expand navbar-light bg-light flex-column flex-md-row">
                <a className="navbar-brand" href="/">
                    <img src="/assets/pics/POPiconSVG2.svg" width="150" height="50" className="d-inline-block align-top"
                        alt="POP services Venn diagram icon" loading="lazy" />
                </a>
                <div className="navbar-nav ml-md-auto">
                    <ul className="navbar-nav flex-row">
                        <li className="nav-item">
                            <Link to="/" className={location.pathname === "/" ? "nav-link active" : "nav-link"}>About</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/Portfolio" className={location.pathname === "/Portfolio" ? "nav-link active" : "nav-link"}>Portfolio</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/Contact" className={location.pathname === "/Contact" ? "nav-link active" : "nav-link"}>Contact</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    );
};

export default Header;