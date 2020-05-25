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
    window.smartz = window.changeStat(window.smartz, 5, true);
    window.energy = window.changeStat(window.energy, -2);
}
window.interactBookshelf = interactBookshelf;

function interactBed() {
    alert("Du gehst schlafen und träumst über Muhmann.");
    window.happiness = window.changeStat(window.happiness, -15);
    window.hygiene = window.changeStat(window.hygiene, -20);
    window.smartz = window.changeStat(window.smartz, -10);
    window.energy = 100;
    window.hunger = window.changeStat(window.hunger, -60);
    window.grade = window.changeStat(window.grade, -10);
    window.fitness = window.changeStat(window.fitness, -25);

    if (window.happiness == 0 || window.hygiene == 0 || hygiene.smartz == 0 || window.hunger == 0 || window.grade == 0 || window.fitness == 0) {
        clearInterval(window.mainLoop);
        setTimeout(function() {
            window.ctx.fillStyle = "black";
            window.ctx.fillRect(0, 0, 1920, 1080);
            window.ctx.fillStyle = "red";
            window.ctx.fillText("Du bist gestorben. Haha lol was kannst du eigentlich xDDDDD", 400, 500);
        }, 17);
    }
}
window.interactBed = interactBed;