import React, { useEffect } from 'react';
import * as firebase from "firebase";
import * as firebaseui from 'firebaseui';

export default function SignIn(props) {
    useEffect(() => {
        let ui = new firebaseui.auth.AuthUI(firebase.auth());

        ui.start('#firebaseui-auth-container', {
            signInSuccessUrl: '/Edit',
            signInOptions: [firebase.auth.EmailAuthProvider.PROVIDER_ID]
        });
    }, []);

    return (
        <>
            <div id="firebaseui-auth-container"></div>
            <div id="loader">Loading...</div>
        </>
    );
}

