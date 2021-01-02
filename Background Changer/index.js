const colorButton = document.querySelector(".btn");

function random(number) {
  return Math.floor(Math.random() * (number+1));
}

colorButton.onclick = function() {
  const rndCol = 'rgb(' + random(255) + ',' + random(255) + ',' + random(255) + ')';
  document.body.style.backgroundColor = rndCol;
}
console.log("HI");
