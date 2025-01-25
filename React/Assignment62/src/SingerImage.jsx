function SingerImage(props){

    let {name}=props;
    return(
    <>
        <div>
            <img className="img-fluid w-50 h-50 mt-5" src={name} 
            alt="" />            
        </div>  
    </>
    )
}

export default SingerImage;