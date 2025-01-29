import { useState } from "react"
import BtnCal from "./BtnCal"
import TextSum from "./TextSum"



function Assi63(){
    let [score,setScore]=useState(0);
    function handleBtnClick(label){
        // console.log(label);
        setScore(score+label);
        
    }


    let num=[-5,-1,+1,+5]
    return(
        <>
            <div> {num.map((e,i)=>(
                <BtnCal onClickButton={handleBtnClick} label={e} key={i} score={score}/>
                ))} 
            </div>
            <TextSum score={score}/>
        </>
    )
}

export default Assi63;