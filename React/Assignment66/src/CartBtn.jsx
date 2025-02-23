import React from "react";

function CartBtn(props) {

    function handleCartListClick() {
        props.onCartListClick();
    }

return (
    <div className="text-center">
      Cart is Empty. <a className="" onClick={handleCartListClick}>Start</a> Shopping
      
    </div>
)
}

export default CartBtn
