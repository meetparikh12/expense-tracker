import { ADD_NEW_TRANSACTION, GET_BALANCE } from "./actionTypes";

export const addNewTransaction = (transactionInfo)=> {
    return {
        type: ADD_NEW_TRANSACTION,
        payload: transactionInfo
    }
}

export const getBalanceInfo = () => {
    return {
        type: GET_BALANCE
    }
}