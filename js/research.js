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
        if (eval(research[input.id].researchFunction) !== undefined){
            var rscFunc = eval(research[input.id].researchFunction);
            rscFunc();
        }
        
        

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

function researchCopperPickaxe(){

}

function researchCopperAxe(){

}
function researchCopperSpear(){

}
function researchAgriculture(){

}
function researchDomestication(){

}
function researchAnimalHusbandry(){

}
function researchEarlyWriting(){

}
function researchWheel(){

}
function researchTinSmelting(){

}
function researchBronzeAlloy(){

}
function researchBronzeArmor(){

}
function researchBronzeArmor(){

}
function researchBronzePickaxe(){

}
function researchBronzeAxe(){

}
function researchBronzeSpear(){

}
function researchImprovedConstruction(){

}

function researchAnimalEngine(){

}
function researchFlourMilling(){

}
function researchBread(){

}
function researchIronSmelting(){

}
function researchIronArmor(){

}
function researchIronPickaxe(){

}
function researchIronSpear(){

}
function researchIronAxe(){

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
        unlocks_research: [6, 12],
        unlocks_buildings: [4, 5],
        unique: true
    },
    stoneTools = {
        name: "Stone Tools",
        id: 2,
        description: "Tools made of stone. Very weak and primitive, but it's better than nothing.",
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
        unlocks_research: [3, 4, 5, 15],
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
        effects_2: "Unlocks resource: Copper Ore",
        effects_3: "Unlocks research: Copper Smelting",
        effects_4: "",
        effects_5: "",
        displayable: 0,
        researched: 0,
        researchFunction: "researchStonePickaxe",
        message: "By attaching a stone at the end of a stick, you may be able to use this to improve your ability to gather stones.",
        unlocks_research: [7],
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
        effects_3: "",
        effects_4: "",
        effects_5: "",
        displayable: 0,
        researched: 0,
        researchFunction: "researchSmelting",
        message: "You gather wood, light it on fire and bring it to a very hot temperature able to melt metals.",
        unlocks_research: [7],
        unlocks_buildings: [],
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
        effects_2: "Unlocks research: Copper Axe",
        effects_3: "Unlocks research: Copper Spear",
        effects_4: "",
        effects_5: "",
        displayable: 0,
        researched: 0,
        researchFunction: "researchMetalWorking",
        message: "After hammering day and night at this anvil, the metal starts to take shape into something useful.",
        unlocks_research: [9, 10, 11],
        unlocks_buildings: [],
        unique: true
    },
    copperPickaxe = {
        name: "Copper Pickaxe",
        id: 9,
        description: "A better pickaxe to improve mining efficiency and gather new resources.",
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
        effects_1: "Unlocks resource: Tin Ore",
        effects_2: "Unlocks research: Tin Smelting",
        effects_3: "",
        effects_4: "",
        effects_5: "",
        displayable: 0,
        researched: 0,
        researchFunction: "researchCopperPickaxe",
        message: "This harder pickaxe allows you to mine Tin.",
        unlocks_research: [17],
        unlocks_buildings: [],
        unique: false
    },
    copperAxe = {
        name: "Copper Axe",
        id: 10,
        description: "A better axe to cut more trees.",
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
        effects_1: "Improves wood gathering efficiency",
        effects_2: "",
        effects_3: "",
        effects_4: "",
        effects_5: "",
        displayable: 0,
        researched: 0,
        researchFunction: "researchCopperAxe",
        message: "",
        unlocks_research: [], 
        unlocks_buildings: [],
        unique: false
    },
    copperSpear = {
        name: "Copper Spear",
        id: 11,
        description: "A better spear to improve hunting.",
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
        effects_1: "Improves hunting efficiency",
        effects_2: "",
        effects_3: "",
        effects_4: "",
        effects_5: "",
        displayable: 0,
        researched: 0,
        researchFunction: "researchCopperSpear",
        message: "",
        unlocks_research: [], 
        unlocks_buildings: [],
        unique: false
    },
    agriculture = {
        name: "Agriculture",
        id: 12,
        description: "Allows you to grow wheat for future use.",
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
        effects_1: "Unlocks building: Farm",
        effects_2: "Unlocks job: Farmer",
        effects_3: "Unlocks research: Domestication",
        effects_4: "",
        effects_5: "",
        displayable: 0,
        researched: 0,
        researchFunction: "researchAgriculture",
        message: "By carefully planting seeds into the ground, you realize you can grow them into crops. This is the beginning of a stable civilization!",
        unlocks_research: [13], 
        unlocks_buildings: [],
        unique: true
    },
    domestication = {
        name: "Domestication",
        id: 13,
        description: "Allows you to use animals to improve your civilization.",
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
        effects_1: "Unlocks research: Animal Husbandry",
        effects_2: "",
        effects_3: "",
        effects_4: "",
        effects_5: "",
        displayable: 0,
        researched: 0,
        researchFunction: "researchDomestication",
        message: "After approaching various animals with food you find out that some of them can be domesticated and used for various tasks.",
        unlocks_research: [14], 
        unlocks_buildings: [],
        unique: true
    },
    animalHusbandry = {
        name: "Animal Husbandry",
        id: 14,
        description: "Allows you to use farm animals such as the cow, sheep and pig.",
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
        effects_1: "Unlocks building: Cow Pen",
        effects_2: "Unlocks building: Pig Pen",
        effects_3: "Unlocks building: Sheep Pen",
        effects_4: "",
        effects_5: "",
        displayable: 0,
        researched: 0,
        researchFunction: "researchAnimalHusbandry",
        message: "The cow, sheep and pig are the easiest to handle and provide the most resources. You can slaughter them for meat for your tribe.",
        unlocks_research: [14], 
        unlocks_buildings: [], // add 8, 9, 10 later
        unique: true
    },
    earlyWriting = {
        name: "Early Writing",
        id: 15,
        description: "Unlocks historians who write significant events for documentation. Also improves research.",
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
        effects_1: "Unlocks feature: Timeline",
        effects_2: "",
        effects_3: "",
        effects_4: "",
        effects_5: "",
        displayable: 0,
        researched: 0,
        researchFunction: "researchEarlyWriting",
        message: "By writing things down, you can transmit knowledge through generations. This is the primordial research which will carry your civilization into the future.",
        unlocks_research: [16], 
        unlocks_buildings: [],
        unique: true
    },
    wheel = {
        name: "Wheel",
        id: 16,
        description: "The wheel makes construction easier by allowing heavy materials to be transported.",
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
        effects_1: "Unlocks research: Improved Construction",
        effects_2: "",
        effects_3: "",
        effects_4: "",
        effects_5: "",
        displayable: 0,
        researched: 0,
        researchFunction: "researchEarlyWriting",
        message: "The wheel allows you to carry materials much heavier than before, improving various aspects of life.",
        unlocks_research: [23],
        unlocks_buildings: [],
        unique: true
    },
    tinSmelting = {
        name: "Tin Smelting",
        id: 17,
        description: "Tin is a soft metal on its own, but it may have uses later.",
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
        effects_1: "Unlocks research: Bronze Alloy",
        effects_2: "",
        effects_3: "",
        effects_4: "",
        effects_5: "",
        displayable: 0,
        researched: 0,
        researchFunction: "researchTinSmelting",
        message: "This soft, silver-looking metal may be useful by combining it with other metals.",
        unlocks_research: [18],
        unlocks_buildings: [],
        unique: true
    },
    bronzeAlloy = {
        name: "Bronze Alloy",
        id: 18,
        description: "Bronze is a copper-tin alloy which is much more durable than pure copper.",
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
        effects_1: "Unlocks research: Bronze Armor",
        effects_2: "Unlocks research: Bronze Pickaxe",
        effects_3: "Unlocks research: Bronze Axe",
        effects_4: "Unlocks research: Bronze Spear",
        effects_5: "",
        displayable: 0,
        researched: 0,
        researchFunction: "researchBronzeAlloy",
        message: "By mixing copper and tin, you can create this strong and useful alloy.",
        unlocks_research: [19, 20, 21, 22],
        unlocks_buildings: [],
        unique: true
    },
    bronzeArmor = {
        name: "Bronze Armor",
        id: 19,
        description: "Bronze armor helps your hunters survive against the elements, improving exploration.",
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
        effects_1: "",
        effects_2: "",
        effects_3: "",
        effects_4: "",
        effects_5: "",
        displayable: 0,
        researched: 0,
        researchFunction: "researchBronzeArmor",
        message: "",
        unlocks_research: [],
        unlocks_buildings: [],
        unique: false
    },
    bronzePickaxe = {
        name: "Bronze Pickaxe",
        id: 20,
        description: "Bronze pickaxe helps to mine more stone and gather new resources.",
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
        effects_1: "Unlocks resource: Iron Ore",
        effects_2: "Unlocks research: Iron Smelting",
        effects_3: "",
        effects_4: "",
        effects_5: "",
        displayable: 0,
        researched: 0,
        researchFunction: "researchBronzePickaxe",
        message: "",
        unlocks_research: [27],
        unlocks_buildings: [],
        unique: false
    },
    bronzeAxe = {
        name: "Bronze Axe",
        id: 21,
        description: "Bronze axe helps cut more trees.",
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
        effects_1: "Improves wood gathering efficiency",
        effects_2: "",
        effects_3: "",
        effects_4: "",
        effects_5: "",
        displayable: 0,
        researched: 0,
        researchFunction: "researchBronzeAxe",
        message: "",
        unlocks_research: [],
        unlocks_buildings: [],
        unique: false
    },
    bronzeSpear = {
        name: "Bronze Spear",
        id: 22,
        description: "Bronze spear helps to hunt for more food.",
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
        effects_1: "Improves hunting efficiency",
        effects_2: "",
        effects_3: "",
        effects_4: "",
        effects_5: "",
        displayable: 0,
        researched: 0,
        researchFunction: "researchBronzeSpear",
        message: "",
        unlocks_research: [],
        unlocks_buildings: [],
        unique: false
    },
    improvedConstruction = {
        name: "Improved Construction",
        id: 23,
        description: "Unlocks various buildings.",
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
        effects_1: "Improves hunting efficiency",
        effects_2: "",
        effects_3: "",
        effects_4: "",
        effects_5: "",
        displayable: 0,
        researched: 0,
        researchFunction: "researchImprovedConstruction",
        message: "With the use of wheels of various tools, you are able to improve your buildings considerably.",
        unlocks_research: [24],
        unlocks_buildings: [],
        unique: true
    },
    animalEngine = {
        name: "Animal Engine",
        id: 24,
        description: "Animals can be used to improve the processes of resource gathering and refining.",
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
        effects_1: "Unlocks research: Flour Milling",
        effects_2: "",
        effects_3: "",
        effects_4: "",
        effects_5: "",
        displayable: 0,
        researched: 0,
        researchFunction: "researchAnimalEngine",
        message: "By attaching a large animal to a wheel, you may be able to use its strength to further your own goals.",
        unlocks_research: [25],
        unlocks_buildings: [],
        unique: true
    },
    flourMilling = {
        name: "Flour Milling",
        id: 25,
        description: "By putting wheat into a mill, you can turn it into flour.",
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
        effects_1: "Unlocks research: Bread",
        effects_2: "",
        effects_3: "",
        effects_4: "",
        effects_5: "",
        displayable: 0,
        researched: 0,
        researchFunction: "researchFlourMilling",
        message: "By milling wheat using the animal engine, you get a fine white powder called flour.",
        unlocks_research: [26],
        unlocks_buildings: [],
        unique: true
    },
    bread = {
        name: "Bread",
        id: 26,
        description: "By baking flour and water, you can make bread to provide a stable food source for your civlization.",
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
        effects_1: "Improves food production",
        effects_2: "",
        effects_3: "",
        effects_4: "",
        effects_5: "",
        displayable: 0,
        researched: 0,
        researchFunction: "researchBread",
        message: "This bread will be useful to fill up your stocks during the cold season.",
        unlocks_research: [],
        unlocks_buildings: [],
        unique: true
    },
    ironSmelting = {
        name: "Iron Smelting",
        id: 27,
        description: "With an even hotter fire, you can smelt iron for tools and armor.",
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
        effects_1: "Unlocks research: Iron Armor",
        effects_2: "Unlocks research: Iron Pickaxe",
        effects_3: "Unlocks research: Iron Axe",
        effects_4: "Unlocks research: Iron Spear",
        effects_5: "",
        displayable: 0,
        researched: 0,
        researchFunction: "researchIronSmelting",
        message: "",
        unlocks_research: [28, 29, 30, 31],
        unlocks_buildings: [],
        unique: true
    },
    ironArmor = {
        name: "Iron Armor",
        id: 28,
        description: "An even better armor to improve exploration.",
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
        effects_1: "Improves exploration",
        effects_2: "",
        effects_3: "",
        effects_4: "",
        effects_5: "",
        displayable: 0,
        researched: 0,
        researchFunction: "researchIronArmor",
        message: "",
        unlocks_research: [],
        unlocks_buildings: [],
        unique: false
    },
    ironPickaxe = {
        name: "Iron Pickaxe",
        id: 29,
        description: "An even better pickaxe to improve mining.",
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
        effects_1: "Improves mining efficiency",
        effects_2: "",
        effects_3: "",
        effects_4: "",
        effects_5: "",
        displayable: 0,
        researched: 0,
        researchFunction: "researchIronPickaxe",
        message: "",
        unlocks_research: [],
        unlocks_buildings: [],
        unique: false
    },
    ironSpear = {
        name: "Iron Spear",
        id: 30,
        description: "An even better spear to improve hunting.",
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
        effects_1: "Improves hunting efficiency",
        effects_2: "",
        effects_3: "",
        effects_4: "",
        effects_5: "",
        displayable: 0,
        researched: 0,
        researchFunction: "researchIronSpear",
        message: "",
        unlocks_research: [],
        unlocks_buildings: [],
        unique: false
    },
    ironAxe = {
        name: "Iron Axe",
        id: 31,
        description: "An even better axe for wood chopping.",
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
        effects_1: "Improves wood gathering efficiency",
        effects_2: "",
        effects_3: "",
        effects_4: "",
        effects_5: "",
        displayable: 0,
        researched: 0,
        researchFunction: "researchIronAxe",
        message: "",
        unlocks_research: [],
        unlocks_buildings: [],
        unique: false
    },
]
