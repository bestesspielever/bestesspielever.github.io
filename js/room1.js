//export { interactGeneral1, room1 };

window.room1 = [
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
        window.currentRoom = 2;
    }
    else if (playerMiddle > 850 && playerMiddle < 850 + 228) {
        interactBookshelf();
    }
    else if (playerMiddle > 50 && playerMiddle < 50 + 468) {
        interactBed();
    }
}
window.interactGeneral1 = interactGeneral1;
       
function interactBookshelf() {
    alert("Du ließt das Buch \"Corn in the Corner\". :O");
    window.smartz = Math.round(window.smartz + ((window.smartz >= 70) ? (40*5 / window.smartz) : 5));
    window.energy -= 2;
}
window.interactBookshelf = interactBookshelf;

function interactBed() {
    alert("Du gehst schlafen und träumst über Muhmann.");
    window.happiness -= 15;
    window.hygiene -= 20;
    window.smartz -= 10;
    window.energy = 100;
    window.hunger -= 60;
    window.grade -= 100;
    window.fitness -= 50;
}
window.interactBed = interactBed;