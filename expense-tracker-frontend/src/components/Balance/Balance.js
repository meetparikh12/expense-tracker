import React, { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './Balance.css'
import { connect } from 'react-redux'
import { getBalanceInfo } from '../../actions/actions'
function Balance({getBalanceInfo, transactionInfo, incomeBalance, expenseBalance}) {
    const [income, setIncome] = useState(0)
    const [expense, setExpense] = useState(0)
    const [totalBalance, setTotalBalance] = useState('')
    
    useEffect(()=> {
        getBalanceInfo();
    }, [getBalanceInfo, transactionInfo])

    useEffect(() => {
        console.log(true)
        console.log(incomeBalance.length, expenseBalance.length)
        let incomeSum=0,expenseSum=0;
        if(incomeBalance.length===0 && expenseBalance.length===0){
            setIncome(0)
            setExpense(0)
        } else if(incomeBalance.length>0 && expenseBalance.length===0){
            incomeSum = incomeBalance.reduce((acc,cur)=> acc+cur)
            setIncome(incomeSum)
        } else if(expenseBalance.length>0 && incomeBalance.length===0){
            expenseSum = expenseBalance.reduce((acc,cur)=> acc+cur)
            setExpense(Math.abs(expenseSum))
        }else {
            incomeSum = incomeBalance.reduce((acc, cur) => acc + cur)
            setIncome(incomeSum)
            expenseSum = expenseBalance.reduce((acc, cur) => acc + cur)
            setExpense(Math.abs(expenseSum))
        }
        setTotalBalance(income - expense)
    }, [incomeBalance, expenseBalance, income, expense])

    return (
        <div className="balance mt-4 text-white">
            <h6 className="primary_heading text-secondary font-weight-light">Your Balance</h6>
            <div className="current_balance font-weight-light">${totalBalance}.00</div>
            <div className="balance_info row">
                <div className="income text-dark text-uppercase text-center col-6 col-6">
                    <h6 className="font-weight-light">Income</h6>
                    <div className="font-weight-light income_balance">${income}.00</div>
                </div>
                <div className="expense text-dark text-uppercase text-center col-6 col-6">
                    <h6 className="font-weight-light">Expense</h6>
                    <div className="font-weight-light expense_balance">${expense}.00</div>
                </div>
            </div>
        </div>
    )
}
const mapStateToProps = state => {
    return {
        transactionInfo: state.transaction.transactionInfo,
        incomeBalance: state.transaction.incomeBalance,
        expenseBalance: state.transaction.expenseBalance
    }
}
const mapDispatchToProps = dispatchEvent => {
    return {
        getBalanceInfo: () => dispatchEvent(getBalanceInfo())
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Balance)