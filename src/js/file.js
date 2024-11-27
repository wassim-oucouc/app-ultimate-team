const cancelmodal = document.getElementById("cancel_button");
const modalplayers = document.getElementById("modal");
const overlay = document.getElementById("overlay");
const chosebputton = document.getElementById("chosebputton");
 const closeform = document.getElementById("close");
 const C = document.getElementById("form");
const addplayer = document.getElementById("addplayer");
C.style.display = "none";
modalplayers.style.display = "none";
overlay.style.display = "none";

addplayer.addEventListener("click",function(){
    C.style.display = "block";

})

closeform.addEventListener("click",function(){
    C.style.display = "none";
})

chosebputton.addEventListener("click",function(){
    modalplayers.style.display = "block";
    modalplayers.style.position = "block";
    overlay.style.display = "block";
    overlay.style.display = "block";
})


cancelmodal.addEventListener("click",function(){
    modalplayers.style.display = "none";
    overlay.style.display = "none";
})


function fetcher()
{
    
}







