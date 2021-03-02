import React from 'react';
import {useResumeContext} from "../../model";
import {ItemList} from "../ItemList";

export const Education = () => {

    const resume = useResumeContext();

    return (
        <div className="block">
            <div className="block-title">
                <h3>Education and <span>Internships</span></h3>
            </div>
            {resume.education &&
                <ItemList items={resume.education} />
            }
        </div>
    );
}
