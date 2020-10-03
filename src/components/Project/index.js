import React from "react";
import Divider from "../../components/Divider"

function Project(props) {
    return (
        <div>
            <Divider />
            <div className="row">

                <div className="col-md-8">
                    <img src={props.image} alt="schoolgle App Screenshot" className="img-thumbnail" />
                </div>

                <div className="col-md-4">
                    <h2>{props.title}</h2>
                    <p>
                        {props.description}
                    </p>
                    <a className="btn btn-primary text-white" href={props.deployed}
                        target="_blank" rel="noopener noreferrer">View Deployed App
                </a>
                    <a className="btn btn-primary text-white" href={props.repo}
                        target="_blank" rel="noopener noreferrer">View GitHub Repo
                </a>
                </div>
            </div>
        </div>
    );
};

export default Project;