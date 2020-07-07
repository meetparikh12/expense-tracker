import { combineReducers } from "redux";
import { transactionReducer } from "./transactionReducer";
import userReducer from "./userReducer";

export const rootReducer = combineReducers({
    transaction: transactionReducer,
    user: userReducer
})