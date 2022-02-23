import React, { useState } from "react";
import Layout from "../containers/Layout";

export default function Grade (){
        const [name,setName] = useState("")
        const [kor,setKor] = useState(0)
        const [eng,setEng] = useState(0)
        const [math,setMath] = useState(0)
        const res =()=>{
            let name = document.getElementById('name').value
            let kor = document.getElementById('kor').value
            let eng = document.getElementById('eng').value
            let math = document.getElementById('math').value
            setName(name)
            setKor(kor)
            setEng(eng)
            setMath(math)
        }

    return(<Layout>
        <h1>성적표</h1>
        <div>
        <label><b>이름</b></label>
        <input id="name"/><br/>
        <label><b>국어 점수</b></label>
        <input id="kor"/><br/>
        <label><b>영어 점수</b></label>
        <input id="eng"/><br/>
        <label><b>수학 점수</b></label>
        <input id="math"/><br/>
        <button onClick={()=>{res()}}>execute</button>
        <div>결과: {name} {kor} {eng} {math}</div>
        </div>
        
        </Layout>

    )
}