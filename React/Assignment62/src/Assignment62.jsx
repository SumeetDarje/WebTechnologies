import { useState } from "react";
import NavBarSinger from "./NavBarSinger";
import SingerImage from "./SingerImage";

function Assignment62(){

    let [name,setName]=useState("")

    function handleBtnCLick(name){
        console.log("Clicked "+name);
        setName("/images/"+name+".jpg");
    }

    return(
        <>
            <NavBarSinger onBtnClick={handleBtnCLick} />
            <SingerImage name={name}/>
        </>
    )
}

export default Assignment62;