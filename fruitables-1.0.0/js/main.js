(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner(0);


    // Fixed Navbar
    $(window).scroll(function () {
        if ($(window).width() < 992) {
            if ($(this).scrollTop() > 55) {
                $('.fixed-top').addClass('shadow');
            } else {
                $('.fixed-top').removeClass('shadow');
            }
        } else {
            if ($(this).scrollTop() > 55) {
                $('.fixed-top').addClass('shadow').css('top', -55);
            } else {
                $('.fixed-top').removeClass('shadow').css('top', 0);
            }
        } 
    });
    
    
   // Back to top button
   $(window).scroll(function () {
    if ($(this).scrollTop() > 300) {
        $('.back-to-top').fadeIn('slow');
    } else {
        $('.back-to-top').fadeOut('slow');
    }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
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
        nav : true,
        navText : [
            '<i class="bi bi-arrow-left"></i>',
            '<i class="bi bi-arrow-right"></i>'
        ],
        responsiveClass: true,
        responsive: {
            0:{
                items:1
            },
            576:{
                items:1
            },
            768:{
                items:1
            },
            992:{
                items:2
            },
            1200:{
                items:2
            }
        }
    });


    // vegetable carousel
    $(".vegetable-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1500,
        center: false,
        dots: true,
        loop: true,
        margin: 25,
        nav : true,
        navText : [
            '<i class="bi bi-arrow-left"></i>',
            '<i class="bi bi-arrow-right"></i>'
        ],
        responsiveClass: true,
        responsive: {
            0:{
                items:1
            },
            576:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:3
            },
            1200:{
                items:4
            }
        }
    });


    // Modal Video
    $(document).ready(function () {
        var $videoSrc;
        $('.btn-play').click(function () {
            $videoSrc = $(this).data("src");
        });
        console.log($videoSrc);

        $('#videoModal').on('shown.bs.modal', function (e) {
            $("#video").attr('src', $videoSrc + "?autoplay=1&amp;modestbranding=1&amp;showinfo=0");
        })

        $('#videoModal').on('hide.bs.modal', function (e) {
            $("#video").attr('src', $videoSrc);
        })
    });



    // Product Quantity
    $('.quantity button').on('click', function () {
        var button = $(this);
        var oldValue = button.parent().parent().find('input').val();
        if (button.hasClass('btn-plus')) {
            var newVal = parseFloat(oldValue) + 1;
        } else {
            if (oldValue > 0) {
                var newVal = parseFloat(oldValue) - 1;
            } else {
                newVal = 0;
            }
        }
        button.parent().parent().find('input').val(newVal);
    });

})(jQuery);

// my js

// let productList = [
//     {
//       name: "Grapes",
//       image: "grapes.jpg",
//       unit: "kg",
//       mrp: 120,
//       discount: 10,
//       inStock: false,
//       qty: 0,
//       type: "Organic",
//     },
//     {
//       name: "Mango",
//       image: "mango.jpg",
//       unit: "doz",
//       mrp: 500,
//       discount: 8,
//       inStock: true,
//       qty: 0,
//       type: "Organic",
//     },
//     {
//       name: "Banana",
//       image: "banana.jpg",
//       unit: "doz",
//       mrp: 60,
//       discount: 0,
//       inStock: true,
//       qty: 0,
//       type: "Non-Organic",
//     },
//     {
//       name: "Apple",
//       image: "apple.jpg",
//       unit: "kg",
//       mrp: 180,
//       discount: 7,
//       inStock: true,
//       qty: 0,
//       type: "Non-Organic",
//     },
//     {
//       name: "Anjeer",
//       image: "anjeer.jpg",
//       unit: "kg",
//       mrp: 100,
//       discount: 0,
//       inStock: true,
//       qty: 0,
//       type: "Organic",
//     },
//     {
//       name: "Strawberry",
//       image: "strawberry.jpg",
//       unit: "kg",
//       mrp: 200,
//       discount: 20,
//       inStock: true,
//       qty: 0,
//       type: "Non-Organic",
//     },
//     {
//       name: "Papaya",
//       image: "papaya.jpg",
//       unit: "kg",
//       mrp: 50,
//       discount: 15,
//       inStock: true,
//       qty: 0,
//       type: "Organic",
//     },
//     {
//       name: "Cherry",
//       image: "cherry.jpg",
//       unit: "kg",
//       mrp: 300,
//       discount: 5,
//       inStock: true,
//       qty: 0,
//       type: "Non-Organic",
//     },
//     {
//       name: "Chikoo",
//       image: "chikoo.jpg",
//       unit: "kg",
//       mrp: 60,
//       discount: 5,
//       inStock: false,
//       qty: 0,
//       type: "Organic",
//     },
//     {
//       name: "Kiwi",
//       image: "kiwi.jpg",
//       unit: "piece",
//       mrp: 20,
//       discount: 0,
//       inStock: false,
//       qty: 0,
//       type: "Non-Organic",
//     },
//     {
//       name: "Orange",
//       image: "orange.jpg",
//       unit: "kg",
//       mrp: 200,
//       discount: 10,
//       inStock: true,
//       qty: 0,
//       type: "Non-Organic",
//     },
//     {
//       name: "Pear",
//       image: "pear.jpg",
//       unit: "kg",
//       mrp: 200,
//       discount: 7,
//       inStock: true,
//       qty: 0,
//       type: "Non-Organic",
//     },
//     {
//       name: "Pineapple",
//       image: "pineapple.jpg",
//       unit: "piece",
//       mrp: 100,
//       discount: 50,
//       inStock: true,
//       qty: 0,
//       type: "Non-Organic",
//     },
//     {
//       name: "Pomegranete",
//       image: "pomegranete.jpg",
//       unit: "kg",
//       mrp: 200,
//       discount: 5,
//       inStock: true,
//       qty: 0,
//       type: "Non-Organic",
//     },
//     {
//       name: "Sitaphal",
//       image: "sitaphal.jpg",
//       unit: "kg",
//       mrp: 100,
//       discount: 10,
//       inStock: true,
//       qty: 0,
//       type: "Organic",
//     },
//     {
//       name: "Watermelon",
//       image: "watermelon.jpg",
//       unit: "piece",
//       mrp: 80,
//       discount: 50,
//       inStock: true,
//       qty: 0,
//       type: "Organic",
//     },
//     {
//       name: "Sweetlime",
//       image: "sweetlime.jpg",
//       unit: "kg",
//       mrp: 200,
//       discount: 5,
//       inStock: true,
//       qty: 0,
//       type: "Non-Organic",
//     },
//     {
//       name: "Peach",
//       image: "peach.jpg",
//       unit: "kg",
//       mrp: 200,
//       discount: 10,
//       inStock: false,
//       qty: 0,
//       type: "Non-Organic",
//     },
//     {
//       name: "Dragon",
//       image: "dragon.jpg",
//       unit: "piece",
//       mrp: 60,
//       discount: 0,
//       inStock: true,
//       qty: 0,
//       type: "Non-Organic",
//     },
//   ];

let fruits;
let productList;

let xhr=new XMLHttpRequest();
function getDataFromServer(method,url,callbackSuccess,callbackError){
    xhr.open(method,url);
    xhr.send();
    xhr.addEventListener("readystatechange",()=>{
        if(xhr.readyState==4 && xhr.status==200){
            callbackSuccess(JSON.parse(xhr.responseText));
        }
        else if(xhr.readyState==4 && xhr.status==404){
            callbackError("Error");
        }
    })
}

getDataFromServer("get","http://localhost:3000/fruits",(response)=>{
    fruits=response;
    productList=fruits;
    display(fruits);
    // console.log(fruits);
    
},(s)=>{
    document.querySelector(".error").innerHTML="Error!";
});


let elemyCard=document.querySelector(".myCard");
let searchProductList=[];

// display(productList);
function display(productList){
    let showMessage=document.querySelector(".message");
    if(productList.length==fruits.length){
    showMessage.innerHTML=`Showing all ${productList.length} products`;
    }else{
    showMessage.innerHTML=`Showing ${productList.length} of ${fruits.length} products`;
    }
let html="";
for (let i = 0; i < productList.length; i++) {
    html+=`<div class="col-md-6 col-lg-6 col-xl-4 ">`;
    html+=`<div class="rounded position-relative fruite-item">`;
    html+=`<div class="fruite-img img-fluid"><img src="fruitimages/${productList[i].image}" class="img-fluid w-100 rounded-top" alt=""></div>`;
    if(productList[i].discount>0){
    html+=`<div class="text-white bg-secondary px-3 py-1 rounded position-absolute" style="top: 10px; left: 10px;">${productList[i].discount}% discount</div>`}
    html+=`<div class="p-4 border border-secondary border-top-0 rounded-bottom">
            <h4>${productList[i].name}</h4>
                <div class="d-flex justify-content-between flex-lg-wrap">
                    <p class="text-dark fs-5 fw-bold mb-0">${productList[i].mrp} / ${productList[i].unit}</p>
                    <a href="#" class="btn border border-secondary rounded-pill px-3 text-primary"><i class="fa fa-shopping-bag me-2 text-primary"></i> Add to cart</a>
                </div>
            </div>` 
    html+=`</div>
        </div>`
}
elemyCard.innerHTML=html;
// console.log(html);
}


// display(productList);

    let v=document.querySelector("#fruits");
    // console.log(v.value);
    v.addEventListener(`click`,(e,index)=>{
        if(v.value=="n"){
            display(productList);
        }
        else if(v.value=="plh"){
            let sa=productList.sort((a,b)=>a.mrp-b.mrp);
            // console.log(sa);
            display(sa);
            
        }
        else if(v.value=="phl"){
            let da=productList.sort((a,b)=>b.mrp-a.mrp);
            display(da);
        }
        else if(v.value=="dlh"){
            let ad=productList.sort((a,b)=>a.discount-b.discount);
            display(ad);
        }
        else if(v.value=="dhl"){
            let dd=productList.sort((a,b)=>b.discount-a.discount);
            display(dd);
        }

    })

let eleSearch=document.querySelector("#searchme");

eleSearch.addEventListener(`keyup`,()=>{
    // console.log("hello");
    
    let eleSearchValue=eleSearch.value;
    // console.log(productList.length);
    
    let searchProductList=productList.filter((e)=>(e.name.toLowerCase().startsWith(eleSearchValue.toLowerCase())));
    // console.log(eleSearchValue);
    // console.log(searchProductList); 
    // productList=searchProductList;
    display(searchProductList);
})

let eleFilterMe=document.querySelectorAll("input[type='radio']");

eleFilterMe.forEach((e)=>{
    e.addEventListener("click",()=>{
        let fruitValue=e.value;
        console.log(fruitValue);

        if(fruitValue=="All"){
            searchProductList=fruits;
        }
        else if(fruitValue=="Organic"){
            searchProductList=fruits.filter((e)=>e.type=="Organic");
        }
        else if(fruitValue=="Non-organic"){
            searchProductList=fruits.filter((e)=>e.type=="Non-Organic");
        }
        else if(fruitValue=="Discounted"){
            searchProductList=fruits.filter((e)=>e.discount>0);
        }
        display(searchProductList)
    })
})
// display(productList)