divs=document.getElementsByClassName("exit")
for(let i=0; i<divs.length; i++){
     divs[i].onclick=function(){
         window.location.href="../topics.html"
    }
}

divs=document.getElementsByClassName("one")
for(let i=0; i<divs.length; i++){
    divs[i].onclick=function(){
        window.location.href="subtopic_1/first.html"
    }
}
divs=document.getElementsByClassName("two")
for(let i=0; i<divs.length; i++){
    divs[i].onclick=function(){
        window.location.href="subtopic_2/first.html"
    }
}
divs=document.getElementsByClassName("three")
for(let i=0; i<divs.length; i++){
    divs[i].onclick=function(){
        window.location.href="subtopic_3/first.html"
    }
}
divs=document.getElementsByClassName("four")
for(let i=0; i<divs.length; i++){
    divs[i].onclick=function(){
        window.location.href="subtopic_4/first.html"
    }
}

