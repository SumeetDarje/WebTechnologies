import StateBtn from "./StatesBtn";
import StateInfo from "./StateInfo";
import { useState } from "react";

function Assi64(){

    let stateList = [
        {
          state: "Maharashtra",
          capital: "Mumbai",
          population: "125.7 million",
        },
        {
          state: "Karnataka",
          capital: "Banglore",
          population: "61.1 million",
        },
        {
          state: "Rajsthan",
          capital: "Jaipur",
          population: "81.9 million",
        },
        {
          state: "Gujrat",
          capital: "Gandhinagar",
          population: "70.7 million",
        },
      ];

      let [selectedIndex,setSelectedIndex]=useState(-1);

      function handleBtnClick(selectedIndex){
        console.log(selectedIndex);
        
        setSelectedIndex(selectedIndex)

      }

    return(
        <>
            <div>{stateList.map((e,i)=>(
                <StateBtn onClickBtn={handleBtnClick} stateName={e.state} key={i} index={i} 
                selectedIndex={selectedIndex} />
                ))}
            </div>

            {selectedIndex!=-1 && <StateInfo state={stateList[selectedIndex]} />}
        
        </>
    )
}

export default Assi64;