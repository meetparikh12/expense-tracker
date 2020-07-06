import React from 'react'
import './HistoryTracker.css'
export default function HistoryTracker({text, amount}) {
    return (
        <React.Fragment>
            <li>
                <div className="history-info text-dark">
                    <i><span className="item_name">{text}</span></i>
                    <span className="item_amount">{amount}</span>
                </div>  
                <div style={{clear: "both"}}/>              
            </li>
        </React.Fragment>
    )
}
