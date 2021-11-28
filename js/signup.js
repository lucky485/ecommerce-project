
function matchpass(){  


var firstpassword=document.f1.password.value;  
var secondpassword=document.f1.password2.value;  

var firstname=document.f1.name1.value;
var secondname=document.f1.name2.value;

if ( firstname==""  || firstname==null ){  
  alert("Name can't be blank");  
  return false;
}
if(firstpassword==secondpassword){  
return true;  
}  
else {  
  alert("password must be same!");  
  return false;  
}  
} 