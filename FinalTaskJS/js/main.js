(function ($) {
  "use strict";

  // Spinner
  var spinner = function () {
    setTimeout(function () {
      if ($("#spinner").length > 0) {
        $("#spinner").removeClass("show");
      }
    }, 1);
  };
  spinner(0);

  // Fixed Navbar
  $(window).scroll(function () {
    if ($(window).width() < 992) {
      if ($(this).scrollTop() > 55) {
        $(".fixed-top").addClass("shadow");
      } else {
        $(".fixed-top").removeClass("shadow");
      }
    } else {
      if ($(this).scrollTop() > 55) {
        $(".fixed-top").addClass("shadow").css("top", -55);
      } else {
        $(".fixed-top").removeClass("shadow").css("top", 0);
      }
    }
  });

  // Back to top button
  $(window).scroll(function () {
    if ($(this).scrollTop() > 300) {
      $(".back-to-top").fadeIn("slow");
    } else {
      $(".back-to-top").fadeOut("slow");
    }
  });
  $(".back-to-top").click(function () {
    $("html, body").animate({ scrollTop: 0 }, 1500, "easeInOutExpo");
    return false;
  });

  // Testimonial carousel
  $(".testimonial-carousel").owlCarousel({
    autoplay: true,
    smartSpeed: 2000,
    center: false,
    dots: true,
    loop: true,
    margin: 25,
    nav: true,
    navText: [
      '<i class="bi bi-arrow-left"></i>',
      '<i class="bi bi-arrow-right"></i>',
    ],
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
      },
      576: {
        items: 1,
      },
      768: {
        items: 1,
      },
      992: {
        items: 2,
      },
      1200: {
        items: 2,
      },
    },
  });

  // vegetable carousel
  $(".vegetable-carousel").owlCarousel({
    autoplay: true,
    smartSpeed: 1500,
    center: false,
    dots: true,
    loop: true,
    margin: 25,
    nav: true,
    navText: [
      '<i class="bi bi-arrow-left"></i>',
      '<i class="bi bi-arrow-right"></i>',
    ],
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
      },
      576: {
        items: 1,
      },
      768: {
        items: 2,
      },
      992: {
        items: 3,
      },
      1200: {
        items: 4,
      },
    },
  });

  // Modal Video
  $(document).ready(function () {
    var $videoSrc;
    $(".btn-play").click(function () {
      $videoSrc = $(this).data("src");
    });
    console.log($videoSrc);

    $("#videoModal").on("shown.bs.modal", function (e) {
      $("#video").attr(
        "src",
        $videoSrc + "?autoplay=1&amp;modestbranding=1&amp;showinfo=0"
      );
    });

    $("#videoModal").on("hide.bs.modal", function (e) {
      $("#video").attr("src", $videoSrc);
    });
  });

  // Product Quantity
  $(".quantity button").on("click", function () {
    var button = $(this);
    var oldValue = button.parent().parent().find("input").val();
    if (button.hasClass("btn-plus")) {
      var newVal = parseFloat(oldValue) + 1;
    } else {
      if (oldValue > 0) {
        var newVal = parseFloat(oldValue) - 1;
      } else {
        newVal = 0;
      }
    }
    button.parent().parent().find("input").val(newVal);
  });
})(jQuery);

//=============================================

// btn-login btn-signup

let eleBtnLogin = document.querySelector(".btn-login");
let eleBtnSignup = document.querySelector(".btn-signup");
let eleBtnLogout = document.querySelector(".btn-logout");
let currentUser = window.localStorage.getItem("currentUser");
let eleContainerProducts = document.querySelector(".container-products");
let productList;
let filteredProductList;
let itemsQty = 0;
getDataFromServer();
let loginStatus;
// let loginStatus = "noLogIn";
if (currentUser == null) {
  loginStatus = "noLogIn";
} else {
  currentUser = JSON.parse(currentUser);
  if (currentUser.role == "admin") {
    loginStatus = "adminLoggedIn";
    changeState(currentUser);
  } else if (currentUser.role == "user") {
    loginStatus = "userLoggedIn";
    changeState(currentUser);
  }
}
// changeState();
eleBtnSignup.addEventListener("click", () => {
  if (loginStatus == "noLogIn") showSignupForm();
  else if (loginStatus == "userLoggedIn" || loginStatus == "adminLoggedIn") {
    loginStatus = "noLogIn";
    changeState();
  }
});
eleBtnLogin.addEventListener("click", () => {
  showLoginForm();
});
eleBtnLogout.addEventListener("click", () => {
  loginStatus = "noLogIn";
  window.localStorage.removeItem("currentUser");
  changeState();
});
let mode;
function showAddButton() {
  document.querySelector(
    ".container-btn-add"
  ).innerHTML = `<button class="btn btn-primary btn-add" type="button" data-bs-toggle="modal" data-bs-target="#exampleModal">Add a fruit</button>`;
  // handle event-listeners for add button
  addELToAddButton();
}
function removeAddButton() {
  document.querySelector(".container-btn-add").innerHTML = ``;
}
function addELToAddButton() {
  document.querySelector(".btn-add").addEventListener("click", () => {
    mode = "add";
    showFruitEditForm();
  });
}
function showSignupForm() {
  let html = `
    <div class="form-message text-center text-danger"> </div>
        <form  onsubmit="collectSignUpFormData(event)" method="post">
  <div class="row bg-primary align-items-center">
    <div class="col-4 my-2 text-white text-end" >Name:</div>
    <div class="col-6 my-2">
      <input type="text" name="name" id="form-name"  required />
    </div>
    <div class="col-4 my-2 text-white text-end" >Email-id:</div>
    <div class="col-6 my-2">
      <input type="Email" name="email" id="form-email"  required />
    </div>
    <div class="col-4 my-2 text-white text-end">Password:</div>
    <div class="col-6 my-2">
      <input type="Password" name="password" id="form-password"  required />
    </div>
    <div class="col-4 my-2 text-white text-end">Re-enter Password:</div>
    <div class="col-6 my-2">
      <input type="Password" name="confirmPassword" id="form-confirmPassword"  required />
    </div>
    <div class="col-12 my-2 text-end">
      <input type="submit" value="Ok" >
    <input type="reset" value="Clear" >
    </div>
  </div>
  </form>
  `;
  document.querySelector(".modal-body").innerHTML = html;
  document.querySelector(".modal-title").innerHTML = "Signup Form";
}
function showLoginForm() {
  let html = `
    <div class="form-message text-center text-danger"> </div>
        <form onsubmit="collectLoginFormData(event)">
  <div class="row bg-primary align-items-center">
    <div class="col-4 my-2 text-white text-end" >Email-id:</div>
    <div class="col-6 my-2">
      <input type="Email" name="email" id="form-email"  required />
    </div>
    <div class="col-4 my-2 text-white text-end">Password:</div>
    <div class="col-6 my-2">
      <input type="Password" name="password" id="form-password"  required />
    </div>
    <div class="col-12 my-2 text-end">
      <input type="submit" value="Ok">
      <input type="reset" value="Clear" >
    </div>
  </div>
  </form>
  `;
  document.querySelector(".modal-body").innerHTML = html;
  document.querySelector(".modal-title").innerHTML = "Login Form";
}
// showLoginForm
// collectSignUpFormData
function showFruitEditForm() {
  html = `
      <form onsubmit="collectFruitAddEditFormData(event)">
<div class="row bg-primary align-items-center">
  <div class="col-4 my-2 text-white text-end" >Name:</div>
  <div class="col-6 my-2">
    <input type="text" name="name" id="form-name"  required />
  </div>
  <div class="col-4 my-2 text-white text-end">Unit:</div>      
  <div class="col-6 my-2">
    <select id="form-unit" name="unit" >
    <option value="kg">kg</option>
    <option value="doz">doz</option>
    <option value="piece">piece</option>
    </select>
  </div>
  <div class="col-4 my-2 text-white text-end">MRP:</div>
  <div class="col-6 my-2">
    <input type="text" name="mrp" id="form-mrp" required />
  </div>
  <div class="col-4 my-2 text-white text-end">Discount (%)</div>
  <div class="col-6 my-2">
    <input type="text" name="discount" id="form-discount" required />
  </div>
  <div class="col-4 my-2 text-white text-end">Type:</div>
  <div class="col-6 my-2">
      <select id="form-type" name="type">
    <option value="Organic">Organic</option>
    <option value="Non-Organic">Non-Organic</option>
    </select>
  </div>            
  <div class="col-4 my-2 text-white text-end">In Stock?</div>
  <div class="col-6 my-2">
      <input type="radio" name="stock" id="form-stock-yes" value="yes"/> Yes
      <input type="radio" name="stock" id="form-stock-no" value="no"/> No
  </div> 
  <div class="col-12 my-2 text-end">
    <button type="submit" class="btn btn-secondary btn-add-modify">
      Add
    </button>
    <button type="reset" class="btn btn-secondary btn-clear">
      Clear
    </button>
  </div>
</div>
</form>
`;
  document.querySelector(".modal-body").innerHTML = html;
}

async function getDataFromServer() {
  let response = await fetch("http://localhost:3000/fruits");
  productList = await response.json();
  addFinalPrice();
  filteredProductList = productList;
  showProducts();
}

function doSort_a(key) {
  filteredProductList = productList.sort((a, b) => {
    if (a[key] > b[key]) return 1;
    else if (a[key] < b[key]) return -1;
    else return 0;
  });
}
function doSort_d(key) {
  filteredProductList = productList.sort((a, b) => {
    if (a[key] < b[key]) return 1;
    else if (a[key] > b[key]) return -1;
    else return 0;
  });
}
// doSort();
function addFinalPrice() {
  for (let i = 0; i < productList.length; i++) {
    productList[i].finalPrice =
      productList[i].mrp - (productList[i].mrp * productList[i].discount) / 100;
  }
}

function showProducts() {
  let html = "";
  for (let i = 0; i < filteredProductList.length; i++) {
    let product = filteredProductList[i];
    html += `
  <div class="col-md-6 col-lg-6 col-xl-4">
  <div class="rounded position-relative fruite-item">
    <div class="fruite-img">
      <img
        src="/fruitImages/${product.image}"
        class="img-fluid w-100 rounded-top"
        alt=""
      />
    </div>`;
    if (product.discount > 0) {
      html += `
      <div
      class="text-white bg-secondary px-3 py-1 rounded position-absolute"
      style="top: 10px; left: 10px"
    >
      ${product.discount}% discount
    </div>
    `;
    }
    html += `
    <div
      class="p-4 border border-secondary border-top-0 rounded-bottom"
    >
      <h4>${product.name}</h4>
     
      `;
    if (product.discount == 0) {
      html += `<p class="text-dark fs-5 fw-bold mb-0">Rs. ${product.mrp}/${product.unit}</p>
`;
    } else {
      html += `<p class="text-dark fs-5 fw-bold mb-0 ">Rs. <span class="text-decoration-line-through">${
        product.mrp
      }</span>  <span>${product.mrp - (product.mrp * product.discount) / 100}/${
        product.unit
      } </span> </p>
        `;
    }
    if (loginStatus == "userLoggedIn" || loginStatus == "noLogIn") {
      html += `<p class="text-dark fs-5 fw-bold mb-0 container-btn-addtocart 
      ${product.qty == 0 ? "d-block" : "d-none"} ">
      <button 
          href="#"
          class="btn border border-secondary rounded-pill px-3 text-primary btn-addtocart">
          <i
            class="fa fa-shopping-bag me-2 text-primary"
          ></i>Add to Cart</button></p>
          `;

      html += `
      <div class=" ${
        product.qty == 0 ? "d-none" : "d-block"
      } container-inc-dec-buttons">
        <div
        class="d-flex justify-content-between flex-lg-wrap   ">
        <p class="text-dark fs-5 fw-bold mb-0"> <button 
          href="#"
          class="btn border border-secondary rounded-pill px-3 text-primary btn-decrement"
          
          ><i
            class="fa fa-shopping-bag me-2 text-primary"
          ></i>-
          </button><p class="product-qty"></p> </p><p class="text-dark fs-5 fw-bold mb-0"><button 
        href="#"
        class="btn border border-secondary rounded-pill px-3 text-primary btn-increment"
        > <i
          class="fa fa-shopping-bag me-2 text-primary"
        ></i>+
        </button></p>  
      </div>
      <p class="total-amount text-center"> </p>
      </div>`;
    } //if
    else if (loginStatus == "adminLoggedIn") {
      html += `<p> <button
          href="#"
          class="btn border border-secondary rounded-pill px-3 text-primary btn-edit"
          type="button" data-bs-toggle="modal" data-bs-target="#exampleModal"
          id="${product.id}"
          ><i
            class="fa fa-edit me-2 text-primary"
          ></i>
          Edit</button> 
          <button
          href="#"
          class="btn border border-secondary rounded-pill px-3 text-primary btn-delete"
          id="${product.id}"
          ><i
            class="fa fa-trash me-2 text-primary"
          ></i>
          Delete </button></p>
          `;
    }
    html += `</div>
   
  </div>
</div>  
    `;
  } //for
  eleContainerProducts.innerHTML = html;
  addEL();
  showMessage();
  // console.log(html);
}
let selectedProduct, selectedProductIndex;
function addEL() {
  if (loginStatus == "adminLoggedIn") {
    // handle event-listeners for delete button
    document.querySelectorAll(".btn-delete").forEach((e, index) => {
      e.addEventListener("click", () => {
        // delete this product from database, use fetch function
        selectedProduct = productList.filter(
          (product, index) => e.id == product.id
        )[0];
        selectedProductIndex = index;
        let ans = window.confirm(
          "Do you really want to delete " + selectedProduct.name
        );
        if (ans) {
          deleteProduct();
        }
      });
    });
    // handle event-listeners for update button
    document.querySelectorAll(".btn-edit").forEach((e, index) => {
      e.addEventListener("click", () => {
        selectedProduct = filteredProductList.filter(
          (product, index) => e.id == product.id
        )[0];
        showFruitEditForm();
        showDataInFruitEditForm();
        mode = "edit";
      });
    });
  } //...adminLoggedIn
  else if (loginStatus == "userLoggedIn" || loginStatus == "noLogIn") {
    // document.querySelectorAll(".product-qty");
    document.querySelectorAll(".btn-addtocart").forEach((e, index) => {
      e.addEventListener("click", () => {
        itemsQty++;
        document.querySelector(".items-qty").innerHTML = itemsQty;

        document
          .querySelectorAll(".container-btn-addtocart")
          [index].classList.remove("d-block");
        document
          .querySelectorAll(".container-btn-addtocart")
          [index].classList.add("d-none");
        document
          .querySelectorAll(".container-inc-dec-buttons")
          [index].classList.remove("d-none");
        document
          .querySelectorAll(".container-inc-dec-buttons")
          [index].classList.add("d-block");
        productList[index].qty = 1;
        document.querySelectorAll(".product-qty")[index].innerHTML =
          productList[index].qty;
        document.querySelectorAll(".total-amount")[index].innerHTML =
          "Rs. " +
          (productList[index].qty * productList[index].finalPrice).toFixed(2);
      });
    });
    document.querySelectorAll(".btn-increment").forEach((e, index) => {
      e.addEventListener("click", () => {
        productList[index].qty++;
        document.querySelectorAll(".product-qty")[index].innerHTML =
          productList[index].qty;
        document.querySelectorAll(".total-amount")[index].innerHTML =
          "Rs. " +
          (productList[index].qty * productList[index].finalPrice).toFixed(2);
        //
      });
    });
    document.querySelectorAll(".btn-decrement").forEach((e, index) => {
      e.addEventListener("click", () => {
        if (productList[index].qty == 1) {
          productList[index].qty = 0;
          itemsQty--;
          document.querySelector(".items-qty").innerHTML = itemsQty;
          document
            .querySelectorAll(".container-btn-addtocart")
            [index].classList.remove("d-none");

          document
            .querySelectorAll(".container-btn-addtocart")
            [index].classList.add("d-block");
          document
            .querySelectorAll(".container-inc-dec-buttons")
            [index].classList.add("d-none");
          document
            .querySelectorAll(".container-inc-dec-buttons")
            [index].classList.remove("d-block");
        } else {
          productList[index].qty--;
        }

        document.querySelectorAll(".product-qty")[index].innerHTML =
          productList[index].qty;
      });
    });
  } //..userLoggedIn or noLogIn
}

function showDataInFruitEditForm() {
  document.getElementById("form-name").value = selectedProduct.name;
  document.getElementById("form-discount").value = selectedProduct.discount;
  document.getElementById("form-mrp").value = selectedProduct.mrp;
  document.getElementById("form-unit").value = selectedProduct.unit;
  document.getElementById("form-type").value = selectedProduct.type;
  if (selectedProduct.inStock) {
    document.getElementById("form-stock-yes").checked = true;
  } else {
    document.getElementById("form-stock-no").checked = true;
  }
  document.querySelector(".btn-add-modify").innerHTML = "Modify";
}
async function deleteProduct() {
  let response = await fetch(
    "http://localhost:3000/fruits/" + selectedProduct.id,
    {
      method: "DELETE",
    }
  );
  let data = await response.json();
  // update productList
  productList = productList.filter((e, index) => selectedProduct.id != e.id);
  if (productList.length == filteredProductList.length) {
    filteredProductList = productList;
  } else {
    filteredProductList = filteredProductList.filter(
      (e, index) => selectedProduct.id != e.id
    );
  }
  document.querySelector(".btn-close").click();
  showProducts();
  document.querySelector(".page-message").innerHTML =
    selectedProduct.name + " deleted...";
  window.setTimeout(() => {
    document.querySelector(".page-message").innerHTML = "";
  }, 3000);
}
function showMessage() {
  if (filteredProductList.length != productList.length) {
    document.querySelector(".message").innerHTML =
      "Showing " +
      filteredProductList.length +
      " of " +
      productList.length +
      " fruits";
  } else {
    document.querySelector(".message").innerHTML =
      "Showing all " + filteredProductList.length + " fruits";
  }
}

let eleInputSearch = document.querySelector(".search-product");
eleInputSearch.addEventListener("input", () => {
  console.log(eleInputSearch.value);
  filteredProductList = productList.filter((product, index) =>
    product.name.toLowerCase().startsWith(eleInputSearch.value.toLowerCase())
  );
  console.log(filteredProductList.length);
  showProducts();
});
let eleFilterRadioBtns = document.querySelectorAll(".filter-type");
eleFilterRadioBtns.forEach((e, index) => {
  e.addEventListener("click", () => {
    if (e.value == "Organic" || e.value == "Non-Organic") {
      filteredProductList = productList.filter(
        (product, index) => product.type == e.value
      );
    } else if (e.value == "Discounted") {
      filteredProductList = productList.filter(
        (product, index) => product.discount != 0
      );
    } else if (e.value == "All") {
      filteredProductList = productList;
    }
    showProducts();
  });
});
let eleSelectSorting = document.querySelector(".select-sorting");
eleSelectSorting.addEventListener("click", () => {
  eleFilterRadioBtns[0].checked = true;
  if (eleSelectSorting.value == "price_a") {
    doSort_a("finalPrice");
  } else if (eleSelectSorting.value == "price_d") {
    doSort_d("finalPrice");
  } else if (eleSelectSorting.value == "dis_a") {
    doSort_a("discount");
  } else if (eleSelectSorting.value == "dis_d") {
    doSort_d("discount");
  }
  showProducts();
});
function collectFruitAddEditFormData(event) {
  event.preventDefault();
  // get data from form
  let eleForm = document.querySelector("form");
  let formdata = new FormData(eleForm);
  // Let us build an object
  let p = {};
  for (data of formdata) {
    console.log(data[0] + "..." + data[1]);
    p[data[0]] = data[1];
  }
  if (mode == "edit") {
    p["image"] = selectedProduct.image;
    updateProduct(p);
  } else if (mode == "add") {
    p["image"] = "no.jpg";
    addProduct(p);
  }
}
function collectSignUpFormData(event) {
  // get data from form
  event.preventDefault();
  console.log(event);

  let eleForm = document.querySelector("form");
  let formdata = new FormData(eleForm);
  // Let us build an object
  let p = {};
  for (data of formdata) {
    console.log(data[0] + "..." + data[1]);
    p[data[0]] = data[1];
  }
  console.log(p);

  if (p.password != p.confirmPassword) {
    document.querySelector(".form-message").innerHTML =
      "Passwords do not match";
    window.setTimeout(() => {
      document.querySelector(".form-message").innerHTML = "";
    }, 3000);
  } else {
    isItRepeated(p);
  }
}
async function isItRepeated(p) {
  let response = await fetch("http://localhost:3000/user?email=" + p.email);
  let user = await response.json();
  console.log(user.length);
  if (user.length >= 1) {
    document.querySelector(".form-message").innerHTML =
      "Sorry.. This email-id is already registered";
    window.setTimeout(() => {
      document.querySelector(".form-message").innerHTML = "";
    }, 3000);
  } else {
    p["role"] = "user";
    addUser(p);
  }
}
function collectLoginFormData(event) {
  event.preventDefault();
  // get data from form
  let eleForm = document.querySelector("form");
  let formdata = new FormData(eleForm);
  // Let us build an object
  let p = {};
  for (data of formdata) {
    console.log(data[0] + "..." + data[1]);
    p[data[0]] = data[1];
  }
  checkUser(p);
}
async function checkUser(p) {
  // Get userlist
  let response = await fetch("http://localhost:3000/user");
  let userList = await response.json();
  let filteredUserList = userList.filter(
    (e, index) => e.email == p.email && e.password == p.password
  );
  if (filteredUserList.length == 1) {
    document.querySelector(".btn-close").click();
    document.querySelector(".page-message").innerHTML = "Login Success";
    window.setTimeout(() => {
      document.querySelector(".page-message").innerHTML = "";
    }, 3000);
    p = filteredUserList[0];
    if (p.role == "admin") {
      loginStatus = "adminLoggedIn";
    } else if (p.role == "user") {
      loginStatus = "userLoggedIn";
    }
    window.localStorage.setItem("currentUser", JSON.stringify(p));
    showProducts();
    changeState(p);
  } else {
    document.querySelector(".form-message").innerHTML = "Wrong Credentials";
  }
}
function changeState(p) {
  if (loginStatus == "userLoggedIn" || loginStatus == "adminLoggedIn") {
    document.querySelector(".btn-login").style.display = "none";
    document.querySelector(".btn-signup").style.display = "none";
    document.querySelector(".btn-logout").style.display = "inline";
    document.querySelector(".welcome-user").innerHTML = "Welcome " + p.name;
    document.querySelector(".shopping-cart").style.display =""
  }
  if (loginStatus == "adminLoggedIn") {
  }
  if (loginStatus == "userLoggedIn") {
    removeAddButton();
  } else if (loginStatus == "adminLoggedIn") {
  } else if (loginStatus == "noLogIn") {
    document.querySelector(".btn-login").style.display = "inline";
    document.querySelector(".btn-signup").style.display = "inline";
    document.querySelector(".btn-logout").style.display = "none";
    document.querySelector(".welcome-user").innerHTML = "";
  }
}
async function addUser(p) {
  // event.preventDefault();
  let response = await fetch("http://localhost:3000/user/", {
    method: "post",
    body: JSON.stringify(p),
    header: { "Content-Type": "application/json" },
  });
  let data = await response.json();
  document.querySelector(".page-message").innerHTML =
    "Sign-up done successfully.";
  window.setTimeout(() => {
    document.querySelector(".page-message").innerHTML = "";
  }, 3000);
  // document.getElementById("form-modal").style.display = "none";
  document.querySelector(".btn-close").click();
}
async function updateProduct(p) {
  let response = await fetch(
    "http://localhost:3000/fruits/" + selectedProduct.id,
    {
      method: "put",
      body: JSON.stringify(p),
      header: { "Content-Type": "application/json" },
    }
  );
  let data = await response.json();
  // update productList
  p.id = selectedProduct.id;
  productList = productList.map((e, index) => (p.id == e.id ? p : e));
  if (productList.length == filteredProductList.length) {
    filteredProductList = productList;
  } else {
    filteredProductList = filteredProductList.map((e, index) =>
      p.id == e.id ? p : e
    );
  }
  document.querySelector(".btn-close").click();
  showProducts();
}
async function addProduct(p) {
  let response = await fetch("http://localhost:3000/fruits/", {
    method: "post",
    body: JSON.stringify(p),
    header: { "Content-Type": "application/json" },
  });
  let data = await response.json();
  productList.push(data);
  filteredProductList = productList;
  showProducts();

  document.querySelector(".btn-close").click();
}
