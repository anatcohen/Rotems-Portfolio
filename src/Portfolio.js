import React, { useState, useEffect } from 'react';
import * as firebase from 'firebase';
import Item from './Item';
export default function Portfolio() {
    const [data, setData] = useState([]),
        // Changes item's view to either grid or list view
        onViewClick = e => {
            document.getElementById('item-container').style.flexDirection = e.target.id;
        }

    // Adds checkboxs to the type
    /*
    ,addCheckBoxs = () => {

    }
    */

    useEffect(() => {
        firebase.firestore().collection("portfolio").get().then(querySnapshot => {
            let arr = [];
            querySnapshot.forEach(function (doc) {
                arr.push(doc.data());
                // setData(...data, doc.data())
            });
            setData(arr)
        });
    }, []);

    return (
        <>
            <div>
                <p>portfolio</p>
                <div onClick={onViewClick}>
                    <button id='row' />
                    <button id='column' />
                </div>
                <>
                </>
            </div>
            <div id="item-container">
                {data.map((doc, index) => <Item url={doc.url} name={doc.name} description={doc.description} key={index} />)}
            </div>
        </>
    );
}

