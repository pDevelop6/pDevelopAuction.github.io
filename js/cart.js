

document.addEventListener("DOMContentLoaded",function(){
//====get username;
//var myObj= JSON.parse(localStorage.getItem('signupinfo'));
 //document.getElementById("welcomeuser").textContent=myObj.name;
//document.getElementById("welcomeuser").style.fontWeight = "bold";
//document.getElementById("welcomeuser").style.textTransform = "capitalize";

function onLoadPage(){
  var listNumber=localStorage.getItem('cartnumber');
  
  if(listNumber)
    {
        document.getElementById("cartcount").textContent=listNumber;
        document.getElementById("cartscount").textContent=listNumber;
    }
    }
//
    function displaycart(){
        var cartItems=localStorage.getItem("itemInCarts");
        var cartTotal=localStorage.getItem("totalprice");
        cartItems=JSON.parse(cartItems);
        var productContainer=document.querySelector(".products");
       // console.log("this is container of product dynamic",productContainer);
        
        if(cartItems && productContainer)
        {
           productContainer.innerHTML='';
           Object.values(cartItems).map(critem=>{
               productContainer.innerHTML+=`
               <div class="product">
               <div class="product-title" >
               <img src="./img/${critem.name}.jpg"></img>
               <span>${critem.name}</span>
               </div>
               <div class="price">$${critem.price}</div>
               <div class="quantity">${critem.carttotal}</div>
               <div class="total">$${critem.carttotal*critem.price}</div>
               
               </div>
              
               `;
               
           })
           
         //<div class="delete"> <span id="cartdelete">Delete</span></div>

           productContainer.innerHTML+=`
           <div class="carttotalContainer">
            <h4 class="carttotalTitle">
                Cart Total
            </h4>
            <h4 class="cartTotal">
                 $${cartTotal}
            </h4>
            
           </div>
           `;
          
           document.querySelector(".cartbuy").style.opacity=1;
           document.querySelector(".cartbuy").addEventListener("click",(e)=>{
               window.open("Payment.html","_self")
               // console.log("button clicked")
           })
           //console.log(document.querySelector(".cartbuy"));
        }


    }
 onLoadPage();  
 displaycart();
})
