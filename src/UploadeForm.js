import React from 'react';

export default function UploadForm(props) {
    // On submit- Uploads file to database
    const onFormSubmit = e => {
        e.preventDefault();
        props.addToDataBase(document.getElementById('file').files[0],
            document.getElementById('name').value, document.getElementById('type').value,
            document.getElementById('description').value,
            setDate(new Date()));

    }, onFormChange = e => {
        let bAreFieldsEmpty = true;
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
            <form onSubmit={onFormSubmit} autoComplete="off" onChange={onFormChange} id='uploadForm'>
                <input id="name" placeholder="File Name" /><br />
                <input id="type" placeholder="File type" /> <br />
                <input id="description" placeholder="Description" /> <br />
                <input type="file" id="file" />
                <button style={{ visibility: 'hidden' }} id='submitBtn'>upload</button>
            </form>
            {props.status.loading ? "loading" : ""}
        </>
    );
}

