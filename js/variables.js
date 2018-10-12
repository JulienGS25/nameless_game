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
    "water": 0.0
}

//Buildings
var building = {
    "campfire": 0,
    "forager": 0,
    "lumberjack": 0,
    "miner": 0,
}

var campfireBuilt = 0;
var foragers = 0;
var lumberjacks = 0;
var miners = 0;

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
    "water": 0.0
}

//Events
var events = {
    "lightningStrike": 0,
    "wakeUp": 0
}

//Other
var exploredArea = 0;
var passedTime = 0;
var currentTemp = 20;
var gameSpeed = 50;
var tooltipShown = 0;
var currentLeftTab = '' //Options are research, buildings or tools

//UI Visibility
var visible = {
    "leftTab": 0,
    "midTab": 0,
    "rightTab" : 0,
    "bottomTab" : 0,
    "era" : 0,
    "peopleResource" : 0,
    "foodResource" : 0,
    "woodResource" : 0,
    "stoneResource" : 0,
    "forageFoodButton" : 0,
    "gatherWoodButton" : 0,
    "gatherStoneButton" : 0,
    "exploreButton" : 0
}


//Progress variable
var state = 0;

//Dev tools
var devMode = 1;
var disableLightningEffect = 1;





