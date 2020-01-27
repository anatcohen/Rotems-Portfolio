
import React from 'react';

export default function Item(props) {
    const onClick = e => {
        console.log(props.id)
        props.onClick(props.id, props.data)
    }

    return (
        <div className="item">
            <button onClick={onClick}>X</button>
            <h1>{props.name}</h1>
            <h3>{props.description}</h3>
            <img src={props.url} alt="oops" />
        </div >
    );
}

