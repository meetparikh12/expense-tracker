import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './Balance.css'
export default function Balance() {
    return (
        <div className="balance mt-4 text-white">
            <h6 className="primary_heading text-secondary font-weight-light">Your Balance</h6>
            <div className="current_balance font-weight-light">$460.00</div>
            <div className="balance_info row">
                <div className="income text-dark text-uppercase text-center col-6 col-6">
                    <h6 className="font-weight-light">Income</h6>
                    <div className="font-weight-light income_balance">$500.00</div>
                </div>
                <div className="expense text-dark text-uppercase text-center col-6 col-6">
                    <h6 className="font-weight-light">Expense</h6>
                    <div className="font-weight-light expense_balance">$240.00</div>
                </div>
            </div>
        </div>
    )
}
