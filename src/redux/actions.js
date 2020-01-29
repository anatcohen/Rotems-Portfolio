import * as firebase from 'firebase';

export const LS_COLLECTION = 'arrCollections';
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
export function addToDataBase(file, fileName, fileType, fileDes, date) {
    return dispatch => {
        // Changes loading and data retrieved status'
        dispatch(changeLoading(true));
        dispatch(changeDataRetrieved(false));
        //Adds image to storage 
        firebase.storage().ref().child(fileName).put(file).then(snapshot => {
            // Gets image's url
            firebase.storage().ref().child(fileName).getDownloadURL().then(res => {
                // Adds other info to the database
                let id = String(Date.now());
                firebase.firestore().collection('portfolio').doc(id).set({
                    name: fileName,
                    type: fileType,
                    description: fileDes,
                    url: res,
                    time: date,
                    id
                });
            });

            //Initilises upload form and loading sign
            document.getElementById('uploadForm').reset();
            dispatch(changeLoading(false));
            // Adds collection's name to localStorage
            let arrTemp = JSON.parse(localStorage.getItem(LS_COLLECTION));
            if (arrTemp === null) arrTemp = [fileType];
            else if (arrTemp.filter(name => name === fileType).length === 0) arrTemp.push(fileType);
            localStorage.setItem(LS_COLLECTION, JSON.stringify(arrTemp));
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