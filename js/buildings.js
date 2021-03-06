

//Common function to build all buildings
//See comments to see what it does

function buildBuilding(input) {
    hide('#build-button',100);
    //Checks if the building is already built and is not unique
    if (input.built == 1 && input.unique) {
        logText(input.name + ' already built!');
        return;
    }
    //First loop checks how many resource types are needed to build the building
    var valid = 0;
    var passed = 0;
    for (var i = 1; i < 6; i++) {
        a = eval('input.costs_' + i);
        if (a !== undefined) {
            valid++;
        }
    }
    //Second loop runs as many times as there are resource types used to build the building

    for (var j = 1; j <= valid; j++) {

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
        for (var k = 1; k <= valid; k++) {
            var amtCost2 = eval('input.costs_' + k + '_amount'); // Amount of resources required
            var nmCost2 = eval('input.costs_' + k); // Name of resource required
            var nmInvLower2 = nmCost2.toLowerCase(); // Name of resource, lower case to match the inventory resource type
            resource[nmInvLower2] -= amtCost2;
        }

        //Marks the building as built
        if (input.unique == true){
            buildings[input.id].built = 1;
            $('#left-tab-cell-' + input.id).addClass('built');
        }
        else{
            buildings[input.id].built++;
        }
        

        //Displays the related messages
        logText(input.message);

        //Unlocks the related buildings
        if (buildings[input.id].unlocks_buildings !== undefined){
        var unlockedBuildings = buildings[input.id].unlocks_buildings; //array containing list of buildings unlocked
        for (var l = 0; l < unlockedBuildings.length; l++) {
            buildings[unlockedBuildings[l]].displayable = 1;
            }
        }

        //Updates UI for new buildings
        displayBuildings();

        //Runs the corresponding function specific to this building
        var bldFunc = eval(buildings[input.id].buildFunction);
        bldFunc();

    }
}

function buildCampfire(){
    storage.food =+ 10;
    storage.wood =+ 10;
    storage.stone =+ 10;
    
};

function buildShamanHut(){
    show('#research-title',100);
    visible.researchTitleButton = true;
    hide('#build-button', 100);
    storage.science = storage.science + 100;
};

function buildHunterPost(){
};

function buildVillageCenter(){
    show('#manage-tribe-btn',100);
    document.getElementById('people-resource').innerHTML = ("Tribespeople: <span id='people'>0</span><span> / </span><span id='people-storage'></span>");
    visible.manageTribeButton = true;
};

function buildWoodChopper(){
};

function buildMinerHut(){
};

function buildWheatFarm(){
};

function buildFurnace(){
    show('#furnace-btn',100);
    visible.furnaceButton = true;
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
    campFire = {
        name: "Campfire",
        id: 0,
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
        effects_1: "Unlocks building: Village Center",
        effects_2: "Unlocks building: Hunter Post",
        effects_3: "Unlocks building: Shaman Hut",
        effects_4: "+10 Food storage",
        effects_5: "+10 Wood and Stone storage",
        displayable: 1,
        built: 0,
        buildFunction: "buildCampfire",
        message: "Built campfire. Its warmth attracts people.",
        unlocks_buildings: [1, 2, 3],
        unique: true,
    },
    shamanHut = {
        name: "Shaman Hut",
        id: 1,
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
        effects_1: "Unlocks job: Shaman",
        effects_2: "Unlocks Research tab",
        effects_3: "+100 Science storage",
        effects_4: "",
        effects_5: "",
        displayable: 0,
        built: 0,
        buildFunction: "buildShamanHut",
        message: "Built Shaman Hut.",
        unlocks_buildings: undefined,
        unique: false
    },
    hunterPost = {
        name: "Hunter Post",
        id: 2,
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
        effects_1: "Unlocks job: Hunter",
        effects_2: "",
        effects_3: "",
        effects_4: "",
        effects_5: "",
        displayable: 0,
        built: 0,
        buildFunction: "buildHunterPost",
        message: "Built Hunter Post.",
        unlocks_buildings: undefined,
        unique: false
    },
    villageCenter = {
        name: "Village Center",
        id: 3,
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
        effects_1: "Unlocks tool: Tribe Management",
        effects_2: "",
        effects_3: "",
        effects_4: "",
        effects_5: "",
        displayable: 0,
        built: 0,
        buildFunction: "buildVillageCenter",
        message: "Built Village Center. You can now manage your villagers.",
        unlocks_buildings: undefined,
        unique: true
    },
    woodchopperPost = {
        name: "Wood Chopper Post",
        id: 4,
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
        effects_1: "Unlocks job: Wood Chopper",
        effects_2: "",
        effects_3: "",
        effects_4: "",
        effects_5: "",
        displayable: 0,
        built: 0,
        buildFunction: "buildWoodChopper",
        message: "Built Wood Chopper Post.",
        unlocks_buildings: undefined,
        unique: false
    },
    minerHut = {
        name: "Miner Hut",
        id: 5,
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
        effects_1: "Unlocks job: Miner",
        effects_2: "",
        effects_3: "",
        effects_4: "",
        effects_5: "",
        displayable: 0,
        built: 0,
        buildFunction: "buildMinerHut",
        message: "Built Miner Hut.",
        unlocks_buildings: undefined,
        unique: false
    },
    wheatFarm = {
        name: "Wheat Farm",
        id: 6,
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
        effects_1: "Unlocks job: Farmer",
        effects_2: "",
        effects_3: "",
        effects_4: "",
        effects_5: "",
        displayable: 0,
        built: 0,
        buildFunction: "buildWheatFarm",
        message: "Prepared Wheat Farm.",
        unlocks_buildings: undefined,
        unique: false
    },
    furnace = {
        name: "Furnace",
        id: 7,
        description: "Smelts ore into metal bars.",
        costs_1: "Wood",
        costs_1_amount: 10,
        costs_2: "Stone",
        costs_2_amount: 10,
        costs_3: undefined,
        costs_3_amount: undefined,
        costs_4: undefined,
        costs_4_amount: undefined,
        costs_5: undefined,
        costs_5_amount: undefined,
        effects_1: "Unlocks tool: Furnace",
        effects_2: "",
        effects_3: "",
        effects_4: "",
        effects_5: "",
        displayable: 0,
        built: 0,
        buildFunction: "buildFurnace",
        message: "Built Furnace.",
        unlocks_buildings: undefined,
        unique: true
    },
]