function submitMe() {
  var ime = document.getElementById("imeprezime").value;
  var email = document.getElementById("email").value;
  var weburl = document.getElementById("weburl").value;
  var poruka = document.getElementById("poruka").value;

  // console.log(ime, email, weburl, poruka);
  // console.log("jel radis?");
  // var FD = new FormData(form);

  if(document.getElementById("imeprezime").value === '') {
    document.getElementById("imeprezime").focus();
  } else if(document.getElementById("email").value === '') {
    document.getElementById("email").focus();
  } else if(document.getElementById("poruka").value === '') {
    document.getElementById("poruka").focus();
  } else {
    sendData(ime, email, weburl, poruka);
  }
};

function sendData(ime, email, weburl, poruka) {

    var data = {"name": ime, "email": email, "weburl": weburl, "message": poruka};
    $("#contactform").prop("disabled", true);

    var request = $.ajax({
      url: "./php/mailer.php",
      type: "post",
      data: data
    });

    request.done(function (response, textStatus, jqXHR) {
      var jsonobj = response;
      $("#kontaktporuka").text(jsonobj.message);
      if(jsonobj.status) {
        $("#contactform").trigger("reset");
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
      $("#contactform").prop("disabled", false);
    });
}
