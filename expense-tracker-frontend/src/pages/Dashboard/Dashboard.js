import React, { useState } from 'react'
import './Dashboard.css'
import Balance from '../../components/Balance/Balance';
export default function Dashboard() {
    const [text, setText] = useState('');
    const [amount, setAmount] = useState('');
    return (
        <div className="Dashboard">
            <div className="OuterContainer">
                <div className="InnerContainer">
                    <h1 className="heading">Track Your Expense</h1>
                    <Balance/>
                    <div>
                        <input placeholder="Enter Text..." className="expenseInput" value={text} type="text" onChange={(event)=> setText(event.target.value)}/>
                    </div>
                    <div>
                        <input placeholder="Enter Amount..." className="expenseInput mt-20" value={amount} type="text" onChange={(event)=> setAmount(event.target.value)}/>
                    </div>
                    <button className="button mt-20" type="button">Add Transaction</button>
                </div>
            </div>
        </div>
    )
}
