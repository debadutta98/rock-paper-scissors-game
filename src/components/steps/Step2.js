import React, { useContext, useEffect, useState } from "react";
import { context } from "../../context";
import Circle from "../Circle";
const game = ["paper", "scissors", "rock"];
const Step2 = (props) => {
    const ctx = useContext(context);
    const [machinePick, setMachinePick] = useState("");
    useEffect(() => {
        if (ctx?.data?.userPick) {
            setTimeout(() => {
                const picks = game.filter(val => val !== ctx?.data?.userPick),
                    pick = picks[Math.round(Math.random())];
                setMachinePick(pick);
            }, 2000);
        }
    }, [ctx.data?.userPick]);
    useEffect(() => {
        if (machinePick) {
            setTimeout(() => {
                ctx.updateNext({ userPick: ctx.data.userPick, machinePick });
                setMachinePick("");
            }, 3000);
        }
    }, [machinePick, ctx]);
    return <div className={`container-step2 ${props.className}`}>
        <div className="container-step2__col">
            <span>You picked</span>
            <div className="placeholder">
                <div className="placeholder__img">
                </div>
                <Circle name={ctx?.data?.userPick} />
            </div>
        </div>
        <div className="container-step2__col">
            <span>the house picked</span>
            <div className="placeholder">
                <div className="placeholder__img">
                </div>
                <Circle name={machinePick} />
            </div>
        </div>
    </div>
}
export default React.memo(Step2);