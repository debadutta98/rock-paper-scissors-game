import React, { useContext, useReducer } from "react";
import { context } from "../context";
import Step1 from "./steps/Step1";
import Step2 from "./steps/Step2";
import Step3 from "./steps/Step3";
const Main=()=>{
    const ctx=useContext(context);
    
    return <main>
        <Step1 className={ctx.next===1?"show":"hidden"}/>
        <Step2 className={ctx.next===2?"show":"hidden"}/>
        <Step3 className={ctx.next === 3 ? "show" : "hidden"} />
    </main>;
}
export default React.memo(Main);