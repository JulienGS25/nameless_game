//Research dictionary
var research = [
    stoneWorking = {
        name: "Stone Working",
        number: 0,
        description: "Primitive tools used for everyday tasks.",
        costs_1: "Stone",
        costs_1_amount: 10,
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
        showFunction: showStoneWorking,
        message: "By carving stone into tools, you manage to improve the speed at which you perform tasks.",
        unlocks_research: []
    },
    primitiveConstruction = {
        name: "Primitive Construction",
        number: 1,
        description: "A roof over your people\"s heads.",
        costs_1: "Stone",
        costs_1_amount: 10,
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
        showFunction: showPrimitiveConstruction,
        message: "Placeholder",
        unlocks_research: []
    },
]


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
        research[input.number].researched = 1;
        $('#left-tab-cell-' + input.number).addClass('built');

        //Displays the related messages
        logText(input.message);

        //Unlocks the related buildings
        if (research[input.number].unlocks_research !== undefined){
        var unlockedResearch = research[input.number].unlocks_research; //array containing list of buildings unlocked
        for (l = 0; l < unlockedResearch.length; l++) {
            research[unlockedResearch[l]].displayable = 1;
            }
        }

        //Updates UI for new buildings
        displayResearch();

        //Runs the corresponding function specific to this building
        research[input.number].researchFunction();
    }
}



function researchStoneWorking(){

}

function researchPrimitiveConstruction(){

}


function showStoneWorking(){
    showTooltip(stoneWorking);
}

function showPrimitiveConstruction(){
    showTooltip(primitiveConstruction)

}