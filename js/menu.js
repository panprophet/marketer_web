function toggle_menu(){
  var menu = document.getElementById('mobilemenu');
  if(menu.classList.contains('mobile-hidden')) {
    menu.classList.remove('mobile-hidden');
    menu.classList.add('mobile-shown');
    svg_paint('expanded');

  } else {
    menu.classList.remove('mobile-shown');
    menu.classList.add('mobile-hidden');
    svg_paint('closed');
  }
}
function toggle_language() {
	 var currentUrl = window.location.href;
	 if(window.location.href.indexOf("_eng") > -1) {
		currentUrl = window.location.href.split("_eng").join("");
		window.location.href = currentUrl;
		} else {
			if(window.location.pathname === "/") {
				currentUrl  = "index_eng";
				window.location.href = currentUrl;
			} else {
				currentUrl = currentUrl + '_eng';
				window.location.href = currentUrl;
			}
		}
}
function svg_paint(state) {
  var ham = document.getElementById('ham');
  var nodes = [];
  if(state == 'expanded') {
    nodes = ham.childNodes;
    for( var node of nodes) {
      if(node.nodeName === "rect"){
        node.classList.remove('inactive');
        node.classList.add('active');
      }
    }
  } else {
    nodes = ham.childNodes;
    for( var node of nodes) {
      if(node.nodeName === "rect"){
        node.classList.remove('active');
        node.classList.add('inactive');
      }
    }
  }
}
var mytop = 150;
var lastScrollTop = 0;
window.addEventListener('scroll', function(){
  var st = window.scrollY;
  if(document.getElementById('mobilemenu').classList.contains("mobile-shown")){
    return;
  }
  if(st >= mytop && lastScrollTop - st < 0) {
    this.document.getElementById("header").classList.remove("header-down");
    this.document.getElementById("header").classList.add("header-up");
    lastScrollTop = st;
  } else {
    this.document.getElementById("header").classList.remove("header-up");
    this.document.getElementById("header").classList.add("header-down");
    lastScrollTop = st;
  }

});
