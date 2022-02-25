import React, { useState } from 'react';
import { memberLogin } from '../api';
import Layout from '../containers/Layout';

export default function Login (){
    
    const [inputs, setInputs] = useState({})
    const [result, setResult] = useState('')
    const {id, password} = inputs;

    const handleChange = (e) => {
        e.preventDefault()
        const {value, name} = e.target;
        setInputs({...inputs, [name]: value})
    }
    
    const handleClick = (e) =>{
        e.preventDefault()
        memberLogin({id, password}).then(res=> setResult(res.data)).catch( err => console.log(`에러발생 : ${err}`))
    }

    return <Layout>
    <h1>로그인 폼</h1>
    <form>
        <div>
        <label><b>ID</b></label>
        <input type="text" name="id" onChange={handleChange}/><br/>
        
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
    <div>{result}</div>
    </Layout>
}
