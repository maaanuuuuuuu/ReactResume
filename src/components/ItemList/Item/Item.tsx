import React from 'react';
import {IPosition} from "../../../model";


export const Item = ({item}: {item: IPosition}) => {


    return (
        <div className="profile-item">
            <h4 className="item-title">
                {item.title}
            </h4>
            <span className="item-period">{item.date}</span>
            <span className="item-small">{item.location}</span>
            <p className="item-description" dangerouslySetInnerHTML={{__html: item.shortDescription}}>
            </p>
        </div>
    );
}
