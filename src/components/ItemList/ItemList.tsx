import React from 'react';
import {IPosition} from "../../model";
import {Item} from "./Item/Item";


export const ItemList = ({items}: {items: IPosition[]}) => {


    return (
        <div className="profile">
            {items.map((item: IPosition) => {
                return (<Item item={item} />);
            })}
        </div>
    );
}
