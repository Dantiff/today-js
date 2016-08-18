window.onload = function ()
{
  var name =document.getElementById("name");
  name.addEventListener("blur", alertVal();
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

/*Testing promises*/

return new Promise(function(resolve, reject) {
var imager = document.getElementById("imager");

imager.addEventListener('load', alertVal();
        function alertVal(){
            if (imager.complete) {
              function loaded(
                  alert("Image loaded");
                );
            }
            else {
              imager.addEventListener('load', loaded());
            }
            }


imager.addEventListener('error', function reply() {
  alert("argh everything's broken");
});
}


}
