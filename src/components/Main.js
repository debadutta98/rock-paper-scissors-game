import Step1 from "./steps/Step1";
import Step2 from "./steps/Step2";

const Main=()=>{
    return <main>
        <Step1 className="hidden"/>
        <Step2/>
    </main>;
}
export default Main;