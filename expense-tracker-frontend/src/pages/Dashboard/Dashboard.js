import React, { useEffect } from 'react'
import './Dashboard.css'
import Balance from '../../components/Balance/Balance';
import Transaction from '../../components/Transaction/Transaction';
import History from '../../components/History/History';
import setJwtToken from '../../components/shared/SecurityUtils/setJwtToken';
import { store } from '../../store/store';
import { SET_USER_INFO, REMOVE_TRANSACTIONS } from '../../actions/actionTypes';
import Cookie from 'js-cookie';
import { connect } from 'react-redux';

function Dashboard(props) {

    useEffect(()=> {
        if(!props.loggedInUser.userId){
            props.history.push('/login')
        }
    }, [props.loggedInUser.userId])

    const logoutHandler = () => {
        localStorage.removeItem("jwt-token");
        setJwtToken(false);
        Cookie.remove("transaction");
        store.dispatch({
            type: SET_USER_INFO,
            payload: {}
        });    
        store.dispatch({
            type: REMOVE_TRANSACTIONS
        })
        props.history.push('/login')
    }
    
    return (
            <div className="OuterContainer pb-5">
                <div className="InnerContainer">
                    <h1 className="heading mt-4 text-center">Track Your Expense</h1>
                    <Balance/>
                    <History/>
                    <Transaction/>
                    <button type="button" onClick={logoutHandler} className="logout-button mt-20">Logout</button> 
                </div>
            </div>
    )
}
const mapStateToProps = state => {
    return {
        loggedInUser: state.user.userInfo
    }
}
export default connect(mapStateToProps, null)(Dashboard)