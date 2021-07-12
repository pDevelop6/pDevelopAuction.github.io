

document.addEventListener("DOMContentLoaded",function(){

    //all form regular expression

    var inputvalidate=document.querySelectorAll("input");
    //console.log(inputvalidate);

    var patternvalidate={
      name:/^[a-z\s]{5,20}$/is,
      username:/^[a-z0-9]{5,12}$/is,
      email:/^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/is,
      password:/^[\d]{3,5}$/is,
      cpassword:/^[\d]{3,5}$/is,
      address:/^[\d\w.\s,-]{10,100}$/i,
      msg:/^[\d\w.\s,-]{10,100}$/i,
      city:/^[a-z]{5,12}$/is,
      zipcode:/^[a-z0-9\s]{7}$/is,
      state:/^[A-Z]{2}$/s,
      telephone:/^[\d-]{12}$/s,
      creditcardnumber:/^[\d]{16}$/s,
      creditcardcvv:/^[\d]{3}$/s,
      amount:/^([\d]{2,10})\.([\d]{2})$/s,
      cardmonth:/^[\d]{2}$/s,
      cardyear:/^[\d]{2}$/s,
      searchitem:/^[\w]$/is,
    }
    
    function validate(field, regex)
    {
      if(regex.test(field.value)){
        field.className = "valid";
      }else{
        field.className = "invalid";
      }
    }
    
    inputvalidate.forEach(function(inputverify){
      inputverify.addEventListener("keyup",(e)=>{
        validate(e.target,patternvalidate[e.target.attributes.name.value])
      })
      
    })   
    
//====get username;
var myObj= JSON.parse(localStorage.getItem('signupinfo'));
 document.getElementById("welcomeuser").textContent=myObj.name;
document.getElementById("welcomeuser").style.fontWeight = "bold";
document.getElementById("welcomeuser").style.textTransform = "capitalize";


//==cart item

var buyitem=document.querySelectorAll(".buy");
var itemList=[{
  name:'INDUS VALLEY',
  price:190.75,
  carttotal:0
},{
  name:'ROMAN CIVILIZATION',
  price:70.28,
  carttotal:0
},{
  name:'ANCIENT GREEK',
  price:100.23,
  carttotal:0
},{
  name:'ANCIENT INDIAN',
  price:1500.57,
  carttotal:0
  
},{
  name:'ANCIENT EGYPT',
  price:168.18,
  carttotal:0
},{
  name:'ANCIENT BABYLON',
  price:170.12,
  carttotal:0
},{
  name:'SINDHU VALLEYS',
  price:1090.26,
  carttotal:0
},{
  name:'MESOPOTAMIA',
  price:548.58,
  carttotal:0
}]
for(let i=0; i<buyitem.length; i++)
{
  
  buyitem[i].addEventListener('click', ()=>{
    //console.log("add cart",productlist[i]);
      cartcount(itemList[i]);
      totalprice(itemList[i]);
  
  });
}

function cartcount(item)
{
  var listNumber=localStorage.getItem('cartnumber');
    listNumber=parseInt(listNumber);
    if(listNumber)
    {
      localStorage.setItem('cartnumber',listNumber+1);
      document.getElementById("cartcount").textContent=listNumber+1;
    }else{
      localStorage.setItem('cartnumber',1);
    document.getElementById("cartcount").textContent=1;
    }
    setItemsInCart(item);
}
function setItemsInCart(item)
{
  //console.log("my cart item is",cartItems)
  //console.log("my item is",item);
    var cartItems=localStorage.getItem("itemInCarts");
    cartItems=JSON.parse(cartItems);
    if(cartItems!=null)
    {
        if(cartItems[item.name]==undefined)
        {
          cartItems={
            ...cartItems,[item.name]:item
          }
        }
      cartItems[item.name].carttotal+=1;
    }
    else
    {
      item.carttotal=1;
            cartItems={
            [item.name]:item
                    }
    }
    localStorage.setItem("itemInCarts",JSON.stringify(cartItems));

}
function totalprice(itemprice){
 // console.log("The item price is",itemprice.price);
 var cartcost=localStorage.getItem("totalprice");
 if(cartcost!=null){
   cartcost=parseFloat(cartcost);
   localStorage.setItem("totalprice",cartcost+itemprice.price);
 }else{
  localStorage.setItem("totalprice",itemprice.price);
 }
}


function onLoadPage(){
  var listNumber=localStorage.getItem('cartnumber');
  if(listNumber)
    {
     
      document.getElementById("cartcount").textContent=listNumber;
      document.getElementById("cartscount").textContent=listNumber;
      
    }
}
onLoadPage();
    //=======search a item
    const searchitem= document.getElementById("search-item");
  //  console.log("searched",searchitem)
    searchitem.addEventListener("keyup",(e)=>{
      var term= e.target.value.toLowerCase(); // This will read textfrom userinput
      //console.log("firstsearch",term)
      var searchitems= document.getElementsByClassName("box");
      
      for (i = 0; i < searchitems.length; i++) {
        if (searchitems[i].innerText.toLowerCase().includes(term)) {
          searchitems[i].style.display = "block";
        } else {
          searchitems[i].style.display = "none";
         
        }
      }
  })
    

})