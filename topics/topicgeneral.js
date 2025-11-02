divs=document.getElementsByClassName("exit")
for(let i=0; i<divs.length; i++){
     divs[i].onclick=function(){

        if(sessionStorage.getItem("category")=="bug"){

            temp=window.location.href.slice(0,-31)+"topicgeneral_b.html"
            window.location.href=temp
        }
        else{
             temp=window.location.href.slice(0,-31)+"topicgeneral_v.html"
            window.location.href=temp
        }
    }
}

