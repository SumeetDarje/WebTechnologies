function BtnCal(props) {
    
    
    let {label}=props;
    let {score}=props;
    function handleBtnClick(){
        console.log(label);
        
        props.onClickButton(label);
    }
    // console.log(label);
    
    return(
        <>
            <button disabled={score+label<0} className="btn btn-primary p-3 fontsize m-1" onClick={handleBtnClick}>{label}</button>
        </>
    )
}

export default BtnCal;