import React, { useState } from "react";
import Layout from "../containers/Layout";
import {memberBmi} from '../api/index'


export default function Lotto(){

    return(<Layout>
        <form>
        <h1>로또 번호 추첨</h1>

        <div>
        
            <button>번호 추첨</button>
        </div>
        </form>
        <div></div>
        
        </Layout>

    )
}