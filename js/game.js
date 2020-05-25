const FRAMES_PER_SECOND = 60;
const images = window.loadImages(["background.jpg", "bed.png", "painting.png", "bookcase.png", "door.png", "tv.png", "laptop2.png", "table2.png", "consoles.png", "punching_bag2.png", "oven2.png", "fridge.png", "shower.png", "stickman.png"]);
const playerWidth = 152;

let canvas;
window.ctx;
let playerX = 50;
let playerDirectionX = 0;
let punchingBagProgress = 0

window.happiness = 50;
window.hygiene = 50;
window.smartz = 50;
window.energy = 50;
window.hunger = 50;
window.grade = 50;
window.fitness = 50;

const rooms = [window.room1, window.room2, window.room3, window.room4];
window.currentRoom = 1;
window.PLAYER_SPEED = 15;

window.showingDialogue = false;
window.dialogueText = "Hallo ich bin gay XDDDDDDDDDDDDDDDDDDDDD";
window.dialogueOptions = ["Rock", "Paper", "Scissors"];
window.dialogueCurrentlySelected = 0;
window.waitingForResponse = false;
window.currentMinigame = "";
window.waitingForSelection = false;
window.selected = false;


function main() {
    canvas = document.querySelector("#game-canvas");
    window.ctx = canvas.getContext("2d");

    canvas.width  = window.innerWidth;
    canvas.height = window.innerHeight;

    setInterval(function() {
        refreshScreen();
        movePlayer();
    }, 1000 / FRAMES_PER_SECOND);
}


function refreshScreen() {
  
    // ich hab verkackt dass es mit 0 beginnt und will es nicht �berall �ndern. too bad!
    drawRoom(rooms[window.currentRoom - 1]);

    if (window.showingDialogue == true) {
        window.ctx.fillStyle = "white";
        window.ctx.fillRect(260, 40, 1400, 1000);
      
        window.ctx.font = "30px Comic Sans MS";
        window.ctx.fillStyle = "purple";
        window.ctx.fillText(window.dialogueText, 400, 130);
        window.PLAYER_SPEED = 0;
        
          for (let i = 0; i < window.dialogueOptions.length; i++) {
            window.ctx.fillText(((i == window.dialogueCurrentlySelected) ? (" > ") : "   ") + window.dialogueOptions[i], 400, 200 + 50 * i);
        }
    } else {
        window.PLAYER_SPEED = 15;
    }

    if (window.currentMinigame == "punchingGame") {
        window.PLAYER_SPEED = 0;
        if (window.punchingBagProgress < 0) {
            window.fitness = window.fitness - 5
            window.currentMinigame = "";
            window.punchingBagProgress = 0.5;
            window.PLAYER_SPEED = 15;
        }
        else if (window.punchingBagProgress > 1) {
            window.fitness = Math.round(window.fitness + ((window.fitness >= 70) ? (40*5 / window.fitness) : 5));
            window.currentMinigame = "";
            window.punchingBagProgress = 0.5;
            window.PLAYER_SPEED = 15;
        } else {
            interactPunchingBag();
        }
        
        // window[window.currentMinigame]();
    } else if (window.currentMinigame == "cooking") {
        window.PLAYER_SPEED = 0;
        interactOven();
    }

    drawStats();
}


function drawRoom(room) {
    for (let item of room) {
        if (item[0] == "stickman") {
            item[1] = playerX;
        }
        window.ctx.drawImage(images[item[0]], item[1], item[2]);
    }
}


function movePlayer() {
    if ((playerX > 50 && playerDirectionX == -1) || (playerX < 1600 && playerDirectionX == 1)) {
        // 340 (bed)
        playerX += playerDirectionX * PLAYER_SPEED * (60 / FRAMES_PER_SECOND);
    }
}


let keyDown = false;
document.onkeydown = function(event) {
      switch (event.keyCode) {
        case 65: // A
            if (window.currentMinigame == "punchingGame") {
                  if (!keyDown) {
                    window.punchingBagProgress += 0.095;
                }
                keyDown = true;
            } else {
                playerDirectionX = -1;
            }
            break;
        case 68: // D
              if (window.currentMinigame == "punchingGame" && !keyDown) {
                if (!keyDown) {
                    window.punchingBagProgress += 0.095;
               }
                keyDown = true;
            } else {
                playerDirectionX = 1;
            }
            break;
        case 32: // SPACE
            if (window.waitingForSelection) {
                window.selected = true;
            } else {
                window["interactGeneral" + window.currentRoom](playerX, playerWidth);
            }
            break;
        case 87: // W
            if (window.showingDialogue) {
                window.dialogueCurrentlySelected = (window.dialogueCurrentlySelected - 1) % window.dialogueOptions.length;
            }
          case 83: // S
            if (window.showingDialogue) {
                window.dialogueCurrentlySelected = (window.dialogueCurrentlySelected + 1) % window.dialogueOptions.length;
            }
    }
}


document.onkeyup = function(event) {
    if (event.keyCode == 65 || event.keyCode == 68) {
        playerDirectionX = 0;
        keyDown = false;
    }
}


function increaseStat() {
    return
}


function drawDialogue(title, options, func) {
    if (window.showingDialogue) {
        func();
    } else {
        window.showingDialogue = true;
        window.dialogueOptions = options;
        window.dialogueText = title;
    }
}
window.drawDialogue = drawDialogue;


function drawStats() {
    window.ctx.fillStyle = "white";
    window.ctx.fillRect(0, 100, 1920, -100);
    window.ctx.fillStyle = "red";
    window.ctx.font = "40px Comic Sans MS";
    window.ctx.fillText(" " + window.happiness, 200, 60);
    window.ctx.fillText(" " + window.hygiene, 400, 60);
    window.ctx.fillText(" " + window.smartz, 600, 60);
    window.ctx.fillText(" " + window.energy, 800, 60);
    window.ctx.fillText(" " + window.hunger, 1000, 60);
    window.ctx.fillText(" " + window.grade, 1200, 60);
    window.ctx.fillText(" " + window.fitness, 1400, 60);
}


main();

