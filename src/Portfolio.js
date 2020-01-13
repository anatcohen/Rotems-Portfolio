import React, { useState, useEffect } from 'react';
import * as firebase from 'firebase';

export default function Portfolio(props) {
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
            {data.map((doc, index) => <img src={doc.url} alt="oops" key={index} />)}
        </>
    );
}

