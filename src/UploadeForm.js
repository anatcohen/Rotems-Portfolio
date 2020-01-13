import React, { useState } from 'react';
import * as firebase from 'firebase';

export default function UploadForm(props) {
    const [loading, setLoading] = useState(false);

    const onFormSubmit = e => {
        e.preventDefault();
        setLoading(true);

        let storageRef = firebase.storage().ref().child(document.getElementById('name').value);
        //Adds image to storage 
        storageRef.put(document.getElementById('file').files[0]).then(snapshot => {
            // Gets image's url
            storageRef.getDownloadURL().then(res => {
                // Adds to database
                firebase.firestore().collection('portfolio').add({
                    name: document.getElementById('name').value,
                    type: document.getElementById('type').value,
                    description: document.getElementById('description').value,
                    url: res
                });
            });
            setLoading(false);
        });

    }, onFormChange = e => {
        let bAreFieldsEmpty = true
        if (document.getElementById('file').value !== "" && document.getElementById('name').value !== "" && document.getElementById('type').value !== "") bAreFieldsEmpty = false;
        document.getElementById('submitBtn').style.visibility = bAreFieldsEmpty ? 'hidden' : 'visible';
    }
    return (
        <>
            <p>Upload an item: </p>
            <form onSubmit={onFormSubmit} autoComplete="off" onChange={onFormChange}>
                <input id="name" placeholder="File Name" /><br />
                <input id="type" placeholder="File type" /> <br />
                <input id="description" placeholder="Description" /> <br />
                <input type="file" id="file" />
                <button style={{ visibility: 'hidden' }} id='submitBtn'>upload</button>
            </form>
            {loading ? "loading" : ""}
        </>
    );
}

