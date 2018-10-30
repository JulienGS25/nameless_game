//Variables
//Resources
var resource = {
    "people": 0.0,
    "food": 0.0,
    "wood": 0.0,
    "stone": 0.0,
    "science": 0.0,
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
    "water": 0.0
}

//Speed
var speed = {
    "foodGather": 2,
    "woodGather": 2,
    "stoneGather": 2
}

//Efficiency
var efficiency = {
    "foodGather": 1,
    "woodGather": 1,
    "stoneGather": 1,
    "shaman": 1,
    "hunter": 1,
    "woodChopper": 1,
    "miner": 1,
    "farmer": 1,
    "explore": 1
}

//Storage
var storage = {
    "people": 5.0,
    "food": 5.0,
    "wood": 5.0,
    "stone": 5.0,
    "science": 0.0,
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
}

//Events
var events = {
    "lightningStrike": 0,
    "wakeUp": 0
}

//Messages
var messages = {
    'coolMsgDisplayed': 0,
    'coldMsgDisplayed': 0,
    'warmerMsgDisplayed': 0,
    'warmMsgDisplayed': 0,
    'hotMsgDisplayed': 0,
    'resourceSpeedMsgDisplayed': 0,
}

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
    "scienceResource" : false,
    "forageFoodButton" : false,
    "gatherWoodButton" : false,
    "gatherStoneButton" : false,
    "exploreButton" : false,
    "leftTabShown": 'buildings', //can be buildings or research
}

//Jobs
var jobs = {
    "shaman": 0, //science
    "hunter": 0, //food
    "woodchopper": 0, //wood
    "miner": 0, //stone
    "farmer": 0, //food
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
