import React, { useState } from 'react'
import './Login.css'

export default function Login() {
    const [email,setEmail] = useState('')
    const [password, setPassword] = useState('')

    return (
        <div className="login">
            <div className="OuterLoginContainer">
                <div className="InnerLoginContainer">
                    <h1 className="login_heading text-center">Login</h1>
                    <form>
                        <div className="mb-4">
                            <h5 className="text-white font-weight-light">Email :</h5>
                            <input placeholder="Enter Email" required className="fieldInput mt-2" value={email} type="text" onChange={(event)=> setEmail(event.target.value)}/>
                        </div>
                        <div className="mb-2">
                            <h5 className="text-white font-weight-light">Password :</h5>
                            <input placeholder="Enter Password" required className="fieldInput mt-2" value={password} type="text" onChange={(event)=> setPassword(event.target.value)}/>
                        </div>
                        <input className="login-button mt-20" type="submit" value="SIGN IN"/>
                    </form>
                </div>
            </div>
        </div>
    )
}
