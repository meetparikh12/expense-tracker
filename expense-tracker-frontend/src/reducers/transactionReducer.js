import { ADD_NEW_TRANSACTION } from "../actions/actionTypes";

const initialState = {
    transactionInfo : []
}

export const transactionReducer = (state=initialState, action) => {
    switch (action.type) {
        case ADD_NEW_TRANSACTION:
            const transactionArray = [...state.transactionInfo,action.payload]
            return {
                transactionInfo: transactionArray
            }
        default:
            return state;
    }
}