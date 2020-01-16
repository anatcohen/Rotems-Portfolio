import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from "react-router-dom";
import * as firebase from 'firebase';
import { Provider } from 'react-redux';
import store from './redux/store';

const config = {
    apiKey: "AIzaSyBKblPOLfGwhrBuBGl9DIexjpYgT6ns4Cg",
    authDomain: "rotem-portfolio.firebaseapp.com",
    databaseURL: "https://rotem-portfolio.firebaseio.com",
    projectId: "rotem-portfolio",
    storageBucket: "rotem-portfolio.appspot.com",
    messagingSenderId: "1047136775141",
    appId: "1:1047136775141:web:c6f4bfe5b2d444b8635d0c"
};

firebase.initializeApp(config);

ReactDOM.render(
    <BrowserRouter>
        <Provider store={store}>
            <App />
        </Provider>
    </BrowserRouter>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
