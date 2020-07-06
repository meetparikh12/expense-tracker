import { ADD_NEW_TRANSACTION, GET_BALANCE } from "../actions/actionTypes";

const initialState = {
    transactionInfo : [],
    incomeBalance: [],
    expenseBalance: []
}

export const transactionReducer = (state=initialState, action) => {
    switch (action.type) {
        case ADD_NEW_TRANSACTION:
            const transactionArray = [...state.transactionInfo,action.payload]
            return {
                ...state,
                transactionInfo: transactionArray
            }
        case GET_BALANCE: 
            const balanceInfo = state.transactionInfo.map((elem)=> parseInt(elem.amount));
            console.log(balanceInfo)
            const incomeArray = balanceInfo.filter((elem)=> elem >= 0)
            const expenseArray = balanceInfo.filter((elem)=> elem < 0)
            console.log(incomeArray, expenseArray)
            return {
                ...state,
                incomeBalance: incomeArray,
                expenseBalance: expenseArray
            }
        default:
            return state;
    }
}