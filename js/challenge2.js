// useBilling.onchange = function() {
// 	let home = document.querySelector("#home");
// 	if (this.checked){
// 		home.value = document.querySelector("#billing").value;
// 		home.disabled = true;}
// 	else {
// 		home.value = "";
// 		home.disabled = false;}
//
// 	}


	$(document).ready(function(){
		window.alert("Yep, my function is being called");
	  $("#useBilling").click(function(){
			if ($(this).is(":checked")) {
				$("#home").val($("#billing").val());
				$("#home").prop('disabled',true);
			}
			else {
				$("#home").prop('disabled',false);
				$("#home").val("");
			}
		})
	})
