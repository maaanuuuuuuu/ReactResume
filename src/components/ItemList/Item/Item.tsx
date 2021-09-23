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
            {
                item.role.map(r => {
                    return (
                        <p className="item-description" dangerouslySetInnerHTML={{__html: r.shortDescription}}></p>
                    )
                })
            }
        </div>
    );
}
