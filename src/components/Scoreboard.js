const Scoreborad=()=>{
    return <header><div className="score-card">
        <img src={require("../images/logo.svg").default} alt="rocke paper scissors"/>
        <div className="score-card__score">
            <span className="score-card__score__title">Score</span>
            <span className="score-card__score__points">12</span>
        </div>
    </div></header>;
};
export default Scoreborad;