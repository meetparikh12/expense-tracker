import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './Balance.css'
export default function Balance() {
    return (
        <div className="Balance mt-4 text-white">
            <h6 className="primary_heading text-secondary">Your Balance</h6>
            <div className="current_balance font-weight-light">$460.00</div>
            <div className="balance_info row">
                <div className="income text-dark text-center col-md-6">
                    <h6>Income</h6>
                    <div className="font-weight-light income_balance">$500.00</div>
                </div>
                <div className="expense text-dark text-center col-md-6">
                    <h6>Expense</h6>
                    <div className="font-weight-light expense_balance">$240.00</div>
                </div>
            </div>
        </div>
    )
}
