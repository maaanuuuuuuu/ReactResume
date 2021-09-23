import React from 'react';
import {useResumeContext} from "../../model";
import {ItemList} from "../ItemList";

export const Experience = () => {
    
    const resume = useResumeContext();

    return (
        <div className="block">
            <div className="block-title">
                <h3>Experience</h3>
            </div>
            {resume.experience &&
                <ItemList items={resume.experience} />
            }
        </div>
    );
}
