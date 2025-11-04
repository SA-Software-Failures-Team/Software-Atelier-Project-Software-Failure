
divs=document.getElementsByClassName("backbta")
for(let i=0; i<divs.length; i++){
    divs[i].onclick=function(){
             
        window.location.href="../topics.html"
    }
}
let n=0
divs=document.getElementsByClassName("one")
for(let i=0; i<divs.length; i++){
    divs[i].onclick=function(){


        if(sessionStorage.getItem("category")=="bug")
            n=1;
        else n=6;

        temp=window.location.href.slice(0,-19)+"subtopic_"+n+"/generalsubtopic.html"
        window.location.href=temp
      
    }
}
divs=document.getElementsByClassName("two")
for(let i=0; i<divs.length; i++){
    divs[i].onclick=function(){
           if(sessionStorage.getItem("category")=="bug")
                    n=2;
                else n=7;

                temp=window.location.href.slice(0,-19)+"subtopic_"+n+"/generalsubtopic.html"
                window.location.href=temp
    }
}
divs=document.getElementsByClassName("three")
for(let i=0; i<divs.length; i++){
    divs[i].onclick=function(){
        if(sessionStorage.getItem("category")=="bug")
            n=3;
        else n=8;

        temp=window.location.href.slice(0,-19)+"subtopic_"+n+"/generalsubtopic.html"
        window.location.href=temp
    }
}
divs=document.getElementsByClassName("four")
for(let i=0; i<divs.length; i++){
    divs[i].onclick=function(){
        if(sessionStorage.getItem("category")=="bug")
            n=4;
        else n=9;

        temp=window.location.href.slice(0,-19)+"subtopic_"+n+"/generalsubtopic.html"
        window.location.href=temp
    }
}

divs=document.getElementsByClassName("five")
for(let i=0; i<divs.length; i++){
    divs[i].onclick=function(){
        if(sessionStorage.getItem("category")=="bug")
            n=5;
        else n=10;

        temp=window.location.href.slice(0,-19)+"subtopic_"+n+"/generalsubtopic.html"
        window.location.href=temp
    }
}