import * as actions from './actions';
import { combineReducers } from 'redux';

const INITIAL_DATA_STATE = { data: [] };
const INITIAL_DISPLAY_STATE = { data: [] }
const INITIAL_TYPES_STATE = { data: [] }
const INITIAL_STATUS_STATE = { loading: false, dataRetrieved: false };

// Reducer for all the database data
function dataReducer(state = INITIAL_DATA_STATE, action) {
    switch (action.type) {
        case actions.SET_DATA:
            return { data: action.data };
        default:
            return state;
    }
}

// Reducer for data on display
function displayReducer(state = INITIAL_DISPLAY_STATE, action) {
    switch (action.type) {
        case actions.SET_DISPLAY:
            return { data: action.data };
        default:
            return state;
    };
}

function typesReducer(state = INITIAL_TYPES_STATE, action) {
    switch (action.type) {
        case actions.SET_TYPES:
            return { data: action.data };
        default:
            return state;
    };
}

// Reducer for status data: loading status and staus or weather the data has been retrived yet
function statusReducer(state = INITIAL_STATUS_STATE, action) {
    switch (action.type) {
        case actions.CHANGE_LOADING:
            return { ...state, loading: action.value };
        case actions.CHANGE_DATA_RETRIEVED:
            return { ...state, dataRetrieved: action.value };
        default:
            return state;
    }
}

export default combineReducers({
    data: dataReducer,
    display: displayReducer,
    types: typesReducer,
    status: statusReducer
});