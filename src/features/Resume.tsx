import React from 'react';
import {Header} from "../components";
import {ResumeContext} from "../model";
import resume from "../data/Resume/emmanuel-desir.json";

export const Resume = () => {

    return (
        <ResumeContext.Provider value={resume}>
            <Header />
        </ResumeContext.Provider>
    );
}
