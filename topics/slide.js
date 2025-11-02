
let pos=0;

while(true){


    let divs=document.getElementsByClassName("divslide");
    for(let i=0; i<divs.length; i++){
        
        divs[i].style.right=`${pos}px`; 
        pos+=1;
    }

}