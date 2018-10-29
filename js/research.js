//This function is an identical copy of buildBuilding in buildings.js, except for a few variables specific to research
//May be removed later after making buildBuilding work for science and research
function researchScience(input) {
    hide('#build-button',100);
    if (input.researched == 1) {
        logText(input.name + ' already discovered!');
        return;
    }
    //First loop checks how many resource types are needed to research this
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
        research[input.id].researched = 1;
        //$('#left-tab-cell-' + input.id).addClass('built');

        //Displays the related messages
        logText(input.message);

        //Unlocks the related research
        if (research[input.id].unlocks_research !== undefined) {
            var unlockedResearch = research[input.id].unlocks_research; //array containing list of research unlocked
            for (var l = 0; l < unlockedResearch.length; l++) {
                research[unlockedResearch[l]].displayable = 1;
            }
        };
        //Unlocks the related building
        if (research[input.id].unlocks_buildings !== undefined) {
            var unlockedBuilding = research[input.id].unlocks_buildings; //array containing list of buildings unlocked
            for (var l = 0; l < unlockedBuilding.length; l++) {
                buildings[unlockedBuilding[l]].displayable = 1;
            }
        }



        //Updates UI for new buildings
        displayResearch();

        //Runs the corresponding function specific to this research
        research[input.id].researchFunction();
    }
}



function researchStoneWorking(){

};

function researchPrimitiveConstruction(){

};



//Research dictionary
var research = [
    stoneWorking = {
        name: "Stone Working",
        id: 0,
        description: "You can use your surroundings to your advantage.",
        costs_1: "Science",
        costs_1_amount: 75,
        costs_2: undefined,
        costs_2_amount: undefined,
        costs_3: undefined,
        costs_3_amount: undefined,
        costs_4: undefined,
        costs_4_amount: undefined,
        costs_5: undefined,
        costs_5_amount: undefined,
        effects_1: "Unlocks Stone Tools",
        effects_2: "",
        effects_3: "",
        effects_4: "",
        effects_5: "",
        displayable: 1,
        researched: 0,
        researchFunction: researchStoneWorking,
        message: "By hitting stones together, you can shape them into useful objects.",
        unlocks_research: [],
        unlocks_buildings: [],
        unique: true
    },
    primitiveConstruction = {
        name: "Primitive Construction",
        id: 1,
        description: "A roof over your people's heads.",
        costs_1: "Science",
        costs_1_amount: 100,
        costs_2: undefined,
        costs_2_amount: undefined,
        costs_3: undefined,
        costs_3_amount: undefined,
        costs_4: undefined,
        costs_4_amount: undefined,
        costs_5: undefined,
        costs_5_amount: undefined,
        effects_1: "Placeholder",
        effects_2: "",
        effects_3: "",
        effects_4: "",
        effects_5: "",
        displayable: 1,
        researched: 0,
        researchFunction: researchPrimitiveConstruction,
        message: "Placeholder",
        unlocks_research: [],
        unlocks_buildings: [4, 5],
        unique: true
    },
]
