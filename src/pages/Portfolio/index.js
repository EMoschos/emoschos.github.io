import React, { useState, useEffect } from "react";
import Project from "../../components/Project"
import projects from "../../utils/projects.json"

function Portfolio() {
    const [webApps, setWebApps] = useState([...projects]);

    return (
        <main>
            <div className="container-sm">
                <div className="row">
                    <div className="col-sm border-bottom">
                        <h1>
                            Portfolio
                        </h1>
                    </div>
                </div>
                <div className="row marginTop">
                    <div className="col-md-2">
                        <img src="/assets/pics/webDevDesk.png" width="200" height="200" alt="Portfolio Icon"
                            className="img-thumbnail" />
                    </div>
                    <div className="col-md-10">
                        <p>
                            Our Web Development Portfolio consists of applications that utilise the latest in web development technologies. We use
                            HTML, CSS and JavaScript as a base and then leveraging web dev technologies such as Node.js, PWAs, MongoDB and React.js to build dynamic and responsive websites. We endeavour to make each
                            application look clean, fresh and unique. Look through our range of deployed applications below.
                        </p>
                        {webApps.map(item => (
                            <Project 
                            title={item.title} 
                            image={item.image} 
                            description={item.description}
                            deployed={item.deployed}
                            repo={item.repo}/>
                        ))}
                    </div>
                </div>
            </div>
        </main>
    );
}

export default Portfolio;