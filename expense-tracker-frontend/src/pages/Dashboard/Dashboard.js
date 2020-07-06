import React from 'react'
import './Dashboard.css'
import Balance from '../../components/Balance/Balance';
import Input from '../../components/Input/Input';
export default function Dashboard() {
    return (
        <div className="Dashboard">
            <div className="OuterContainer">
                <div className="InnerContainer">
                    <h1 className="heading mt-4 text-center">Track Your Expense</h1>
                    <Balance/>
                    <Input/>
                </div>
            </div>
        </div>
    )
}
