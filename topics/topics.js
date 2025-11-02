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
    window.location.href="topic_1/choose_1.html";
});
document.getElementById("ener").addEventListener("click", ()=>{
    window.location.href="topic_2/choose_2.html";
});
document.getElementById("busin").addEventListener("click", ()=>{
    window.location.href="topic_3/choose_3.html";
});
document.getElementById("health").addEventListener("click", ()=>{
    window.location.href="topic_4/choose_4.html";
});


let idint= setInterval(() => scrl(), 3000);

function scrl(){
    window.scrollTo({
    top: 150,      
    left: 0,       
    behavior: 'smooth' 
    });
    setTimeout(() => 
    window.scrollTo({
    top: 0,      
    left: 0,       
    behavior: 'smooth' 
    }),200)
    
}

let moving=false;

document.addEventListener('mousemove', (event) => {
    clearInterval(idint);
});

function onMouseStop(callback, delay = 2000) {
  let timer;
  document.addEventListener('mousemove', () => {
    clearTimeout(timer);
    timer = setTimeout(callback, delay);
  });
}

onMouseStop(() => {
    if(window.scrollY===0){
    idint = setInterval(() => scrl(), 3000);
    }
}, 2000);








