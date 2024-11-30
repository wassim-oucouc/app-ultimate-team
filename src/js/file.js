//  MODAL REMOVE AND CHANGE 

const modalremove = document.querySelector("#popup-modal")
const closemodal = document.querySelector(".close-modal")
const modalchoix = document.querySelector("#popup-modal")
const changeplayer = document.getElementById("change")
const removeplayer = document.querySelector("#remove")
// FOR MODAL 

// HIDE MODAL
modalremove.style.display = "none";

const cancelmodal = document.getElementById("cancel_button");
const modalplayers = document.getElementById("modal");
// const overlay = document.getElementById("overlay");
// FORM 
const chosebputton = document.getElementById("chosebputton");
const closeform = document.getElementById("close");
const form = document.getElementById("form");
const addplayer = document.getElementById("addplayer");
const errorrating = document.querySelector(".errormsg");
//
// CLOSE MODAL REMOVE 
modalremove.addEventListener("click",function(){
    modalremove.style.display = "none";
})


// CHANGE PLAYER
changeplayer.addEventListener("click",function(){
    modalplayers.style.display = "block";
    modalchoix.style.display ="none";

})


 // ELEMENTS OF INPUTS FORM
 const name = document.getElementById("name");
 const photourl = document.getElementById("photo");
 const valueselect = document.getElementById("position");
 const nationality = document.getElementById("nationality");
 const clubname = document.getElementById("club");
 const club = document.getElementById("logo");
 const rating = document.getElementById("rating");
 const pace = document.getElementById("pace");
 const shooting = document.getElementById("shooting");
 const pass = document.getElementById("passing")
 const dribbling = document.getElementById("dribbling");
 const defending = document.getElementById("defending");
 const physical = document.getElementById("physical");

// CARDS PLAYERS MODAL
const batcards = document.getElementById("cards")
form.style.display = "none";

// overlay.style.display = "none";
// BUTTON ADD PLAYER TO DISPLAY THE FORM
addplayer.addEventListener("click", function () {
    form.style.display = "block";

})

// overlay.addEventListener("click", function () {
//     modalplayers.style.display = "none";
//     overlay.style.display = "none";

// })

closeform.addEventListener("click", function (event) {
    event.preventDefault();
    form.style.display = "none";
});

chosebputton.addEventListener("click", function () {
    modalplayers.style.display = "block";
    // overlay.style.display = "block";

})


cancelmodal.addEventListener("click", function () {
    modalplayers.style.display = "none";
    // overlay.style.display = "none";
})


async function fetcher() {
    const res = await fetch("/src/js/data/players.json");
    console.log(res)
    const file = await res.json();
    if (!res.ok) {
        console.log("Api not connected please check")
    }
    // console.log(res)

    file.players.forEach(element => {
        batcards.innerHTML += `
            <div id ="card" class ="card"   draggable="true">
                <div class ="first-section" >
                <div class ="position-rating">
                    <h1 class ="rating">${element.rating}</h1>
                    <h1 class ="positio">${element.position}</h1>
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
           </div>        `
    });
}
fetcher();
// function ajoute()
// {
//     const  nameplayer= document.getElementById("name");
//     const photoplayer = document.getElementById("photo");

// }
function ajoute() {
    
    submitButton.addEventListener("click", function (e) {
        
        e.preventDefault();

        if(!validateInputs())
        {
            return;
        }
       
        const players = [];
        // const childplayer ={
        //     // nameplayer : name.value,
        //     // photourlplayer : photourl.value,
        //     // valueselectplayer : valueselect.value,
        //     // nationalityplayer : nationality.value,
        //     // clubnameplayer : clubname.value,
        //     // ratingplayer : rating.value,
        //     // paceplayer : pace.value,
        //     // shootingplayer : shooting.value,
        //     // passplayer : pass.value,
        //     // dribblingplayer : dribbling.value,
        //     // defendingplayer : defending.value,
        //     // physicalplayer : physical.value
        // }
            if (valueselect.value == "GK") {
                batcards.innerHTML += `
                 <div class ="card" id ="card" >
                    <div class ="first-section" >
                    <div class ="position-rating">
                        <h1 class ="rating">${rating.value}</h1>
                        <h1 class ="positio">${valueselect.value}</h1>
                        <img src=${club.value} alt="club">
                    </div>
                    <div class ="image-name">
                    <img src=${photourl.value} alt="messi">
                    <h1>${name.value}</h1>
                    <p>${clubname.value}</p>
                </div>
            </div>
            <div class ="informations">
                <div class ="first">
                  <h1>${pace.value} DIV</h1>
                  <h1>${shooting.value} HAND</h1>
                  <h1>${pass.value} KICK</h1>
                </div>
                <div class ="second">
                    <h1>${dribbling.value} REF</h1>
                    <h1>${defending.value} SP</h1>
                    <h1>${physical.value} POSI</h1>
                </div>
            </div>
                </div>
                </div>
                `
                form.style.display = "none";
                form.reset();
                name.value = "";
                photourl.value = "";
                valueselect.value = "";
                nationality.value = "";
                clubname.value = "";
                club.value = "";
                rating.value = "";
                pace.value = "";
                shooting.value = "";
                pass.value = "";
                dribbling.value = "";
                defending.value = "";
                physical.value = "";
                window.alert("THE PLAYER HAS BEEN ADDED!")
    
            }
            else {
               
                batcards.innerHTML += `
                  <div class ="card" id ="card" >
                    <div class ="first-section" >
                    <div class ="position-rating">
                        <h1 class ="rating">${rating.value}</h1>
                        <h1 class ="positio">${valueselect.value}</h1>
                        <img src=${club.value} alt="club">
                    </div>
                    <div class ="image-name">
                    <img src=${photourl.value} alt="messi">
                    <h1>${name.value}</h1>
                    <p>${clubname.value}</p>
                </div>
            </div>
            <div class ="informations">
                <div class ="first">
                  <h1>${pace.value} DIV</h1>
                  <h1>${shooting.value} HAND</h1>
                  <h1>${pass.value} PAS</h1>
                </div>
                <div class ="second">
                    <h1>${dribbling.value} SP</h1>
                    <h1>${defending.value} DEF</h1>
                    <h1>${physical.value} PHY</h1>
                </div>
            </div>
                </div>
                </div>
                `
       // DISPLAY NONE FORM AFTER ADDING PLAYER
       form.style.display = "none";

       // TO CLEAR INPUTS
       name.value = "";
       photourl.value = "";
       valueselect.value = "";
       nationality.value = "";
       clubname.value = "";
       club.value = "";
       rating.value = "";
       pace.value = "";
       shooting.value = "";
       pass.value = "";
       dribbling.value = "";
       defending.value = "";
       physical.value = "";
       
    
            }
        })
      
      

     





    console.log(document.querySelectorAll(".card"))

}
ajoute();
let cardclick = null;
let playercard = null;
function test() {
    const children = batcards.children;
    const cards_first = document.querySelectorAll(".player-position1");
    const modal = document.getElementById("modal");
    const playersselect = document.querySelectorAll(".playercard");

    cards_first.forEach(function (card) {
        card.addEventListener("click", function () {
            cardclick = card;
            console.log(cardclick);
const array = Array.from(children)
        console.log(array)
        const child = document.querySelectorAll(".card");
        array.forEach(function(players)
            {
                players.addEventListener("click",function(clickedplayer){
                    console.log("the card is clicked",players)
                    playercard = players;

                    // console.log(typeof(playercard));
                    cardclick.innerHTML = '';
                    // console.log(cardclick)
                    cardclick.appendChild(playercard);
                    modalplayers.style.display = "none";
                    })

            })
        })
        

         
           

        });

}

test();



function createCard(player) {
    return `
        <div id="card" class="card playercard">
            <div class="first-section">
                <div class="position-rating">
                    <h1 class="rating">${player.rating}</h1>
                    <h1 class="position">${player.position}</h1>
                    <img src="${player.logo}" alt="club">
                </div>
                <div class="image-name">
                    <img src="${player.photo}" alt="player">
                    <h1>${player.name}</h1>
                </div>
            </div>
            <div class="informations">
                <div class="first">
                    <h1>${player.pace} PAC</h1>
                    <h1>${player.shooting} SHO</h1>
                    <h1>${player.passing} PAS</h1>
                </div>
                <div class="second">
                    <h1>${player.dribbling} DRI</h1>
                    <h1>${player.defending} DEF</h1>
                    <h1>${player.physical} PHY</h1>
                </div>
            </div>
        </div>`;
}

function validateInputs() {
    if (!name.value.trim() || !rating.value || !pace.value || !shooting.value) {
        alert("Please fill in all required fields!");
        return false;
    }
    if (rating.value < 0 || rating.value > 100) {
        alert("Rating should be between 0 and 100.");
        return false;
    }
    return true;
}


// function changeformation()
// {
//     const formation = document.querySelector(".selector")
//     console.log(formation.value)
//     const firstposition = document.querySelector(".first")
//     console.log(firstposition)
//     const secondposition = document.querySelector(".second")
//     console.log(secondposition)
//     const positionchild = document.querySelector(".player-position1")
//     console.log(positionchild)


//     if(formation.value == "4-3-2")
//     {
//        console.log("selected")
//     }
// }

// changeformation()

