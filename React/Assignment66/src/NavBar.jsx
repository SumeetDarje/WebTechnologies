import React, { useState, useEffect } from "react";

function NavBar(props) {
  let { totalPrice } = props;
  let { cartCount } = props;
  let { message } = props;

  let { userView } = props;
  let { onlogout } = props;

  let { userName } = props;

  let [searchInput, setSearchInput] = useState("");
  let [storedUserName, setStoredUserName] = useState("");
  let [storedUserView, setStoredUserView] = useState("");

  useEffect(() => {
    let storedUser = localStorage.getItem("user");
    if (storedUser) {
      let userData = JSON.parse(storedUser);
      if (userData) {
        setStoredUserName(userData.name);
        setStoredUserView(userData.role == "admin" ? "admin" : "user");
      }
    }
  }, []);

  function handleInputChange(e) {
    let value = e.target.value;
    setSearchInput(value);
    props.handleSearch(value);
  }

  function handleSignupBtn() {
    props.onLoginButtonClick();
  }

  function handleLoginUsingGoogleBtnClick() {
    props.onLoginUsingGoogleBtnClick();
  }

  function handleAddProductBtn() {
    props.onAddProductBtnClick();
  }

  function handleCartBtn() {
    props.onCartBtnClick();
  }

  function handleLogoImgClick(){
    props.onHandleLogoImgClick();
  }

  return (
    <>
      <div className="container-fluid bg-danger fixed-top p-2 shadow-sm">
        <div className="row justify-content-between align-items-center">
          
          <div className="col-3 d-flex justify-content-center">
            <img
              className="img-fluid"
              src="/images/shop_logo.jpg"
              alt="Shop Logo"
              style={{ maxWidth: "90px" }}
              onClick={handleLogoImgClick}
            />
          </div>

          {/* <div className="col-6 col-sm-6 text-center my-2 my-sm-0"> */}
          <div className="col-3 col-sm-4 text-center">
            {(userView == "products" ||
              userView == "signupPage" ||
              userView == "loginPage" ||
              userView == "loader" ||
              userView == "cart") &&
            userName == "" ? (
              <>
                <button className="btn bg-white " onClick={handleLoginUsingGoogleBtnClick}>
                  Login with Google
                </button>{" "}
                {/* <button className="btn bg-white" onClick={handleSignupBtn}>
                  Sign Up
                </button> */}
              </>
            ) : userView == "admin" ||
              storedUserView == "admin" ||
              userView == "form" ? (
              <>
                <span className="text-white fw-bold me-2 d-block d-sm-inline">
                  Welcome, {storedUserName || userName} The Admin
                </span>
                <button className="btn btn-light btn-sm mt-1 mt-sm-0" onClick={onlogout}>
                  Logout
                </button>
              </>
            ) : (userView == "user" ||
                storedUserView == "user" ||
                userView == "cart" ||
                userView == "invoice") &&
              userName != "" ? (
              <>
                <span className="text-white fw-bold me-2 d-block d-sm-inline">
                  Welcome, {storedUserName || userName}
                </span>
                <button className="btn btn-light btn-sm mt-1 mt-sm-0" onClick={onlogout}>
                  Logout
                </button>
              </>
            ) : null}
          </div>
          <div className=" col-3 col-sm-3 text-center mt-2 mt-sm-0 ">
            <button
              className="p-3 button1 cartCntRelative "
              onClick={handleCartBtn}
            >
              {/* <button className="p-3 button1 cartCntRelative "> */}
              <i className="bi bi-cart"></i>{" "}
              <span className="cartCount ">{cartCount}</span>
            </button>
            <div className="text-white" >Rs. {totalPrice} </div>
          </div>
        </div>

        <div className=" row justify-content-center align-items-center mt-2 ">
          <div className="d-flex justify-content-center ">
          <input
            // className="form-control form-control-sm bg-secondary "
            className="form-control form-control-sm bg-light "
            style={{maxWidth:"400px"}}
            type="search"
            placeholder="Search a product"
            value={searchInput}
            onChange={handleInputChange}
          />
          </div>
        </div>

        {(userView == "admin" || storedUserView == "admin") &&
          userName != "" && (
            <div className="text-center mb-2 mt-3">
              <button className="btn bg-white btn-sm" onClick={handleAddProductBtn}>
                Add Product
              </button>
            </div>
          )}

          {/* {(userName=="" && cartCount>0)&&(
            <div className="text-center text-light" >You need to Login first</div>
          )} */}

        <div className="text-white text-center ">{message}</div>
      </div>
    </>
  );
}

export default NavBar;
