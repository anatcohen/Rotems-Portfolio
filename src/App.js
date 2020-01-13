import React from 'react';
import './App.css';
import NavBar from './NavBar';
import Portfolio from './Portfolio';
import Contact from './Contact'
import UploadForm from './UploadeForm'
//import Home from './Home';
import { Route } from 'react-router-dom';

export default function App(props) {
  //console.log(firebase.firestore().collection('test').get().then(snapshot => { snapshot.forEach(doc => console.log(doc.data())) }))
  return (
    <div className="body">
      <NavBar />
      <div className="content">
        <Route exact path="/" render={(routeProps) => <UploadForm {...routeProps} />} />
        <Route exact path="/Portfolio" render={(routeProps) => <Portfolio {...routeProps} />} />
        <Route exact path="/Contact" render={(routeProps) => <Contact {...routeProps} />} />
      </div>
    </div>
  );
}

