window.room2 = [
    ["background", 0, 0],
    ["door", 50, 454],
    ["door", 1500, 454],
    ["tv", 390, 525],
    ["table2", 885, 700],
    ["laptop2", 1080, 610],
    ["consoles", 390, 845],
    ["stickman", -1, 530],
]

function interactGeneral2(playerX, playerWidth) {
    let playerMiddle = playerX + playerWidth / 2;
    
  	if (playerMiddle > 50 && playerMiddle < 50 + 196) {
    	interactDoor1();
    } else if (playerMiddle > 1500 && playerMiddle < 1500 + 196) {
    	interactDoor2();
    } else if (playerMiddle > 390 && playerMiddle < 390 + 385) {
        interactTV();
    } else if (playerMiddle > 1080 && playerMiddle < 1080 + 142) {
    	interactLaptop();
    }
}
window.interactGeneral2 = interactGeneral2;

function interactDoor1() {
	window.currentRoom--;
}
window.interactDoor1 = interactDoor1;

function interactTV() {
    if (!showingDialogue) {
        window.energy = window.changeStat(window.energy, -2);
    }
  	window.drawDialogue("Rock paper scissors", ["Rock", "Paper", "Scissors"], function() {
    	let randomNumberRPS = Math.floor(Math.random() * 3) + 1;
          
        if (randomNumberRPS == 1) {
            // win
            window.happiness = window.changeStat(window.happiness, 5, true);
            window.showingDialogue = false;
        } else if (randomNumberRPS == 2) {
        	// tie
            window.happiness = window.changeStat(window.happiness, 1, true);
            window.showingDialogue = false;
        } else if (randomNumberRPS == 3) {
        	// lose
            window.happiness = window.changeStat(window.happiness, -3);
            window.showingDialogue = false;
        }
    });
}
window.interactTV = window.interactTV;

function interactLaptop() {
	alert("Du gehts in die Konferenz (und passt nicht auf).");
    window.grade = window.changeStat(window.grade, 5, true);
    window.energy = window.changeStat(window.energy, -2);
}
window.interactLaptop = interactLaptop;

function interactDoor2() {
	window.currentRoom++;
}
window.interactDoor2 = interactDoor2;