function nextTab(event) {
  var tab = event.target.id;
  var nalog = document.getElementById('nalog');
  var kampanje = document.getElementById('kampanje');
  var nalogtab = document.getElementById('nalogtab');
  var kampanjetab = document.getElementById('kampanjetab');

  if(tab === 'nalog' && nalog.classList.contains('active-link') === false) {
    nalog.classList.add('active-link');
    kampanje.classList.remove('active-link');
    nalogtab.style.transform = "translateX(0)";
    nalogtab.style.opacity = "1";
    kampanjetab.style.transform = "translateX(0)";
    kampanjetab.style.opacity = "0";
  } else
  if(tab === 'kampanje' && kampanje.classList.contains('active-link') === false) {
    kampanje.classList.add('active-link');
    nalog.classList.remove('active-link');
    nalogtab.style.transform = "translateX(-100%)";
    nalogtab.style.opacity = "0";
    kampanjetab.style.transform = "translateX(-100%)";
    kampanjetab.style.opacity = "1";
  }
};
