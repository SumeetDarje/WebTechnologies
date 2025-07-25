import NavBar from "./NavBar";
import CardList from "./CardList";
import { useEffect, useState } from "react";
import SignupPage from "./SignUpPage";
import LoginPage from "./LoginPage";
import AdminPage from "./AdminPage";
import axios from "axios";
import { BeatLoader } from "react-spinners";
import AdminProductFormSample from "./AdminProductForm";
import CartPage from "./CartPage";
import BillInvoice from "./BillInvoice";
//added by me for firebase auth
import { auth, provider } from "./firebase";
import {
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
} from "firebase/auth";

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

  let [cartItem, setCartItem] = useState([]);

  // useEffect(()=>{
  //   let loader=setTimeout(()=>{
  //     setLoadFlag(true);
  //   },1500);
  //   return ()=> clearTimeout(loader);
  // },[])
  //added by me for firebase auth
  const provider = new GoogleAuthProvider();
  // signInWithPopup(auth, provider)

  useEffect(() => {
    // let storedUser = localStorage.getItem("user");
    // if (storedUser) {
    //   let userData = JSON.parse(storedUser);
    //   if (userData && userData.role == "admin") {
    //     setUserView("admin");
    //     setUserName(userData.name);
    //   } else {
    //     setUserView("user");
    //     setUserName(userData.name);
    //   }
    // } else {
    //   setUserView("products");
    // }

    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const email = user.email;
        if (email == "sumeetdarje@gmail.com") {
          setUserView("admin");
        } else {
          setUserView("user");
        }
        setUserName(user.displayName);
      } else {
        setUserView("products");
        setUserName("");
      }
    });

    let savedCart = localStorage.getItem("cartData");
    if (savedCart) {
      let parsedCart = JSON.parse(savedCart);
      setCartItem(parsedCart);
      setCartCount(parsedCart.length);
      calTotalPrice(parsedCart);
    }

    let savedProduct = localStorage.getItem("productList");
    if (savedProduct) {
      let parsedProduct = JSON.parse(savedProduct);
      setProductList(parsedProduct);
      setFilteredProductList(parsedProduct);
    } else {
      getData();
    }

    // getData();
  }, []);

  function handleAddToCartBtn(selectedIndex, action) {
    console.log(selectedIndex, action);

    let updatedCart = [...cartItem];
    let updatedProductList = productList.map((e, index) => {
      if (filteredProductList[selectedIndex]?.id == e.id) {
        if (action == "addToCart") {
          e.qty = 1;
          updatedCart.push(e);
        } else if (action == "+") {
          e.qty++;
        } else if (action == "-" && e.qty > 0) {
          e.qty--;
          if (e.qty == 0) {
            updatedCart = updatedCart.filter((item) => item.id !== e.id);
          }
        }
        console.log(e.qty);
      }
      return e;
    });

    setCartItem(updatedCart);
    setCartCount(updatedCart.length);
    // setFilteredProductList(updatedProductList);
    setProductList(updatedProductList);
    calTotalPrice(updatedCart);
    updateCartLocalStorage(updatedCart);

    localStorage.setItem("productList", JSON.stringify(updatedProductList));
  }

  function handleCartProduct(selectedIndex, action) {
    let updatedCart = [...cartItem];
    let item = updatedCart[selectedIndex];

    if (item) {
      if (action == "+") {
        item.qty++;
      } else if (action == "-" && item.qty > 0) {
        item.qty--;

        if (item.qty == 0) {
          updatedCart = updatedCart.filter(
            (e, index) => index != selectedIndex
          );
          // updateCartLocalStorage(updatedCart);
        }
      }
    }
    setCartItem(updatedCart);
    setCartCount(updatedCart.length);
    calTotalPrice(updatedCart);
    updateCartLocalStorage(updatedCart);

    // localStorage.setItem("productList",JSON.stringify(fprList));

    let updatedProductList = productList.map((product) =>
      product.id === item?.id ? { ...product, qty: item?.qty || 0 } : product
    );

    setProductList(updatedProductList);
    setFilteredProductList(updatedProductList);

    localStorage.setItem("productList", JSON.stringify(updatedProductList));
  }

  function updateCartLocalStorage(updatedCart) {
    localStorage.setItem("cartData", JSON.stringify(updatedCart));
  }

  function calTotalPrice(cartData) {
    const total = cartData.reduce((sum, item) => {
      const mrp = Number(item.mrp);
      const discount = Number(item.discount);
      const qty = Number(item.qty);

      const discountedPrice = mrp - (mrp * discount) / 100;
      return sum + discountedPrice * qty;
    }, 0);
    setTotalPrice(parseFloat(total).toFixed(1));
  }

  function handleSearch(search) {
    let filterSearch = productList.filter((e) =>
      e.name.toLowerCase().includes(search.toLowerCase())
    );
    setFilteredProductList(filterSearch);
  }

  // useEffect(() => {

  // }, []);

  async function getData() {
    console.log("got the data");
    setLoadFlag(true);
    setTimeout(() => {
      setLoadFlag(false);
      // setUserView("products");
    }, 1500);
    let response = await axios("http://localhost:3000/fruits");
    let fList = await response.data;
    // setLoadFlag(false);
    console.log("Loaded " + fList.length);
    localStorage.setItem("productList", JSON.stringify(fList));
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
  // change here for google auth
  // function handleLoginSuccess() {
  //   setUserView("loginPage");
  // }

  function handleLoginUsingGoogleBtnClick() {
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        // IdP data available using getAdditionalUserInfo(result)
        // ...
        console.log(user);
        // const userData = {
        //   name: user.displayName,
        //   email: user.email,
        //   role: user.email === "sumeetdarje@gmail.com" ? "admin" : "user",
        // }

        //  localStorage.setItem("user", JSON.stringify(userData));
        //   setUserName(user.displayName);
        //   setUserView(userData.role);
        //   console.log("Logged in as:", userData.name);
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
  }

  function handleLoginSubmit(status) {
    if (status == "products") {
      setUserView("products");
      // setUserName(name);
    }
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
    // localStorage.removeItem("user");
    // auth.signOut();
    // localStorage.removeItem("cartData");
    // localStorage.removeItem("productList");
    // setUserView("products");
    // setUserName("");
    // setCartCount(0);
    // setTotalPrice(0);
    // setCartItem([]);
    // console.log("logout");
    auth.signOut();
    localStorage.removeItem("cartData");
    localStorage.removeItem("productList");
    setCartCount(0);
    setTotalPrice(0);
    setCartItem([]);
    console.log("Logged out from Firebase");
  }

  function handleEditButton(card) {
    console.log("Editing " + card.name);
    setAdminView("edit");
    setSelectedProduct(card);
    setUserView("form");
  }

  function handleAddProductBtn() {
    console.log("ADD new Product ");
    setAdminView("add");
    setUserView("form");
  }

  async function handleFormSubmit(updatedProduct) {
    let updatedList;

    if (adminView == "edit") {
      updatedList = productList.map((p) =>
        p.id == updatedProduct.id ? updatedProduct : p
      );
      console.log("Edit Form Submit for " + updatedProduct.name);

      // setFilteredProductList(updatedList);
      // setProductList(updatedList);
    } else if (adminView == "add") {
      console.log("Add kara ");
      updatedList = [...productList, updatedProduct];
      // setProductList([...productList, updatedProduct]);
      // setFilteredProductList([...filteredProductList, updatedProduct]);
      console.log("Added Product: ", updatedProduct.name);
    }
    localStorage.setItem("productList", JSON.stringify(updatedList));
    setProductList(updatedList);
    setFilteredProductList(updatedList);
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

    localStorage.setItem("productList", JSON.stringify(eleDelete));
    setFilteredProductList(eleDelete);
    setProductList(eleDelete);

    setMessage(`${card.name} fruit deleted successfully!`);

    setTimeout(() => setMessage(""), 4000);
  }

  function handleCartBtn() {
    if (userName == "" && cartCount == 0) {
      console.log("no login no item in cart");
      setUserView("cart");
    } else if (userName == "" && cartCount > 0) {
      console.log("no login item selected in cart");
      // setUserView("loginPage");
      setMessage("You need to Login first");
      setTimeout(() => {
        setMessage("");
      }, 4000);
    } else if (userName != "" && (cartCount > 0 || cartCount == 0)) {
      console.log("login item selected in cart or not selected in cart");
      setUserView("cart");
    }
  }

  function handleCartListClick() {
    if (userName != "") {
      setUserView("user");
    } else {
      setUserView("products");
    }
  }

  function handleCartBack() {
    setUserView("user");
  }

  function handleShowInvoice() {
    setUserView("invoice");
  }

  function handleBackBillInvoiceClick() {
    setUserView("cart");
  }

  function handleLogoImgClick() {
    if(!userName==""){
      setUserView("user");
    }else{  
      setUserView("products");
    }
  }

  return (
    <>
      <NavBar
        handleSearch={handleSearch}
        totalPrice={totalPrice}
        cartCount={cartCount}
        onLoginButtonClick={handleLoginButtonClick}
        onLoginUsingGoogleBtnClick={handleLoginUsingGoogleBtnClick}
        // onLoginSuccess={handleLoginSuccess}
        message={message}
        userView={userView}
        onlogout={handleLogout}
        userName={userName}
        onAddProductBtnClick={handleAddProductBtn}
        onCartBtnClick={handleCartBtn}
        onHandleLogoImgClick={handleLogoImgClick}
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
            userName={userName}
            cartCount={cartCount}
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

        {(userView == "products" || userView == "user") && (
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

        {userView == "cart" && (
          // <div className="row ">
          <div className="row justify-content-between align-items-center">
            <CartPage
              onCartAddRemoveProduct={handleCartProduct}
              cartItems={cartItem}
              onCartListClick={handleCartListClick}
              userName={userName}
              cartCount={cartCount}
              onCartBack={handleCartBack}
              onhandleShowInvoiceClick={handleShowInvoice}
            />
          </div>
        )}

        {userView == "invoice" && (
          <BillInvoice
            userName={userName}
            cartItems={cartItem}
            totalPrice={totalPrice}
            onhandleBackBillInvoiceClick={handleBackBillInvoiceClick}
          />
        )}
      </div>
    </>
  );
}

export default Assi66;
