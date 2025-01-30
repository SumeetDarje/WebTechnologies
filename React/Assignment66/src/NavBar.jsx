import React, { useState } from "react";

function NavBar(props) {

  let { totalPrice } = props;
  let { cartCount } = props;
  let {message}=props;

  let {userView}=props;
  let {onlogout}=props;

  let {userName}=props;
  
  let [searchInput, setSearchInput] = useState("");

  function handleInputChange(e) {
    let value = e.target.value;
    setSearchInput(value);
    props.handleSearch(value);
  }

  function handleSignupBtn(){
    props.onLoginButtonClick();
  }
  
  function handleLoginBtn(){
    props.onLoginSuccess();
  }


  return (
    <>
      <div className="container-fluid bg-danger fixed-top">
        <div className="row justify-content-between align-items-center  ">
          <div className="col-1 mt-2 justify-content-end ">
            <img className="img-fluid" src="/images/shop_logo.jpg" alt="" />
          </div>
          <div className="col-7 text-center ">
          {/* <button className="btn bg-white" onClick={handleLoginBtn}>Login</button>{" "}
          <button className="btn bg-white" onClick={handleSignupBtn}>Sign Up</button> */}
            { userView =="products" || userView=="signupPage" || userView=="loginPage" ? (
              <>
            <button className="btn bg-white" onClick={handleLoginBtn}>Login</button>{" "}
            <button className="btn bg-white" onClick={handleSignupBtn}>Sign Up</button>
            </>
          ): userView =="admin" ? (
            <>
               <span className="text-white fw-bold me-3">Welcome, {userName} The Admin</span>
                <button className="btn bg-white" onClick={onlogout}>
                  Logout
                </button>
            </>
          ): userView =="user" ? (
            <>
               <span className="text-white fw-bold me-3">Welcome, {userName}</span>
                <button className="btn bg-white" onClick={onlogout}>
                  Logout
                </button>
            </>
            ):null}  
          </div>
          <div className=" mt-2 col-1  text-center  ">
            <button className="p-3 button1 cartCntRelative ">
              <i className="bi bi-cart"></i>{" "}
            <span className="cartCount ">{cartCount}</span>
            </button>
            <div>Rs. { totalPrice } </div>
          </div>
        </div>
        <div className=" text-center my-2 ">
          <input
            className="w-25 mb-2 p-1"
            type="search"
            placeholder="Search a product"
            value={searchInput}
            onChange={handleInputChange}
          />
        </div>
      <div className="text-white text-center ">{message}</div>
      </div>
    </>
  );
}

export default NavBar;
