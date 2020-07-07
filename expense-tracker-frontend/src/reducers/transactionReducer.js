import { ADD_NEW_TRANSACTION, GET_BALANCE, REMOVE_TRANSACTIONS, SET_TRANSACTIONS } from "../actions/actionTypes";
import cookie from 'js-cookie';

const initialState = {
    transactionInfo : [],
    incomeBalance: [],
    expenseBalance: []
}

export const transactionReducer = (state=initialState, action) => {
    switch (action.type) {
        case SET_TRANSACTIONS: 
            return{
                ...state,
                transactionInfo: [...action.payload]
            }
        case ADD_NEW_TRANSACTION:
            const transactionArray = [action.payload, ...state.transactionInfo]
            cookie.set("transaction", transactionArray);
            return {
                ...state,
                transactionInfo: transactionArray
            }
        case GET_BALANCE: 
            const balanceInfo = state.transactionInfo.map((elem)=> elem.price);
            const incomeArray = balanceInfo.filter((elem)=> elem >= 0)
            const expenseArray = balanceInfo.filter((elem)=> elem < 0)
            return {
                ...state,
                incomeBalance: incomeArray,
                expenseBalance: expenseArray
            }
        case REMOVE_TRANSACTIONS: 
            return {
                ...state,
                transactionInfo: [],
                incomeBalance: [],
                expenseBalance: []
            }
        default:
            return state;
    }
}