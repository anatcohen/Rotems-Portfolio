import React, { useEffect } from 'react';
import './App.css';
import NavBar from './NavBar';
import Portfolio from './Portfolio';
import SignIn from './SignIn'
import Edit from './Edit'
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from './redux/actions';

export function App(props) {
  //  Checks if data has been retrieved from database yet
  useEffect(() => {
    if (!props.status.dataRetrieved) props.getFromDataBase()
  }, [props.status.dataRetrieved]);

  return (
    <div className="body">
      <NavBar />
      <div className="content">
        <Route exact path="/SignIn" render={(routeProps) => <SignIn {...routeProps} {...props} />} />
        <Route exact path="/Edit" render={(routeProps) => <Edit {...routeProps} {...props} />} />
        <Route exact path="/Portfolio" render={(routeProps) => <Portfolio {...routeProps} {...props} />} />
      </div>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    data: state.data,
    display: state.display,
    types: state.types,
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

