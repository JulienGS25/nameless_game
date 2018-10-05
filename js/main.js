//Variables
//Resources
var food = 0;
var wood = 0;
var stone = 0;

//Buildings
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


//Adds text to the log
function logText(text){
    $('.right-tab').prepend("<p class='log-text'>" + text + "</p>");
}

//Makes tabs resizable
$(".left-tab, .middle-tab, .right-tab").resizable({containment: ".main" });
$('.left-tab').resize(function () {
    $('.middle-tab').width($(".main").width() - $(".left-tab").width());
});
$(window).resize(function () {
    $('.middle-tab').width($(".main").width() - $(".left-tab").width());
    $('.left-tab').width($(".main").width());
});


//Sets the current era
$('#era').text('Ancient Era')

// Game loop
// Do not put anything below this line
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
    document.getElementById('time').innerHTML = passedTime + ' seconds.';
    document.getElementById('temp').innerHTML = currentTemp + '°C.';
    document.getElementById("food").innerHTML = food;
    document.getElementById("food-storage").innerHTML = foodStorage;
    document.getElementById("wood").innerHTML = wood;
    document.getElementById("wood-storage").innerHTML = woodStorage;
    document.getElementById("stone").innerHTML = stone;
    document.getElementById("stone-storage").innerHTML = stoneStorage;
}, 500);