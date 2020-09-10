import React, { useState } from 'react'
import './Login.css'
import { Link,useHistory } from 'react-router-dom'
import { auth } from './firebase'

const Login = () => {
    const history = useHistory()
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const signIn = (e)=>{
        e.preventDefault()
        auth.signInWithEmailAndPassword(email,password)
        .then(res=>{
            if(res){
                history.push('/')
            }
        }).catch(err=>{
            alert(err.message)

        })
    }
    const register = (e)=>{
        e.preventDefault()
        auth.createUserWithEmailAndPassword(email,password)
        .then(res=>{
            if(res){
                history.push('/')
            }
        }).catch(err=>{
            alert(err.message)
        })
    }
    return (
        <div className="login">
            <Link to="/">
                <img className="login_logo" alt="amazon" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"></img>
            </Link>
            <div className="login_container">
                <h1>Sign In</h1>
                <form>
                    <h5>Email</h5>
                    <input value={email} onChange={(val)=>setEmail(val.target.value)} type="text"></input>
                    
                    <h5>Password</h5>
                    <input value={password} onChange={(val)=>setPassword(val.target.value)} type="password"></input>

                    <button onClick={signIn} className="login_signInButton">Sign In</button>
                    
                </form>
                    <p>
                        By signing in you agree to the AMAZON CLONE Condition of Use Sale. Pleasae see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.
                    </p>
                    <button onClick={register} className="login_registerButton">Create your Amazon Account</button>
            </div>
        </div>
    )
}

export default Login
