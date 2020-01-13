import React, { useState, useEffect } from 'react';
import * as firebase from 'firebase';
import Item from './Item';
export default function Portfolio() {
    const [data, setData] = useState([]);

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
            <p>portfolio</p>
            {data.map((doc, index) => <Item url={doc.url} name={doc.name} key={index} />)}
        </>
    );
}

