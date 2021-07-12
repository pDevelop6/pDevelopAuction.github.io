

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
onLoadPage();  
var cartTotal=localStorage.getItem("totalprice");
    document.querySelector("#pay-bill").addEventListener("submit",(e)=>{
     
        var name= document.getElementById("name").value;
        var email= document.getElementById("email").value;
        var ccnumber= document.getElementById("ccnumber").value;
        var cvv= document.getElementById("ccvv").value;
        var cname= document.getElementById("cname").value;
        var amount= document.getElementById("camount").value;
        var month= document.getElementById("cmonth").value;
        var year= document.getElementById("cyear").value;
        var telephone= document.getElementById("telephone").value;
        if(name!="" && ccnumber !="" && email!="" && cvv!="" && cname!=""
            && month!="" && year!="" && amount!=""  && telephone!="" ){
                if(amount==cartTotal){
                    localStorage.removeItem('itemInCarts');
                    localStorage.removeItem('cartnumber');
                    localStorage.removeItem('totalprice');
                    alert("Payment Done!!!....");   
                }
                else{
                    alert("Please!!... enter valid amount....");
                }
            }
            else{
                alert("Something went Wrong!!!");
            }
        
    
    })


})
