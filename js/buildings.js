//Worker / building purchasing
function buildCampfire(){
    if (wood >= 5 && stone >= 5){
        $('.building-list').append("<div class='left-tab-button building underlined' id='campfire' type='button'>Campfire</div>");
        $('#build-campfire').remove();
        $('#buildings-title').animate({opacity: 1},{duration: 500});
        $('#buildings-title').removeClass('opacity-zero');
        wood = wood - 5;
        stone = stone - 5;
        campfireBuilt = 1;
        logText('Now that you have a campfire, people have started gathering around it for warmth.');
        setTimeout(function(){logText('You\'ll need to feed them.');}, 2000);
    }
    else if (wood < 5){
        logText('More wood required!');
    }
    else if (stone < 5){
        logText('More stone required!');
    }
};

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
    var workerCost = Math.floor(10 * Math.pow(1.1, lumberjacks));          //works out the cost of this lumberjack
    if (wood >= workerCost) {                                              //checks that the player can afford the lumberjack
        lumberjacks = lumberjacks + 1;                                     //increases number of lumberjacks
        wood = wood - workerCost;                                          //removes the wood spent
        document.getElementById('lumberjacks').innerHTML = lumberjacks;    //updates the number of lumberjacks for the user
        document.getElementById('wood').innerHTML = wood;                  //updates the number of wood for the user
    };
    var nextCost = Math.floor(10 * Math.pow(1.1, lumberjacks));            //works out the cost of the next lumberjack
    document.getElementById('lumberjackCost').innerHTML = nextCost;        //updates the lumberjack cost for the user
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