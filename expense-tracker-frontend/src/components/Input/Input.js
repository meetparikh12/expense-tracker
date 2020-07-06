import React, { useState } from 'react'
import './Input.css'

export default function Input() {
    const [text, setText] = useState('');
    const [amount, setAmount] = useState('');
    return (
        <div className="transaction">
            <h6 className="primary_heading text-white font-weight-light mb-4">Add New Transaction</h6>
            <div>
                <input placeholder="Enter Text" className="expenseInput" value={text} type="text" onChange={(event)=> setText(event.target.value)}/>
            </div>
            <div>
                <input placeholder="Enter Amount" className="expenseInput mt-20" value={amount} type="text" onChange={(event)=> setAmount(event.target.value)}/>
            </div>
            <button className="button mt-20" type="button">Add Transaction</button>
        </div>
    )
}
