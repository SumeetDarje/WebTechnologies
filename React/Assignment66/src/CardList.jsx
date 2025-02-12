function CardList(props) {
  let { card } = props;
  let { index } = props;
  let {userView} = props;

  function handleAddToCartBtn() {
    // console.log(card.inStock);

    props.onClickBtn(index,"addToCart");
  }

  function handleBtnClick(action){
    // console.log(action);
    props.onClickBtn(index,action);
    
  }

  // let totalPrice=card.qty*card.mrp;

  return (
    <> 
      <div className=" col-lg-3 col-sm-12 col-md-6  text-center p-3 mb-4 myBorder">
        <div>
          <img className="img-fluid" src={`/images/${card.image}`} alt="" />
        </div>
        {card.discount > 0 && (
          <div className="discount"> {card.discount} %Discount </div>
        )}
        <div>{card.name}</div>
        
        <div className="mt-2">Rs. 
          <span className="text-decoration-line-through">{card.discount==0 ? "": 
          // (card.mrp-(card.mrp*card.discount)/100)} 
        (card.mrp)} 
          </span>  {" "}
          {(card.mrp-(card.mrp*card.discount)/100)}
        </div>

        {card.qty == 0 && card.inStock == true && (
          <div>
            <button className="btn btn-danger w-100" onClick={handleAddToCartBtn}>
              {" "}
              Add To Cart
            </button>
          </div>
        )}
        {!card.inStock && (
          <div>
            <button className="btn btn-secondary w-100" >
              {" "}
              Out of Stock
            </button>
          </div>
        )}

        {card.qty != 0 && (
          <div className="row">
            <div className="col-4">
              <button
                className="btn btn-danger btn-block"
                onClick={() => handleBtnClick("-")}
              >
                -
              </button>{" "}
            </div>
            <div className="col-4">Qnty: {card.qty}</div>
            <div className="col-4">
              <button
                className="btn btn-danger "
                onClick={() => handleBtnClick("+")}
              >
                +
              </button>{" "}
            </div>
          </div>
        )}
        {card.qty!=0 && (
          <div className="">Rs.{props.totalPrice}</div>
        )}
      </div>
    </>
  );
}

export default CardList;
