import React from 'react';
import {Header, AboutMe, Contacts} from "../components";
import {ResumeContext} from "../model";
import resume from "../data/Resume/emmanuel-desir.json";

export const Resume = () => {

    return (
        <ResumeContext.Provider value={resume}>
            <div className="card">
                <Header />
                <section className="home" data-id="home">
                    <div className="row">
                        <div className="col-sm-6 col-md-6 col-lg-6">
                            <AboutMe text={resume.aboutMe} />
                        </div>
                        <div className="col-sm-1 col-md-1 col-lg-1" />
                        <div className="col-sm-5 col-md-5 col-lg-5">
                            <Contacts />
                        </div>
                    </div>
                    <div className="download-resume">
                        <a href="./resume.pdf" className="btn btn-secondary">Download Resume</a>
                    </div>
                </section>
            </div>
        </ResumeContext.Provider>
    );
}
