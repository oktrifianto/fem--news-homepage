function getID(v){return document.getElementById(v);};
let menu = getID('menu-icon');
menu.addEventListener('click', openMenu);
function openMenu(){
  console.log('menu opened');
}
