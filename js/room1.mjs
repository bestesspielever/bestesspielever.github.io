export { interactGeneral1, room1 };

const room1 = [
    ["background", 0, 0],
    ["painting", 200, 100],
    ["bookcase", 850, 414],
    ["door", 1300, 454],
    ["stickman", -1, 530],
    ["bed", 50, 750]
]

function interactGeneral1(playerX, playerWidth) {
    let playerMiddle = playerX + playerWidth / 2;
    
    if (playerMiddle > 1300 && playerMiddle < 1300 + 196) {
        interactDoor();
    }
    else if (playerMiddle > 850 && playerMiddle < 850 + 228) {
        interactBookshelf();
    }
    else if (playerMiddle > 50 && playerMiddle < 50 + 468) {
        interactBed();
    }
}

function interactDoor() {
    window.currentRoom = 2;
}
       
function interactBookshelf() {
    alert("BOOKSHELF XFDDDD");
}

function interactBed() {
    alert("BETT OMG IST DAS KRASS");
}
