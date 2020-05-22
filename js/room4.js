
//export { interactGeneral4, room4, interactOven };

let cookingCursor = 1410;
let cookingCursorSpeed = 1

window.room4 = [
    ["background", 0, 0],
    ["door", 50, 454],
    ["fridge", 1000, 400],
    ["oven2", 600, 630],
    ["stickman", -1, 530]
]

function interactGeneral4(playerX, playerWidth) {
    let playerMiddle = playerX + playerWidth / 2;
    
      if (playerMiddle > 50 && playerMiddle < 50 + 196) {
        interactDoor();
    } else if (playerMiddle > 1000 && playerMiddle < 1000 + 250) {
        interactFridge();
    } else if (playerMiddle > 600 && playerMiddle < 600 + 250) {
        interactOven();
    }
}
window.interactGeneral4 = interactGeneral4;

function interactDoor() {
    window.currentRoom--;
}
window.interactDoor = interactDoor;

let cursorDirection = 1;
function interactOven() {
    window.currentMinigame = "cooking";
    window.ctx.fillStyle = "black";
    window.ctx.fillRect(1400, 980, 450, 70); 
    window.ctx.fillStyle = "white";
    window.ctx.fillRect(1410, 990, 430, 50);
    window.ctx.fillStyle = "red";
    window.ctx.fillRect(1615, 990, 20, 50);
    window.ctx.fillStyle = "gray";
    window.ctx.fillRect(1410,990, 150, 50);
    window.ctx.fillRect(1690, 990, 150, 50);
    window.ctx.fillStyle = "green";
    window.ctx.fillRect(1560, 990, 55, 50);
    window.ctx.fillRect(1635, 990, 55, 50);
    window.ctx.fillStyle = "blue";
    window.ctx.fillRect(cookingCursor, 990, 10, 50);
    cookingCursorSpeed = Math.floor(Math.random() * 2) + 3;
    if (cookingCursor > 1840)
        cursorDirection = -1
    else if (cookingCursor < 1410)
        cursorDirection = 1
    cookingCursor = cookingCursor + cursorDirection * cookingCursorSpeed
}
window.interactOven = interactOven;

function interactFridge() {
    window.drawDialogue("--- FRIDGE AHHHHHHHHH", ["Item1", "Item2", "Item3", "Item4", "Item5", "Item6", "Item7"], function() {
        window.waitingForSelection = true;
        if (window.selected) {
            alert(window.curretlySelected);
        }
    });
}
window.interactFridge = interactFridge;
