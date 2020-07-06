import React from 'react'
import './HistoryTracker.css'
export default function HistoryTracker({text, amount}) {
    const borderStyleForExpense = {
        borderRight: "10px solid red"
    }
    const borderStyleForIncome = {
        borderRight: "10px solid green"
    }
    let border;
    if(amount===0){
        border = {}
    } else if(amount<0){
        border = borderStyleForExpense
    }else {
        border = borderStyleForIncome
    }
    return (
        <React.Fragment>
            <li>
                <div className="history-info text-dark">
                    <i><span className="item_name">{text}</span></i>
                    <span className="item_amount" style={border}>{amount}</span>
                </div>  
                <div style={{clear: "both"}}/>              
            </li>
        </React.Fragment>
    )
}
