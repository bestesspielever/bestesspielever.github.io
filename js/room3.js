window.room3 = [
    ["background", 0, 0],
    ["door", 50, 454],
    ["door", 1500, 454],
    ["punching_bag2", 1100, 450],
    ["shower", 425, 550],
    ["stickman", -1, 530]
]


function interactGeneral3(playerX, playerWidth) {
    let playerMiddle = playerX + playerWidth / 2;
    
      if (playerMiddle > 50 && playerMiddle < 50 + 196) {
        interactDoor1();
    } else if (playerMiddle > 1100 && playerMiddle < 1100 + 275) {
        interactPunchingBag();
    } else if (playerMiddle > 500 && playerMiddle < 500 + 280) {
        interactShower();
    } else if (playerMiddle > 1500 && playerMiddle < 1500 + 196) {
        interactDoor2();
    }
}
window.interactGeneral3 = interactGeneral3;

function interactDoor1() {
    window.currentRoom--;
}
window.interactDoor1 = interactDoor1;

window.punchingBagProgress = 0.5;
function interactPunchingBag() {
    if (!window.currentMinigame) {
        window.energy = window.changeStat(window.energy, -2);
    }
    window.punchingBagProgress -= 0.01;
    window.currentMinigame = "punchingGame";
    window.ctx.fillStyle = "black";
    window.ctx.fillRect(1400, 980, 450, 70); 
    window.ctx.fillStyle = "white";
    window.ctx.fillRect(1410, 990, 430, 50);
    window.ctx.fillStyle = "red";
    window.ctx.fillRect(1410, 990, 430 * window.punchingBagProgress, 50);
}
window.interactPunchingBag = interactPunchingBag;

function interactShower() {
    alert("Du stinkst.");
    
    window.hygiene = Math.round(window.hygiene + ((window.hygiene >= 70) ? (40*5 / window.hygiene) : 5));
    window.energy = window.changeStat(window.energy, -2);
    alert("jetzt nicht mehr");
}
window.interactShower = interactShower;

function interactDoor2() {
    window.currentRoom++;
}
window.interactDoor2 = interactDoor2;
