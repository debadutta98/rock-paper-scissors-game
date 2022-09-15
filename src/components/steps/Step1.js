import Circle from "../Circle";
const game = ["paper", "scissors", "rock"]
const Step1=(props)=>{
    console.log(props.className);
    return <div className={`container-step1 ${props.className}`}>
    {
        game.map((value,index)=>{
            return <Circle name={value} key={index} />;
        })
    }
</div>
};
export default Step1;