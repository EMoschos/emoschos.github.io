import React from "react";

function Contact() {
    return (
        <main>
        <div className="container-sm">
          <div className="row">
            <div className="col-sm border-bottom">
              <h1>
                Contact
              </h1>
            </div>
          </div>
          <div className="container marginTop">
            <h3>For further enquiries feel free to contact us @</h3>
            <h2><i className="fas fa-user"></i> Eleftherios Moschos</h2>
            <h2><i className="fas fa-envelope"></i> tmoschos@bigpond.com</h2>
            <h2><i className="fas fa-phone-alt"></i> 0400 079 794</h2>
            <a className="navbar-brand" href="https://www.linkedin.com/in/eleftherios-moschos-380409113/">
              <img src="/assets/pics/linkin.png" width="60" height="60" alt="linkedin logo" loading="lazy"/>
            </a>
            <a className="navbar-brand" href="https://github.com/EMoschos">
              <img src="/assets/pics/github.png" width="60" height="60" alt="Github logo" loading="lazy"/>
            </a>
          </div>
        </div>
      </main>
    );
}

export default Contact;