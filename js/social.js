var count = 0;

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
function nextTestemonial(event) {
  var testcount = document.getElementById('testemonials').children.length;

  if(event === 'prev') {
    count = count - 1;
  } else {
    count += 1;
  }
  if(count < 0) {
    count = 0;
  }
  if(count >= testcount) {
    count = testcount - 1;
  }

  for(var i = 1; i <= testcount; i++) {
    trans = -100 * count;
    document.getElementById("test" + i ).style.transform = "translateX(" + trans + "%)";
    document.getElementById("test" + i ).style.opacity = "0";
    if( ( i === count+1) ) {
      document.getElementById("test" + i ).style.opacity = "1";
    }
    if(document.getElementById("active" + i ).classList.contains('active-marker')) {
      document.getElementById("active" + i ).classList.remove('active-marker');
    }
    document.getElementById("active" + (count + 1) ).classList.add('active-marker');
  }
}
