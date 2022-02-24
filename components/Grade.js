import React, { useState } from "react";
import Layout from "../containers/Layout";

export default function Grade (){
        
    const [inputs, setInputs] = useState({})
    const { name, kor, eng, math } = inputs;

    const handleChange = (e) => {
        e.preventDefault()
        const {value, name} = e.target;
        setInputs({...inputs, [name]: value})
    }

    const handleClick = (e) => {
        e.preventDefault()
        const calcRequest = {name, kor, eng, math}
        alert(`사용자 이름: ${JSON.stringify(calcRequest)}`)
    }


    return(<Layout>
        <form>
        <h1>성적표</h1>

        <div>
        <label><b>이름</b></label>
        <input type="text" name ="name" onChange={handleChange}/><br/>

        <label htmlFor=""><b>국어 점수</b></label>
        <input type="text" name="kor" onChange={handleChange}/><br/>

        <label><b>영어 점수</b></label>
        <input type="" name="eng"/><br/>

        <label><b>수학 점수</b></label>
        <input type="" name="math"/><br/>

        <button onClick={handleClick}>execute</button>
        
        </div>
        </form>
        
        </Layout>

    )
}