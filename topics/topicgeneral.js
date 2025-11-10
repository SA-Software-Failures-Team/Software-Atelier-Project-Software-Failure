/* Author: Davide Scapellato */


divs = document.getElementsByClassName("exit");
for (let i = 0; i < divs.length; i++) {
    divs[i].onclick = function() {

        // get current path and remove the last file
        let parts = window.location.pathname.split("/");
        parts.pop(); // remove current page (e.g. generalsubtopic.html)
        parts.pop(); // remove current page (e.g. generalsubtopic.html)
        let base = parts.join("/");

        if (sessionStorage.getItem("category") == "bug") {
            temp = base + "/topicgeneral_b.html";
            window.location.href = temp;
        } else {
            temp = base + "/topicgeneral_v.html";
            window.location.href = temp;
        }
    };
}



divs=document.getElementsByClassName("one")
for(let i=0; i<divs.length; i++){
    divs[i].onclick=function(){
        temp=window.location.href.slice(0,-20)+"first.html"
        window.location.href=temp
      
    }
}
divs=document.getElementsByClassName("two")
for(let i=0; i<divs.length; i++){
    divs[i].onclick=function(){
       temp=window.location.href.slice(0,-20)+"second.html"
        window.location.href=temp
          }
}
divs=document.getElementsByClassName("three")
for(let i=0; i<divs.length; i++){
    divs[i].onclick=function(){
       temp=window.location.href.slice(0,-20)+"third.html"
        window.location.href=temp
          }
}
divs=document.getElementsByClassName("four")
for(let i=0; i<divs.length; i++){
    divs[i].onclick=function(){
       temp=window.location.href.slice(0,-20)+"fourth.html"
        window.location.href=temp
          }
}

divs=document.getElementsByClassName("five")
for(let i=0; i<divs.length; i++){
    divs[i].onclick=function(){
       temp=window.location.href.slice(0,-20)+"fifth.html"
        window.location.href=temp
          }
}