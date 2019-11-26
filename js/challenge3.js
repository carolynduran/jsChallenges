// ch3form.onsubmit = function() {
//     var fruit = document.querySelectorAll('input[name="fruit"]')
//     for (let i = 0; i < fruit.length;i++){
//         if (fruit[i].checked)
//             return true;
//     }
//     alert("You must pick a fruit!")
//     return false;

    // Advanced Answer
    // if(document.querySelector('input[name="fruit"]:checked'))
    //     return true;
    //
    // alert("You must pick a fruit!")
    // return false;
    // }

// My original jQuery code before I found another way:
  // $(document).ready(function(){
  //   $("#ch3form").submit(function(){
  //     if ($("input[name*='standing']").is(":checked")){
  //     }
  //
  //     else{
  //       alert("You must select your class standing!")
  //       return false
  //     }
  //
  //     if ($("input[name*='fruit']").is(":checked")){
  //     }
  //
  //     else{
  //       alert("You must pick a fruit!");
  //       return false
  //   }
  //   })
  // })

  $(document).ready(function(){
    $("form").submit(function(){
      if ($("input[name*='standing']").is(":checked") && $("input[name*='fruit']").is(":checked")){
        return true;
      }
      else if ($("input[name*='standing']").is(":checked")){
        alert("You must pick a fruit!");
        return false;
      }
      else if ($("input[name*='fruit']").is(":checked")){
        alert("You must select your class standing!");
        return false;
      }
      else{
        alert("You must select your class standing!");
        alert("You must pick a fruit!");
        return false;
      }

    })
  })
