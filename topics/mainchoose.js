let divs=document.getElementsByClassName("bug")
let temp;
for(let i=0; i<divs.length; i++){
     divs[i].onclick=function(){
        sessionStorage.setItem("category", "bug");
        temp=window.location.href.slice(0,-11) +"topicgeneral_b.html"
         window.location.href=temp

    }
}

divs=document.getElementsByClassName("vul")
for(let i=0; i<divs.length; i++){
    divs[i].onclick=function(){
        sessionStorage.setItem("category", "vul"); 
        console.log(sessionStorage.getItem("category"));
        temp=window.location.href.slice(0,-11) +"topicgeneral_v.html"
        window.location.href=temp
       

    }
}