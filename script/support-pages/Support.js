// All Microsoftbtnsidebar

let Allmicrosoftbtn = document.querySelector(".All-microsoft-btn")
let Allmicrosoftbtnsidebar = document.querySelector(".All-microsoft-btn-sidebar")


let a=true

Allmicrosoftbtn.addEventListener("click",()=>{
  if (a) {
                Allmicrosoftbtnsidebar.style.display = "block"
                Products_dropdown.style.display = "none"
                Devices_dropdown.style.display = "none"
                Account_and_billing_dropdown.style.display = "none"
                Resources_dropdown.style.display = "none"
                a=false

  } else {
          Allmicrosoftbtnsidebar.style.display = "none"
          a=true
  }
    


})



// products btn sidebar

let product_btn = document.getElementById("product-btn")
let Products_dropdown = document.querySelector(".Products-dropdown")
 
product_btn.addEventListener("click",()=>{
    if(a){
        Products_dropdown.style.display = "flex"
        Devices_dropdown.style.display = "none"
        Account_and_billing_dropdown.style.display = "none"
        Resources_dropdown.style.display = "none"
        Allmicrosoftbtnsidebar.style.display = "none"
        a=false;
    }
    else{
        Products_dropdown.style.display = "none"
        a=true;
    }

})





// Devices dropdown

  let Devices_btn = document.getElementById("Devices-btn")
  let Devices_dropdown = document.querySelector(".Devices-dropdown")


Devices_btn.addEventListener("click",()=>{
    if(a){
        Devices_dropdown.style.display = "flex"
        Products_dropdown.style.display = "none"
        Account_and_billing_dropdown.style.display = "none"
        Resources_dropdown.style.display = "none"
        Allmicrosoftbtnsidebar.style.display = "none"
        a=false;
    }
    else{
        Devices_dropdown.style.display = "none"
        a=true;
    }
})


// Account-and-billing-dropdown

let Account_and_billing_btn = document.getElementById("Account-and-billing-btn")
let Account_and_billing_dropdown = document.querySelector(".Account-and-billing-dropdown")


Account_and_billing_btn.addEventListener("click",()=>{

    if(a){
    Account_and_billing_dropdown.style.display = "flex"
    Devices_dropdown.style.display = "none"
    Products_dropdown.style.display = "none"
    Resources_dropdown.style.display = "none"
    Allmicrosoftbtnsidebar.style.display = "none"
    a=false;
    }
    else{
        Account_and_billing_dropdown.style.display = "none"
        a=true;
    }
})



// Resources-dropdown


let Resources_btn = document.getElementById("Resources-btn")
let Resources_dropdown = document.querySelector(".Resources-dropdown")

Resources_btn.addEventListener("click",()=>{
    if(a){
        Resources_dropdown.style.display = "flex"
        Account_and_billing_dropdown.style.display = "none"
        Devices_dropdown.style.display = "none"
        Products_dropdown.style.display = "none"
       Allmicrosoftbtnsidebar.style.display = "none"
        a=false;
    }
    else{
         Resources_dropdown.style.display = "none"
         a=true;
    }
})









// microsoft-365-small-buissness-scrollbar

// btns import

let Microsoft_365_small_bussiness_left_btn = document.getElementById("Microsoft-365-small-bussiness-left-btn")
let Microsoft_365_small_bussiness_right_btn = document.getElementById("Microsoft-365-small-bussiness-right-btn")

// 

let Microsoft_365_small_bussiness = document.querySelector(".Microsoft-365-small-bussiness")


let scrollAmount = 330; // adjust based on item width

Microsoft_365_small_bussiness_left_btn.addEventListener("click",()=>{
    // rightbtn.style.background = "red"
    Microsoft_365_small_bussiness.scrollBy({ left: -scrollAmount, behavior: "smooth" });
})

Microsoft_365_small_bussiness_right_btn.addEventListener("click",()=>{
    // leftbtn.style.background = "red"
    Microsoft_365_small_bussiness.scrollBy({ left: scrollAmount, behavior: "smooth" });
})