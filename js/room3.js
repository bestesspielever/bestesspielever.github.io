
export { interactGeneral3, room3, interactPunchingBag };

const room3 = [
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


function interactDoor1() {
    window.currentRoom++;
}


window.punchingBagProgress = 0.5;
function interactPunchingBag() {
    window.punchingBagProgress -= 0.01;
    window.currentMinigame = "punchingGame";
    window.ctx.fillStyle = "black";
    window.ctx.fillRect(1400, 980, 450, 70); 
    window.ctx.fillStyle = "white";
    window.ctx.fillRect(1410, 990, 430, 50);
    window.ctx.fillStyle = "red";
    window.ctx.fillRect(1410, 990, 430 * window.punchingBagProgress, 50);
}


function interactShower() {
    alert("shower yey3");
}


function interactDoor2() {
    window.currentRoom++;
}

