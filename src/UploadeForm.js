import React, { useState } from 'react';
import * as firebase from 'firebase';
export const LS_COLLECTION = 'arrCollections';

export default function UploadForm(props) {
    const [loading, setLoading] = useState(false);
    // On submit- Uploads file to database
    const onFormSubmit = e => {
        e.preventDefault();
        setLoading(true);

        let fileName = document.getElementById('name').value,
            fileType = document.getElementById('type').value,
            storageRef = firebase.storage().ref().child(fileName);

        //Adds image to storage 
        storageRef.put(document.getElementById('file').files[0]).then(snapshot => {
            // Gets image's url
            storageRef.getDownloadURL().then(res => {
                // Adds other info to the database
                firebase.firestore().collection('portfolio').add({
                    name: fileName,
                    type: fileType,
                    description: document.getElementById('description').value,
                    url: res,
                    time: setDate(new Date())
                });
            });
            setLoading(false);
            // Adds collection's name to localStorage
            let arrTemp = JSON.parse(localStorage.getItem(LS_COLLECTION));
            if (arrTemp === null) arrTemp = [fileType];
            else if (arrTemp.filter(name => name === fileType).length === 0) arrTemp.push(fileType);
            localStorage.setItem(LS_COLLECTION, JSON.stringify(arrTemp));
        });
    }, onFormChange = e => {
        let bAreFieldsEmpty = true
        if (document.getElementById('file').value !== "" && document.getElementById('name').value !== "" && document.getElementById('type').value !== "") bAreFieldsEmpty = false;
        document.getElementById('submitBtn').style.visibility = bAreFieldsEmpty ? 'hidden' : 'visible';
    },
        // Returns today's full date 
        setDate = date => {
            // Gets day
            let retDate = date.getDate();
            // Gets month
            switch (date.getMonth()) {
                case 0:
                    retDate += ' January ';
                    break;
                case 1:
                    retDate += ' February ';
                    break;
                case 2:
                    retDate += ' March ';
                    break;
                case 3:
                    retDate += ' April ';
                    break;
                case 4:
                    retDate += ' May ';
                    break;
                case 5:
                    retDate += ' June ';
                    break;
                case 6:
                    retDate += ' July ';
                    break;
                case 7:
                    retDate += ' August ';
                    break;
                case 8:
                    retDate += ' September ';
                    break;
                case 9:
                    retDate += ' October ';
                    break;
                case 10:
                    retDate += ' November ';
                    break;
                case 11:
                    retDate += ' December ';
                    break;
                default: break;
            }
            // Gets year
            retDate += date.getFullYear();
            return retDate;
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

