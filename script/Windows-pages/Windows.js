// Navbar js

// All Microsoftbtnsidebar


let Allmicrosoftbtn = document.querySelector(".All-microsoft-btn")
let Allmicrosoftbtnsidebar = document.querySelector(".All-microsoft-btn-sidebar")

Allmicrosoftbtn.addEventListener("click",()=>{
    if (a) {
    Allmicrosoftbtnsidebar.style.display = "block"
    Get_windows_dropdown.style.display = "none"
    Shop_pc_dropdown.style.display = "none"
    About_Windows_dropdown.style.display = "none"
    Get_helps_dropdown.style.display = "none"
    a=false;
} else {
    Allmicrosoftbtnsidebar.style.display = "none"
    a=true;
}
})


// Get windows dropdown

let Get_windows_btn = document.getElementById("Get-windows-btn")
let Get_windows_dropdown = document.querySelector(".Get-windows-dropdown")



let a=true;

Get_windows_btn.addEventListener("click",()=>{
    if(a){
        Get_windows_dropdown.style.display = "flex"
        Allmicrosoftbtnsidebar.style.display = "none"
        Shop_pc_dropdown.style.display = "none"
        About_Windows_dropdown.style.display = "none"
        Get_helps_dropdown.style.display = "none"
        a=false;
    }
    else{
        Get_windows_dropdown.style.display = "none"
        a=true;
    }
    
})
 



// Shop PCS dropdown

  let Shop_pcs_btn = document.getElementById("Shop-pcs-btn")
  let Shop_pc_dropdown = document.querySelector(".Shop-pc-dropdown")


  Shop_pcs_btn.addEventListener("click",()=>{
    if(a){
        Shop_pc_dropdown.style.display = "flex"
        About_Windows_dropdown.style.display = "none"
        Get_windows_dropdown.style.display = "none"
        Get_helps_dropdown.style.display = "none"
        Allmicrosoftbtnsidebar.style.display = "none"
        a=false;
    }
    else{
        Shop_pc_dropdown.style.display = "none"
        a=true;
    }
  })




// About_Windows_dropdown

let About_Windows_btn = document.getElementById("About-Windows-btn")
let About_Windows_dropdown = document.querySelector(".About-Windows-dropdown")


About_Windows_btn.addEventListener("click",()=>{
    if(a){
        About_Windows_dropdown.style.display = "flex"
        Shop_pc_dropdown.style.display = "none"
        Get_windows_dropdown.style.display = "none"
        Get_helps_dropdown.style.display = "none"
        Allmicrosoftbtnsidebar.style.display = "none"
        a=false;
    }
    else{
        About_Windows_dropdown.style.display = "none"
        a=true;
    }
})




// Resources-dropdown


let Get_help_btn = document.getElementById("Get-help-btn")
let Get_helps_dropdown = document.querySelector(".Get-helps-dropdown")

Get_help_btn.addEventListener("click",()=>{
    if(a){
        Get_helps_dropdown.style.display = "flex"
        About_Windows_dropdown.style.display = "none"
        Shop_pc_dropdown.style.display = "none"
        Get_windows_dropdown.style.display = "none"
        Allmicrosoftbtnsidebar.style.display = "none"
        a=false;
    }
    else{
         Get_helps_dropdown.style.display = "none"
         a=true;
    }
})





// About-windows-page-js

// Compare-windows 10 and 11 js

// let main_button1 = document.getElementById("main-button1")
// let main_button2 = document.getElementById("main-button2")

// main_button1.addEventListener("click",()=>{
//     main_button1.style.borderBottom = "3px solid #0067b8"
//     main_button2.style.borderBottom = "none"
// })

// main_button2.addEventListener("click",()=>{
//     main_button1.style.borderBottom = "none"
//     main_button2.style.borderBottom = "3px solid #0067b8"
// })



// digital pen Frequently asked questions js

const faqItems = document.querySelectorAll(".faq-item");
const expandAllBtn = document.getElementById("expandAll");
const collapseAllBtn = document.getElementById("collapseAll");

faqItems.forEach(item => {
    item.querySelector(".faq-question").addEventListener("click", () => {
        item.classList.toggle("active");

        const answer = item.querySelector(".faq-answer");
        answer.style.display = item.classList.contains("active") ? "block" : "none";
    });
});

// Expand All
expandAllBtn.addEventListener("click", () => {
    faqItems.forEach(item => {
        item.classList.add("active");
        item.querySelector(".faq-answer").style.display = "block";
    });
});

// Collapse All
collapseAllBtn.addEventListener("click", () => {
    faqItems.forEach(item => {
        item.classList.remove("active");
        item.querySelector(".faq-answer").style.display = "none";
    });
});