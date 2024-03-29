import React, { useState, useEffect } from 'react'
import './Login.css'
import Axios from 'axios'
import { toast } from 'react-toastify'
import jwt_decode from 'jwt-decode'
import setJwtToken from '../../../components/shared/SecurityUtils/setJwtToken'
import { connect } from 'react-redux'
import { setUserInfo } from '../../../actions/actions'
import { Link } from 'react-router-dom'
import Cookie from 'js-cookie'
import { store } from '../../../store/store'
import { SET_TRANSACTIONS } from '../../../actions/actionTypes'
import config from 'react-global-configuration'

function Login(props) {
    const [email,setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [isBtnDisabled, setIsBtnDisabled] = useState(false)

    useEffect(()=> {
        if(props.loggedInUser.userId){
            props.history.push('/')
        }
    }, [props.loggedInUser.userId])

    const formSubmitHandler = (event)=> {
        setIsBtnDisabled(true)
        event.preventDefault();
        const loginUser = {email,password}
        Axios.post(`${config.get('backend_url_users')}login`, loginUser)
        .then((res)=> {
            const {token} = res.data;
            const transactions = res.data.transactions;
            store.dispatch({
                type: SET_TRANSACTIONS,
                payload: transactions
            })
            Cookie.set("transaction", transactions);
            localStorage.setItem("jwt-token", token);
            setJwtToken(token);
            const decoded_token = jwt_decode(token);
            props.setUserInfo(decoded_token, props.history);
            toast.success('Login Successful', {position: toast.POSITION.TOP_RIGHT, autoClose: 2000})
        })
        .catch((err)=> {
            setIsBtnDisabled(false)
            toast.error(err.response.data.message, {position: toast.POSITION.TOP_RIGHT, autoClose: 2000})
        })
    }
    return (
        <div className="login">
            <div className="OuterLoginContainer">
                <div className="InnerLoginContainer">
                    <h1 className="login_heading text-center">Login</h1>
                    <form onSubmit={formSubmitHandler}>
                        <div className="mb-4">
                            <h5 className="text-white font-weight-light">Email :</h5>
                            <input placeholder="Enter Email" required className="form-control form-control" value={email} type="text" onChange={(event)=> setEmail(event.target.value)}/>
                        </div>
                        <div className="mb-2">
                            <h5 className="text-white font-weight-light">Password :</h5>
                            <input placeholder="Enter Password" required className="form-control form-control" value={password} type="password" onChange={(event)=> setPassword(event.target.value)}/>
                        </div>
                        <input disabled={isBtnDisabled} className="login-button mt-20" type="submit" value="SIGN IN"/>
                        <Link to="/register"><button disabled={isBtnDisabled} className="register-button mt-20" type="button">SIGN UP</button></Link>
                    </form>
                </div>
            </div>
        </div>
    )
}
Login.defaultProps = {
    loggedInUser : {}
}
const mapStateToProps = state => {
    return {
        loggedInUser: state.user.userInfo
    }
}
const mapDispatchToProps = dispatchEvent => {
    return {
        setUserInfo: (userInfo, history) => {
            dispatchEvent(setUserInfo(userInfo))
            history.push('/');
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)