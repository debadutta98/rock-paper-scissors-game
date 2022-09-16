import { useContext } from "react";
import { context } from "../context";

const Scoreborad = () => {
  const ctx = useContext(context);
  return (
    <header>
      <div className="score-card">
        <img
          src={require("../images/logo.svg").default}
          alt="rocke paper scissors"
        />
        <div className="score-card__score">
          <span className="score-card__score__title">Score</span>
          <span className="score-card__score__points">{ctx.score}</span>
        </div>
      </div>
    </header>
  );
};
export default Scoreborad;
