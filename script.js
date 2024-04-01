let display = document.querySelector(".display");
let buttons = document.querySelectorAll("button");
let string="";
buttons.forEach((bt) => {
  bt.addEventListener("click", (e) => {
    if (e.target.innerHTML == "Del") {
      string = string.substring(0,string.length - 1);
      display.value = string;
    }
     else if (e.target.innerHTML == "=") {
      string = eval(string);
      display.value = string;
    }
     else {
      string += e.target.innerHTML;
      display.value = string;
    }
  });
});
// let display = document.querySelector(".display");
// let buttons = document.querySelectorAll("button");
// let string = ""; // Initialize string variable
// buttons.forEach((bt) => {
//   bt.addEventListener("click", (e) => {
//     if (e.target.innerHTML == "Del") { // Corrected typo here
//       string = string.substring(0, string.length - 1);
//       display.value = string;
//     } else if (e.target.innerHTML == "=") { // Corrected typo here
//       string = eval(string);
//       display.value = string;
//     } else {
//       string += e.target.innerHTML;
//       display.value = string;
//     }
//   });
// });

