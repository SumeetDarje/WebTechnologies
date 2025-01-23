function Btn(props) {
    
    // let player1 ="Virat";
    // let {playerName}=props;  
    
    // let {buttonName}=props;
    
    let {Student}=props;

    return <div className={Student.marks>40? "green":"red"}>
        {Student.name} {Student.marks} - {Student.marks>=40?"Passed":"Failed"}
        
        {/* Hello {playerName} */}
        {/* <button>{buttonName}</button>     */}
        
        
    </div>;
}

export default Btn;