import React from "react";

function CartBtn(props) {

    function handleCartListClick() {
        props.onCartListClick();
    }

return (
    <div className="text-center">
      Cart is Empty. <a role="button" className="text-primary" onClick={handleCartListClick}>Start</a> Shopping
    </div>
)
}

export default CartBtn
