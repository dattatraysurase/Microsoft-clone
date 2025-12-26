let products_btn = document.getElementById("products-btn");
let product_btn_dropdown_container = document.querySelector(".product-btn-dropdown-container");

products_btn.addEventListener("click", (event) => {
  event.stopPropagation();
  if (product_btn_dropdown_container.style.display === "flex") {
    product_btn_dropdown_container.style.display = "none";
  } else {
    product_btn_dropdown_container.style.display = "flex";
  }
});

document.addEventListener("click", (event) => {
  if (
    !product_btn_dropdown_container.contains(event.target) &&
    event.target !== products_btn
  ) {
    product_btn_dropdown_container.style.display = "none";
  }
});

// gsap animation

gsap.from(".teams-page-front-info", {
  y: 130,
  duration: 1,
  opacity: 0,
});

gsap.from(".features-news-main-container", {
  y: 100,
  duration: 1,
  opacity: 0,
  scrollTrigger: {
    trigger: ".features-news-main-container",
    scroller: "body",
    // markers:true,

    start: "10% 70%",
  },
});