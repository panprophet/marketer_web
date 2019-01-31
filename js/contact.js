function nextStep(number) {
  var move = -1 * number;
  var effDiv = (number/100) + 1;
  var count = document.getElementById("contactwrap").children.length;

  for(var i = 1; i <= count; i++) {

    if(document.getElementById("strana" + i).classList.contains("fade_in_cont")) {

      document.getElementById("strana" + i).classList.remove("fade_in_cont");

      document.getElementById("strana" + i).classList.add("fade_out_cont");

    }

    // document.getElementById("strana" + i).style.transform = "translateX(" + move + "%)";

    if(effDiv === i) {

      document.getElementById("strana" + i).classList.remove("fade_out_cont");

      document.getElementById("strana" + i).classList.add("fade_in_cont");

    }

    // document.getElementById("strana" + i).style.transform = "translateX(" + move + "%)";
  }

}
