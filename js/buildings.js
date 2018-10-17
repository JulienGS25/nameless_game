//Buildings
var buildings = [
    campfire = {
        name: 'Campfire',
        id: 'campfire',
        number: 0,
        description: 'The campfire is the cradle of civilization. Provides warmth and comfort. Unlocks various buildings.',
        costs_1: 'Wood',
        costs_1_amount: 5,
        costs_2: 'Stone',
        costs_2_amount: 4,
        costs_3: undefined,
        costs_3_amount: undefined,
        costs_4: undefined,
        costs_4_amount: undefined,
        costs_5: undefined,
        costs_5_amount: undefined,
        effects_1: 'Unlocks Shaman Hut',
        effects_2: 'Unlocks Hunter Post',
        effects_3: '+10 food storage',
        effects_4: '+10 wood storage',
        effects_5: '+10 stone storage',
        displayable: 1,
        built: 0,
        buildFunction: buildCampfire,
        message: 'Built campfire. Its warmth attracts people.',
        unlocks_buildings: [1, 2]
    },
    shaman_hut = {
        name: 'Shaman Hut',
        id: 'shamanHut',
        number: 1,
        description: 'Explores and experiments with the nature that surrounds us.',
        costs_1: 'Wood',
        costs_1_amount: 10,
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
        built: 0,
        buildFunction: buildShamanHut,
        message: 'Built Shaman Hut. The Shaman will perform research and improve our tribe.'
    },
    hunter_post = {
        name: 'Hunter Post',
        id: 'hunterPost',
        number: 2,
        description: 'Hunts nearby animals for food and fur.',
        costs_1: 'Wood',
        costs_1_amount: 10,
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
        built: 0,
        buildFunction: buildHunterPost
    }
]


//Player-built buildings
function buildBuilding(input) {
    //Checks if the building is already built
    if (input.built == 1) {
        console.log(input.name + ' already built!')
    }
    else {
        //Checks each resource and makes sure we have enough of them
        for (i = 1; i < 6; i++) {
            var amt = eval('input.costs_' + i + '_amount') // Amount of resources
            var nm = eval('input.costs_' + i) // Name of resource
            if (nm !== undefined) {
                //console.log(input.name + ' costs ' + amt + ' of this resource : ' + nm)
                lower = nm.toLowerCase();
                a = eval('input.costs_' + i)
                //console.log('We currently have ' + resource[lower] + ' ' + a);
                //Resource check
                if (resource[lower] < amt) {
                    console.log('Not enough ' + a)
                }
                //Spends resource
                else {
                    //console.log('Inventory before : ' + resource[lower])
                    //console.log('Cost : ' + amt)
                    resource[lower] -= amt;
                    //console.log('Inventory after : ' + resource[lower])
                }
            }
            else {
                //console.log('Resource is undefined')
            }
        } // closes for loop

        //Sets this building as built
        buildings[input.number].built = 1;
        //Unlocks related buildings
        var currBld = buildings[input.number].unlocks_buildings
        for (i=0; i<=[currBld].length; i++){
            buildings[currBld[i]].displayable = 1;
            var currBldId = buildings[currBld[i]].id;
            var bldFunc = eval('show' + currBldId[0].toUpperCase() + currBldId.substr(1))
            document.getElementById("left-tab-cell-" + currBld[i]).addEventListener("click", bldFunc);
        }
        
        //Displays the related messages
        logText(input.message);

        //Updates UI for new buildings
        displayBuildings();
    }

}


function showCampfire(){
    tooltip(campfire);
};
function showShamanHut(){
    tooltip(shaman_hut);
};
function showHunterPost(){
    tooltip(hunter_post);
};




function buildCampfire(){
    if (buildings[0].built == 1){
        logText('Campfire already built!');
    }
    else if (resource.wood < buildings[0].costs_1_amount){
        logText('More ' + buildings[0].costs_1 + ' required!');
    }
    else if (resource.stone < buildings[0].costs_2_amount){
        logText('More ' + buildings[0].costs_2 + ' required!');
    }
    else if (resource.wood < buildings[0].costs_1_amount && resource.stone < buildings[0].costs_2_amount){
        logText('More resources required!');
    }
    //Requirements are met!
    if (resource.wood >= 5 && resource.stone >= 5 && buildings[0].built == 0){
        //Spends resources
        resource.wood -= buildings[0].costs_1_amount;;
        resource.stone -= buildings[0].costs_2_amount;;
        storage.food =+ 10;
        storage.wood =+ 10;
        storage.stone =+ 10;
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

function buildShamanHut(){
    if (buildings[1].built == 1){
        logText('Shaman Hut already built!');
    }
    else if (resource.wood < buildings[1].costs_1_amount){
        logText('More ' + buildings[1].costs_1 + ' required!');
    }
    else if (resource.stone < buildings[1].costs_2_amount){
        logText('More ' + buildings[1].costs_2 + ' required!');
    }
    else if (resource.wood < buildings[1].costs_1_amount && resource.stone < buidlings[1].costs_2_amount){
        logText('More resources required!');
    }
    if (resource.wood >= buildings[1].costs_1_amount && resource.stone >= buildings[1].costs_2_amount && buildings[1].built == 0){
        resource.wood -= buildings[1].costs_1_amount;
        resource.stone -= buildings[1].costs_2_amount;
        $('#left-tab-cell-1').addClass('built');
        show('#research-title',100);
        logText('Built Shaman Hut. The Shaman will perform research and improve our tribe.')
        hide('#build-button', 100);
        buildings[1].built = 1;
        displayBuildings();
    }
}
function buildHunterPost(){
    console.log('Placeholder Text for hunter post');
}



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