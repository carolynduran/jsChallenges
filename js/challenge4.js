// ch4form.onsubmit = function() {
//     var validInput = true;
//     var name = document.querySelector("#fullname")
//     var address = document.querySelector("#streetaddr")
//     console.log("Here");
//     console.log(name);
//     console.log(address)
//     if (name.value.length == 0){
//         document.querySelector("#nameerrormsg").style.display = "block";
//         validInput = false;
//     }
//     else {
//         document.querySelector("#nameerrormsg").style.display = "none";
//     }
//
//     if (address.value.length == 0){
//         document.querySelector("#addrerrormsg").style.display = "block";
//         validInput = false;
//     }
//     else {
//         document.querySelector("#addrerrormsg").style.display = "none";
//     }
//
//     return validInput;
// }

$(document).ready(function(){
  $("form").submit(function(){
    var validInput = true;
    var name = $("#fullname").val();
    var address = $("#streetaddr").val();
    console.log("Here");
    console.log(name);
    console.log(address);

    if ($("#fullname").val()=='' && $("#streetaddr").val()==''){
      $("#nameerrormsg").css("display","block");
      $("#addrerrormsg").css("display","block");
      validInput = false;
    }

    if ($("#fullname").val()!=='' && $("#streetaddr").val()==''){
      $("#nameerrormsg").css("display","none");
      $("#addrerrormsg").css("display","block");
      validInput = false;
    }

    if ($("#fullname").val()=='' && $("#streetaddr").val()!==''){
      $("#nameerrormsg").css("display","block");
      $("#addrerrormsg").css("display","none");
      validInput = false;
    }

    if ($("#fullname").val()!=='' && $("#streetaddr").val()!==''){
      $("#nameerrormsg").css("display","none");
      $("#addrerrormsg").css("display","none");
      validInput = true;
    }

    return validInput;
  })
})
