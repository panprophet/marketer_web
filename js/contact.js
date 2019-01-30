function nextStep(number) {
  var move = -1 * number;
  var count = document.getElementById("contactwrap").children.length;
console.log(number, move);

  for(var i = 1; i <= count; i++) {
    document.getElementById("strana" + i).style.transform = "translateX(" + move + "%)";
  }

}
