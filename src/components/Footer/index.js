import React from "react";

function Footer() {
    return (
        <footer id="sticky-footer" className="bg-light">
            <div className="container text-center">
                <small><i className="fas fa-user"></i> Eleftherios Moschos</small>
                <small><i className="fas fa-envelope"></i> tmoschos@bigpond.com</small>
                <small><i className="fas fa-phone-alt"></i> 0400079794</small>
                <a className="navbar-brand" href="https://www.linkedin.com/in/eleftherios-moschos-380409113/">
                    <img src="/assets/pics/linkin.png" width="30" height="30" alt="linkedin logo" loading="lazy" />
                </a>
                <a className="navbar-brand" href="https://github.com/EMoschos">
                    <img src="/assets/pics/github.png" width="30" height="30" alt="Github logo" loading="lazy" />
                </a>
            </div>
        </footer>
    );
};

export default Footer;