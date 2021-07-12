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
    
    var loginform = document.forms["login-form"];
    var submit=document.querySelector("#submit");
    //console.log(loginform)
    loginform.addEventListener("submit",(e)=>{
      e.preventDefault()
      console.log("clicked")
        var loginname= document.getElementById("loginame").value;
        var password= document.getElementById("password").value;
       var myObj= JSON.parse(localStorage.getItem('signupinfo'));

        if((loginname==myObj.username && password==myObj.password)|| (loginname=="admin" && password==123))
        {
            
          window.open("Home.html","_self")
        }
        else{
            alert("invalid");
            window.open("index.html");
        }
    })

    
    
})
