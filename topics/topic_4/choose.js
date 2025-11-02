let divs=document.getElementsByClassName("bug")
for(let i=0; i<divs.length; i++){
     divs[i].onclick=function(){
         window.location.href="topicgeneral_bug.html"
    }
}

divs=document.getElementsByClassName("vul")
for(let i=0; i<divs.length; i++){
    divs[i].onclick=function(){
             
       
        window.location.href="topicgeneral_vulnerabilities.html"
    }
}