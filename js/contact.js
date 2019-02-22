var re = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

var inputArray = document.querySelectorAll("input");
    var elem1;
    var elem2;
    var pagecount = 1;
    var prevmove = 0;

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
      if(prevmove >= move) {
        prevmove = move;
        pagecount = pagecount + 1;
      } else {
        prevmove = move;
        pagecount = pagecount - 1;
      }
      elem1 = null;
      elem2 = null;
    }
  }
}
document.addEventListener("keydown", function(e){
  if(e.which == 9){
    e.preventDefault();
  }
});
inputArray.forEach(function(elem) {
  elem.addEventListener("keyup", function(){
    if(!elem1) {
      elem1 = elem;
    } else if (elem1.id !== elem.id) {
      elem2 = elem;
    }
    if(elem.id === 'email' ) {
      elem.addEventListener("focusout", ()=> {
        if(!re.test(elem.value)) {
          document.getElementById("mailerror").classList.remove("email-hidden");
          document.getElementById("mailerror").classList.add("email-shown");
          elem.focus();
        } else {
          document.getElementById("mailerror").classList.remove("email-shown");
          document.getElementById("mailerror").classList.add("email-hidden");
        }
      });
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

function sendMessage() {
  var ime = $("#ime").val();
  var naziv = $("#nazivkompanije").val();
  var weburl = $("#webpage").val();
  var cimesebavimo = $("#cimesebavimo").val();
  var interesovanje = $("#interesovanje").val();
  var email = $("#email").val();
  var telefon = $("#telefon").val();

  var data = {"name": ime, "naziv": naziv, "email": email, "weburl": weburl, "cimesebavimo": cimesebavimo, "interesovanje": interesovanje, "telefon": telefon};

  $("#contactwrap").prop("disabled", true);

  var request = $.ajax({
    url: "./php/mail.php",
    type: "post",
    data: data
  });

  request.done(function (response, textStatus, jqXHR) {
    var jsonobj = response;
    $("#kontaktporuka").text(jsonobj.message);
    $("#kontaktporuka2").text(jsonobj.message2);
    if(jsonobj.status) {
      nextStep(400);
      $("#contactwrap").trigger("reset");
    }
  })
  request.fail(function (jqXHR, textStatus, errorThrown){

  // Log the error to the console
    console.log(
      "The following error occurred: " +
      textStatus, errorThrown
    );
  });

  request.always(function () {
    // Reenable the inputs
    $("#contactwrap").prop("disabled", false);
  });
}
