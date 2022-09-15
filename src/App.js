import Main from "./components/Main";
import Scoreborad from "./components/Scoreboard";

function App() {
  return (<>
    <Scoreborad/>
    <Main/>
    <footer>
      <button className="rules-button">Rules</button>
    </footer>
  </>
  );
}

export default App;
