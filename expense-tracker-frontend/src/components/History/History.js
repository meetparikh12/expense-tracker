import React from 'react'
import HistoryTracker from './HistoryTracker/HistoryTracker'
import './History.css'
import { connect } from 'react-redux'

function History({historyInfo}) {
    if(historyInfo.length===0){
        return  (
            <div className="history">
                    <h6 className="primary_heading text-capitalize text-white font-weight-light mb-4">History</h6>
                    <h5 className="text-white font-weight-light text-center m-4">-- No transaction Yet --</h5>
            </div>
        )
    }
    return (
        <div className="history">
            <h6 className="primary_heading text-capitalize text-white font-weight-light mb-4">History</h6>
            <div className="history-tracker">
                <ul className="history-list">
                    {historyInfo.map((element, i)=> 
                        <HistoryTracker 
                            key={i} 
                            text={element.text} 
                            amount={element.price}/>
                    )}
                </ul>
            </div>
        </div>
    )
}
const mapStateToProps = state => {
    return {
        historyInfo : state.transaction.transactionInfo
    }
}

export default connect(mapStateToProps, null)(History)