/* 
Toggle menu script
 */
function toggleMenu() {
    var navFull = document.getElementsByClassName('nav')[0];
    var mainContent = document.getElementsByTagName('main')[0]; 
    navFull.classList.toggle('menu-open-full');
    mainContent.classList.toggle('main-pushed'); 
}



link=document.getElementsByClassName("1");
link=document.getElementsByClassName("2");
link=document.getElementsByClassName("3");
link=document.getElementsByClassName("4");
link=document.getElementsByClassName("5");

var linkOne = false
var linkTwo = false
var linkThree = false
var linkFour = false
var linkFive = false


for(let i=0; i<link.length; i++){
    link[i].onclick=function(){
        var divFull = document.getElementsByClassName('one');
        for(let j = 0; j<divFull.length; j++){
            if (!linkOne){
                linkOne = true
                divFull[j].style.display = 'block';}
            else{
            divFull[j].style.display = 'none';
            linkOne = false
            }  
        }
    }
}

for(let i=0; i<link.length; i++){
    link[i].onclick=function(){
        var divFull = document.getElementsByClassName('two');
        for(let j = 0; j<divFull.length; j++){
            if (!linkOne){
                linkOne = true
                divFull[j].style.display = 'block';}
            else{
            divFull[j].style.display = 'none';
            linkOne = false
            }  
        }
    }
}
for(let i=0; i<link.length; i++){
    link[i].onclick=function(){
        var divFull = document.getElementsByClassName('three');
        for(let j = 0; j<divFull.length; j++){
            if (!linkOne){
                linkOne = true
                divFull[j].style.display = 'block';}
            else{
            divFull[j].style.display = 'none';
            linkOne = false
            }  
        }
    }
}
for(let i=0; i<link.length; i++){
    link[i].onclick=function(){
        var divFull = document.getElementsByClassName('four');
        for(let j = 0; j<divFull.length; j++){
            if (!linkOne){
                linkOne = true
                divFull[j].style.display = 'block';}
            else{
            divFull[j].style.display = 'none';
            linkOne = false
            }  
        }
    }
}
for(let i=0; i<link.length; i++){
    link[i].onclick=function(){
        var divFull = document.getElementsByClassName('five');
        for(let j = 0; j<divFull.length; j++){
            if (!linkOne){
                linkOne = true
                divFull[j].style.display = 'block';}
            else{
            divFull[j].style.display = 'none';
            linkOne = false
            }  
        }
    }
}
