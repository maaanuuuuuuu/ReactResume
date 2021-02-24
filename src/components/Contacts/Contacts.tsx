import React from 'react';
import {useResumeContext} from "../../model";

export const Contacts = () => {

    const resume = useResumeContext();

    return (
        <ul className="contact-list">
            {resume.location &&
                <li>
                    <i className="fa fa-map-marker" />
                    {resume.location.url ?
                        <a href={resume.location.url}>{resume.location.name}</a> :
                        <>{resume.location.name}</>
                    }
                </li>
            }
            <li>
                <i className="fa fa-at" />
                <a href={"mailto:" + resume.email}>{resume.email}</a>
            </li>
            {resume.phone &&
                <li>
                    <i className="fa fa-phone"/>
                    <a href={"tel:"+resume.phone.split(' ').join('')}>{resume.phone}</a>
                </li>
            }
            {resume.privateSite &&
                <li>
                    <i className="fa fa-link" />
                    <a href={resume.privateSite}>{resume.privateSite.replace("https://", "")}</a>
                </li>
            }
        </ul>
    );
}
