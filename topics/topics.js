    let divs=document.getElementsByClassName("windows")
            for(let i=0; i<divs.length; i++){
                divs[i].addEventListener("mouseover", ()=>(
                    document.getElementById("mtitl").style.display="none"
                ));
                divs[i].addEventListener("mouseleave", ()=>(
                    document.getElementById("mtitl").style.display="block"
                ));
            }


document.getElementById("trans").addEventListener("click", ()=>{
    window.location.href="topic_1/topic_1_general.html";
});
document.getElementById("ener").addEventListener("click", ()=>{
    window.location.href="topic_2/topic_2_general.html";
});
document.getElementById("busin").addEventListener("click", ()=>{
    window.location.href="topic_3/topic_3_general.html";
});
document.getElementById("health").addEventListener("click", ()=>{
    window.location.href="topic_4/topic_4_general.html";
});

