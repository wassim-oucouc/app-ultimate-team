const cancelmodal = document.getElementById("cancel_button");
const modalplayers = document.getElementById("modal");
const overlay = document.getElementById("overlay");
const chosebputton = document.getElementById("chosebputton");
 const closeform = document.getElementById("close");
 const form = document.getElementById("form");
const addplayer = document.getElementById("addplayer");
const errorrating = document.querySelector(".errormsg");

const goalkepperdiv = document.querySelector(".positionfirst");

const batcards = document.getElementById("cards")
form.style.display = "none";
modalplayers.style.display = "none";
overlay.style.display = "none";

addplayer.addEventListener("click",function(){
    form.style.display = "block";

})

overlay.addEventListener("click",function(){
    modalplayers.style.display = "none";
    overlay.style.display = "none";

})

closeform.addEventListener("click",function(){
    form.style.display = "none";
    event.preventDefault();
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
// function ajoute()
// {
//     const  nameplayer= document.getElementById("name");
//     const photoplayer = document.getElementById("photo");
     
// }

submitButton.addEventListener("click",function(e){
    e.preventDefault();
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


const leftwing = document.querySelector(".left-wing");
const rightwing = document.querySelector(".right-wing");
const centralleft = document.querySelector(".central-left")
const centralcenter = document.querySelector(".central-center");
const centralright = document.querySelector(".central-right");
const leftback = document.querySelector(".left-back");
const centralleftback = document.querySelector(".center-back-left");
const centralrightback = document.querySelector(".center-back-right");
const rightback = document.querySelector(".right-back");
const st = document.querySelector(".st");


console.log(valueselect.value)
if(valueselect.value == "GK")
{
    if( goalkepperdiv.innerHTML === "")
    {
    goalkepperdiv.innerHTML = `
  
    <div class ="card"  draggable="true">
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
            C.style.display ="none";
            name.value = "";
            photourl.value = "";
            valueselect.value =  "";
            nationality.value =  "";
            clubname.value =  "";
            club.value =  "";
             rating.value =  "";
             pace.value =  "";
            shooting.value =  "";
            pass.value =  "";
            dribbling.value =  "";
            defending.value =  "";
            physical.value = "";

}
batcards.innerHTML += `<div class ="card"  draggable="true">
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
            </div>`

    
}
else if(valueselect.value == "RB")
{
    rightback.innerHTML = `<div id="position1 goalkeeper" class="player-position1 positionfirst">
    <div class ="card"  draggable="true">
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
            </div>`
            C.style.display ="none";
     name.value = "";
photourl.value = "";
valueselect.value =  "";
nationality.value =  "";
clubname.value =  "";
club.value =  "";
 rating.value =  "";
 pace.value =  "";
shooting.value =  "";
pass.value =  "";
dribbling.value =  "";
defending.value =  "";
physical.value = "";
}
else if(valueselect.value == "LB")
    {
        leftback.innerHTML = `<div id="position1 goalkeeper" class="player-position1 positionfirst">
        <div class ="card"  draggable="true">
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
                </div>`
                C.style.display ="none";
         name.value = "";
    photourl.value = "";
    valueselect.value =  "";
    nationality.value =  "";
    clubname.value =  "";
    club.value =  "";
     rating.value =  "";
     pace.value =  "";
    shooting.value =  "";
    pass.value =  "";
    dribbling.value =  "";
    defending.value =  "";
    physical.value = "";
    }
else if(valueselect.value == "CB-LEFT")
    {
        centralleftback.innerHTML = `<div id="position1 goalkeeper" class="player-position1 positionfirst">
        <div class ="card"  draggable="true">
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
                </div>`
                C.style.display ="none";
         name.value = "";
    photourl.value = "";
    valueselect.value =  "";
    nationality.value =  "";
    clubname.value =  "";
    club.value =  "";
     rating.value =  "";
     pace.value =  "";
    shooting.value =  "";
    pass.value =  "";
    dribbling.value =  "";
    defending.value =  "";
    physical.value = "";
    }
    
    else if(valueselect.value == "CB-RIGHT")
        {
            centralrightback.innerHTML = `<div id="position1 goalkeeper" class="player-position1 positionfirst">
            <div class ="card"  draggable="true">
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
                    </div>`
                    C.style.display ="none";
             name.value = "";
        photourl.value = "";
        valueselect.value =  "";
        nationality.value =  "";
        clubname.value =  "";
        club.value =  "";
         rating.value =  "";
         pace.value =  "";
        shooting.value =  "";
        pass.value =  "";
        dribbling.value =  "";
        defending.value =  "";
        physical.value = "";
        }
        else if(valueselect.value == "CM-RIGHT")
            {
                centralright.innerHTML = `<div id="position1 goalkeeper" class="player-position1 positionfirst">
                <div class ="card"  draggable="true">
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
                        </div>`
                        C.style.display ="none";
                 name.value = "";
            photourl.value = "";
            valueselect.value =  "";
            nationality.value =  "";
            clubname.value =  "";
            club.value =  "";
             rating.value =  "";
             pace.value =  "";
            shooting.value =  "";
            pass.value =  "";
            dribbling.value =  "";
            defending.value =  "";
            physical.value = "";
            }
            else if(valueselect.value == "CM-CENTER")
                {
                    centralcenter.innerHTML = `<div id="position1 goalkeeper" class="player-position1 positionfirst">
                    <div class ="card"  draggable="true">
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
                            </div>`
                            C.style.display ="none";
                     name.value = "";
                photourl.value = "";
                valueselect.value =  "";
                nationality.value =  "";
                clubname.value =  "";
                club.value =  "";
                 rating.value =  "";
                 pace.value =  "";
                shooting.value =  "";
                pass.value =  "";
                dribbling.value =  "";
                defending.value =  "";
                physical.value = "";
                }
                else if(valueselect.value == "CM-LEFT")
                    {
                        centralleft.innerHTML = `<div id="position1 goalkeeper" class="player-position1 positionfirst">
                        <div class ="card"  draggable="true">
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
                                </div>`
                                C.style.display ="none";
                         name.value = "";
                    photourl.value = "";
                    valueselect.value =  "";
                    nationality.value =  "";
                    clubname.value =  "";
                    club.value =  "";
                     rating.value =  "";
                     pace.value =  "";
                    shooting.value =  "";
                    pass.value =  "";
                    dribbling.value =  "";
                    defending.value =  "";
                    physical.value = "";
                    }
                    else if(valueselect.value == "RW")
                        {
                            rightwing.innerHTML = `<div id="position1 goalkeeper" class="player-position1 positionfirst">
                            <div class ="card"  draggable="true">
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
                                    </div>`
                                    C.style.display ="none";
                             name.value = "";
                        photourl.value = "";
                        valueselect.value =  "";
                        nationality.value =  "";
                        clubname.value =  "";
                        club.value =  "";
                         rating.value =  "";
                         pace.value =  "";
                        shooting.value =  "";
                        pass.value =  "";
                        dribbling.value =  "";
                        defending.value =  "";
                        physical.value = "";
                        }
                        else if(valueselect.value == "LW")
                            {
                                leftwing.innerHTML = `<div id="position1 goalkeeper" class="player-position1 positionfirst">
                                <div class ="card"  draggable="true">
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
                                        </div>`
                                        C.style.display ="none";
                                 name.value = "";
                            photourl.value = "";
                            valueselect.value =  "";
                            nationality.value =  "";
                            clubname.value =  "";
                            club.value =  "";
                             rating.value =  "";
                             pace.value =  "";
                            shooting.value =  "";
                            pass.value =  "";
                            dribbling.value =  "";
                            defending.value =  "";
                            physical.value = "";
                            }

})

function createCard(inputs) {
        return `
            <div class="card" draggable="true">
                <div class="first-section">
                    <div class="position-rating">
                        <h1 class="rating">${inputs.rating.value}</h1>
                        <h1 class="positio">${inputs.valueselect.value}</h1>
                        <img src="${inputs.club.value}" alt="club">
                    </div>
                    <div class="image-name">
                        <img src="${inputs.photourl.value}" alt="player">
                        <h1>${inputs.name.value}</h1>
                        <p>${inputs.clubname.value}</p>
                    </div>
                </div>
                <div class="informations">
                    <div class="first">
                        <h1>${inputs.pace.value} PAC</h1>
                        <h1>${inputs.shooting.value} SHO</h1>
                        <h1>${inputs.pass.value} PAS</h1>
                    </div>
                    <div class="second">
                        <h1>${inputs.dribbling.value} DRI</h1>
                        <h1>${inputs.defending.value} DEF</h1>
                        <h1>${inputs.physical.value} PHY</h1>
                    </div>
                </div>
            </div>`;
    }
   
 



//  function formvalidation()
//  {
//     const inputvalue = document.getElementById("rating")
//     const regexexpression = /[0-100]/
//  }
fetcher();






