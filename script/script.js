
let Allmicrosoftbtn = document.querySelector(".All-microsoft-btn")
let Allmicrosoftbtnsidebar = document.querySelector(".All-microsoft-btn-sidebar")


 let a=true
Allmicrosoftbtn.addEventListener("click",()=>{
   if(a){
    Allmicrosoftbtnsidebar.style.display="block"
    a=false
   }else{
    Allmicrosoftbtnsidebar.style.display="none"
    a=true
   }
})






