import Circle from "../Circle";

const Step2=()=>{
    return <div className="container-step2">
        <div className="container-step2__col">
            <span>You picked</span>
            <Circle name="rock"/>
        </div>
        <div className="container-step2__col">
            <span>the house picked</span>
            <Circle/>
        </div>
    </div>
}
export default Step2;