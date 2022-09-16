import Step1 from "./steps/Step1";
import Step2 from "./steps/Step2";
import Step3 from "./steps/Step3";

const Main=()=>{
    return <main>
        <Step1 className="hidden"/>
        <Step2 className="hidden"/>
        <Step3/>
    </main>;
}
export default Main;