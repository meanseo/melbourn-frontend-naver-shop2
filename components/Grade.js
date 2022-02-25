import React, { useState } from "react";
import { memberGrade } from "../api";
import Layout from "../containers/Layout";

export default function Grade (){
        
    const [inputs, setInputs] = useState({})
    const [result, setResult] = useState('')
    const { name, kor, eng, math } = inputs;

    const handleChange = (e) => {
        e.preventDefault()
        const {value, name} = e.target;
        setInputs({...inputs, [name]: value})
    }

    const handleClick = (e) => {
        e.preventDefault()
        memberGrade({name, kor, eng, math}).then(res => setResult(res.data)).catch( err => console.log(`에러발생 : ${err}`))
    }


    return(<Layout>
        <form>
        <h1>성적표</h1>

        <div>
        <label><b>이름</b></label>
        <input type="text" name ="name" onChange={handleChange}/><br/>

        <label htmlFor=""><b>국어 점수</b></label>
        <input type="text" name="kor" onChange={handleChange}/><br/>

        <label htmlFor=""><b>영어 점수</b></label>
        <input type="text" name="eng" onChange={handleChange}/><br/>

        <label htmlFor=""><b>수학 점수</b></label>
        <input type="text" name="math" onChange={handleChange}/><br/>

        <button onClick={handleClick}>execute</button>
        
        </div>
        </form>
        <div> {result} </div>
        </Layout>

    )
}