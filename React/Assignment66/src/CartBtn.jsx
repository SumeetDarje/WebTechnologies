import React from "react";
import LoginPage from "./LoginPage";

function CartBtn(props) {
  let { userName } = props;
  let { cartCount } = props;

  function handleCartListClick() {
    props.onCartListClick();
  }

  function handleCartBack(){
    props.onCartBack();
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
          <a role="button" className="text-primary" onClick={handleCartBack}>
              Proceed
            </a>{" "}
            to Buy.
          </div>

          <div className="mt-2 cartBorder w-50 m-auto">
            hello
          </div>
        </div>

      )}
    </>
  );
}

export default CartBtn;
