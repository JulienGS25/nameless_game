//Buildings
var buildings = [
    campfire = {
        name: 'Campfire',
        description: 'The campfire is the cradle of civilization. Provides warmth and comfort. Unlocks various buildings.',
        costs_1: 'Wood: 5',
        costs_2: 'Stone: 5',
        costs_3: '',
        costs_4: '',
        costs_5: '',
        effects_1: 'Unlocks Shaman Hut',
        effects_2: 'Unlocks Hunter Post',
        effects_3: '',
        effects_4: '',
        effects_5: '',
        displayable: 1,
    },
    shaman_hut = {
        name: 'Shaman Hut',
        description: 'Explores and experiments with the nature that surrounds us.',
        costs_1: 'Food: 5',
        costs_2: 'Stone: 5',
        costs_3: 'Wood: 5',
        costs_4: '',
        costs_5: '',
        effects_1: 'Unlocks Research',
        effects_2: '',
        effects_3: '',
        effects_4: '',
        effects_5: '',
        displayable: 0,
    }
]

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