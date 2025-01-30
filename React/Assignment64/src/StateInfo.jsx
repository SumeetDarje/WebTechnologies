
function StateInfo(props){

    let {state}=props;
    
    return(

        <>
            <div className="myBorder "> </div>
            <div className="textSize"> Capital of {state.state} is {state.capital}.</div>
            <div className="textSize"> Its population is {state.population}.</div>
        </>

    )
}

export default StateInfo;