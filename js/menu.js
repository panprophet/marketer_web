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
