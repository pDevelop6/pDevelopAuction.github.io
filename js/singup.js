

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

  //=========Signup 
  var signupform = document.forms["singup-form"];
  //console.log("signu up",signupform);

    signupform.addEventListener("submit",(e)=>{
        var name= document.getElementById("fname").value;
        var uname= document.getElementById("uname").value;
        var email= document.getElementById("emails").value;
        var password= document.getElementById("password").value;
        var cpassword= document.getElementById("cpassword").value;
        var address= document.getElementById("addr").value;
        var city= document.getElementById("city").value;
        var zipcode= document.getElementById("zip").value;
        var state= document.getElementById("state").value;
        var telephone= document.getElementById("mob").value;
        if(name!="" && uname !="" && email!="" && password!="" && cpassword!=""
            && address!="" && city!="" && zipcode!="" && state!="" && telephone!=""){
                if(password==cpassword){
                    var signupObj={
                        'name':name,
                        'username':uname,
                        'email':email,
                        'password':password,
                        'confirmpassword':cpassword,
                        'address':address,
                        'city':city,
                        'zipcode':zipcode,
                        'state':state,
                        'telephone':telephone
                    }
                    localStorage.setItem('signupinfo',JSON.stringify(signupObj));
                  
                }
                else{
                    alert("your password and confirm password dose not match!!");
                }
        }
        else{
            alert("Something went Wrong!!!");
        }
        
    });






})