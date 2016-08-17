window.onload = function ()
{
  var name =document.getElementById("name");
  name.addEventListener("blur", alertVal);
  function alertVal(){
  alert(name.value+" was added ");
  }
  var form = document.getElementById("register");
  form.addEventListener("submit",function(e){
  e.preventDefault();
  if(name.value == ""){
    alert("You must insert name");
    form.submit();
    }
    else{
     document.getElementById("register").addEventListener("submit", myFunction);

                  function myFunction() {
                      alert("The form was submitted");
                  }
    }
  });

}
