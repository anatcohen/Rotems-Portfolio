import * as firebase from 'firebase';
//Action types
export const SET_DATA = 'SET_DATA'
export const SET_DISPLAY = 'SET_DISPLAY'
export const CHANGE_LOADING = 'CHANGE_LOADING'
export const CHANGE_DATA_RETRIEVED = 'CHANGE_DATA_RETRIEVED'

export function setData(data) {
    return { type: SET_DATA, data }
}
export function setDisplay(data) {
    return { type: SET_DISPLAY, data }
}
export function changeLoading(value) {
    return { type: CHANGE_LOADING, value }
}
export function changeDataRetrieved(value) {
    return { type: CHANGE_DATA_RETRIEVED, value }
}
// Uploads files to database with it's info
export function addToDataBase(file, name, type, description, date) {
    return dispatch => {
        dispatch(changeLoading(true));

        //Adds image to storage 
        firebase.storage().ref().child(name).put(file).then(snapshot => {
            // Gets image's url
            firebase.storage().ref().child(name).getDownloadURL().then(res => {
                // Adds other info to the database
                let id = String(Date.now());
                firebase.firestore().collection('portfolio').doc(id).set({
                    name,
                    type,
                    description,
                    url: res,
                    date,
                    id
                });
            });

            //Initilises upload form and loading sign
            document.getElementById('uploadForm').reset();
            dispatch(changeLoading(false));
            dispatch(changeDataRetrieved(false));
        });
    }
}
// Gets files from database
export function getFromDataBase() {
    return dispatch => {
        let arrData = [];
        firebase.firestore().collection("portfolio").get().then(querySnapshot => {
            querySnapshot.forEach(function (doc) {
                arrData.push(doc.data());
            });
            dispatch(setData(arrData));
            dispatch(setDisplay(arrData));
            dispatch(changeDataRetrieved(true));
        });
    }
}

export function deleteDoc(id, data) {
    return dispatch => {
        firebase.firestore().collection("portfolio").doc(id).delete().then(() => {
            dispatch(changeDataRetrieved(false));
        })
    }
}