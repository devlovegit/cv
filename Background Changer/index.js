const colorButton = document.querySelector(".btn");

function random(number) {
  return Math.floor(Math.random() * (number+1));
}

colorButton.onclick = function() {
  //const ranCol = 'rgb(' + random(255) + ',' + random(255) + ',' + random(255) + ')';
  //document.body.style.backgroundColor = ranCol;
  document.body.style.background =url('Confetti_BG.jpg');
}
