/*for fetching all the ElementInternals,tags, and class*/
const cartIcon = document.querySelector("#cart-icon");
const cart = document.querySelector(".cart");
const cartClose = document.querySelector("#cart-close");

cartIcon.addEventListener("click", () => cart.classList.add("active"));
cartClose.addEventListener("click", () => cart.classList.remove("active"));
/*
/* create a variable  for stroring add class all elements
const addCartButtons = document.querySelectorAll(".");
/*create a array for addding each element
addCartButtons.forEach(button => {
    /* we use for the method to iterate through each  button in each iterration
    button.addEventListener("click", event => {
        const productBox = event.target.closest(".product-box");
        addToCart(productBox);
    });

const cartContent = document.querySelector(".cart-content");
/* this function is used to add product elements to the shopping cart
const addToCart = productBox => {
    const productImgSrc = productBox.querySelector("img").src;
    const productTitle = productBox.querySelector(".product-title").textContent;
    const productPrice = productBox.querySelector(".price").textContent;

    /* Using this method stored in the cart box
    const cartBox = document.createElement("div");
    cartBox.classList.add("cart-box"); // this method use all the class's property

    /* Now we have to popularate the cart box elements with product details such as  product name,price,product quantity 
    Then after this we have remove the innerHTML tha t will remove icon using the innerHTML in this case we use btics instead of regular quoatation because we will dynamically insert variables into HTML string
     thus the HTML elements inserted into cart box


 cartContent.appendChild(cartBox);
};
*/