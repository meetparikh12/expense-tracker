import { ADD_NEW_TRANSACTION } from "./actionTypes";

export const addNewTransaction = (transactionInfo)=> {
    return {
        type: ADD_NEW_TRANSACTION,
        payload: transactionInfo
    }
}