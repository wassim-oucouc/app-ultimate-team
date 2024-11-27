const cancelmodal = document.getElementById("cancel_button");
const modalplayers = document.getElementById("modal");
const overlay = document.getElementById("overlay");
const chosebputton = document.getElementById("chosebputton");
 const closeform = document.getElementById("close");
 const C = document.getElementById("form");
const addplayer = document.getElementById("addplayer");

const batcards = document.getElementById("cards")
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


async function fetcher()
{
    const res = await fetch("/src/js/data/players.json");
    const file = await res.json();
    if(!res.ok)
    {
        console.log("Api not connected please check")
    }
    // console.log(res)

  file.players.forEach(element => {
    batcards.innerHTML += `
            <div class ="card"  draggable="true">
                <div class ="first-section" >
                <div class ="position-rating">
                    <h1 class ="rating">${element.rating}</h1>
                    <h1 class ="position">${element.position}</h1>
                    <img src=${element.logo} alt="club">
                </div>
                <div class ="image-name">
                <img src=${element.photo} alt="messi">
                <h1>${element.name}</h1>
            </div>
        </div>
        <div class ="informations">
            <div class ="first">
              <h1>${element.pace} PAC</h1>
              <h1>${element.shooting} SHO</h1>
              <h1>${element.passing} PAS</h1>
            </div>
            <div class ="second">
                <h1>${element.dribbling} DRI</h1>
                <h1>${element.defending} DEF</h1>
                <h1>${element.physical} PHY</h1>
            </div>
        </div>
            </div>
           </div>
        `
 });
 }
fetcher();






