function NavBarSinger(props){

    function handleBtnCLick(name){
        props.onBtnClick(name);
    }

    return(
        <>
            <div className="text-center">
                <button className="btn btn-primary" onClick={()=>{handleBtnCLick("sonu")}}>Sonu Nigam</button>{" "}
                <button className="btn btn-primary" onClick={()=>{handleBtnCLick("shreya")}}>Shreya Ghoshal</button>{" "}
                <button className="btn btn-primary" onClick={()=>{handleBtnCLick("arjit")}}>Arjit Singh</button>
            </div>
        </>
    )
}

export default NavBarSinger;