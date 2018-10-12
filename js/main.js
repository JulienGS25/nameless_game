//Adds text to the log
function logText(text){
    $('.right-tab').prepend("<p class='log-text'>" + text + "</p>");
}

//Makes an element appear with a fadein animation
function show(element, speed){
    $(element).animate({opacity: 1},{duration: speed});
    $(element).removeClass('hidden opacity-zero');
}
function hide(element, speed){
    $(element).animate({opacity: 0},{duration: speed});
    $(element).addClass('opacity-zero');
}
//Sets the current era
$('#era').text('Ancient Era')




//Makes the tooltip appear or updates the text
function tooltip(input) {
    if (tooltipShown == 0) {
        tooltipShown = 1;
        $('.work-area').append("<div class='hideTooltip' id='tooltip-title'>" + input.name + "</div>" +
            "<div class='hideTooltip' id='tooltip-desc'>" + input.description + "</div>" +
            "<div class='hideTooltip' id='tooltip-costs-container'>" +
            "<div class='hideTooltip' id='tooltip-costs-title'>Costs: </div>" +
            "<div class='hideTooltip' id='tooltip-costs-1'>" + input.costs_1 + "</div>" +
            "<div class='hideTooltip' id='tooltip-costs-2'>" + input.costs_2 + "</div>" +
            "<div class='hideTooltip' id='tooltip-costs-3'>" + input.costs_3 + "</div>" +
            "<div class='hideTooltip' id='tooltip-costs-4'>" + input.costs_4 + "</div>" +
            "<div class='hideTooltip' id='tooltip-costs-5'>" + input.costs_5 + "</div>" +
            "</div><div class='hideTooltip' id='tooltip-effects-container'>" +
            "<div class='hideTooltip'id='tooltip-effects-title'>Effects: </div>" +
            "<div class='hideTooltip'id='tooltip-effects-1'>" + input.effects_1 + "</div>" +
            "<div class='hideTooltip'id='tooltip-effects-2'>" + input.effects_2 + "</div>" +
            "<div class='hideTooltip'id='tooltip-effects-3'>" + input.effects_3 + "</div>" +
            "<div class='hideTooltip'id='tooltip-effects-4'>" + input.effects_4 + "</div>" +
            "<div class='hideTooltip'id='tooltip-effects-5'>" + input.effects_5 + "</div>" +
            "</div><div id='build-button' class='hideTooltip build-button game-button' type='button'>Build</div>");
    }
    else {
        hide('.hideTooltip', 100);
        setTimeout(function () {
            document.getElementById('tooltip-title').innerHTML = input.name;
            document.getElementById('tooltip-desc').innerHTML = input.description;
            document.getElementById('tooltip-costs-1').innerHTML = input.costs_1;
            document.getElementById('tooltip-costs-2').innerHTML = input.costs_2;
            document.getElementById('tooltip-costs-3').innerHTML = input.costs_3;
            document.getElementById('tooltip-costs-4').innerHTML = input.costs_4;
            document.getElementById('tooltip-costs-5').innerHTML = input.costs_5;
            document.getElementById('tooltip-effects-1').innerHTML = input.effects_1;
            document.getElementById('tooltip-effects-2').innerHTML = input.effects_2;
            document.getElementById('tooltip-effects-3').innerHTML = input.effects_3;
            document.getElementById('tooltip-effects-4').innerHTML = input.effects_4;
            document.getElementById('tooltip-effects-5').innerHTML = input.effects_5;
            show('.hideTooltip', 100);
        }, 100);
        if (buildings[0].built == 0){
            console.log('campfire is not built');
        }
        else if (buildings[0].built == 1){
            console.log('campfire is built');
        }
    }
}


//Left-tab UI Controls
document.getElementById("research-title").addEventListener("click", displayResearch);
document.getElementById("buildings-title").addEventListener("click", displayBuildings);
document.getElementById("tools-title").addEventListener("click", displayTools);

function displayResearch() {
    $('#buildings-title').removeClass('active-button');
    $('#tools-title').removeClass('active-button');
    $('#research-title').addClass('active-button');
    for (i = 0; i < 18; i++) {
        hide('#left-tab-cell-' + i, 100);
    }
    //Delay to give time for tabs to disappear before making new tabs appear
    setTimeout(function () {
        for (i = 0; i < research.length; i++) {
            if (research[i].displayable == 1) {
                document.getElementById('left-tab-cell-' + i).innerHTML = research[i].name;
                show('#left-tab-cell-' + i, 100);
            }
        }
    }, 100);
}

function displayBuildings() {
    $('#research-title').removeClass('active-button');
    $('#tools-title').removeClass('active-button');
    $('#buildings-title').addClass('active-button');
    for (i = 0; i < 18; i++) {
        hide('#left-tab-cell-' + i, 100);
    }
    //Delay to give time for tabs to disappear before making new tabs appear
    setTimeout(function () {
        for (i = 0; i < buildings.length; i++) {
            if (buildings[i].displayable == 1) {
                hide('#left-tab-cell-' + i, 100);
                document.getElementById('left-tab-cell-' + i).innerHTML = buildings[i].name;
                show('#left-tab-cell-' + i, 100);
            }
        }
    }, 100);

}
function displayTools(){
    $('#research-title').removeClass('active-button');
    $('#buildings-title').removeClass('active-button');
    $('#tools-title').addClass('active-button');
//No tools created yet
}


//Local Storage functions
if (typeof(Storage) == "undefined") {
    document.getElementById('game-title').innerHTML = 'Web Storage Support is required for this game. Please update your browser to one of the versions shown at: https://www.w3schools.com/html/html5_webstorage.asp';
};

document.getElementById("save").addEventListener("click", saveGame);
document.getElementById("load").addEventListener("click", loadGame);
document.getElementById("reset").addEventListener("click", resetGame);

function saveGame(){
    var getData = {
        'foodAmount':resource.food,
        'woodAmount':resource.wood,
        'stoneAmount':resource.stone,
        'peopleAmount':resource.people
    }
    //Saves the data
    localStorage.setItem('dataKey', JSON.stringify(getData));

    //Outputs the data to the console for verification
    console.log('Saved the following data: ' + getData);
}

function loadGame(){
    var a = localStorage.getItem('dataKey');
    if (a == null){
        console.log('No data stored!');
    }
    else {console.log('Loaded the following data: ' + test);
    }
}

function resetGame(){
    localStorage.clear('value');
    console.log('Cleared data. Local storage is now empty.');
    
}


if (devMode == 1){
    document.getElementById('dev-mode').innerHTML = 'DEV MODE';
    resource.food = storage.food;
    resource.wood = storage.wood;
    resource.stone = storage.stone;
    console.log('Dev Mode Activated. All resources maxed out');
    console.log('Food stocks changed to: ' + resource.food + '.');
    console.log('Wood stocks changed to: ' + resource.wood + '.');
    console.log('Stone stocks changed to: ' + resource.stone) + '.';
}

//Fixes rogue decimals
function prettify(input){
    var output = Math.round(input * 10000000)/10000000;
        return output;
}

// Game loop
window.setInterval(function(){
    getFood(foragers);
    getWood(lumberjacks);
    getStone(miners);
    passedTime++;
    if (passedTime >= 2 && events.wakeUp == 0){
        wakeUp();
    }
    if (passedTime >= 5){
        show('.middle-tab', 500);
    }    
    if (passedTime >= 10 && events.lightningStrike == 0 && state != 7) {
        discoverFire();
    }
    if (campfireBuilt == 1){
        if (resource.food > 0.0 && resource.people < storage.people){
            resource.people = resource.people + 0.01;
            resource.food = resource.food - 0.01;
        }
        if (resource.food < 0.1 && resource.people > 0.0){
            resource.people = resource.people - 0.01;
        }

    }
    document.getElementById('time').innerHTML = passedTime + ' seconds.';
    document.getElementById('temp').innerHTML = currentTemp + '°C.';
    document.getElementById("people").innerHTML = prettify(resource.people);
    document.getElementById("people-storage").innerHTML = prettify(storage.people);
    document.getElementById("p-res-1-amt").innerHTML = prettify(resource.food);
    document.getElementById("p-res-1-storage").innerHTML = prettify(storage.food);
    document.getElementById("p-res-2-amt").innerHTML = prettify(resource.wood);
    document.getElementById("p-res-2-storage").innerHTML = prettify(storage.wood);
    document.getElementById("p-res-3-amt").innerHTML = prettify(resource.stone);
    document.getElementById("p-res-3-storage").innerHTML = prettify(storage.stone);

}, gameSpeed);