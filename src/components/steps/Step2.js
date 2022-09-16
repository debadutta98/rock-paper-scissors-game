import React, { useContext, useEffect, useState } from "react";
import { context } from "../../context";
import Circle from "../Circle";
const game = ["paper", "scissors", "rock"];
const Step2=(props)=>{
    const ctx=useContext(context);
    
    return <div className={`container-step2 ${props.className}`}>
        <div className="container-step2__col">
            <span>You picked</span>
            <div className="placeholder">
                <div className="placeholder__img">
                </div>
                <Circle name={ctx.userPick} />
            </div>
        </div>
        <div className="container-step2__col">
            <span>the house picked</span>
            <div className="placeholder">
                <div className="placeholder__img">
                </div>
                <Circle name={ctx.machinePick} />
            </div>
        </div>
    </div>
}
export default React.memo(Step2);