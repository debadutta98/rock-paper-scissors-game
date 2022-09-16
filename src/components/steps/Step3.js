import React, { useContext } from "react";
import { context } from "../../context";
import Circle from "../Circle";

const Step3=(props)=>{
    const ctx=useContext(context);
    return <div className={`container-step3 ${props.className}`}>
        <div className="container-step3__col">
            <span>You picked</span>
                <Circle name="rock" className={"win"}/>
        </div>
        <div className="container-step3__col-mid">
            <span>You Win</span>
            <button onClick={()=>{
                ctx.updateNext();
            }}>Play Again</button>
        </div>
        <div className="container-step3__col">
            <span>the house picked</span>
            <Circle name="rock" />
        </div>
    </div>;
};
export default React.memo(Step3);
