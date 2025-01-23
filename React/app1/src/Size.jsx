import { useState } from "react";

function Size(props) {
    
    // let [s,setS]=useState(0);
    // function handleClick(){
    //     if(event.target.id=="pos"){
    //         console.log("Pos");  
    //         setS(s+20);
    //     }else if(event.target.id=="neg"){
    //         setS(s-20);
    //     }
    // }
    
    // let [image,setImage]=useState("");
    // function handleBtnClick(e) {
    //     if(e.target.id=="india"){
    //         setImage("/images/india.jpg")   
    //     }else if(e.target.id=="usa"){
    //         setImage("/images/usa.jpg")   
    //     }
    // }

    let playerImg=["virat","surya","rohit","rahul","mahendra","hardik"]
    let [index,setIndex]=useState(0);
    let [img,setImage]=useState("/images/"+playerImg[0]+".jpg");

    function handleBtnImgClick(s) {
        let i=index;
        if(s=="+"){
            console.log(i);
            i++;
        }else if(s=="-"){
            i--;
            console.log(i);
        }
        setImage("/images/"+playerImg[i]+".jpg")
        setIndex(i);
    }


    return (
        <>

        <div className="text-center">
            <button className="btn btn-primary " onClick={()=>handleBtnImgClick("-")} disabled={index==0}>Previous Player
            </button>{" "}
            <button className="btn btn-primary" onClick={()=>handleBtnImgClick("+")} disabled={index==playerImg.length-1}>Next Player</button>
        </div>
        <div className="my-5">    
            <img src={img} alt="" />
        </div>

         {/* <div className="text-center">
                <button className="btn-dark " id="india" onClick={(e)=>handleBtnClick(e)}>India</button>{" "}<button className="btn-primary" id="usa" onClick={(e)=>handleBtnClick(e)}>USA</button>
        </div>
        <div className="my-5">    
            <img src={image} alt="" />
        </div> */}

        {/* <div className="text-center">
                <button className="btn-dark " id="pos" onClick={handleClick}>Increase Size</button>{" "}<button className="btn-primary" id="neg" onClick={handleClick}>Decrease Size</button>
        </div>
        <div>
            {"("+s+"px,"} {s+"px)"}
        </div> 
        <div className="mx-auto bg-danger my-3" style={{height:s+"px", width:s+"px"}}>
        </div> */}
        </>
    )

}

export default Size;