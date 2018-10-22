//Common function to build all buildings
//See comments to see what it does

function buildBuilding(input) {
    hide('#build-button',100);
    //Checks if the building is already built
    if (input.built == 1) {
        logText(input.name + ' already built!');
        return;
    }
    //First loop checks how many resource types are needed to build the building
    var valid = 0;
    var passed = 0;
    for (i = 1; i < 6; i++) {
        a = eval('input.costs_' + i);
        if (a !== undefined) {
            valid++;
        }
    }
    //Second loop runs as many times as there are resource types used to build the building

    for (j = 1; j <= valid; j++) {

        var amtCost = eval('input.costs_' + j + '_amount'); // Amount of resources required
        var nmCost = eval('input.costs_' + j); // Name of resource required
        var nmInvLower = nmCost.toLowerCase(); // Name of resource, lower case to match the inventory resource type
        var amtInv = eval('resource.' + nmInvLower); // Amount of resource in inventory
        if (amtInv >= amtCost) {
            passed++;
        }
        else {
            //Not enough resources
            logText('Not enough ' + nmCost + '!')
        }
    }
    if (passed == valid) {

        //Resource check successful, proceed

        //Spends the required resources
        for (k = 1; k <= valid; k++) {
            var amtCost2 = eval('input.costs_' + k + '_amount'); // Amount of resources required
            var nmCost2 = eval('input.costs_' + k); // Name of resource required
            var nmInvLower2 = nmCost2.toLowerCase(); // Name of resource, lower case to match the inventory resource type
            resource[nmInvLower2] -= amtCost2;
        }

        //Marks the building as built
        buildings[input.number].built = 1;
        $('#left-tab-cell-' + input.number).addClass('built');

        //Displays the related messages
        logText(input.message);

        //Unlocks the related buildings
        if (buildings[input.number].unlocks_buildings !== undefined){
        var unlockedBuildings = buildings[input.number].unlocks_buildings; //array containing list of buildings unlocked
        for (l = 0; l < unlockedBuildings.length; l++) {
            buildings[unlockedBuildings[l]].displayable = 1;
            }
        }

        //Updates UI for new buildings
        displayBuildings();

        //Runs the corresponding function specific to this building
        buildings[input.number].buildFunction();
    }
}


function showCampfire(){
    showTooltip(campfire);
};

function showShamanHut(){
    showTooltip(shaman_hut);
};

function showHunterPost(){
    showTooltip(hunter_post);
};

function showVillageCenter(){
    showTooltip(village_center);
};

function showWoodChopper(){
    showTooltip(woodchopper_post);
};

function showMinerHut(){
    showTooltip(miner_hut);
};

function showWheatFarm(){
    showTooltip(wheat_farm);
};




function buildCampfire(){
    storage.food =+ 10;
    storage.wood =+ 10;
    storage.stone =+ 10;
    
};

function buildShamanHut(){
    show('#research-title',100);
    hide('#build-button', 100);
};

function buildHunterPost(){
};

function buildVillageCenter(){
    show('#manage-tribe-btn',100);
    document.getElementById('manage-tribe-btn').addEventListener("click", manageTribe);
    document.getElementById('people-resource').innerHTML = ("Tribespeople: <span id='people'>0</span><span> / </span><span id='people-storage'></span>")
};

function buildWoodChopper(){
};

function buildMinerHut(){
};

function buildWheatFarm(){
};

//Auto-resource workers purchasing
/*function hireForager() {
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
};*/


//Buildings
var buildings = [
    campfire = {
        name: "Campfire",
        number: 0,
        description: "The campfire is the cradle of civilization. Provides warmth and comfort. Unlocks various buildings.",
        costs_1: "Wood",
        costs_1_amount: 3,
        costs_2: "Stone",
        costs_2_amount: 2,
        costs_3: undefined,
        costs_3_amount: undefined,
        costs_4: undefined,
        costs_4_amount: undefined,
        costs_5: undefined,
        costs_5_amount: undefined,
        effects_1: "Unlocks Shaman Hut",
        effects_2: "Unlocks Hunter Post",
        effects_3: "+10 food storage",
        effects_4: "+10 wood storage",
        effects_5: "+10 stone storage",
        displayable: 1,
        built: 0,
        buildFunction: buildCampfire,
        showFunction: showCampfire,
        message: "Built campfire. Its warmth attracts people.",
        unlocks_buildings: [1, 2, 3]
    },
    shaman_hut = {
        name: "Shaman Hut",
        number: 1,
        description: "Explores and experiments with the nature that surrounds us.",
        costs_1: "Wood",
        costs_1_amount: 10,
        costs_2: "Stone",
        costs_2_amount: 5,
        costs_3: undefined,
        costs_3_amount: undefined,
        costs_4: undefined,
        costs_4_amount: undefined,
        costs_5: undefined,
        costs_5_amount: undefined,
        effects_1: "Unlocks the Shaman who performs research",
        effects_2: "Unlocks Research tab",
        effects_3: "",
        effects_4: "",
        effects_5: "",
        displayable: 0,
        built: 0,
        buildFunction: buildShamanHut,
        showFunction: showShamanHut,
        message: "Built Shaman Hut. The Shaman will perform research and improve our tribe.",
        unlocks_buildings: undefined
    },
    hunter_post = {
        name: "Hunter Post",
        number: 2,
        description: "Explores the nearby area and hunts animals for food.",
        costs_1: "Wood",
        costs_1_amount: 10,
        costs_2: "Stone",
        costs_2_amount: 5,
        costs_3: undefined,
        costs_3_amount: undefined,
        costs_4: undefined,
        costs_4_amount: undefined,
        costs_5: undefined,
        costs_5_amount: undefined,
        effects_1: "Provides food",
        effects_2: "Provides exploration",
        effects_3: "",
        effects_4: "",
        effects_5: "",
        displayable: 0,
        built: 0,
        buildFunction: buildHunterPost,
        showFunction: showHunterPost,
        message: "Built Hunter Post. The Hunter will track and kill nearby animals for food.",
        unlocks_buildings: undefined
    },
    village_center = {
        name: "Village Center",
        number: 3,
        description: "Allows you to manage your tribe.",
        costs_1: "Wood",
        costs_1_amount: 10,
        costs_2: "Stone",
        costs_2_amount: 5,
        costs_3: undefined,
        costs_3_amount: undefined,
        costs_4: undefined,
        costs_4_amount: undefined,
        costs_5: undefined,
        costs_5_amount: undefined,
        effects_1: "Unlocks Village Management",
        effects_2: "Allows job assignments",
        effects_3: "",
        effects_4: "",
        effects_5: "",
        displayable: 0,
        built: 0,
        buildFunction: buildVillageCenter,
        showFunction: showVillageCenter,
        message: "Built Village Center. You can now manage your villagers.",
        unlocks_buildings: undefined
    },
    woodchopper_post = {
        name: "Wood Chopper Post",
        number: 4,
        description: "Chops nearby trees for wood.",
        costs_1: "Wood",
        costs_1_amount: 10,
        costs_2: "Stone",
        costs_2_amount: 5,
        costs_3: undefined,
        costs_3_amount: undefined,
        costs_4: undefined,
        costs_4_amount: undefined,
        costs_5: undefined,
        costs_5_amount: undefined,
        effects_1: "Unlocks the Wood Chopper job",
        effects_2: "",
        effects_3: "",
        effects_4: "",
        effects_5: "",
        displayable: 0,
        built: 0,
        buildFunction: buildWoodChopper,
        showFunction: showWoodChopper,
        message: "Built Wood Chopper Post. You can now assign people to chop wood.",
        unlocks_buildings: undefined
    },
    miner_hut = {
        name: "Miner Hut",
        number: 5,
        description: "Mines rocks for stone.",
        costs_1: "Wood",
        costs_1_amount: 10,
        costs_2: "Stone",
        costs_2_amount: 5,
        costs_3: undefined,
        costs_3_amount: undefined,
        costs_4: undefined,
        costs_4_amount: undefined,
        costs_5: undefined,
        costs_5_amount: undefined,
        effects_1: "Unlocks the Miner job",
        effects_2: "",
        effects_3: "",
        effects_4: "",
        effects_5: "",
        displayable: 0,
        built: 0,
        buildFunction: buildMinerHut,
        showFunction: showMinerHut,
        message: "Built Miner Hut. You can now assign people to gather stone.",
        unlocks_buildings: undefined
    },
    wheat_farm = {
        name: "Wheat Farm",
        number: 6,
        description: "Yields wheat when the weather is warm.",
        costs_1: "Wood",
        costs_1_amount: 10,
        costs_2: "Stone",
        costs_2_amount: 5,
        costs_3: undefined,
        costs_3_amount: undefined,
        costs_4: undefined,
        costs_4_amount: undefined,
        costs_5: undefined,
        costs_5_amount: undefined,
        effects_1: "Unlocks the Farmer job",
        effects_2: "",
        effects_3: "",
        effects_4: "",
        effects_5: "",
        displayable: 0,
        built: 0,
        buildFunction: buildWheatFarm,
        showFunction: showWheatFarm,
        message: "Prepared Wheat Farm. You can now assign people to farm wheat.",
        unlocks_buildings: undefined
    },
]