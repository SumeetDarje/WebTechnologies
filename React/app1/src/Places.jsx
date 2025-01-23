function PlacesInfo(props) {
    let {Place}=props;

    return( <>
        
        <div className="col-3 size ">
            <div className="text-lightblue">     
                {Place.name} 
                <img className="img-fluid"  src={`/images/${Place.image}`}/>
            </div>
            <div className="textjustify">
                {Place.info}
            </div>
        </div>
       
    </>
    )
}

export default PlacesInfo;

