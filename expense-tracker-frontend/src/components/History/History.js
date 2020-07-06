import React from 'react'
import HistoryTracker from './HistoryTracker/HistoryTracker'
import './History.css'

const historyInfo = [{
    id: '1',
    text: 'Cash',
    amount: '+500'
}, {
    id: '2',
    text: 'Auto Ride',
    amount: '-400'
}, {
    id: '3',
    text: 'Book',
    amount: '-50'
}]
export default function History() {
    return (
        <div className="history">
            <h6 className="primary_heading text-capitalize text-white font-weight-light mb-4">History</h6>
            <div className="history-tracker">
                <ul className="history-list">
                    {historyInfo.map((element)=> 
                        <HistoryTracker 
                            key={element.id} 
                            text={element.text} 
                            amount={element.amount}/>
                    )}
                </ul>
            </div>
        </div>
    )
}
