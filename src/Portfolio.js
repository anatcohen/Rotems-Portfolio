import React, { useEffect } from 'react';
import Item from './Item';
import { LS_COLLECTION } from './redux/actions';

export default function Portfolio(props) {
    // Changes item's view to either grid or list view
    const onViewClick = e => {
        document.getElementById('item-container').style.flexDirection = e.target.id;
    },
        onCheckBoxClick = e => {
            let arrData = e.target.checked ?
                [...props.display.data, ...props.data.data.filter(doc => doc.type === e.target.id)] :
                props.display.data.filter(doc => doc.type !== e.target.id);

            props.setDisplay(arrData);
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

    //  Checks if data has been retrieved from database yet
    useEffect(() => { if (!props.status.dataRetrieved) props.getFromDataBase() }, [props.status.dataRetrieved]);

    return (
        <>
            <div>
                <p>portfolio</p>
                <div onClick={onViewClick}>
                    <button id='row' />
                    <button id='column' />
                </div>
                <>
                    <button>Edit</button>
                    {addCheckBoxs()}
                </>
            </div>
            <div id="item-container">
                {props.display.data.map((doc, index) => {
                    return <Item url={doc.url} name={doc.name} description={doc.description} id={doc.id} onClick={props.deleteDoc} data={props.data.data} key={index} />
                })}
            </div>
        </>
    );
}

