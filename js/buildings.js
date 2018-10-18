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
        unlocks_buildings: [1, 2],
        showFunction: 'showCampfire'
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
        costs_3: undefined,
        costs_3_amount: undefined,
        costs_4: undefined,
        costs_4_amount: undefined,
        costs_5: undefined,
        costs_5_amount: undefined,
        effects_1: 'Unlocks Research',
        effects_2: '',
        effects_3: '',
        effects_4: '',
        effects_5: '',
        displayable: 0,
        built: 0,
        buildFunction: buildShamanHut,
        message: 'Built Shaman Hut. The Shaman will perform research and improve our tribe.',
        showFunction: 'shaman_hut'
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
        costs_3: undefined,
        costs_3_amount: undefined,
        costs_4: undefined,
        costs_4_amount: undefined,
        costs_5: undefined,
        costs_5_amount: undefined,
        effects_1: 'Provides food',
        effects_2: 'Provides furs',
        effects_3: '',
        effects_4: '',
        effects_5: '',
        displayable: 0,
        built: 0,
        buildFunction: buildHunterPost,
        message: 'Built Hunter Post. The Hunter will track and kill nearby animals for food and fur.',
        showFunction: 'hunter_post'
    }
]



//Player-built buildings
function buildBuilding2(input) {
    //Checks if the building is already built
    if (input.built == 1) {
        logText(input.name + ' already built!');
    }

    else if (input.built == 0) {
        //Building is not already built, moving on
        if (input.costs_1 !== undefined) {
            resourceName1 = input.costs_1.toLowerCase();
            resourceCost1 = input.costs_1_amount;
            resourceInv1 = eval('resource.' + resourceName1) //resource.(resourcename)
        }
        else {
            resourceName1 = 0;
            resourceCost1 = 0
            resourceInv1 = -1;
        }
        if (input.costs_2 !== undefined) {
            resourceName2 = input.costs_2.toLowerCase();
            resourceCost2 = input.costs_2_amount;
            resourceInv2 = eval('resource.' + resourceName2) //resource.(resourcename)
        }
        else {
            resourceName2 = 0;
            resourceCost2 = 0;
            resourceInv2 = -1;
        }
        if (input.costs_3 !== undefined) {
            resourceName3 = input.costs_3.toLowerCase();
            resourceCost3 = input.costs_3_amount;
            resourceInv3 = eval('resource.' + resourceName3) //resource.(resourcename)
        }
        else {
            resourceName3 = 0;
            resourceCost3 = 0;
            resourceInv3 = -1;
        }
        if (input.costs_4 !== undefined) {
            resourceName4 = input.costs_4.toLowerCase();
            resourceCost4 = input.costs_4_amount;
            resourceInv4 = eval('resource.' + resourceName4) //resource.(resourcename)
        }
        else {
            resourceName4 = 0;
            resourceCost4 = 0;
            resourceInv4 = -1;
        }
        if (input.costs_5 !== undefined) {
            resourceName5 = input.costs_5.toLowerCase();
            resourceCost5 = input.costs_5_amount;
            resourceInv5 = eval('resource.' + resourceName5) //resource.(resourcename)
        }
        else {
            resourceName5 = 0;
            resourceCost5 = 0
            resourceInv5 = -1;
        }

        if (resourceCost1 !== 0) {
            //Resource 1 exists

            console.log('We have ' + resourceInv1 + ' ' + resourceName1 + '.');
            console.log(input.name + ' costs ' + resourceCost1 + ' ' + resourceName1 + '.')
            if (resourceInv1 < resourceCost1) {
                logText('Not enough ' + input.costs_1 + '!')
            }
            if (resourceInv1 >= resourceCost1) {
                //Resource 1 requirement is met, moving on
                if (resourceCost2 !== 0) {
                    //Resource 2 exists

                    console.log('We have ' + resourceInv2 + ' ' + resourceName2 + '.');
                    console.log(input.name + ' costs ' + resourceCost2 + ' ' + resourceName2 + '.')
                    if (resourceInv2 < resourceCost2) {
                        logText('Not enough ' + input.costs_2 + '!')
                    }
                    if (resourceInv2 >= resourceCost2) {
                        //Resource 2 requirement is met, moving on
                        if (resourceCost3 !== 0) {
                            //Resource 3 exists
                            console.log('We have ' + resourceInv3 + ' ' + resourceName3 + '.');
                            console.log(input.name + ' costs ' + resourceCost3 + ' ' + resourceName3 + '.')
                            if (resourceInv3 < resourceCost3) {
                                logText('Not enough ' + input.costs_3 + '!')
                            }
                            if (resourceInv3 >= resourceCost3) {
                                //Resource 3 requirement is met, moving on
                                if (resourceCost4 !== 0) {
                                    //Resource 4 exists

                                    console.log('We have ' + resourceInv4 + ' ' + resourceName4 + '.');
                                    console.log(input.name + ' costs ' + resourceCost4 + ' ' + resourceName4 + '.')
                                    if (resourceInv4 < resourceCost4) {
                                        logText('Not enough ' + input.costs_4 + '!')
                                    }
                                    if (resourceInv4 >= resourceCost4) {
                                        //Resource 3 requirement is met, moving on
                                        if (resourceCost5 !== 0) {
                                            //Resource 5 exists

                                            console.log('We have ' + resourceInv5 + ' ' + resourceName5 + '.');
                                            console.log(input.name + ' costs ' + resourceCost5 + ' ' + resourceName5 + '.')
                                            if (resourceInv5 < resourceCost5) {
                                                logText('Not enough ' + input.costs_5 + '!')
                                            }
                                            if (resourceInv5 >= resourceCost5) {
                                                //All requirements are met, proceed
                                                console.log('DONE');

                                            }
                                        }
                                        else {
                                            console.log('5 resources used');
                                        }
                                    }
                                }
                                else {
                                    console.log('4 resources used');
                                }
                            }
                            else {
                                console.log('3 resources used');
                            }
                        }
                        else {
                            console.log('2 resources used');
                            //Marks the building as built
                            buildings[input.number].built = 1;
                            $('#left-tab-cell-' + input.number).addClass('built');
                            //Displays the related messages
                            logText(input.message);
                            //Updates UI for new buildings
                            displayBuildings();
                            
                            
                            //Unlocks the corresponding buildings
                            for (i=0; i<buildings[input.number].unlocks_buildings.length; i++){
                                a = buildings[input.number].unlocks_buildings[i];
                                buildings[a].displayable = 1;
                                c = eval(buildings[i].showFunction);
                                console.log('HERE');
                                console.log(c);
                                console.log('left-tab-cell-' + i);
                                document.getElementById('left-tab-cell-' + i).addEventListener("click", function(){
                                    showTooltip(c);
                                });
                            }

                            //Spends the required resources
                            resource[resourceName1] -= resourceCost1;
                            resource[resourceName2] -= resourceCost2;
                            
                        }
                    }
                }
                else {
                    console.log('1 resource used.')
                }
            }
        }
        else {
            console.log('0 resources used. Should not happen.')
        }
    }
}



//Player-built buildings
function buildBuilding(input) {
    //Checks if the building is already built
    if (input.built == 1) {
        logText(input.name + ' already built!')
    }
    else if (input.built == 0) {
        var passes = 0;
        //Checks each resource and makes sure we have enough of them
        for (i = 1; i < 6; i++) {
            var amt = eval('input.costs_' + i + '_amount') // Amount of resources
            var nm = eval('input.costs_' + i) // Name of resource

            if (nm !== undefined) {
                //Checks how many resource types are being used
                passes++;
                
                lower = nm.toLowerCase();
                a = eval('input.costs_' + i);
                console.log(passes + ' resource types used to build ' + input.name);
                console.log(lower)
                //Resource check

                if (resource[lower] < amt) {
                    logText('Not enough ' + a + '!');
                }
                //Spends resource
                else if (resource[lower] >= amt) {
                    resource[lower] -= amt;
                    //Marks this building as built
                    buildings[input.number].built = 1;
                }
            }
            else {
                //Resource is undefined, nothing else happens
            }
        } // closes for loop


        //Unlocks related buildings
        var currBld = buildings[input.number].unlocks_buildings
        for (i=0; i<=[currBld].length; i++){
            buildings[currBld[i]].displayable = 1;
            var currBldId = buildings[currBld[i]].id;
            var bldFunc = eval('show' + currBldId[0].toUpperCase() + currBldId.substr(1))
            document.getElementById("left-tab-cell-" + currBld[i]).addEventListener("click", bldFunc);
            $('#left-tab-cell-' + input.number).addClass('built');
        }
        //Displays the related messages
        logText(input.message);

        //Updates UI for new buildings
        displayBuildings();
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