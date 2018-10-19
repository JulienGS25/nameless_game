//Research dictionary
var research = [
    stoneWorking = {
        name: 'Stone Working',
        number: 0,
        description: 'Primitive tools used for everyday tasks.',
        costs_1: 'Stone',
        costs_1_amount: 10,
        costs_2: '',
        costs_2_amount: undefined,
        costs_3: undefined,
        costs_3_amount: undefined,        
        costs_4: undefined,
        costs_4_amount: undefined,       
        costs_5: undefined,
        costs_5_amount: undefined,       
        effects_1: 'Unlocks Stone Tools',
        effects_2: '',
        effects_3: '',
        effects_4: '',
        effects_5: '',
        displayable: 1,
        researched: 0,
        researchFunction: researchStoneWorking,
        showFunction: showStoneWorking,
        message: 'By carving stone into tools, you manage to improve the speed at which you perform tasks.',
        unlocks_research: []
    },
    stoneWorking = {
        name: 'Primitive Construction',
        number: 1,
        description: 'A roof over your people\'s heads.',
        costs_1: 'Stone',
        costs_1_amount: 10,
        costs_2: undefined,
        costs_2_amount: undefined,
        costs_3: undefined,
        costs_3_amount: undefined,        
        costs_4: undefined,
        costs_4_amount: undefined,       
        costs_5: undefined,
        costs_5_amount: undefined,       
        effects_1: 'Placeholder',
        effects_2: '',
        effects_3: '',
        effects_4: '',
        effects_5: '',
        displayable: 1,
        researched: 0,
        researchFunction: researchPrimitiveConstruction,
        showFunction: showPrimitiveConstruction,
        message: 'Placeholder',
        unlocks_research: []
    },
]




function researchStoneWorking(){

}

function researchPrimitiveConstruction(){

}


function showStoneWorking(){

}

function showPrimitiveConstruction(){

}