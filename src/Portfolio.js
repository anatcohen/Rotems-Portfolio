import React, { useState, useEffect } from 'react';
import * as firebase from 'firebase';
import Item from './Item';
import { LS_COLLECTION } from './UploadeForm';

export default function Portfolio() {
    const [data, setData] = useState([]),
        [display, setDisplay] = useState(data),
        // Changes item's view to either grid or list view
        onViewClick = e => {
            document.getElementById('item-container').style.flexDirection = e.target.id;
        },
        onCheckBoxClick = e => {
            // Add to display
            if (e.target.checked) setDisplay([...display, ...data.filter(doc => doc.type === e.target.id)]);
            // Remove from display
            else setDisplay(data.filter(doc => doc.type !== e.target.id))
        },
        // Adds checkboxs according to the different item types
        addCheckBoxs = () => {
            let arrTemp = JSON.parse(localStorage.getItem(LS_COLLECTION));
            return <form onChange={onCheckBoxClick}>
                {arrTemp.map((type, index) => {
                    return <div key={index}>{type} < input type="checkbox" defaultChecked={true} id={type} /></div>
                })}
            </form>;
        }

    useEffect(() => {
        firebase.firestore().collection("portfolio").get().then(querySnapshot => {
            let arr = [];
            querySnapshot.forEach(function (doc) {
                arr.push(doc.data());
                // setData(...data, doc.data())
            });
            setData(arr);
            setDisplay(arr);
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
                    {addCheckBoxs()}
                </>
            </div>
            <div id="item-container">
                {display.map((doc, index) => <Item url={doc.url} name={doc.name} description={doc.description} key={index} />)}
            </div>
        </>
    );
}

