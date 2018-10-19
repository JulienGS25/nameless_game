//Sets the current era
$('#era').text('Ancient Era')


//Local Storage functions
if (typeof(Storage) == "undefined") {
    document.getElementById('game-title').innerHTML = 'Web Storage Support is required for this game. Please update your browser to one of the versions shown at: https://www.w3schools.com/html/html5_webstorage.asp';
};

document.getElementById("save").addEventListener("click", saveGame);
document.getElementById("load").addEventListener("click", loadGame);
document.getElementById("reset").addEventListener("click", resetGame);

function saveGame(){
    var getData = {
        'foodAmount':resource.food,
        'woodAmount':resource.wood,
        'stoneAmount':resource.stone,
        'peopleAmount':resource.people
    }
    //Saves the data
    localStorage.setItem('dataKey', JSON.stringify(getData));

    //Outputs the data to the console for verification
    console.log('Saved the following data: ' + getData);
}

function loadGame(){
    var a = localStorage.getItem('dataKey');
    if (a == null){
        console.log('No data stored!');
    }
    else {console.log('Loaded the following data: ' + test);
    }
}

function resetGame(){
    localStorage.clear('value');
    console.log('Cleared data. Local storage is now empty.');
}

//Options
document.getElementById("diff-easy").addEventListener("click", setEasyDiff);
document.getElementById("diff-medium").addEventListener("click", setMediumDiff);
document.getElementById("diff-hard").addEventListener("click", setHardDiff);
document.getElementById("speed-slow").addEventListener("click", setSlowSpeed);
document.getElementById("speed-medium").addEventListener("click", setMediumSpeed);
document.getElementById("speed-fast").addEventListener("click", setFastSpeed);
document.getElementById("pause-game").addEventListener("click", pauseGame);
document.getElementById("resume-game").addEventListener("click", resumeGame);
document.getElementById("small-font").addEventListener("click", setSmallFont);
document.getElementById("medium-font").addEventListener("click", setMediumFont);
document.getElementById("large-font").addEventListener("click", setLargeFont);
document.getElementById("export-game").addEventListener("click", exportGame);
document.getElementById("import-game").addEventListener("click", importGame);

function setEasyDiff(){
    console.log('TODO');
}
function setMediumDiff(){
    console.log('TODO');
}
function setHardDiff(){
    console.log('TODO');
}
function setSlowSpeed(){
    console.log('TODO');
}
function setMediumSpeed(){
    console.log('TODO');
}
function setFastSpeed(){
    console.log('TODO');
}
function pauseGame(){
    gameSpeed = 0;
}
function resumeGame(){
    console.log('TODO');
}
function setSmallFont(){
    $('html').css('font-size','0.65vw');
}
function setMediumFont(){
    $('html').css('font-size','0.85vw');
}
function setLargeFont(){
    $('html').css('font-size','1vw');
}
function importGame(){
    console.log('TODO');
}
function exportGame(){
    console.log('TODO');
}

tempDirection = 0.01;
function fluctuateTemp() {
  currentTemp += tempDirection;
  if (currentTemp < -30) tempDirection = 0.01;
  if (currentTemp > 35) tempDirection = -0.01;
}

function tempCheck(){
    if (currentTemp < 0){
        if (coolMsgDisplayed == 0){
            logText("It's getting a little chilly.");
            coolMsgDisplayed = 1;
        }
        document.getElementById("temp-message").innerHTML = "Cool";
    }
    if (currentTemp < -20){
        if (coldMsgDisplayed == 0){
           logText("Water has frozen solid, the landscape is covered in snow and ice and you can see your breath.");
           coldMsgDisplayed = 1;
        }
        document.getElementById("temp-message").innerHTML = "Cold";
    }
    if (currentTemp > 0 && currentTemp < 15){
        if (warmerMsgDisplayed == 0 && coldMsgDisplayed == 1){
            logText("Snow is melting and trees are growing leaves again.");
            warmerMsgDisplayed = 1;
        }
        document.getElementById("temp-message").innerHTML = "Cool";
    }
    if (currentTemp > 15 && currentTemp < 30){
        if (warmMsgDisplayed == 0 && warmerMsgDisplayed == 1){
            logText("The sun is shining and you are quite comfortable now.");
            warmMsgDisplayed = 1;
        }
        document.getElementById("temp-message").innerHTML = "Warm";
    }
    if (currentTemp > 30){
        if (hotMsgDisplayed == 0 && warmMsgDisplayed == 1){
            logText("Summer is in full heat now.");
            hotMsgDisplayed = 1;
        }
        document.getElementById("temp-message").innerHTML = "Hot";
    }
}

//Activates developer mode for easier testing
if (devMode == 1){
    activateDevMode();
};

function activateDevMode(){
    document.getElementById('dev-mode').innerHTML = 'DEV MODE';
    resource.food = storage.food;
    resource.wood = storage.wood;
    resource.stone = storage.stone;
    gameSpeed = 50;
    console.log('Dev Mode Activated. All buildings are free.');
    setAllFree();
};

function setAllFree(){
    for (i = 0; i < buildings.length; i++){
        if (buildings[i].costs_1 !== undefined){
            buildings[i].costs_1_amount = 0;
        }
        if (buildings[i].costs_2 !== undefined){
            buildings[i].costs_2_amount = 0;
        }
        if (buildings[i].costs_3 !== undefined){
            buildings[i].costs_3_amount = 0;
        }
        if (buildings[i].costs_4 !== undefined){
            buildings[i].costs_4_amount = 0;
        }
        if (buildings[i].costs_5 !== undefined){
            buildings[i].costs_5_amount = 0;
        }
    }
}

//Fixes rogue decimals
function prettify(input){
    var output = Math.round(input * 10000000)/10000000;
        return Math.trunc(output);
}





function manageResources() {
    var resLength = Object.keys(resource).length;
    
    for (j = 0; j < resLength; j++) {
        var currResourceNm = Object.keys(resource)[j];
        //If resources went over their storage limit, resets them to the storage limit
        if (resource[currResourceNm] > storage[currResourceNm]){
            console.log('Resource went over maximum. Resetting.');
            resource[currResourceNm] = storage[currResourceNm];
        };
        //If resources go below zero, resets them to zero.
        if (resource[currResourceNm] < 0){
            console.log('Resource went below zero. Resetting.');
            resource[currResourceNm] = 0;
        };
    };
    

    if (buildings[0].built == 1) {
        //Campfire is built, people start showing
        if (firstPersonJoined == 0) {
            resource.people++;
            firstPersonJoined = 1;
        }


    }
}



var executed = false;
// Game loop
function gameLoop(){
    window.setInterval(function(){
        //getFood(foragers);
        //getWood(lumberjacks);
        //getStone(miners);
        passedTime++;
        fluctuateTemp();
        tempCheck();
        manageResources();

        if (passedTime >= 2 && events.wakeUp == 0){
            wakeUp();
        }
        if (passedTime >= 5){
            show('.middle-tab', 500);
        }    
        if (passedTime >= 10 && events.lightningStrike == 0 && state != 7) {
            discoverFire();
        }

        document.getElementById('time').innerHTML = passedTime + ' seconds.';
        document.getElementById('temp').innerHTML = prettify(currentTemp) + '°C.';
        document.getElementById("people").innerHTML = prettify(resource.people);
        document.getElementById("people-storage").innerHTML = prettify(storage.people);
        document.getElementById("p-res-1-amt").innerHTML = prettify(resource.food);
        document.getElementById("p-res-1-storage").innerHTML = prettify(storage.food);
        document.getElementById("p-res-2-amt").innerHTML = prettify(resource.wood);
        document.getElementById("p-res-2-storage").innerHTML = prettify(storage.wood);
        document.getElementById("p-res-3-amt").innerHTML = prettify(resource.stone);
        document.getElementById("p-res-3-storage").innerHTML = prettify(storage.stone);

    }, gameSpeed)
};

$(document).ready(function(){
    gameLoop()
});
