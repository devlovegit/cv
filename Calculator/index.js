
function clickButton(event) {
  $(".btn").click(function(event) {
   console.log("you clicked: ", this.innerHTML)
  });
}
clickButton(event);
