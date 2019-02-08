function nextStep(number) {
  var move = -1 * number;
  var effDiv = (number/100) + 1;
  var count = document.getElementById("contactwrap").children.length;

  for(var i = 1; i <= count; i++) {

    if(document.getElementById("strana" + i).classList.contains("fade_in_cont")) {
      document.getElementById("strana" + i).classList.remove("fade_in_cont");
      document.getElementById("strana" + i).classList.add("fade_out_cont");
    }

    if(effDiv === i) {
      document.getElementById("strana" + i).classList.remove("fade_out_cont");
      document.getElementById("strana" + i).classList.add("fade_in_cont");
    }

  }
}

var inputArray = document.querySelectorAll("input");

inputArray.forEach(function(elem){
  elem.addEventListener("keyup", function(){
    var elem1;
    var elem2;
    if(elem1 !== '') {
      elem1 = elem.id;
    } else if (elem1 !== elem.id) {
      elem2.elem.id;
    }
    console.log(elem.id, elem1, elem2);

    // if( elem.value !== '' && elem.getElementById("nazivkompanije") !== '') {
    //   document.getElementById("next1").classList.remove('next-disabled');
    //   document.getElementById("next1").classList.add('next-enabled');
    // } else {
    //   document.getElementById("next1").classList.remove('next-enabled');
    //   document.getElementById("next1").classList.add('next-disabled')
    // }
    // if( elem.getElementById("webpage") !== '' && elem.getElementById("cimesebavimo") !== '') {
    //   document.getElementById("next2").classList.remove('next-disabled');
    //   document.getElementById("next2").classList.add('next-enabled');
    // } else {
    //   document.getElementById("next2").classList.remove('next-enabled');
    //   document.getElementById("next2").classList.add('next-disabled')
    // }
    // if( elem.getElementById("interesovanje") !== '') {
    //   document.getElementById("next3").classList.remove('next-disabled');
    //   document.getElementById("next3").classList.add('next-enabled');
    // } else {
    //   document.getElementById("next3").classList.remove('next-enabled');
    //   document.getElementById("next3").classList.add('next-disabled')
    // }
    // if( elem.getElementById("email") !== '' && elem.getElementById("telefon") !== '') {
    //   document.getElementById("next4").classList.remove('next-disabled');
    //   document.getElementById("next4").classList.add('next-enabled');
    // } else {
    //   document.getElementById("next4").classList.remove('next-enabled');
    //   document.getElementById("next4").classList.add('next-disabled')
    // }
  });
});
