import React, { useState, useEffect } from 'react'
import HistoryTracker from './HistoryTracker/HistoryTracker'
import './History.css'
import { connect } from 'react-redux'
import Pagination from '../Pagination/Pagination';

function History({historyInfo}) {
    const [currentPage, setCurrentPage] = useState(1);
    const [transactionsPerPage] = useState(5);
    const [transactions, setTransactions] = useState([]);

    useEffect(()=> {
        setTransactions(historyInfo);
    }, [historyInfo])

    const indexOfLastTransaction = currentPage * transactionsPerPage;
    const indexOfFirstTransaction = indexOfLastTransaction - transactionsPerPage;
    const trans = [...transactions]
    const currentTransactions = trans.splice(indexOfFirstTransaction, transactionsPerPage);
    const paginate = (pageNumber) =>{
        setCurrentPage(pageNumber)
    }
    if(transactions.length===0){
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
                    {currentTransactions.map((element, i)=> 
                        <HistoryTracker 
                            key={i} 
                            text={element.txt} 
                            amount={element.price}/>
                    )}
                </ul>
            </div>
            <Pagination 
                transactionsPerPage={transactionsPerPage} 
                paginate={paginate} 
                totalTransactions={transactions.length}
            />
        </div>
    )
}
const mapStateToProps = state => {
    return {
        historyInfo : state.transaction.transactionInfo
    }
}

export default connect(mapStateToProps, null)(History)