import React, { useContext } from "react";
import { context } from "../../context";
import Circle from "../Circle";
const game = ["paper", "scissors", "rock"];
const Step1=(props)=>{
    const ctx=useContext(context);
    const onUsePick=(pick)=>{
        ctx.updateNext();
    };
    return <div className={`container-step1 ${props.className}`}>
    {
        game.map((value,index)=>{
            return <Circle name={value} key={index} onClick={onUsePick.bind(null,value)}/>;
        })
    }
</div>
};
export default React.memo(Step1);