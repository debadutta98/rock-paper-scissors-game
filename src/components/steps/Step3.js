import React, { useContext, useEffect, useState} from "react";
import { context } from "../../context";
import Circle from "../Circle";
const game = ["paper", "scissors", "rock"];
const getStatus = function (userPick, machinePick) {
        if (userPick === game[0]) {
            if (machinePick === game[2]) {
                return true;
            } else {
                return false;
            }
        } else if (userPick === game[1]) {
            if (machinePick === game[0]) {

                return true;
            } else {
                return false;
            }
        } else {
            if (machinePick === game[1]) {

                return true;
            } else {
                return false;
            }
        }
};
const Step3=(props)=>{
    const ctx=useContext(context);
    const [userWin,setUserWinStatus]=useState(false);
    useEffect(()=>{
        if (ctx.data?.userPick && ctx.data?.machinePick){
            const userWinningStatus = getStatus(ctx.data?.userPick, ctx.data?.machinePick);
            setUserWinStatus(userWinningStatus);
            userWinningStatus && ctx.updateScore();
        }
    },[ctx.data?.userPick,ctx.data?.machinePick]);
    return <div className={`container-step3 ${props.className}`}>
        <div className="container-step3__col">
            <span>You picked</span>
            <Circle name={ctx.data?.userPick} className={userWin?"win":""}/>
        </div>
        <div className="container-step3__col-mid">
            <span>You {!userWin ? "lose" : "win"}</span>
            <button onClick={()=>{
                ctx.updateNext({});
            }}>Play Again</button>
        </div>
        <div className="container-step3__col">
            <span>the house picked</span>
            <Circle name={ctx.data?.machinePick} className={!userWin ? "win" : ""} />
        </div>
    </div>;
};
export default React.memo(Step3);
