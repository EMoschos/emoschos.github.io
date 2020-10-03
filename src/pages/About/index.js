import React from "react";


function About() {
    return (
        <main>
            <div className="container-sm">
                <div className="row">
                    <div className="col-sm border-bottom">
                        <h1>
                            About
                        </h1>
                    </div>
                </div>
                <div className="row marginTop">
                    <div className="col-sm-3">
                        <img src="/assets/pics/POPicon2.png" width="200" height="200"
                            alt="POP services Venn diagram icon with projects, operations and performance written under it"
                            className="img-thumbnail" />
                    </div>
                    <div className="col-sm-9 font-weight-bold">
                        <p>
                            Eleftherios (Terry) Moschos is a full stack developer and project manager in the web development
                            space
                            leveraging studies with a
                            master’s in applied project management and full-stack web development both completed through the
                            University of Adelaide.
                        </p>
                        <p>
                            Terry has extensive experience delivering projects across different industries
                            that provide business value from maintenance management system development and implementation to
                            major asset construction projects.
                        </p>
                        <p>
                            With newly formed skills in front-end and back-end web
                            development technologies including Javascript, HTML and CSS, Terry has developed several web
                            applications using full stack technologies and applied his project management skills to deliver
                            these in a team setting and achieving application goals and acceptance criteria.
                        </p>
                        <p>
                            Offering a
                            unique perspective from previous experience in projects and passion for digital technologies,
                            Terry is extremely well positioned to apply his strengths in team collaboration, stakeholder
                            management and real
                            world problem-solving to the benefit of the organisation.
                        </p>
                        <p>
                            <a href="/assets/pics/EM_Resume_2020.pdf"
                                target="_blank">Click here
                            </a> to view Terry's latest resume.
                        </p>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default About;