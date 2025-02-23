import NavBar from "./NavBar";
import CardList from "./CardList";
import { useEffect, useState } from "react";
import SignupPage from "./SignUpPage";
import LoginPage from "./LoginPage";
import AdminPage from "./AdminPage";
import axios from "axios";
import { BeatLoader } from "react-spinners";
import AdminProductFormSample from "./AdminProductForm";
import CartBtn from "./CartBtn";

function Assi66() {

  let [productList, setProductList] = useState([]);
  let [filteredProductList, setFilteredProductList] = useState([]);

  let [totalPrice, setTotalPrice] = useState(0);
  let [cartCount, setCartCount] = useState(0);

  let [message, setMessage] = useState("");
  let [adminView, setAdminView] = useState("");
  let [selectedProduct, setSelectedProduct] = useState("");
  let [loadFlag, setLoadFlag] = useState(false);

  // let [userView, setUserView] = useState("admin");
  // let [userView, setUserView] = useState("products");
  let [userView, setUserView] = useState("loader");

  let [userName, setUserName] = useState("");

  // useEffect(()=>{
  //   let loader=setTimeout(()=>{
  //     setLoadFlag(true);
  //   },1500);
  //   return ()=> clearTimeout(loader);
  // },[])

  function handleAddToCartBtn(selectedIndex, action) {
    console.log(selectedIndex, action);

    // let prList = productList.map((e, index) => {
    //   if (index == selectedIndex) {
    //     if (action == "add"){
    //       e.qty =1;
    //     } else if(action == "+"){
    //       e.qty++;
    //     }
    //     else if (action == "-" && e.qty > 0){
    //       e.qty --;
    //     }
    //     console.log(e.qty);
    //   }
    //   return e;
    // });

    let fprList = filteredProductList.map((e, index) => {
      if (index == selectedIndex) {
        if (action == "addToCart") {
          e.qty = 1;
          setCartCount(cartCount + 1);
        } else if (action == "+") {
          e.qty++;
          // setCartCount(cartCount+1);
        } else if (action == "-" && e.qty > 0) {
          e.qty--;
          if (e.qty == 0) {
            setCartCount(cartCount - 1);
          }
        }
        console.log(e.qty);
      }
      return e;
    });

    // setProductList(prList);
    setFilteredProductList(fprList);
    calTotalPrice();
  }

  function handleSearch(search) {
    let filterSearch = productList.filter((e) =>
      e.name.toLowerCase().includes(search.toLowerCase())
    );
    setFilteredProductList(filterSearch);
  }

  function calTotalPrice() {
    const total = productList.reduce(
      (sum, item) => sum + item.mrp * item.qty,
      0
    );
    setTotalPrice(total);
  }

  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    console.log("got the data");
    setLoadFlag(true);
    setTimeout(() => {
      setLoadFlag(false);
      setUserView("products");
    }, 1500);
    let response = await axios("http://localhost:3000/fruits");
    let fList = await response.data;
    // setLoadFlag(false);
    console.log("Loaded " + fList.length);
    setProductList(fList);
    setFilteredProductList(fList);
  }

  function handleLoginButtonClick() {
    setUserView("signupPage");
  }

  function handleLoginClick() {
    setUserView("loginPage");
  }

  function handleBackBtn() {
    setUserView("products");
  }

  function handleLoginSuccess() {
    setUserView("loginPage");
  }

  function handleLoginSubmit(status) {
    if (status == "products") {
      setUserView("products");
      // setUserName(name);
    }
    // if(status == "admin"){
    //   setUserView("admin");
    //   console.log("Admin Hello");

    // }
  }

  function handleAdminLogin(user) {
    setUserView("admin");
    console.log(user.name + " Admin ahe");
    setUserName(user.name);
  }

  function handleUserLogin(user) {
    setUserView("user");
    console.log(user.name + " User ahe me");
    setUserName(user.name);
  }

  function handleLogout() {
    setUserView("products");
    console.log("logout");
  }

  function handleEditButton(card) {
    console.log("Editing " + card.name);
    setAdminView("edit");
    setSelectedProduct(card);
    setUserView("form");
  }

  function handleAddProductBtn(){
    console.log("ADD new Product ");
    setAdminView("add");
    setUserView("form");
    
  }

  async function handleFormSubmit(updatedProduct) {
    if (adminView == "edit") {
      let updatedList = productList.map((p) =>
        p.id == updatedProduct.id ? updatedProduct : p
      );
      console.log("Edit Form Submit for " + updatedProduct.name);

      setFilteredProductList(updatedList);
      setProductList(updatedList);
    }
    else if(adminView=="add"){
      console.log("Add kara ");
      setProductList([...productList, updatedProduct]);
      setFilteredProductList([...filteredProductList, updatedProduct]);
      
    }
    setUserView("admin");
  }

  function handleProductListClick() {
    console.log("Product List Click ");
    setUserView("admin");
  }


  function handleDeleteButton(card) {
    // console.log("Delete "+card.id);

    let eleDelete = filteredProductList.filter(
      (product) => product.id != card.id
    );
    console.log(`Delete ${card.name}`);

    setFilteredProductList(eleDelete);
    setProductList(eleDelete);

    setMessage(`${card.name} fruit deleted successfully!`);

    setTimeout(() => setMessage(""), 4000);
  }

  function handleCartBtn(){
    setUserView("cart");
  }

  function handleCartListClick(){
    setUserView("products"); 
  }

  return (
    <>
      <NavBar
        handleSearch={handleSearch}
        totalPrice={totalPrice}
        cartCount={cartCount}
        onLoginButtonClick={handleLoginButtonClick}
        onLoginSuccess={handleLoginSuccess}
        message={message}
        userView={userView}
        onlogout={handleLogout}
        userName={userName}
        onAddProductBtnClick={handleAddProductBtn}
        onCartBtnClick={handleCartBtn}

      />
      <div className="container containerMargin">
        <div className="text-center">
          {loadFlag && <BeatLoader size={24} color={"red"} />}
        </div>

        {userView == "signupPage" && (
          <SignupPage
            onLoginButtonClick={handleLoginClick}
            onBackBtn={handleBackBtn}
            // userView={userView}
          />
        )}

        {userView == "loginPage" && (
          <LoginPage
            onLoginSubmit={handleLoginSubmit}
            onAdminLogin={handleAdminLogin}
            onUserLogin={handleUserLogin}
            onBackBtn={handleBackBtn}
          />
        )}

        {userView == "admin" && (
        <div className="container containerMargin1">
          <div className=" row mt-5 ">
            {filteredProductList.map((e, i) => (
              <AdminPage
                onEditBtn={handleEditButton}
                onDeleteBtn={handleDeleteButton}
                card={e}
                key={i}
                index={i}
              />
            ))}
          </div>
        </div>
        )}

        {userView == "form" && (
          <AdminProductFormSample
            adminView={adminView}
            product={selectedProduct}
            onProductEditFormSubmit={handleFormSubmit}
            onProductAddFormSubmit={handleFormSubmit}
            onProductListClick={handleProductListClick}
            // addToBackendProduct={addToBackendProduct} 
          />
        )}

        {userView == "products" && (
          <div className=" row mt-5 ">
            {filteredProductList.map((e, i) => (
              <CardList
                onClickBtn={handleAddToCartBtn}
                totalPrice={e.mrp * e.qty}
                card={e}
                key={i}
                index={i}
                userView={userView}
              />             
            ))}
          </div>
        )}

        {userView == "user" && (
          <div className=" row mt-5 ">
            {filteredProductList.map((e, i) => (
              <CardList
                onClickBtn={handleAddToCartBtn}
                totalPrice={e.mrp * e.qty}
                card={e}
                key={i}
                index={i}
                userView={userView}
                onCartListClick={handleCartListClick}
              />
            ))}
          </div>
        )}

        {userView == "cart" && (
          <div className="row justify-content-between align-items-center">
            <CartBtn
               onCartListClick={handleCartListClick}
               
            />
          </div>
        )}
      </div>
    </>
  );
}

export default Assi66;
