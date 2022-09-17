import React, { useContext } from "react";
import { context } from "../../context";
import Circle from "../Circle";
const game = ["paper", "scissors", "rock"];
const Step1=(props)=>{
    const ctx=useContext(context);
    const onUserPick=(pick)=>{
        ctx.updateNext({userPick:pick});
    };
    return <div className={`container-step1 ${props.className}`}>
    {
        game.map((value,index)=>{
            return <Circle name={value} key={index} onClick={onUserPick.bind(null,value)}/>;
        })
    }
</div>
};
export default React.memo(Step1);