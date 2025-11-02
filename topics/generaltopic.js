
divs=document.getElementsByClassName("backbta")
for(let i=0; i<divs.length; i++){
    divs[i].onclick=function(){
             
        window.location.href="../topics.html"
    }
}

divs=document.getElementsByClassName("one")
for(let i=0; i<divs.length; i++){
    divs[i].onclick=function(){
        temp=window.location.href.slice(0,-19)+"subtopic_1/generalsubtopic.html"
        window.location.href=temp
      
    }
}
divs=document.getElementsByClassName("two")
for(let i=0; i<divs.length; i++){
    divs[i].onclick=function(){
       temp=window.location.href.slice(0,-19)+"subtopic_2/generalsubtopic.html"
        window.location.href=temp
          }
}
divs=document.getElementsByClassName("three")
for(let i=0; i<divs.length; i++){
    divs[i].onclick=function(){
       temp=window.location.href.slice(0,-19)+"subtopic_3/generalsubtopic.html"
        window.location.href=temp
          }
}
divs=document.getElementsByClassName("four")
for(let i=0; i<divs.length; i++){
    divs[i].onclick=function(){
       temp=window.location.href.slice(0,-19)+"subtopic_4/generalsubtopic.html"
        window.location.href=temp
          }
}

divs=document.getElementsByClassName("five")
for(let i=0; i<divs.length; i++){
    divs[i].onclick=function(){
       temp=window.location.href.slice(0,-19)+"subtopic_5/generalsubtopic.html"
        window.location.href=temp
          }
}