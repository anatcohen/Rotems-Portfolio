import React from 'react';
import * as firebase from 'firebase';

export default function UploadForm(props) {
    const onSubmit = e => {
        e.preventDefault();

        if (document.getElementById('name').value !== "" && document.getElementById('file').files.length !== 0) {
            let file = document.getElementById('file').files[0];
            let storageRef = firebase.storage().ref().child(document.getElementById('name').value);
            //Add image to storage 
            storageRef.put(file).then(snapshot => {
                // Get's image's url
                storageRef.getDownloadURL().then(res => {
                    // Adds to database
                    firebase.firestore().collection('portfolio').add({
                        name: document.getElementById('name').value,
                        type: document.getElementById('type').value,
                        description: document.getElementById('description').value,
                        url: res
                    });
                });
                console.log('done')
            });
        }
        else {
            console.log('error');
        }
    }
    return (
        <>
            <form onSubmit={onSubmit} autoComplete="off">
                <input id="name" placeholder="File Name" /><br />
                <input id="type" placeholder="File type" /> <br />
                <input id="description" placeholder="Description" /> <br />
                <input type="file" id="file" />
                <button>upload</button>
            </form>
        </>
    );
}

