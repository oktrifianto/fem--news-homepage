function getID(v){return document.getElementById(v);}
function qSel(v){return document.querySelector(v);}

let menu = getID('menu-icon');
menu.addEventListener('click', openMenu);
function openMenu(){ getID('modal-mobile').style.display = "block";}

qSel('.mm__background').addEventListener('click', closeMenu);
getID('close-modal-mobile').addEventListener('click', closeMenu);
function closeMenu(){ getID('modal-mobile').style.display = "none";}