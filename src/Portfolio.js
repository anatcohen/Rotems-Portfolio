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
                    <form onChange={onCheckBoxClick}>
                        {props.types.data.map((value, index) =>
                            <div key={index}>
                                {value} <input type="checkbox" defaultChecked={true} id={value} defaultChecked={true} id={value}></input>
                            </div>
                        )}
                    </form>
                </>
            </div>
            <div id="item-container">
                {props.display.data.map((doc, index) => <Item doc={doc} onClick={props.deleteDoc} data={props.data.data} inEdit={false} key={index} />)}
            </div>
        </>
    );
}