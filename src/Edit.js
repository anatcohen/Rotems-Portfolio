import React from 'react';
import UploadForm from './UploadeForm';
import Item from './Item';

export default function Edit(props) {
    // PAGE FOR ADMIN TO EITHER UPLOAD FORM OR EDIT OTHER ITEMS - DELETE/RENAME
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

