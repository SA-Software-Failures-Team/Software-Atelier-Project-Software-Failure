/* 
Toggle menu script
 */
function toggleMenu() {
    var navFull = document.getElementsByClassName('nav')[0];
    var mainContent = document.getElementsByTagName('main')[0]; 
    navFull.classList.toggle('menu-open-full');
    mainContent.classList.toggle('main-pushed'); 
}


var link1 = { val:false};
var link2 = { val:false};
var link3 = { val:false};
var link4 = { val:false};
var link5 = { val:false};

function makeVisible(id, linkval){
    
    let link=document.getElementById(id);
    let class2="one";
    switch(id){
        case "n1":
            class2="one";
            break;
        case "n2":
            class2="two";
            break;
        case "n3":
            class2="three";
            break;
        case "n4":
            class2="four";
            break;
        case "n5":
            class2="five";
            break;
    }

    link.addEventListener("click", function(event){
    
        if(!linkval.val){
            linkval.val = true
            document.getElementById(class2).style.display = "block";
        }else{
            linkval.val = false
            document.getElementById(class2).style.display = "none";
        }
    })
}



makeVisible("n1", link1);
makeVisible("n2", link2);
makeVisible("n3", link3);
makeVisible("n4", link4);
makeVisible("n5", link5);


