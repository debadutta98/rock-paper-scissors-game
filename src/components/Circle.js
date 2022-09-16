const Img = (props) => {
  switch (props.name) {
    case "paper":
      return (
        <img
          src={require("../images/icon-paper.svg").default}
          alt={props.name}
        />
      );
    case "rock":
      return (
        <img
          src={require("../images/icon-rock.svg").default}
          alt={props.name}
        />
      );
    case "scissors":
      return (
        <img
          src={require("../images/icon-scissors.svg").default}
          alt={props.name}
        />
      );
    case "lizard":
      return (
        <img
          src={require("../images/icon-lizard.svg").default}
          alt={props.name}
        />
      );
    case "spock":
      return (
        <img
          src={require("../images/icon-spock.svg").default}
          alt={props.name}
        />
      );
    default:
      return <></>;
  }
};
const Circle = (props) => {
  return (
      <div className={`${props.name} ${props.className || ""}`}>
      <div className={`${props.name}__game-component`}>
        <Img name={props.name} />
      </div>
    </div>
  );
};
export default Circle;
