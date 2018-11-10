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

        //Runs the corresponding function specific to this building
        var rscFunc = eval(research[input.id].researchFunction);
        rscFunc();

    }
}



function researchStoneWorking(){
    
};

function researchPrimitiveConstruction(){

};
function researchStoneTools(){

}
function researchStonePickaxe(){

}
function researchStoneAxe(){

}
function researchStoneSpear(){

}
function researchSmelting(){
    show("#furnace-btn",100);
    visible.furnaceButton = true;
};

function researchCopperSmelting(){

}
function researchMetalWorking(){

}





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
        effects_1: "Unlocks research: Stone Tools",
        effects_2: "",
        effects_3: "",
        effects_4: "",
        effects_5: "",
        displayable: 1,
        researched: 0,
        researchFunction: "researchStoneWorking",
        message: "By hitting stones together, you can shape them into useful objects.",
        unlocks_research: [2],
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
        effects_1: "Unlocks building: Miner Hut",
        effects_2: "Unlocks building: Wood Chopper Post",
        effects_3: "Unlocks research: Smelting",
        effects_4: "Unlocks research: Agriculture",
        effects_5: "",
        displayable: 1,
        researched: 0,
        researchFunction: "researchPrimitiveConstruction",
        message: "With logs and stones, you can assemble primitive buildings to provide shelter for your tribe.",
        unlocks_research: [],
        unlocks_buildings: [4, 5],
        unique: true
    },
    stoneTools = {
        name: "Stone Tools",
        id: 2,
        description: "Tools made of stone. Very weak and primitive, but it's better than nothing..",
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
        effects_1: "Unlocks research: Stone Pickaxe",
        effects_2: "Unlocks research: Stone Axe",
        effects_3: "Unlocks research: Stone Spear",
        effects_4: "Unlocks research: Early Writing",
        effects_5: "",
        displayable: 0,
        researched: 0,
        researchFunction: "researchStoneTools",
        message: "You can use stones as basic tools to improve your tasks.",
        unlocks_research: [3, 4, 5], //add ID 15 later
        unlocks_buildings: [],
        unique: true
    },
    stonePickaxe = {
        name: "Stone Pickaxe",
        id: 3,
        description: "A pointy stone tied at the end of a stick to smash rocks.",
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
        effects_1: "Improves mining speed",
        effects_2: "",
        effects_3: "",
        effects_4: "",
        effects_5: "",
        displayable: 0,
        researched: 0,
        researchFunction: "researchStonePickaxe",
        message: "By attaching a stone at the end of a stick, you may be able to use this to improve your ability to gather stones.",
        unlocks_research: [],
        unlocks_buildings: [],
        unique: false
    },
    stoneAxe = {
        name: "Stone Axe",
        id: 4,
        description: "A sharp stone tied at the end of a stick to cut trees.",
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
        effects_1: "Improves wood gathering",
        effects_2: "",
        effects_3: "",
        effects_4: "",
        effects_5: "",
        displayable: 0,
        researched: 0,
        researchFunction: "researchStoneAxe",
        message: "By sharpening a stone and attaching it at the end of a stick, you can use this to cut down trees.",
        unlocks_research: [],
        unlocks_buildings: [],
        unique: false
    },
    stoneSpear = {
        name: "Stone Spear",
        id: 5,
        description: "A long stick with a pointy stone at the end to improve hunting.",
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
        effects_1: "Improves hunters' food gathering",
        effects_2: "",
        effects_3: "",
        effects_4: "",
        effects_5: "",
        displayable: 0,
        researched: 0,
        researchFunction: "researchStoneSpear",
        message: "By attaching this pointy stone to a stick, you can hunt bigger animals for more meat to feed your tribe.",
        unlocks_research: [],
        unlocks_buildings: [],
        unique: false
    },
    smelting = {
        name: "Smelting",
        id: 6,
        description: "Using the harnessed power of fire, you can smelt metals for various purposes.",
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
        effects_1: "Unlocks tool: Furnace",
        effects_2: "Unlocks research: Copper Smelting",
        effects_3: "Unlocks research: Tin Smelting",
        effects_4: "",
        effects_5: "",
        displayable: 1,
        researched: 0,
        researchFunction: "researchSmelting",
        message: "You gather wood, light it on fire and bring it to a very hot temperature able to melt metals.",
        unlocks_research: [],
        unlocks_buildings: [4, 5],
        unique: true
    },
    copperSmelting = {
        name: "Copper Smelting",
        id: 7,
        description: "Copper is a soft metal but it won't wear as fast as stone.",
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
        effects_1: "Unlocks reseach: Metal Working",
        effects_2: "",
        effects_3: "",
        effects_4: "",
        effects_5: "",
        displayable: 0,
        researched: 0,
        researchFunction: "researchCopperSmelting",
        message: "You can throw copper ore into the orange glow of the fire and smelt it into bars.",
        unlocks_research: [8],
        unlocks_buildings: [],
        unique: true
    },
    metalWorking = {
        name: "Metal Working",
        id: 8,
        description: "By striking hot metal, you can work it to improve your tribe's equipment.",
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
        effects_1: "Unlocks reseach: Copper Pickaxe",
        effects_2: "",
        effects_3: "",
        effects_4: "",
        effects_5: "",
        displayable: 0,
        researched: 0,
        researchFunction: "researchMetalWorking",
        message: "After hammering day and night at this anvil, the metal starts to take shape into something useful.",
        unlocks_research: [8],
        unlocks_buildings: [],
        unique: true
    },
]
