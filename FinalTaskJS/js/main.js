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

  //=======================

  let route = window.location.hash;
  
  if (route == "") route = "/";
  else {
    route = route.replace("#", "");
  }
  console.log(route);
  
  let selectedProduct;

  if(route=="admin"){
    addModal();
    addMoreItem();
  }

  function addMoreItem(){

    let html=` 
    <div class="mt-4 myborder text-center">
    <button type="submit" class="btn btn-secondary btn-add-modify" id="btn-add-modify">Add</button>
    </div>
    `
    document.querySelector(".addButton").innerHTML=html;
    addModal();
    // AddItem();
    document.querySelector("#btn-add-modify").addEventListener("click", (event)=> {
      collectFormData(event);
  });
  }

//   function AddItem(){
//     document.querySelectorAll(".AddMore").forEach((e)=>{
//       e.addEventListener(`click`,()=>{
//         console.log("Add More");
//         let html=`
// <form onsubmit="collectFormData(event)">
// <div class="row bg-primary align-items-center">
//   <div class="col-4 my-2 text-white text-end" >Name:</div>
//   <div class="col-6 my-2">
//     <input type="text" name="name" id="form-name"  required />
//   </div>
//   <div class="col-4 my-2 text-white text-end">Unit:</div>      
//   <div class="col-6 my-2">
//     <select id="form-unit" name="unit" >
//     <option value="kg">kg</option>
//     <option value="doz">doz</option>
//     <option value="piece">piece</option>
//     </select>
//   </div>
//   <div class="col-4 my-2 text-white text-end">MRP:</div>
//   <div class="col-6 my-2">
//     <input type="text" name="mrp" id="form-mrp" required />
//   </div>
//   <div class="col-4 my-2 text-white text-end">Discount (%)</div>
//   <div class="col-6 my-2">
//     <input type="text" name="discount" id="form-discount" required />
//   </div>
//   <div class="col-4 my-2 text-white text-end">Type:</div>
//   <div class="col-6 my-2">
//       <select id="form-type" name="type">
//     <option value="Organic">Organic</option>
//     <option value="Non-Organic">Non-Organic</option>
//     </select>
//   </div>            
//   <div class="col-4 my-2 text-white text-end">In Stock?</div>
//   <div class="col-6 my-2">
//       <input type="radio" name="stock" id="form-stock-yes" value="yes"/> Yes
//       <input type="radio" name="stock" id="form-stock-no" value="no"/> No
//   </div> 
//   <div class="col-12 my-2 text-end">
//     <button type="submit" class="btn btn-secondary btn-add-modify">
//       Add
//     </button>
//     <button type="reset" class="btn btn-secondary btn-clear">
//       Clear
//     </button>
//   </div>
// </div>
// </form>
//         `
//         document.querySelector("#formAdd").innerHTML=html;

//       })
//     })
//   }

  
  function addModal(){
    
    let html=`
    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel">Product Form</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">

<form onsubmit="collectFormData(event)">
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
    <button type="submit" class="btn btn-secondary btn-add-modify" id="btn-add-modify">
      Add
    </button>
    <button type="reset" class="btn btn-secondary btn-clear">
      Clear
    </button>
  </div>
</div>
</form>

      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
    </div>
    </div>
    `;
    document.querySelector("#form-modal").innerHTML=html;

    if(selectedProduct){
      document.querySelector("#btn-add-modify").innerHTML="Modify";
    }else{
      document.querySelector("#btn-add-modify").innerHTML="Add";
    }
    
    }

  let eleContainerProducts = document.querySelector(".container-products");
  let xhr = new XMLHttpRequest();
  getDataFromServer();
  let productList;
  let filteredProductList;
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
       
        <div
          class="d-flex justify-content-between flex-lg-wrap"
        >`;
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

      
      if(route=="/"){
      html += ` <a
            href="#"
            class="btn border border-secondary rounded-pill px-3 text-primary "
            ><i
              class="fa fa-shopping-bag me-2 text-primary"
            ></i>
            Add to cart</a
          >`
      }//if
      else if(route=="admin"){
      html += ` <p><button
      href="#"
      class="btn border border-secondary rounded-pill px-3 text-primary btn-edit"
      id = "${product.id}"
      type="button" data-bs-toggle="modal" data-bs-target="#exampleModal"
      ><i
      class="fa fa-edit me-2 text-primary"
      ></i>
      Edit</button> 
      
      <button
      href="#"
      class="btn border border-secondary rounded-pill px-3 text-primary btn-delete"
      id = "${product.id}"
      ><i
      class="fa fa-trash me-2 text-primary"
      ></i>
      Delete</button></p>`
      }
         html+=` 
        </div>
      </div>
    </div>
  </div>  
      `;
    } //for
    eleContainerProducts.innerHTML = html;
    addEL();
    showMessage();
    // console.log(html);
  }

  function addEL(){
    document.querySelectorAll(".btn-delete").forEach((e)=>{
      e.addEventListener("click",()=>{
        console.log("Delete .... "+e.id);
        //delete this product from database, use fetch function
        selectedProduct=productList.filter((product,index)=>e.id==product.id)[0];
        let ans = window.confirm(`Do you really want to delete ${selectedProduct.name}`);
        if(ans){
          deleteProduct(e.id);
        }
      })
    })

    document.querySelectorAll(".btn-edit").forEach((e)=>{
      e.addEventListener("click",()=>{
        console.log("Update .... "+e.id);
        //delete this product from database, use fetch function
        selectedProduct=productList.filter((product,index)=>e.id==product.id)[0];
        console.log(selectedProduct);
        showDataInform();
      })
    })

  }

  function showDataInform(){
    document.querySelector("#form-name").value=selectedProduct.name;
    document.querySelector("#form-mrp").value=selectedProduct.mrp;
    document.querySelector("#form-discount").value=selectedProduct.discount;
    document.querySelector("#form-unit").value=selectedProduct.unit;
    document.querySelector("#form-type").value=selectedProduct.type;
    if(selectedProduct.inStock){
      document.querySelector("#form-stock-yes").checked=true;
    }else{
      document.querySelector("#form-stock-no").checked=true;
    }
    document.querySelector(".btn-add-modify").innerHTML="Modify";

  }

  async function deleteProduct(id){
    await fetch("http://localhost:3000/fruits/"+id,{
      method:"DELETE"
    })
    let data= await response.json();
    console.log(data);
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

  function collectFormData(event){
    event.preventDefault();
    console.log("Yes form is getting submit");

    let confirmAdd = window.confirm("Are you sure you want to add this product?");
    if (!confirmAdd) {
        console.log("Product addition canceled.");
        return;
    }

    //get data from form
    let eleForm=document.querySelector("form");
    let formData=new FormData(eleForm);
    //let us build an object
    let p={};
    for(data of formData){
      console.log(data[0]+"..."+data[1]);
      p[data[0]]=data[1];
    }
    console.log(p);
    if(selectedProduct){
      p["image"]=selectedProduct.image;
      updateProduct(p);
    }else{
      p["image"]="Default.jpg";
      addProduct(p);
    }
  }
  async function updateProduct(p){
    let response = await fetch("http://localhost:3000/fruits/"+selectedProduct.id,{
    method:"put",
    body: JSON.stringify(p),
    header:{"Content-Type":"application/json"}
  });
  event.preventDefault();
  let data= await response.json();
  console.log(data);
  }

  // Add New Product

  async function addProduct(p) {
    let response=await fetch("http://localhost:3000/fruits",{
      method:"POST",
      body:JSON.stringify(p),
      headers:{"Content-Type":"application/json"}
    });
    let data=await response.json();
    console.log(data);
    getDataFromServer();
    selectedProduct=null;
    showProducts();
  }