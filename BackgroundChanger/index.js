const colorButton = document.querySelector(".btn");
let currColor = document.querySelector(".change");

function random(number) {
  return Math.floor(Math.random() * (number+1));
}

let colorsArr = ['#295939', '#e9b0df', '#adeecf'];

colorButton.onclick = function() {
  let ranCol = colorsArr[Math.floor(Math.random() * colorsArr.length)];
  currColor.style.backgroundColor = ranCol;
}

// function stopColorChange() {
// if (currColor =='#adeecf') {
//   alert("Hello! I am an alert box!!");
//   }
// }
//alert STOP its perfect and randomcolor btn disappears

//if its a certain color say oh I like this one lets go with this





// const createPerson = (name, age, gender) => {
//   // Only change code below this line
//   return {
//     name,
//     age,
//     gender
//   };
//   // Only change code above this line
// };
//
// let devin = createPerson("devin", 55)
// console.log(devin.name)
