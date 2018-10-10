//Adds text to the log
function logText(text){
    $('.right-tab').prepend("<p class='log-text'>" + text + "</p>");
}

//Makes an element appear with a fadein animation
function show(element){
    $(element).animate({opacity: 1},{duration: 500});
    $(element).removeClass('hidden opacity-zero');
}
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
        'foodAmount':food,
        'woodAmount':wood,
        'stoneAmount':stone,
        'peopleAmount':people
    }
    //Saves the data
    localStorage.setItem('dataKey', JSON.stringify(getData));

    //Outputs the data to the console for verification
    console.log('Saved the following data: ' + getData);
}

function loadGame(){
    var test = localStorage.getItem('dataKey');
    if (test == null){
        console.log('No data stored!');
    }
    else {console.log('Loaded the following data: ' + test);
    }
}

function resetGame(){
    var test = localStorage.clear('value');
    console.log('Cleared data. Local storage is now empty.');
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
    if (passedTime >= 2 && wakeUpHappened == 0){
        wakeUp();
    }
    if (passedTime >= 5){
        show('.middle-tab');
    }    
    if (passedTime >= 10 && lightningStrikeHappened == 0 && state != 7) {
        discoverFire();
    }
    if (campfireBuilt == 1){
        if (food > 0.0 && people < peopleStorage){
            people = people + 0.01;
            food = food - 0.01;
        }
        if (food < 0.1 && people > 0.0){
            people = people - 0.01;
        }

    }
    document.getElementById('time').innerHTML = passedTime + ' seconds.';
    document.getElementById('temp').innerHTML = currentTemp + '°C.';
    document.getElementById("people").innerHTML = prettify(people);
    document.getElementById("people-storage").innerHTML = prettify(peopleStorage);
    document.getElementById("res-1-amt").innerHTML = prettify(food);
    document.getElementById("res-1-storage").innerHTML = prettify(foodStorage);
    document.getElementById("res-1-img").src = "images/Apple.png";
    document.getElementById("res-2-amt").innerHTML = prettify(wood);
    document.getElementById("res-2-storage").innerHTML = prettify(woodStorage);
    document.getElementById("res-3-amt").innerHTML = prettify(stone);
    document.getElementById("res-3-storage").innerHTML = prettify(stoneStorage);
}, speed);