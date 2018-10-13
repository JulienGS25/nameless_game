//Buildings
var buildings = [
    campfire = {
        name: 'Campfire',
        description: 'The campfire is the cradle of civilization. Provides warmth and comfort. Unlocks various buildings.',
        costs_1: 'Wood',
        costs_1_amount: 5,
        costs_2: 'Stone',
        costs_2_amount: 5,
        costs_3: '',
        costs_3_amount: '',
        costs_4: '',
        costs_4_amount: '',
        costs_5: '',
        costs_5_amount: '',
        effects_1: 'Unlocks Shaman Hut',
        effects_2: 'Unlocks Hunter Post',
        effects_3: '',
        effects_4: '',
        effects_5: '',
        displayable: 1,
        built: 0
    },
    shaman_hut = {
        name: 'Shaman Hut',
        description: 'Explores and experiments with the nature that surrounds us.',
        costs_1: 'Wood',
        costs_1_amount: 5,
        costs_2: 'Stone',
        costs_2_amount: 5,
        costs_3: '',
        costs_3_amount: '',
        costs_4: '',
        costs_4_amount: '',
        costs_5: '',
        costs_5_amount: '',
        effects_1: 'Unlocks Research',
        effects_2: '',
        effects_3: '',
        effects_4: '',
        effects_5: '',
        displayable: 0,
        built: 0
    },
    hunter_post = {
        name: 'Hunter Post',
        description: 'Hunts nearby animals for food and fur.',
        costs_1: 'Wood',
        costs_1_amount: 5,
        costs_2: 'Stone',
        costs_2_amount: 5,
        costs_3: '',
        costs_3_amount: '',
        costs_4: '',
        costs_4_amount: '',
        costs_5: '',
        costs_5_amount: '',
        effects_1: 'Provides food',
        effects_2: 'Provides furs',
        effects_3: '',
        effects_4: '',
        effects_5: '',
        displayable: 0,
        built: 0
    }
]


//Player-built buildings
function buildCampfire(){
    if (buildings[0].built == 1){
        logText('Campfire already built!');
    }
    else if (resource.wood < 5){
        logText('More wood required!');
    }
    else if (resource.stone < 5){
        logText('More stone required!');
    }
    else if (resource.wood < 5 && resource.stone < 5){
        logText('More resources required!');
    }
    //Requirements are met!
    if (resource.wood >= 5 && resource.stone >= 5 && buildings[0].built == 0){
        //Spends resources
        resource.wood -= 5;
        resource.stone -= 5;
        //Updates variables
        buildings[0].built = 1;
        buildings[1].displayable = 1;
        buildings[2].displayable = 1;
        $('#left-tab-cell-0').addClass('built');
        logText('Built campfire. Its warmth attracts people.');
        //Updates UI for new buildings
        displayBuildings();
        document.getElementById("left-tab-cell-1").addEventListener("click", showShamanHut);
        document.getElementById("left-tab-cell-2").addEventListener("click", showHunterPost);
        hide('#build-button', 100);
    };

};

function showCampfire(){
    tooltip(campfire);
};
function showShamanHut(){
    tooltip(shaman_hut);
};
function showHunterPost(){
    tooltip(hunter_post);
};


//Auto-resource workers purchasing
function hireForager() {
    var workerCost = Math.floor(10 * Math.pow(1.1, foragers));
    if (resource.food >= workerCost) {
        foragers = foragers + 1;
        resource.food = resource.food - workerCost;
        document.getElementById('foragers').innerHTML = foragers;
        document.getElementById('food').innerHTML = resource.food;
    };
    var nextCost = Math.floor(10 * Math.pow(1.1, foragers));
    document.getElementById('foragerCost').innerHTML = nextCost;
};

function hireLumberjack() {
    var workerCost = Math.floor(10 * Math.pow(1.1, lumberjacks));          //works out the cost of this lumberjack
    if (resource.wood >= workerCost) {                                              //checks that the player can afford the lumberjack
        lumberjacks = lumberjacks + 1;                                     //increases number of lumberjacks
        resource.wood = resource.wood - workerCost;                                          //removes the wood spent
        document.getElementById('lumberjacks').innerHTML = lumberjacks;    //updates the number of lumberjacks for the user
        document.getElementById('wood').innerHTML = resource.wood;                  //updates the number of wood for the user
    };
    var nextCost = Math.floor(10 * Math.pow(1.1, lumberjacks));            //works out the cost of the next lumberjack
    document.getElementById('lumberjackCost').innerHTML = nextCost;        //updates the lumberjack cost for the user
};

function hireMiner() {
    var workerCost = Math.floor(10 * Math.pow(1.1, miners));
    if (resource.stone >= workerCost) {
        miners = miners + 1;
        resource.stone = resource.stone - workerCost;
        document.getElementById('miners').innerHTML = miners;
        document.getElementById('stone').innerHTML = resource.stone;
    };
    var nextCost = Math.floor(10 * Math.pow(1.1, miners));
    document.getElementById('minerCost').innerHTML = nextCost;
};