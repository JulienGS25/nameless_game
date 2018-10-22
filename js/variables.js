//Variables
//Resources
var resource = {
    "people": 0.0,
    "food": 0.0,
    "wood": 0.0,
    "stone": 0.0,
    "copperOre": 0.0,
    "copperIngot": 0.0,
    "tinOre": 0.0,
    "tinIngot": 0.0,
    "ironOre": 0.0,
    "ironIngot": 0.0,
    "goldOre": 0.0,
    "goldIngot": 0.0,
    "wheat": 0.0,
    "flour": 0.0,
    "water": 0.0,
    "science": 0.0
}

//Efficiency
var forageSpeed = 2;
var woodGatherSpeed = 2;
var stoneGatherSpeed = 2;
var forageEfficiency = 1;
var woodGatherEfficiency = 1;
var stoneGatherEfficiency = 1;

//Storage
var storage = {
    "people": 5.0,
    "food": 5.0,
    "wood": 5.0,
    "stone": 5.0,
    "copperOre": 0.0,
    "copperIngot": 0.0,
    "tinOre": 0.0,
    "tinIngot": 0.0,
    "ironOre": 0.0,
    "ironIngot": 0.0,
    "goldOre": 0.0,
    "goldIngot": 0.0,
    "wheat": 0.0,
    "flour": 0.0,
    "water": 0.0,
    "science": 0.0
}

//Events
var events = {
    "lightningStrike": 0,
    "wakeUp": 0
}

//Messages
var coolMsgDisplayed = 0;
var coldMsgDisplayed = 0;
var warmerMsgDisplayed = 0;
var warmMsgDisplayed = 0;
var hotMsgDisplayed = 0;
var resourceSpeedMsgDisplayed = 0;

//UI Visibility
var visible = {
    "leftTab": false,
    "midTab": false,
    "rightTab" : false,
    "bottomTab" : false,
    "era" : false,
    "peopleResource" : false,
    "foodResource" : false,
    "woodResource" : false,
    "stoneResource" : false,
    "forageFoodButton" : false,
    "gatherWoodButton" : false,
    "gatherStoneButton" : false,
    "exploreButton" : false,
    "leftTabShown": 'buildings', //can be buildings, research or tools
}

//Jobs
var jobs = {
    "shaman": 0,
    "hunter": 0,
    "woodchopper": 0,
    "miner": 0,
    "farmer": 0,
}

//Progress variable
var state = 0;

//Dev tools
var devMode = 1;
var disableLightningEffect = 1;


//Other
var exploredArea = 0;
var passedTime = 0;
var currentTemp = 30;
var gameSpeed = 500;
var tooltipShown = 0;
var pollutionLevel = 0;
var foodConsumption = 0.005;
