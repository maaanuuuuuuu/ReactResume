import React from 'react';

export const Header = () => {

    return (
        <div className="card-title" id="header">
            <div className="row">
                <div className="col-sm-4 col-md-4 col-lg-4">
                    <div className="QRCode">
                        <img src="./QR.png" alt=""/>
                    </div>
                    <div className="photo">
                        <img src="./photo.png" alt=""/>
                    </div>
                </div>
                <div className="col-sm-8 col-md-8 col-lg-8">
                    <div className="title-block">
                        <h1>Emmanuel Désir</h1>
                    </div>
                    <div className="social-links">
                        <a href="https://www.linkedin.com/in/emmanuel-desir-86b465141/">
                            <i className="fa fa-linkedin" />
                        </a>
                        <a href="https://github.com/maaanuuuuuuu">
                            <i className="fa fa-github" />
                        </a>
                        <a href="https://stackoverflow.com/users/1514946/manu">
                            <i className="fa fa-stack-overflow" />
                        </a>
                    </div>
                    <div className="title-block job-title"><h2>React / Symfony</h2></div>
                </div>
            </div>
        </div>
    );
}
