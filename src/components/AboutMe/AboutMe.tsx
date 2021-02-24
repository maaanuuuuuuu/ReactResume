import React from 'react';

export const AboutMe = (props: {text: string}) => {

    return (
        <div className="about-me">
            <div className="block-title">
                <h3>About <span>Me</span></h3>
            </div>
            <p style={{paddingLeft: 15}}>
                {props.text}
            </p>
        </div>
    );
}
