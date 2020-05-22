export { interactGeneral2, room2 };

const room2 = [
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

function interactDoor1() {
	window.currentRoom--;
}

function interactTV() {
  	window.drawDialogue("Rock paper scissors", ["Rock", "Paper", "Scissors"], function() {
    	let randomNumberRPS = Math.floor(Math.random() * 3) + 1;
          
        if (randomNumberRPS == 1) {
        	// win
            window.happiness = Math.round(window.happiness + ((window.happiness >= 70) ? (40*5 / window.happiness) : 5));
            window.showingDialogue = false;
        } else if (randomNumberRPS == 2) {
        	// tie
            window.happiness = Math.round(window.happiness + ((window.happiness >= 70) ? (0) : 1));
            window.showingDialogue = false;
        } else if (randomNumberRPS == 3) {
        	// lose
            window.happiness = window.happiness - 3;
            window.showingDialogue = false;
        }
    });
}

function interactLaptop() {
	alert("laptop");
}

function interactDoor2() {
	window.currentRoom++;
}