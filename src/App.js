import React from 'react';
import './App.css';
import NavBar from './NavBar';
import Portfolio from './Portfolio';
import Contact from './Contact'
import UploadForm from './UploadeForm'
import SignIn from './signIn'
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from './redux/actions';

export function App(props) {
  return (
    <div className="body">
      <NavBar />
      <div className="content">
        <Route exact path="/SignIn" render={(routeProps) => <SignIn {...routeProps} {...props} />} />
        <Route exact path="/UploadForm" render={(routeProps) => <UploadForm {...routeProps} {...props} />} />
        <Route exact path="/Portfolio" render={(routeProps) => <Portfolio {...routeProps} {...props} />} />
        <Route exact path="/Contact" render={(routeProps) => <Contact {...routeProps} />} />
      </div>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    data: state.data,
    display: state.display,
    status: state.status
  }
}

function mapDispatchToProps(dispatch) {
  return {
    addToDataBase: (file, fileName, fileType, fileDes, date) => { dispatch(actions.addToDataBase(file, fileName, fileType, fileDes, date)) },
    getFromDataBase: () => { dispatch(actions.getFromDataBase()) },
    setDisplay: data => { dispatch(actions.setDisplay(data)) },
    deleteDoc: (id, data) => { dispatch(actions.deleteDoc(id, data)) }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

