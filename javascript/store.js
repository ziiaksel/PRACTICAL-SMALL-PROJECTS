const allButtons = document.querySelectorAll(".btn-primary")
const addedTo = document.getElementsByClassName("added-to-basket")[0]
const body = document.getElementById("body")
const checkout = document.getElementById("checkout")
const checkoutChild = document.querySelectorAll(".checkout-child")[0]
const addedToDiv = document.querySelectorAll(".added-to-div")




//calcule total price

  let total= 0 
  addedToDiv.forEach(item => {

   const price = item.getElementsByTagName("price")[0].innerText


  });


const danger =  document.getElementById("danger")

danger.addEventListener("click",(eo) => {

 
})


allButtons.forEach(item => {
  
    item.addEventListener("click",(eo) => {
      
     const itemImage = item.parentElement.parentElement.parentElement.parentElement.getElementsByClassName("card-img-top")[0].src
     const itemPrice = item.parentElement.getElementsByClassName("price")[0].innerText
     const itemTitle = item.parentElement.parentElement.getElementsByClassName("card-title card-title-u")[0].innerText
     checkoutChild.style.opacity="0"

      checkoutChild.innerHTML += `
      <div class="added-to-div"> 
      ${itemTitle} 
     <img src="${itemImage}">
     <span class="price"> ${itemPrice}</span>
      
      <span class="icon-close close"></span>
      
      <div class="quantity">
      <label for="quantity">Quantity :</label>
      <input type="number" value="1" id="quantity" min="1" max="5"> 
      </div>
    
      </div>
     
      ` 

         })
        
});


const btnShowBasket = document.getElementById("btn-show-basket")
btnShowBasket.addEventListener("click",(eo) => {
  checkoutChild.classList.toggle("show-checkout-child")
  checkout.classList.toggle("show-checkout")

})

const closeCheckout = document.getElementsByClassName("icon-cross")[0]
closeCheckout.addEventListener("click",(eo) => {

  checkoutChild.classList.toggle("show-checkout-child")
  checkout.classList.toggle("show-checkout")
})




















