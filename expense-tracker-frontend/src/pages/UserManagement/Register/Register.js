import React, { useState, useEffect } from 'react'
import './Register.css'
import Axios from 'axios'
import {toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
toast.configure()

function Register(props) {
    const [email,setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [name, setUsername] = useState('')
    const [isBtnDisabled, setIsBtnDisabled] = useState(false)

    useEffect(() => {
        if (props.loggedInUser.userId) {
            props.history.push('/')
        }
    }, [props.loggedInUser.userId])

    const formSubmitHandler = (event) => {
        setIsBtnDisabled(true)
        event.preventDefault();
        const newUser = {email,password,confirmPassword,name}
        Axios.post('http://localhost:5000/api/users/register', newUser)
        .then((res)=> {
            toast.success(res.data.message, {position: toast.POSITION.TOP_RIGHT, autoClose: 2000})
            props.history.push('/login')
        })
        .catch((err)=> {
            setIsBtnDisabled(false)
            toast.error(err.response.data.message[0].msg || err.response.data.message, 
            {position: toast.POSITION.TOP_RIGHT, autoClose: 2000})
        })
    }
    return (
        <div className="register">
            <div className="OuterRegisterContainer">
                <div className="InnerRegisterContainer">
                    <h1 className="register_heading text-center">Register</h1>
                    <form onSubmit={formSubmitHandler}>
                        <div className="mb-4">
                            <h5 className="text-white font-weight-light">Name :</h5>
                            <input placeholder="Enter Name" required className="fieldInput mt-2" value={name} type="text" onChange={(event)=> setUsername(event.target.value)}/>
                        </div>
                        <div className="mb-4">
                            <h5 className="text-white font-weight-light">Email :</h5>
                            <input placeholder="Enter Email" required className="fieldInput mt-2" value={email} type="email" onChange={(event)=> setEmail(event.target.value)}/>
                        </div>
                        <div className="mb-4">
                            <h5 className="text-white font-weight-light">Password :</h5>
                            <input placeholder="Enter Password" required className="fieldInput mt-2" value={password} type="password" onChange={(event)=> setPassword(event.target.value)}/>
                        </div>
                        <div className="mb-2">
                            <h5 className="text-white font-weight-light">Confirm Password :</h5>
                            <input placeholder="Enter Confirm Password" required className="fieldInput mt-2" value={confirmPassword} type="password" onChange={(event)=> setConfirmPassword(event.target.value)}/>
                        </div>
                        <input disabled={isBtnDisabled} className="register-button mt-20" type="submit" value="SIGN UP"/>
                        <Link to="/login"><button disabled={isBtnDisabled} className="login-button mt-20" type="button">SIGN IN</button></Link>
                    </form>
                </div>
            </div>
        </div>
    )
}
const mapStateToProps = state => {
    return {
        loggedInUser: state.user.userInfo
    }
}
export default connect(mapStateToProps, null)(Register);