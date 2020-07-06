import { createStore } from "redux";
import { rootReducer } from "../reducers/rootReducer";
import cookie from 'js-cookie';

const transactionInfo = cookie.getJSON("transaction") || []

const initialState = {
    transaction: {
        transactionInfo
    }
}

export const store = createStore(rootReducer, initialState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
