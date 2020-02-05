
import React from 'react';

export default function Item(props) {
    const onClick = e => props.onClick(props.doc.id, props.doc.data);

    return (
        <div className="item">
            <button onClick={onClick} style={{ visibility: props.inEdit ? 'visible' : 'hidden' }}>X</button>
            <h1>{props.doc.name}</h1>
            <h3>{props.doc.description}</h3>
            <img src={props.doc.url} alt="oops" />
        </div >
    );
}

