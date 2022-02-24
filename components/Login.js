import React, { useState } from 'react';
import Layout from '../containers/Layout';

export default function Login (){
    
    const [inputs, setInputs] = useState({})
    const {name, password} = inputs;

    const handleChange = (e) => {
        e.preventDefault()
        const {value, name} = e.target;
        setInputs({...inputs, [name]: value})
    }
    
    const handleClick = (e) =>{
        e.preventDefault()
        const loginRequest = {name, password}
        alert(`${JSON.stringify(loginRequest)}`)
    }

    return <Layout>
    <h1>로그인 폼</h1>
    <form>
        <div>
        <label><b>Username</b></label>
        <input type="text" name="name" onChange={handleChange}/><br/>
        
        <label><b>Password</b></label>
        <input type="" name="password" onChange={handleChange}/><br/>
        <button onClick={handleClick}>Login</button><br/>
        <label><input/>Remember me</label>
        </div>
        <div>
            <button>Cancel</button><br/>
            <span>Forget<a>Password?</a></span>
        </div>
    </form>
    </Layout>
}
