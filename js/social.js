function nextTab(event) {
  var tab = event.target.id;
  var nalog = document.getElementById('choice1');
  var kampanje = document.getElementById('choice2');
  var nalogtab = document.getElementById('tab1');
  var kampanjetab = document.getElementById('tab2');
console.log(tab);

  if(tab === 'choice1' && nalog.classList.contains('active-link') === false) {
    nalog.classList.add('active-link');
    kampanje.classList.remove('active-link');
    nalogtab.style.transform = "translateX(0)";
    nalogtab.style.opacity = "1";
    kampanjetab.style.transform = "translateX(0)";
    kampanjetab.style.opacity = "0";
  } else
  if(tab === 'choice2' && kampanje.classList.contains('active-link') === false) {
    kampanje.classList.add('active-link');
    nalog.classList.remove('active-link');
    nalogtab.style.transform = "translateX(-100%)";
    nalogtab.style.opacity = "0";
    kampanjetab.style.transform = "translateX(-100%)";
    kampanjetab.style.opacity = "1";
  }
};
