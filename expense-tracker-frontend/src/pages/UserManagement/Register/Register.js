import React, { useState } from 'react'
import './Register.css'

export default function Register() {
    const [email,setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [username, setUsername] = useState('')

    return (
        <div className="register">
            <div className="OuterRegisterContainer">
                <div className="InnerRegisterContainer">
                    <h1 className="register_heading text-center">Register</h1>
                    <form>
                        <div className="mb-4">
                            <h5 className="text-white font-weight-light">Name :</h5>
                            <input placeholder="Enter Name" required className="fieldInput mt-2" value={username} type="text" onChange={(event)=> setUsername(event.target.value)}/>
                        </div>
                        <div className="mb-4">
                            <h5 className="text-white font-weight-light">Email :</h5>
                            <input placeholder="Enter Email" required className="fieldInput mt-2" value={email} type="text" onChange={(event)=> setEmail(event.target.value)}/>
                        </div>
                        <div className="mb-4">
                            <h5 className="text-white font-weight-light">Password :</h5>
                            <input placeholder="Enter Password" required className="fieldInput mt-2" value={password} type="text" onChange={(event)=> setPassword(event.target.value)}/>
                        </div>
                        <div className="mb-2">
                            <h5 className="text-white font-weight-light">Confirm Password :</h5>
                            <input placeholder="Enter Confirm Password" required className="fieldInput mt-2" value={confirmPassword} type="text" onChange={(event)=> setConfirmPassword(event.target.value)}/>
                        </div>
                        <input className="register-button mt-20" type="submit" value="SIGN UP"/>
                    </form>
                </div>
            </div>
        </div>
    )
}
