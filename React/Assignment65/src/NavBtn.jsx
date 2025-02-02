function NavBtn(props) {
    
    let {festivalName}=props;
    let {index}=props;

    function handleBtnClick(){
        console.log(festivalName);
        props.onClickBtn(index);
        // console.log(index);  
    }


    return(
        <>
            <button className="text-end btn btn-primary m-1" onClick={handleBtnClick} > {festivalName} </button>
        </>
    )

}

export default NavBtn;