import React, { useState } from 'react';
import Layout from '../containers/Layout';
export default function Login (){
    
    const [username,setUserName] = useState("")
    const [password,setPassword] = useState("")
    
    return <Layout>
    <h1>로그인 폼</h1>
    <form>
        <div>
        <label><b>Username</b></label>
        <input/><br/>
        <label><b>Password</b></label>
        <input/><br/>
        <button>Login</button><br/>
        <label><input/>Remember me</label>
        </div>
        <div>
            <button>Cancel</button><br/>
            <span>Forget<a>Password?</a></span>
        </div>
    </form>
    </Layout>
}
