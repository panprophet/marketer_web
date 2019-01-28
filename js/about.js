function nextTxt(event) {
    var txt = event.target.id;
    var vizija = document.getElementById('vizija');
    var misjia = document.getElementById('misija');
    var vizijetxt = document.getElementById('vizijetxt');
    var misijetxtx = document.getElementById('misijetxt');
  
    if(txt === 'vizija' && vizija.classList.contains('active-link') === false) {
        vizija.classList.add('active-link');
        misjia.classList.remove('active-link');
      vizijetxt.style.transform = "translateX(0)";
      vizijetxt.style.opacity = "1";
      misijetxtx.style.transform = "translateX(0)";
      misijetxtx.style.opacity = "0";
    } else
    if(txt === 'misjia' && misjia.classList.contains('active-link') === false) {
        misjia.classList.add('active-link');
      vizija.classList.remove('active-link');
      vizijetxt.style.transform = "translateX(-100%)";
      vizijetxt.style.opacity = "0";
      misijetxtx.style.transform = "translateX(-100%)";
      misijetxtx.style.opacity = "1";
    }
  };