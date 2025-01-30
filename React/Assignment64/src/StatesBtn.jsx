
function StateBtn(props){

    let {stateName}=props;
    let {index}=props;
    let {selectedIndex}=props;

    function handleBtnClick(){
        console.log(stateName)
        // console.log(index);
        
        props.onClickBtn(index);
    }

    return(

        <>
            <button className={"btn m-1 "+(selectedIndex==index ? " btn-primary" : " btn-danger")}   onClick={handleBtnClick} > {stateName} </button>
        </>

    )
}

export default StateBtn;