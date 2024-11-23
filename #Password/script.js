var pp=document.getElementById("pd")
var cf=document.getElementById("cpv")

function validatePassword(){

 
    
    if(pp.value != cf.value) {
      cpv.setCustomValidity("Passwords Don't Match");
    } else {
      cpv.setCustomValidity('');
    }
  }
  
  pd.onchange = validatePassword;
 cpv.onkeyup = validatePassword;

 myInput.onfocus = function() {
  document.getElementById("suggetion").style.display = "block";
}

 var myInput = document.getElementById("pd");
var length = document.getElementById("length");
if(myInput.value.length >= 8) {
  length.classList.remove("invalid");
  length.classList.add("valid");
} else {
  length.classList.remove("valid");
  length.classList.add("invalid");
}
