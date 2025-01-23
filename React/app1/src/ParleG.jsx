import { useState } from "react";

function ParleG(){
    
    let [product, setProduct] = useState({
        name: "Parle-G",
        image: "parleg",
        mrp: 10,
        qty: 0,
        total: 0,
    });
    
    function handleBtnClick(op){
        if(op=="+"){
          console.log("+");
          
          
        }else if(op=="-"){
          console.log("-");
          
        }
    }

    function handleAddToCartBtnClick(){
        let p={...product}
        p.qty++;
        p.total=p.qty*p.mrp
        console.log(p.qty);
        setProduct(p);
    }
    return(
        <>
      <div className="border border-danger border-4 p-4 container w-50">
        <div className="my-3">
          <img src={`/images/${product.image}.jpg`} alt="" />
        </div>
        <div className="name my-3">{product.name}</div>
        <div className="mrp my-3">Rs. {product.mrp}/-</div>
        
          {product.qty==0 && <div className="">
            <button
              className="btn btn-primary "
              id="-"
              onClick={handleAddToCartBtnClick}
            >
              Add to Cart
            </button>{" "}
          </div>}
              
        {product.qty!=0 &&  <div className="row">
            <div className="col-4">
              <button
                className="btn btn-primary btn-block"
                onClick={(e) => handleBtnClick("-")}
              >
                -
              </button>{" "}
            </div>
            <div className="col-4">Qnty: {product.qty}</div>
            <div className="col-4">
              <button
                className="btn btn-primary btn-block"
                id="+"
                onClick={(e) => handleBtnClick("+")}
              >
                +
              </button>{" "}
            </div>
            <div className="textMrp">{product.total}</div>
        </div>}
        </div>
    </>
  );

}

export default ParleG;