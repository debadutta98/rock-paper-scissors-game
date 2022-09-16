import React from "react";
import ReactDOM from "react-dom";

const BackDrop=(props)=>{
return ReactDOM.createPortal(<div className="overlay-backdrop" onClick={props.onClickOverlay}>
</div>, document.getElementById("backdrop"));
};
const Modal=(props)=>{
    return ReactDOM.createPortal(
        <div className="modal">
            <div className="modal__header">
                <h2>Rules</h2>
                <div className="modal__header__img-container" onClick={props.onClickCloseOption}>
                <img src={require("../images/icon-close.svg").default} alt="close"/>
                </div>
            </div>
            <img src={require("../images/image-rules.svg").default} alt="rules"/>
        </div>, document.getElementById("modal"));
}
const RulesModal=(props)=>{
    return <>
        <BackDrop onClickOverlay={props.onCloseModal}/>
        <Modal onClickCloseOption={props.onCloseModal}/>
    </>;
};
export default React.memo(RulesModal);