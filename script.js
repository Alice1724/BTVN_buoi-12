const form = document.getElementById("form")


let result = ""; 

form.addEventListener("submit", function (event) {  
const valueEmail = document.getElementById("email").value
const valuePassword = document.getElementById("password").value
const error = document.getElementById("errorMessage")
if (valueEmail == ""){
   error.innerHTML = "Pls enter your email!";
   return result = false;
}
else if(valuePassword == ""){
  error.innerHTML = "Pls enter your password!";
  return result = false;
}
else if(valuePassword.length < 8){
  error.innerHTML = "Password should be minimum 8 characters!";
  return result = false;
}
else{
    error.innerHTML="Login successfully!";
    return result = true;
}
})

form.onsubmit = function(a){
    if(!result){
        a.preventDefault()
    }
}

