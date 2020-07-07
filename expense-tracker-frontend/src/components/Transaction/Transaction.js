import React, { useState } from 'react'
import './Transaction.css'
import { connect } from 'react-redux';
import { addNewTransaction } from '../../actions/actions';
import Axios from 'axios';
import { toast } from 'react-toastify';
import config from 'react-global-configuration';

function Transaction(props) {
    const [text, setText] = useState('');
    const [amount, setAmount] = useState('');
    const addTransactionHandler = (event) => {
        event.preventDefault();
        let amt = amount.trim();
        if(amt[0]==='+' || amt[0]==='-'){
            let amtStr = amt[0] + amt.substr(1).trim()
            if(!isNaN(amtStr)){
                let txt = text.trim()
                if(txt.length>15){
                    alert('Uh, oh! Text should not be greater than 15 characters.')
                    return;
                }else if(txt.length>0 && /^[A-Za-z]/.test(txt)){
                    const price = Math.round(parseFloat(amtStr)*100)/100;
                    const transactionInfo = {txt, price};
                    props.addNewTransaction(transactionInfo);
                    setText('');
                    setAmount('');
                }else{
                    alert('Uh, oh! Please enter valid text as shown in (eg.).')
                }
            }else{
                alert('Uh, oh! Please enter valid amount as shown in (eg.).')
            }
        }else{
            alert('Uh, oh! Please enter valid amount as shown in (eg.).')
        }   
    }
    return (
        <div className="transaction">
            <h6 className="primary_heading text-capitalize text-white font-weight-light mb-4">Add New Transaction</h6>
            <form onSubmit={addTransactionHandler}>
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
                <input className="button mt-20" type="submit" value="Add Transaction"/>
            </form>
        </div>
    )
}

const mapDispatchToProps = dispatchEvent => {
    return {
        addNewTransaction : (transactionInfo) => {
            Axios.post(`${config.get('backend_url_users')}transaction`, transactionInfo)
            .then((res)=> {
                toast.success(res.data.message, {position: toast.POSITION.TOP_RIGHT, autoClose: 2000})
            })
            .catch((err)=> {
                toast.error(err.response.data.message, {position: toast.POSITION.TOP_RIGHT, autoClose: 2000})
            })
            dispatchEvent(addNewTransaction(transactionInfo))
        }
    }
}

export default connect(null,mapDispatchToProps)(Transaction)