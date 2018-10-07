//Variables
//Resources
var people = 0.0;
var food = 0.0;
var wood = 0.0;
var stone = 0.0;

//Buildings
var campfireBuilt = 0;
var foragers = 0;
var lumberjacks = 0;
var miners = 0;

//Storage
var peopleStorage = 5.0
var foodStorage = 5.0;
var woodStorage = 5.0;
var stoneStorage = 5.0;

//Discoveries
var learnedFire = 0;
var learnedCooking = 0;
var learnedFurClothes = 0;
var learnedPrimitiveConstruction = 0;
var learnedStoneCarving = 0;
var learnedStoneTools = 0;
var learnedDomestication = 0;
var learnedAnimalHusbandry = 0;
var learnedSmelting = 0;
var learnedCopperSmelting = 0;
var learnedTinSmelting = 0;
var learnedBronzeSmelting = 0;
var learnedIronSmelting = 0;
var learnedAgriculture = 0;
var learnedWheel = 0;
var learnedEarlyWriting = 0;


//Events
var lightningStrikeHappened = 0
var wakeUpHappened = 0;

//Other
var exploredArea = 0;
var passedTime = 0;
var currentTemp = 20;
var speed = 50;

//Progress variable
var state = 0;

//Dev tools
var disableLightningEffect = 1;


//Adds text to the log
function logText(text){
    $('.right-tab').prepend("<p class='log-text'>" + text + "</p>");
}

//Makes an element appear with a fadein animation
function show(element){
    $(element).animate({opacity: 1},{duration: 500});
    $(element).removeClass('hidden opacity-zero');
}
//Makes tabs resizable
/*$(".left-tab, .middle-tab, .right-tab").resizable({containment: ".main" });
$('.left-tab').resize(function () {
    $('.middle-tab').width($(".main").width() - $(".left-tab").width());
});
$(window).resize(function () {
    $('.middle-tab').width($(".main").width() - $(".left-tab").width());
    $('.left-tab').width($(".main").width());
});
*/


//Sets the current era
$('#era').text('Ancient Era')

//Local Storage functions
if (typeof(Storage) !== "undefined") {
    // Code for localStorage/sessionStorage.

} else {
    document.getElementById('game-title').innerHTML = 'Web Storage Support is required for this game. Please update your browser to one of the versions shown at: https://www.w3schools.com/html/html5_webstorage.asp';
    
}

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
    document.getElementById("food").innerHTML = prettify(food);
    document.getElementById("food-storage").innerHTML = prettify(foodStorage);
    document.getElementById("wood").innerHTML = prettify(wood);
    document.getElementById("wood-storage").innerHTML = prettify(woodStorage);
    document.getElementById("stone").innerHTML = prettify(stone);
    document.getElementById("stone-storage").innerHTML = prettify(stoneStorage);
}, speed);