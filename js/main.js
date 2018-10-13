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
/*
function fluctuateTemp(){
    if (currentTemp >= 20.00){
        currentTemp -= 0.1;
        console.log('decreasing')
    }
    else if (currentTemp <= -20.00){
        console.log('increasing')
        currentTemp += 0.1;
    }
    
}
*/



//Activates developer mode for easier testing
if (devMode == 1){
    activateDevMode();
};

function activateDevMode(){
    document.getElementById('dev-mode').innerHTML = 'DEV MODE';
    resource.food = storage.food;
    resource.wood = storage.wood;
    resource.stone = storage.stone;
    console.log('Dev Mode Activated. All resources maxed out');
}


//Fixes rogue decimals
function prettify(input){
    var output = Math.round(input * 10000000)/10000000;
        return output;
}

// Game loop
window.setInterval(function(){
    getFood(foragers);
    getWood(lumberjacks);
    getStone(miners);
    passedTime++;
    //fluctuateTemp();
    if (passedTime >= 2 && events.wakeUp == 0){
        wakeUp();
    }
    if (passedTime >= 5){
        show('.middle-tab', 500);
    }    
    if (passedTime >= 10 && events.lightningStrike == 0 && state != 7) {
        discoverFire();
    }
    if (campfireBuilt == 1){
        if (resource.food > 0.0 && resource.people < storage.people){
            resource.people = resource.people + 0.01;
            resource.food = resource.food - 0.01;
        }
        if (resource.food < 0.1 && resource.people > 0.0){
            resource.people = resource.people - 0.01;
        }

    }
    document.getElementById('time').innerHTML = passedTime + ' seconds.';
    document.getElementById('temp').innerHTML = currentTemp + '°C.';
    document.getElementById("people").innerHTML = prettify(resource.people);
    document.getElementById("people-storage").innerHTML = prettify(storage.people);
    document.getElementById("p-res-1-amt").innerHTML = prettify(resource.food);
    document.getElementById("p-res-1-storage").innerHTML = prettify(storage.food);
    document.getElementById("p-res-2-amt").innerHTML = prettify(resource.wood);
    document.getElementById("p-res-2-storage").innerHTML = prettify(storage.wood);
    document.getElementById("p-res-3-amt").innerHTML = prettify(resource.stone);
    document.getElementById("p-res-3-storage").innerHTML = prettify(storage.stone);

}, gameSpeed);