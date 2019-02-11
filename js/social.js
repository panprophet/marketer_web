var count = 0;
function nextTabs(whereto) {
  var where = -100 * (whereto - 1);
  var noofitems = document.getElementById('numberofitems').children.length;

  if(whereto > 0 && whereto <= noofitems ){
    for(var i = 1; i <= noofitems; i++) {
      document.getElementById("tab" + i).style.transform = "translateX(" + where + "%)";
      document.getElementById("tab" + i).style.opacity = "0";
      if(i === whereto) {
        document.getElementById("tab" + i).style.opacity = "1";
      }
      if(document.getElementById("rightpic" + i)) {
        document.getElementById("rightpic" + i).style.transform = "translateX(" + where + "%)";
        document.getElementById("rightpic" + i).style.opacity = "0";
        if(i === whereto) {
          document.getElementById("rightpic" + i).style.opacity = "1";
        }
      }
      if(document.getElementById("choice" + i).classList.contains('active-link')) {
        document.getElementById("choice" + i).classList.remove('active-link');
        document.getElementById("choice" + i).classList.remove('active-tab');
      }
    }
    document.getElementById("choice" + whereto).classList.add('active-link');
    document.getElementById("choice" + whereto).classList.add('active-tab');
  }
};

function nextTab(event) {
  var tab = event.target.id;
  var nalog = document.getElementById('choice1');
  var kampanje = document.getElementById('choice2');
  var nalogtab = document.getElementById('tab1');
  var kampanjetab = document.getElementById('tab2');

  if(tab === 'choice1' && nalog.classList.contains('active-link') === false) {
    nalog.classList.add('active-link');
    nalog.classList.add('active-tab');
    kampanje.classList.remove('active-link');
    kampanje.classList.remove('active-tab');
    nalogtab.style.transform = "translateX(0)";
    nalogtab.style.opacity = "1";
    kampanjetab.style.transform = "translateX(0)";
    kampanjetab.style.opacity = "0";
  } else
  if(tab === 'choice2' && kampanje.classList.contains('active-link') === false) {
    kampanje.classList.add('active-link');
    kampanje.classList.add('active-tab');
    nalog.classList.remove('active-link');
    nalog.classList.remove('active-tab');
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
window.addEventListener('load', function(){

  var startx,
  starty,
  distX = 0,
  distY = 0,
  touchobj = null;
  var move;

  if(document.getElementById('testemonials')) {
    var countTest = document.getElementById('testemonials').children.length
    var test = document.getElementById('testemonials');
    var inputArray = document.querySelectorAll(".testimonials--inner-mid--single");

    test.addEventListener('touchstart', function(e) {
      touchobj = e.changedTouches[0];
      startx = parseInt(touchobj.clientX);
      starty = parseInt(touchobj.clientY);
    }, false);


    test.addEventListener('touchmove', function(e) {
      touchobj = e.changedTouches[0];
      distX = parseInt(touchobj.clientX) - startx;
      distY = parseInt(touchobj.clientY) - starty;
      if(Math.abs(distX) > Math.abs(distY) == true) {
          e.preventDefault();
      }
    }, false);

    test.addEventListener('touchend', function(e) {
      if(Math.abs(distX) > Math.abs(distY) == true) {
          if(distX > 0) {
            move = "prev";
          } else if(distX < 0) {
            move="next";
          }
          setTimeout(() => {
              nextTestemonial(move);
          }, 100);
      }
    },false);

  }
  if(document.getElementById("uslugetabs")) {
    var googletabs = document.getElementById("uslugetabs");

    googletabs.addEventListener('touchstart', function(e) {
      touchobj = e.changedTouches[0];
      elem = e.target.closest('.whatdoit--left-nalog');
      elemId = elem.id;
      startx = parseInt(touchobj.clientX);
      starty = parseInt(touchobj.clientY);
      move = elemId.substring(3);
    }, false);


    googletabs.addEventListener('touchmove', function(e) {
      touchobj = e.changedTouches[0];
      distX = parseInt(touchobj.clientX) - startx;
      distY = parseInt(touchobj.clientY) - starty;
      if(Math.abs(distX) > Math.abs(distY) == true) {
          e.preventDefault();
      }
    }, false);

    googletabs.addEventListener('touchend', function(e) {
      if(Math.abs(distX) > Math.abs(distY) == true) {
          if(distX > 0) {
            move = parseInt(move) - 1;
          } else if(distX < 0) {
            move = parseInt(move) + 1;
          }
          setTimeout(() => {
              nextTabs(move);
          }, 100);
      }
    },false);
  }
  if(document.getElementById("onamatabs")) {
    var onamatabs = document.getElementById("onamatabs");

    onamatabs.addEventListener('touchstart', function(e) {
      touchobj = e.changedTouches[0];
      elem = e.target.closest('.o-nama--misija-info');
      elemId = elem.id;
      startx = parseInt(touchobj.clientX);
      starty = parseInt(touchobj.clientY);
      move = elemId.substring(3);
    }, false);


    onamatabs.addEventListener('touchmove', function(e) {
      touchobj = e.changedTouches[0];
      distX = parseInt(touchobj.clientX) - startx;
      distY = parseInt(touchobj.clientY) - starty;
      if(Math.abs(distX) > Math.abs(distY) == true) {
          e.preventDefault();
      }
    }, false);

    onamatabs.addEventListener('touchend', function(e) {
      if(Math.abs(distX) > Math.abs(distY) == true) {
          if(distX > 0) {
            move = parseInt(move) - 1;
          } else if(distX < 0) {
            move = parseInt(move) + 1;
          }
          setTimeout(() => {
              nextTabs(move);
          }, 100);
      }
    },false);
  }
}, false);
