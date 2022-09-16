import React, { useState } from "react";

export const context = React.createContext({
        score: 0,
        updateScore: function () { },
        next: 1,
        updateNext:function(){},
    });

const Provider = (props) => {   
    const [score,setScore]=useState(0);
    const [next,setNext]=useState("step1")
    const updateScore=(num)=>{
        if(num>0){
            setScore((prevScore) => (prevScore + 1));
        }
    };
    const updateNext=(nextStep)=>{
        setNext((prevPage)=>{
            if(prevPage===3){
                return 1;
            }else{
                return (prevPage+1);
            }
        });
    };
    return <context.Provider
        value={{
            updateScore,
            updateNext,
            score,
            next
        }}>
        {props.children}
    </context.Provider>;
}
export default Provider;