import React, { useState } from "react";
export const context = React.createContext({
        score: 0,
        updateScore: function (num) {},
        next: 1,
        updateNext:function(data){},
        data:{},
    });
const Provider = (props) => {   
    const [score,setScore]=useState(0);
    const [next,setNext]=useState(1);
    const [data,setData]=useState({});
    const updateScore=()=>{
            setScore((prevScore) => (prevScore + 1));
    };
    const updateNext=(data)=>{
        setNext((prevPage)=>{
            if(prevPage===3){
                return 1;
            }else{
                return (prevPage+1);
            }
        });
        setData(data);
    }; 
    return <context.Provider
        value={{
            updateScore,
            updateNext,
            score,
            next,
            data,
        }}>
        {props.children}
    </context.Provider>;
}
export default Provider;