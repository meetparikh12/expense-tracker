import React, { useState } from 'react'
import './Transaction.css'
import { connect } from 'react-redux';
import { addNewTransaction } from '../../actions/actions';

function Transaction(props) {
    const [text, setText] = useState('');
    const [amount, setAmount] = useState('');
    const addTransactionHandler = () => {
        const price = Math.round(parseFloat(amount)*100)/100;
        const transactionInfo = {text, price};
        props.addNewTransaction(transactionInfo);
        setText('');
        setAmount('');
    }
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
            <button className="button mt-20" type="button" onClick={addTransactionHandler}>Add Transaction</button>
        </div>
    )
}

const mapDispatchToProps = dispatchEvent => {
    return {
        addNewTransaction : (transactionInfo) => {
            dispatchEvent(addNewTransaction(transactionInfo))
        }
    }
}

export default connect(null,mapDispatchToProps)(Transaction)