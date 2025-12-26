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






const Frequently_asked_questions_item = document.querySelectorAll('.Frequently-asked-questions-item');
const expandAllBtn = document.getElementById('expandAll');
const collapseAllBtn = document.getElementById('collapseAll');

Frequently_asked_questions_item.forEach(item => {
  item.querySelector('.Frequently-asked-question').addEventListener('click', () => {
    item.classList.toggle('active');
    
  });
});


expandAllBtn.addEventListener('click', () => {
  Frequently_asked_questions_item.forEach(item => item.classList.add('active'));
});

collapseAllBtn.addEventListener('click', () => {
  Frequently_asked_questions_item.forEach(item => item.classList.remove('active'));
});

