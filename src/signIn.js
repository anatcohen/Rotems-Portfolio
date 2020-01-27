import React, { useEffect } from 'react';
// Firebase App (the core Firebase SDK) is always required and
// must be listed before other Firebase SDKs
import * as firebase from "firebase";
// Add the Firebase services that you want to use
//import "firebase/auth";
import "firebase/firestore";
import * as firebaseui from 'firebaseui';

export default function SignIn(props) {
    useEffect(() => {
        let ui = new firebaseui.auth.AuthUI(firebase.auth());

        ui.start('#firebaseui-auth-container', {
            signInSuccessUrl: '/UploadForm',
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

