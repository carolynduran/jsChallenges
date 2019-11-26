// subscribe.onchange = function() {
// 	var x = document.querySelector("#emailField");
// 	if (this.checked){
// 		console.log("selected");
//     	x.style.display = "block";
//   	} else {
//   		console.log("Not selected");
//     	x.style.display = "none";
//   	}
// }

$(document).ready(function(){
  $("#subscribe").click(function(){
  	$("#emailField").toggle();
		})
	})


//   	Advanced Option....
//   	x.style.display == "block" ?
// 		x.style.display = "none" :
// 		x.style.display = "block";
