
import React from 'react';

export default function Item(props) {
    return (
        <>
            <p>{props.name}</p>
            <img src={props.url} alt="oops" />
        </>
    );
}

