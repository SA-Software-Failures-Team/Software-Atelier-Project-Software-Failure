/* 
Toggle menu script
 */
function toggleMenu() {
    var navFull = document.getElementsByClassName('nav')[0];
    var mainContent = document.getElementsByTagName('main')[0]; 
    navFull.classList.toggle('menu-open-full');
    mainContent.classList.toggle('main-pushed'); 
}