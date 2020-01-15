
import React from 'react';

export default function Item(props) {
    return (
        <div className="item">
            <h1>{props.name}</h1>
            <h3>{props.description}</h3>
            <img src={props.url} alt="oops" />
        </div >
    );
}

