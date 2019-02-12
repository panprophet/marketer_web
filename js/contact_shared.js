function submitMe() {
  var ime = document.getElementById("imeprezime").value;
  var email = document.getElementById("email").value;
  var weburl = document.getElementById("weburl").value;
  var poruka = document.getElementById("poruka").value;

  // console.log(ime, email, weburl, poruka);
  // console.log("jel radis?");
  var FD = new FormData(form);

};

function sendData() {
  var xhr = new XMLHttpRequest();

  xhr.addEventListener("load", function(event) {
    alert(event.target.responseText);
  });

  xhr.addEventListener("error", function(event) {
    alert("Oops! Nesto je poslo napoako.");
  });

  xhr.open("POST", "./php/mailer.php");

  xhr.send(FD);

}
