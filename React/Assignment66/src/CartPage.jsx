import React from "react";

function CartPage(props) {
  let { userName } = props;
  let { cartCount } = props;
  let { cartItems } = props;

  function handleCartListClick() {
    props.onCartListClick();
  }

  function handleCartBack() {
    props.onCartBack();
  }

  function handleCartBtnClick(action , itemIndex) {
    // console.log("Action: ",action+" index: ",itemIndex);  
    props.onCartAddRemoveProduct( itemIndex ,action );
  }

  function handleShowInvoice(){
    props.onhandleShowInvoiceClick();
  }

  return (
    <>
      {userName == "" && cartCount == 0 && (
        <div className="text-center">
          Cart is Empty.{" "}
          <a
            role="button"
            className="text-primary"
            onClick={handleCartListClick}
          >
            Start
          </a>{" "}
          Shopping
        </div>
      )}

      {userName != "" && cartCount == 0 && (
        <div className="text-center">
          Welcome, {userName}! <br />
          Cart is Empty.{" "}
          <a
            role="button"
            className="text-primary"
            onClick={handleCartListClick}
          >
            Start
          </a>{" "}
          Shopping
        </div>
      )}

      {userName != "" && cartCount > 0 && (
        <div className="text-center justify-content-center align-items-center ">
          <div className="">
            <a role="button" className="text-primary" onClick={handleCartBack}>
              Back
            </a>{" "}
            to Shopping.
          </div>

          <div className="mt-3 mb-1">
            <a role="button" className="text-primary" onClick={handleShowInvoice}>
              Proceed
            </a>{" "}
            to Buy.
          </div>

          <div className="mt-2 w-50 m-auto">
            {cartItems.length > 0 &&
              cartItems.map((item, index) => (
                <div key={index} className=" row mt-2 cartBorder">
                
                  <div className="col-1 p-2 ">{index + 1}.</div>
                  <div className="col-3 p-2 text-start textBold ">
                    {item.name}
                  </div>
                  <div className="col-8 p-2 text-end ">
                    {item.discount>0 && (
                      <>Rs.
                      <span className="text-decoration-line-through"> {item.mrp}</span>
                      <span> {item.mrp-(item.mrp*item.discount)/100} </span>
                      </>
                    )}
                    {item.discount==0 && <span>Rs. {item.mrp} </span> }
                  </div>

                  <div className="row p-2 align-items-center text-center text-md-start">
                    <div className="col-4 col-md-2 mb-2">
                      <button
                        className="btn btn-danger btn-block"
                        onClick={() => handleCartBtnClick("-",index)}
                      >
                        -
                      </button>{" "}
                    </div>
                    <div className="col-4 col-md-2 mb-2">Qnty: {item.qty}</div>
                    <div className="col-4 col-md-2 mb-2">
                      <button
                        className="btn btn-danger "
                        onClick={() => handleCartBtnClick("+",index)}
                      >
                        +
                      </button>{" "}
                    </div>
                    <div className="col-12 col-md-6 mt-2 mt-md-0 text-md-end">Total Rs.{((item.mrp-(item.mrp*item.discount)/100)*item.qty).toFixed(2)}</div>
                  </div>

                </div>
              ))}
          </div>
        </div>
      )}
    </>
  );
}

export default CartPage;
