import React, { useState } from "react";
import Layout from "../containers/Layout";
import {memberBmi} from '../api/index'


export default function Bmi(){

    const [inputs, setInputs] = useState({})
    const [result, setResult] = useState('')
    const { name, weight, height } = inputs; // Object Destructuring


    const handleChange = (e) => {
        e.preventDefault()
        const {value, name} = e.target;
        setInputs({...inputs, [name]: value})
    }
    
    const handleClick = (e) => {
        e.preventDefault()
        memberBmi({name, height, weight}).then( res => setResult(res.data)).catch( err => console.log(`에러발생 : ${err}`))
    }

    return(<Layout>
        <form>
        <h1>BMI</h1>

        <div>
        <label><b>name</b></label>
        <input type="text" name ="name" onChange={handleChange} /><br/>

        <label htmlFor=""><b>Height</b></label>
        <input type="text" name="height" onChange={handleChange} /><br/>

        <label htmlFor=""><b>Weight</b></label>
        <input type="text" name="weight" onChange={handleChange} /><br/>
            <button onClick={handleClick}>BMI 체크</button>
        </div>
        </form>
        <div>{result}</div>
        
        </Layout>

    )
}
