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
        //Saves all objects
        resource,
        speed,
        efficiency,
        storage,
        events,
        messages,
        visible,
        jobs,
        buildings,
        research,
        //Saves all global variables
        exploredArea,
        passedTime,
        currentTemp,
        gameSpeed,
        tooltipShown,
        pollutionLevel,
        foodConsumption
    }

    //Saves the data
    localStorage.setItem('gameData', JSON.stringify(getData));
    console.log('Game data saved!');
}

function loadGame(){
    var gameData = localStorage.getItem('gameData');
    if (gameData == null){
        console.log('No data stored!');
    }
    //Game is found, loading data
    else {
        var gameObject = JSON.parse(gameData);
        //console.log(gameData)
        //console.log(gameObject)

        resource = gameObject.resource;
        speed = gameObject.speed;
        efficiency = gameObject.efficiency;
        storage = gameObject.storage;
        //events = gameObject.events;
        //messages = gameObject.messages;
        visible = gameObject.visible;
        jobs = gameObject.jobs;

        buildings = gameObject.buildings;

        //exploredArea = gameObject.exploredArea;
        passedTime = gameObject.passedTime;
        currentTemp = gameObject.currentTemp;
        gameSpeed = gameObject.gameSpeed;
        tooltipShown = gameObject.tooltipShown;
        pollutionLevel = gameObject.pollutionLevel;
        foodConsumption = gameObject.foodConsumption;

        //Tabs
        if (visible.leftTab == true){
            show('.left-tab', 25);
        }
        if (visible.rightTab == true){
            show('.right-tab', 25);
        }
        if (visible.midTab == true){
            show('.middle-tab', 25);
        }
        if (visible.bottomTab == true){
            show('.bottom-tab', 25);
        }
        if (visible.leftTabShown == 'buildings'){
            displayBuildings();
        }
        if (visible.leftTabShown == 'research'){
            displayResearch();
        }
        if (visible.researchTitleButton == true){
            show('#research-title', 25);
        }

        //Era
        if (visible.era == true){
            show('#era', 25);
        }
        //Resource buttons
        if (visible.forageFoodButton == true){
            show('#forage-food-btn', 25);
        }
        if (visible.gatherWoodButton == true){
            show('#gather-wood-btn', 25);
        }
        if (visible.gatherStoneButton == true){
            show('#gather-stone-btn', 25);
        }
        //Resources
        if (visible.peopleResource == true){
            show('#people-resource', 25);
        }
    }
}


//Example of what is saved in local storage
/*
{
    "resource":{
        "people":0,
        "food":0,
        "wood":0,
        "stone":0,
        "science":0,
        "copperOre":0,
        "copperIngot":0,
        "tinOre":0,
        "tinIngot":0,
        "ironOre":0,
        "ironIngot":0,
        "goldOre":0,
        "goldIngot":0,
        "wheat":0,
        "flour":0,
        "water":0
    },
    "speed":{
        "foodGather":2,
        "woodGather":2,
        "stoneGather":2
    },
    "efficiency":{
        "foodGather":1,
        "woodGather":1,
        "stoneGather":1,
        "shaman":1,
        "hunter":1,
        "woodChopper":1,
        "miner":1,
        "farmer":1,
        "explore":1
    },
    "storage":{
        "people":5,
        "food":5,
        "wood":5,
        "stone":5,
        "science":0,
        "copperOre":0,
        "copperIngot":0,
        "tinOre":0,
        "tinIngot":0,
        "ironOre":0,
        "ironIngot":0,
        "goldOre":0,
        "goldIngot":0,
        "wheat":0,
        "flour":0,
        "water":0
        },
    "events":{
        "lightningStrike":1,
        "wakeUp":1,
        "fireAppeared":1
    },
    "messages":{
        "coolMsgDisplayed":0,
        "coldMsgDisplayed":0,
        "warmerMsgDisplayed":0,
        "warmMsgDisplayed":0,
        "hotMsgDisplayed":0,
        "resourceSpeedMsgDisplayed":0
    },
    "visible":{
        "leftTab":false,
        "midTab":false,
        "rightTab":true,
        "bottomTab":false,
        "era":false,
        "peopleResource":false,
        "foodResource":false,
        "woodResource":false,
        "stoneResource":false,
        "scienceResource":false,
        "forageFoodButton":false,
        "gatherWoodButton":false,
        "gatherStoneButton":false,
        "exploreButton":false,
        "leftTabShown":"buildings"
    },
    "jobs":{
        "shaman":0,
        "hunter":0,
        "woodchopper":0,
        "miner":0,
        "farmer":0
    },
    "state":6,
    "exploredArea":0,
    "passedTime":11,
    "currentTemp":30.110000000000017,
    "gameSpeed":50,
    "tooltipShown":0,
    "pollutionLevel":0,
    "foodConsumption":0.000001}
*/




function resetGame(){
    localStorage.clear('value');
    console.log('Cleared data. Local storage is now empty.');
    location.reload();
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

//Makes the temperature fluctuate between +35 and -30
tempDirection = 0.01;
function fluctuateTemp() {
  currentTemp += tempDirection;
  if (currentTemp < -30) tempDirection = 0.01;
  if (currentTemp > 35) tempDirection = -0.01;
}


function tempCheck(){
    if (currentTemp < 0){
        if (messages.coolMsgDisplayed == 0){
            logText("It's getting a little chilly.");
            messages.coolMsgDisplayed = 1;
        }
        document.getElementById("temp-message").innerHTML = "Cool";
    }
    if (currentTemp < -20){
        if (messages.coldMsgDisplayed == 0){
           logText("Water has frozen solid, the landscape is covered in snow and ice and you can see your breath.");
           messages.coldMsgDisplayed = 1;
        }
        document.getElementById("temp-message").innerHTML = "Cold";
    }
    if (currentTemp > 0 && currentTemp < 15){
        if (messages.warmerMsgDisplayed == 0 && messages.coldMsgDisplayed == 1){
            logText("Snow is melting and trees are growing leaves again.");
            messages.warmerMsgDisplayed = 1;
        }
        document.getElementById("temp-message").innerHTML = "Cool";
    }
    if (currentTemp > 15 && currentTemp < 30){
        if (messages.warmMsgDisplayed == 0 && messages.warmerMsgDisplayed == 1){
            logText("The sun is shining and you are quite comfortable now.");
            messages.warmMsgDisplayed = 1;
        }
        document.getElementById("temp-message").innerHTML = "Warm";
    }
    if (currentTemp > 30){
        if (messages.hotMsgDisplayed == 0 && messages.warmMsgDisplayed == 1){
            logText("Summer is in full heat now.");
            messages.hotMsgDisplayed = 1;
        }
        document.getElementById("temp-message").innerHTML = "Hot";
    }
}

//Activates developer mode for easier testing
if (devMode == 1){
    activateDevMode();
    show("#dev-tools");
    show("#explored-resource");
    show("#time-passed");
    show("#current-temp");
    show("#pollution-message");

};

function activateDevMode(){
    document.getElementById('dev-mode').innerHTML = 'DEV MODE';
    gameSpeed = 50;

    console.log('Dev Mode Activated. Everything is free, game speed is much faster and workers eat barely anything.');
    foodConsumption = 0.000001;

    setAllFree();
};

function setAllFree(){
    for (var i = 0; i < buildings.length; i++){
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
    for (var j = 0; j < research.length; j++){
        if (research[j].costs_1 !== undefined){
            research[j].costs_1_amount = 0;
        }
        if (research[j].costs_2 !== undefined){
            research[j].costs_2_amount = 0;
        }
        if (research[j].costs_3 !== undefined){
            research[j].costs_3_amount = 0;
        }
        if (research[j].costs_4 !== undefined){
            research[j].costs_4_amount = 0;
        }
        if (research[j].costs_5 !== undefined){
            research[j].costs_5_amount = 0;
        }
    }
}

//Fixes rogue decimals and truncates decimals
function prettify(input){
    var output = Math.round(input * 10000000)/10000000;
        return Math.trunc(output);
}



function manageResources() {
    var resLength = Object.keys(resource).length;
    
    for (var j = 0; j < resLength; j++) {
        var currResourceNm = Object.keys(resource)[j];
        //If resources went over their storage limit, resets them to the storage limit
        if (resource[currResourceNm] > storage[currResourceNm]){
            console.log('Resource ' + currResourceNm + ' went over maximum. Resetting.');
            resource[currResourceNm] = storage[currResourceNm];
        };
        //If resources go below zero, resets them to zero.
        if (resource[currResourceNm] < 0){
            console.log('Resource ' + currResourceNm + ' went below zero. Resetting.');
            resource[currResourceNm] = 0;
        }
    }
    //Campfire is built, people start joining
    if (buildings[0].built == 1) {
        
        //If people below maximum, and food is above zero, reduce food and increase people
        if (resource.people < storage.people && resource.food > 0){
            resource.people = resource.people + 0.01;
            resource.food = resource.food - (resource.people * foodConsumption);
        }
        if (resource.people < (storage.people + 0.01)){
            resource.people = resource.people - 0.1
        }
        //If food at 0, don't reduce food but reduce people
        if (resource.food == 0 && resource.people > 0){
            resource.people = resource.people - 0.075
        }
        //If food is back above 0, increase people
        else if (resource.food > 0){
            resource.food = resource.food - (resource.people * foodConsumption);
            resource.people = resource.people + 0.1;
        }
    }
}



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
            visible.midTab = true;
        }    
        if (passedTime >= 10 && events.lightningStrike == 0) {
            discoverFire();
        }

        if (messages.resourceSpeedMsgDisplayed == 0){
            if (speed.foodGather > 2 || speed.woodGather > 2 || speed.stoneGather > 2){
                logWarn('Resources are getting scarce. Exploring will help you find resources faster. [Improves gathering speed]')
                messages.resourceSpeedMsgDisplayed = 1;
            }
        }

        if (document.getElementById("free-people") !== null) {
            document.getElementById("free-people").innerHTML = prettify(resource.people - (jobs.shaman + jobs.hunter + jobs.woodchopper + jobs.miner + jobs.farmer));
            document.getElementById("total-people").innerHTML = (prettify(resource.people));
        }
        if (document.getElementById("plus-btn-1") !== null) {
            document.getElementById("current-shamans").innerHTML = jobs.shaman;
            document.getElementById("total-shamans").innerHTML = buildings[1].built;;
        }
        if (document.getElementById("plus-btn-2") !== null) {
            document.getElementById("current-hunters").innerHTML = jobs.hunter;
            document.getElementById("total-hunters").innerHTML = buildings[2].built;;
        }
        if (document.getElementById("plus-btn-3") !== null) {
            document.getElementById("current-woodchoppers").innerHTML = jobs.woodchopper;
            document.getElementById("total-woodchoppers").innerHTML = buildings[4].built;;
        }
        if (document.getElementById("plus-btn-4") !== null) {
            document.getElementById("current-miners").innerHTML = jobs.miner;
            document.getElementById("total-miners").innerHTML = buildings[5].built;;
        }
        if (document.getElementById("plus-btn-5") !== null) {
            document.getElementById("current-farmers").innerHTML = jobs.farmers;
            document.getElementById("total-farmers").innerHTML = buildings[6].built;;
        }

        autoResource();

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
        document.getElementById("p-res-4-storage").innerHTML = prettify(storage.science);

    }, gameSpeed)
};

$(document).ready(function(){
    loadGame();
    gameLoop();
});
