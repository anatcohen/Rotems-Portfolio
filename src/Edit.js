import React from 'react';
import UploadForm from './UploadeForm';
import Item from './Item';

export default function Edit(props) {
    return (
        <>
            <UploadForm {...props} />
            <div id="item-container">
                {props.data.data.map((doc, index) => {
                    return <Item doc={doc} onClick={props.deleteDoc} inEdit={true} key={index} />
                })}
            </div>
        </>
    );
}

