import React, { useState } from 'react'
import './Transaction.css'

export default function Input() {
    const [text, setText] = useState('');
    const [amount, setAmount] = useState('');
    return (
        <div className="transaction">
            <h6 className="primary_heading text-capitalize text-white font-weight-light mb-4">Add New Transaction</h6>
            <div>
                <h5 className="text-white font-weight-light">Text :</h5>
                <span className="text-white font-weight-light">(eg: Shopping, Rent, Auto Ride, Book, etc...)</span>          
                <input placeholder="Enter Text" className="expenseInput mt-2" value={text} type="text" onChange={(event)=> setText(event.target.value)}/>
            </div>
            <div>
                <h5 className="text-white font-weight-light mt-4">Amount :</h5>  
                <span className="text-white font-weight-light">(-ve: Expense, +ve: Income | eg: -50, +40)</span>          
                <input placeholder="Enter Amount" className="expenseInput mt-2" value={amount} type="text" onChange={(event)=> setAmount(event.target.value)}/>
            </div>
            <button className="button mt-20" type="button">Add Transaction</button>
        </div>
    )
}
