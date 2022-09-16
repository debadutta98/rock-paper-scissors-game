import React from "react";
import Circle from "../Circle";

const Step2=(props)=>{
    return <div className={`container-step2 ${props.className}`}>
        <div className="container-step2__col">
            <span>You picked</span>
            <div className="placeholder">
                <div className="placeholder__img">
                </div>
                <Circle name="rock" />
            </div>
        </div>
        <div className="container-step2__col">
            <span>the house picked</span>
            <div className="placeholder">
                <div className="placeholder__img">
                </div>
                <Circle name="rock" />
            </div>
        </div>
    </div>
}
export default React.memo(Step2);