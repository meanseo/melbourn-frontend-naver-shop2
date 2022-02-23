import React, { useState } from "react";
import Layout from "../containers/Layout";
export default function Calc (){

    const [num1, setNum1] = useState(0)
    const [opcode, setOpcode] = useState("")
    const [num2, setNum2] = useState(0)
    const [result, setResult] = useState(0)
    const sum = () => {
        let num1 = document.getElementById('num1').value
        console.log('숫자1: ' + num1)
        let num2 = document.getElementById('num2').value
        console.log('숫자2: ' + num2)
        setNum1(num1)
        setNum2(num2)
        setResult(Number(num1) + Number(num2))
        console.log("결과: " + result)
    }

    return(<Layout>
        <h1>계산기</h1>
        <form action="">
    
        <label><b>숫자 1</b></label>
        <input id ="num1" type=""/><br/>
    
        <label htmlFor=""><b>연산 기호</b></label>
        <select name="" id="">
            <option value="">+</option>
            <option value="">-</option>
            <option value="">*</option>
            <option value="">/</option>
            <option value="">%</option>
        </select>
        <br/>
        <label><b>숫자 2</b></label>
        <input id="num2" type=""/><br/>
        <button onClick={()=>{sum()}}>+ 실행</button>
        </form>
        <div> 결과:  </div>
    
        </Layout>

    ) 
}