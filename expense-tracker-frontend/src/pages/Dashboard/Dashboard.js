import React from 'react'
import './Dashboard.css'
import Balance from '../../components/Balance/Balance';
import Transaction from '../../components/Transaction/Transaction';
import History from '../../components/History/History';

export default function Dashboard() {
    return (
            <div className="OuterContainer pb-5">
                <div className="InnerContainer">
                    <h1 className="heading mt-4 text-center">Track Your Expense</h1>
                    <Balance/>
                    <History/>
                    <Transaction/>
                </div>
            </div>
    )
}
