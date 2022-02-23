import React, { useState } from "react";
import Layout from "../containers/Layout";

export default function Bmi(){

    const [username, setUsername] = useState("")
    const [height, setHeight] = useState(0.0)
    const [weight, setWeight] = useState(0.0)
    const res = () => {
        let username = document.getElementById('username').value
        let height = document.getElementById('height').value
        let weight = document.getElementById('weight').value
        setUsername(username)
        setHeight(height)
        setWeight(weight)
    }
    

    return(<Layout>
        <h1>BMI</h1>
        <div>
        <label><b>Username</b></label>
        <input id="username" /><br/>
        <label><b>Height</b></label>
        <input id="height" /><br/>
        <label><b>Weight</b></label>
        <input id="weight" /><br/>
        <button onClick={()=>{res()}}>execute</button>
        <div>결과 : {username} {height} {weight}</div>
        </div>
        </Layout>

    )
}
