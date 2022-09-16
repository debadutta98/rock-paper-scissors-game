import Circle from "../Circle";

const Step3=()=>{
    return <div className="container-step3">
        <div className="container-step3__col">
            <span>You picked</span>
                <Circle name="rock"/>
        </div>
        <div className="container-step3__col-mid">
            <span>You Win</span>
            <button>Play Again</button>
        </div>
        <div className="container-step3__col">
            <span>the house picked</span>
            <Circle name="rock" />
        </div>
    </div>;
};
export default Step3;
