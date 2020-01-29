import React from 'react';
import Item from './Item';

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
            return <form onChange={onCheckBoxClick}>
                {props.data.data.map((value, index) =>
                    <div key={index}>{value.type} <input type="checkbox" defaultChecked={true} id={value.type} /></div>
                )}
            </form>
        }

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
                    return <Item doc={doc} onClick={props.deleteDoc} data={props.data.data} inEdit={false} key={index} />
                })}
            </div>
        </>
    );
}

