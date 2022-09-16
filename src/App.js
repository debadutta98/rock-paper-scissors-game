import { useCallback, useState } from "react";
import Main from "./components/Main";
import RulesModal from "./components/RulesModal";
import Scoreborad from "./components/Scoreboard";

function App() {
  const [toggleModal,setToggleModal]=useState(false);
  const onClickRules=useCallback(()=>{
    setToggleModal(!toggleModal);
  },[toggleModal]);
  return (<>
    {toggleModal && <RulesModal onCloseModal={onClickRules}/>}
    <Scoreborad/>
    <Main/>
    <footer>
      <button className="rules-button" onClick={onClickRules}>Rules</button>
    </footer>
  </>
  );
}

export default App;
