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

//Other
var exploredArea = 0;
var passedTime = 0;
var currentTemp = 20;

//Exploration
document.getElementById("scout-btn").addEventListener("click", scout);

function scout() {
    exploredArea++;
    document.getElementById('explored').innerHTML = exploredArea;
    unveilStuff(exploredArea);
};


function unveilStuff(exploredArea) {
    if (exploredArea == 1) {
        $('.right-tab').prepend("<p class='log-text'>You see you are not alone. Friend?</p>");
        $('#people-resource').removeClass("hidden");
    }
    else if (exploredArea == 2) {
        $('.right-tab').prepend("<p class='log-text'>You look around some more...</p>");
    }
    else if (exploredArea == 3) {
        $('.right-tab').prepend("<p class='log-text'>You found a few bushes. They seem to have berries on them.</p>");
        $('#forage-food-btn').removeClass("hidden");
        $('#scout-btn').text('Scout area');
    }
    else if (exploredArea == 5) {
        $('.right-tab').prepend("<p class='log-text'>You found some branches on the ground. You should gather a few.</p>");
        $('#gather-wood-btn').removeClass("hidden");
    }
    else if (exploredArea == 7) {
        $('.right-tab').prepend("<p class='log-text'>You found some stones, they should be useful.</p>");
        $('#gather-stone-btn').removeClass("hidden");
    }
};


// Timed events
function wakeUp(){
    $('.right-tab').prepend("<p class='log-text'>You wake up in an empty field...</p>");
}

function discoverFire() {
    fireAppeared = 1;
    $('.right-tab').prepend("<p class='log-text'>You hear an ear-shattering explosion nearby!</p>");
    $('.middle-right-col').prepend("<div class='action-button hidden' id='various-action-btn' type='button'>Observe</div>");
    $('#various-action-btn').removeClass("hidden");
    document.getElementById("various-action-btn").addEventListener("click", observe);
    var callFunction = 1;
    function observeOne() {
        $('#various-action-btn').text('Stare');
        $('.right-tab').prepend("<p class='log-text'>There is something bright moving on a nearby tree. As you get closer, you realize that it hurts!</p>");
    }
    function observeTwo() {
        $('#various-action-btn').text('Experiment');
        $('.right-tab').prepend("<p class='log-text'>You notice the tree is changing under the effects of this. You start to wonder if other things could be changed by this.</p>");
    }
    function observeThree() {
        $('#various-action-btn').text('Panic');
        $('.right-tab').prepend("<p class='log-text'>You take a nearby branch and stick it in this. The 'thing' jumped onto your branch!</p>");
    }
    function observeFour() {
        $('#various-action-btn').text('Discover');
        $('.right-tab').prepend("<p class='log-text'>In a panic, you drop the branch and see the 'thing' slowly disappear. Looks like it's not that dangerous after all.</p>");
    }
    function observeFive() {
        $('.right-tab').prepend("<p class='log-text'>Trying again with more branches, you start assembling them into a pile. You name this new discovery:" + "<span style='color: red'> Fire!</span>");
        $('#various-action-btn').addClass('hidden');
        learnedFire = 1;
    }
    function observe() {
        if (callFunction == 1) { observeOne(); callFunction++ }
        else if (callFunction == 2) { observeTwo(); callFunction++ }
        else if (callFunction == 3) { observeThree(); callFunction++ }
        else if (callFunction == 4) { observeFour(); callFunction++ }
        else if (callFunction == 5) { observeFive(); callFunction++ }
    }
}


















//Resource gathering
function showFood() {
    { $('#food-resource').removeClass("hidden"); }
}
function showWood() {
    { $('#wood-resource').removeClass("hidden"); }
}
function showStone() {
    { $('#stone-resource').removeClass("hidden"); }
}


function getFood(number) {
    if (food < foodStorage) {
        food = food + number;
    }
}
function getWood(number) {
    if (wood < woodStorage) {
        wood = wood + number;
    }
}
function getStone(number) {
    if (stone < stoneStorage) {
        stone = stone + number;
    }
}

//Worker / building purchasing
function hireForager() {
    var workerCost = Math.floor(10 * Math.pow(1.1, foragers));
    if (food >= workerCost) {
        foragers = foragers + 1;
        food = food - workerCost;
        document.getElementById('foragers').innerHTML = foragers;
        document.getElementById('food').innerHTML = food;
    };
    var nextCost = Math.floor(10 * Math.pow(1.1, foragers));
    document.getElementById('foragerCost').innerHTML = nextCost;
};

function hireLumberjack() {
    var workerCost = Math.floor(10 * Math.pow(1.1, lumberjacks));         //works out the cost of this lumberjack
    if (wood >= workerCost) {                                              //checks that the player can afford the lumberjack
        lumberjacks = lumberjacks + 1;                                   //increases number of lumberjacks
        wood = wood - workerCost;                                        //removes the wood spent
        document.getElementById('lumberjacks').innerHTML = lumberjacks;  //updates the number of lumberjacks for the user
        document.getElementById('wood').innerHTML = wood;                //updates the number of wood for the user
    };
    var nextCost = Math.floor(10 * Math.pow(1.1, lumberjacks));           //works out the cost of the next lumberjack
    document.getElementById('lumberjackCost').innerHTML = nextCost;      //updates the lumberjack cost for the user
};

function hireMiner() {
    var workerCost = Math.floor(10 * Math.pow(1.1, miners));
    if (stone >= workerCost) {
        miners = miners + 1;
        stone = stone - workerCost;
        document.getElementById('miners').innerHTML = miners;
        document.getElementById('stone').innerHTML = stone;
    };
    var nextCost = Math.floor(10 * Math.pow(1.1, miners));
    document.getElementById('minerCost').innerHTML = nextCost;
};

//Makes tabs resizable
$(".left-tab, .middle-tab, .right-tab").resizable({ containment: ".main" });
$('.left-tab').resize(function () {
    $('.middle-tab').width($(".main").width() - $(".left-tab").width());
});
$(window).resize(function () {
    $('.middle-tab').width($(".main").width() - $(".left-tab").width());
    $('.left-tab').width($(".main").width());
});





//Sets the current age
$('#era').text('Ancient Era')

// Game loop
// Do not put anything below this line
window.setInterval(function () {
    getFood(foragers);
    getWood(lumberjacks);
    getStone(miners);
    passedTime++;
    if (passedTime == 1){
        wakeUp();
    }
    
    if (passedTime == 1) {
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