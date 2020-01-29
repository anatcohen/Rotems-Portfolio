import React from 'react';
import UploadForm from './UploadeForm';
import Item from './Item';

export default function Edit(props) {
    // PAGE FOR ADMIN TO EITHER UPLOAD FORM OR EDIT OTHER ITEMS - DELETE/RENAME
    return (
        <>
            <UploadForm {...props} />
            {console.log(props)}
            <div id="item-container">
                {props.data.data.map((doc, index) => {
                    return <Item url={doc.url} name={doc.name} description={doc.description} id={doc.id} onClick={props.deleteDoc} data={props.data.data} key={index} />
                })}
            </div>
        </>
    );
}

