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
var foodStorage = 5;
var woodStorage = 5;
var stoneStorage = 5;

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


var disableLightningEffect = 1;

//Adds text to the log
function logText(text){
    $('.right-tab').prepend("<p class='log-text'>" + text + "</p>");
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

    //Speeds up time for testing purposes
    passedTime = passedTime + 10;


    if (passedTime >= 2 && wakeUpHappened == 0){
        wakeUp();
    }
    if (passedTime >= 5){
        $('.middle-tab').animate({opacity: 1},{duration: 500});
    }    
    if (passedTime >= 10 && lightningStrikeHappened == 0) {
        discoverFire();
    }
    if (campfireBuilt == 1 && food > 0.0){
        people = people + 0.01;
        food = food - 0.01;
    }
    document.getElementById('time').innerHTML = passedTime + ' seconds.';
    document.getElementById('temp').innerHTML = currentTemp + '°C.';
    document.getElementById("people").innerHTML = prettify(people);
    document.getElementById("food").innerHTML = prettify(food);
    document.getElementById("food-storage").innerHTML = foodStorage;
    document.getElementById("wood").innerHTML = prettify(wood);
    document.getElementById("wood-storage").innerHTML = woodStorage;
    document.getElementById("stone").innerHTML = prettify(stone);
    document.getElementById("stone-storage").innerHTML = stoneStorage;
}, 500);