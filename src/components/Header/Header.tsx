import React from 'react';
import {useResumeContext} from "../../model";

export const Header = () => {

    const resume = useResumeContext();

    return (
        <div className="card-title" id="header">
            <div className="row">
                <div className="col-sm-4 col-md-4 col-lg-4">
                    <div className="QRCode">
                        <img src="./QR.png" alt=""/>
                    </div>
                    <div className="photo">
                        <img src={resume.photoURL} alt=""/>
                    </div>
                </div>
                <div className="col-sm-8 col-md-8 col-lg-8">
                    <div className="title-block">
                        <h1>{resume.name}</h1>
                    </div>
                    <div className="social-links">
                        <a href={resume.linkedinURL}>
                            <i className="fa fa-linkedin" />
                        </a>
                        <a href={resume.ghURL}>
                            <i className="fa fa-github" />
                        </a>
                        <a href={resume.soURL}>
                            <i className="fa fa-stack-overflow" />
                        </a>
                    </div>
                    <div className="title-block job-title"><h2>{resume.subTitle}</h2></div>
                </div>
            </div>
        </div>
    );
}
