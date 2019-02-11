var inputArray = document.querySelectorAll("input");
    var elem1;
    var elem2;
    var pagecount = 1;
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
      pagecount = pagecount + 1;
      elem1 = null;
      elem2 = null;
    }
  }
  if(number === 400) {
    //ovde submit
  }
}

inputArray.forEach(function(elem){
  elem.addEventListener("keyup", function(){
    if(!elem1) {
      elem1 = elem;
    } else if (elem1.id !== elem.id) {
      elem2 = elem;
    }

    if(elem1 && elem2) {
      if(elem1.value !== '' && elem2.value !== '') {
        document.getElementById("next" + pagecount).classList.remove('next-disabled');
        document.getElementById("next" + pagecount).classList.add('next-enabled');
      } else {
        if(document.getElementById("next" + pagecount).classList.contains('next-enabled')){
          document.getElementById("next" + pagecount).classList.add('next-disabled');
        }
      }
    }
    if(elem.id === 'interesovanje') {
      elem1 = elem;
      if(elem1.value !== '') {
        document.getElementById("next" + pagecount).classList.remove('next-disabled');
        document.getElementById("next" + pagecount).classList.add('next-enabled');
      } else {
        if(document.getElementById("next" + pagecount).classList.contains('next-enabled')){
          document.getElementById("next" + pagecount).classList.add('next-disabled');
        }
      }
    }
  });
});
