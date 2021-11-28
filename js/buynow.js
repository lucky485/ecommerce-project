function matchpass(){
var mobileno=document.f1.name1.value;
var state=document.f1.state.value;
if ( mobileno==""  || mobileno==null )
{  
  alert("mobile no. cant be blank");  
  return false;
  }
  else if (state==""  || state==null){
  	alert("state cant be blank");  
  return false;
  }
}