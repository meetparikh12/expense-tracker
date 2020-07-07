import { ADD_NEW_TRANSACTION, GET_BALANCE, SET_USER_INFO } from "./actionTypes";

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

export const setUserInfo = (userInfo) => {
    return {
        type: SET_USER_INFO,
        payload: userInfo
    }
}