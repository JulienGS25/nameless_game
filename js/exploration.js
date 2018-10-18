//Exploration
document.getElementById("scout-btn").addEventListener("click", scout);


function scout() {
    exploredArea++;

    //buildBuilding2(campfire);

    document.getElementById('explored').innerHTML = exploredArea;
    unveilStuff(exploredArea);
    if (forageSpeed > 1){
        forageSpeed = forageSpeed / 1.1;
        //console.log('Foraging speed is ' + forageSpeed);
        };
    if (woodGatherSpeed > 1){
        woodGatherSpeed = woodGatherSpeed / 1.1;
        //console.log('Wood gathering speed is ' + woodGatherSpeed);
        };
    if (stoneGatherSpeed > 1){
        stoneGatherSpeed = stoneGatherSpeed / 1.1;
        //console.log('Stone gathering speed is ' + stoneGatherSpeed);
        };
};

function unveilStuff(exploredArea) {
    if (exploredArea == 1) {
        logText('You see you are not alone. Friends?');
        show('#people-resource');
        visible.peopleResource = 1;
        show('.bottom-tab');
        visible.bottomTab = 1;
        $('.bottom-tab').animate({opacity: 1},{duration: 500});
        state = 1;
    }
    else if (exploredArea == 2) {
        logText('You look around some more...');
        state = 2;
    }
    else if (exploredArea == 3) {
        logText('You found a few bushes. They seem to have berries on them.');
        show('#forage-food-btn');
        visible.forageFoodButton = 1;
        $('#scout-btn').text('Scout area');
        state = 3;
    }
    else if (exploredArea == 5) {
        logText('You found some branches on the ground. You should gather a few.');
        show('#gather-wood-btn');
        visible.gatherWoodButton = 1;
        state = 4;
    }
    else if (exploredArea == 7) {
        logText('You found some stones, they should be useful.');
        show('#gather-stone-btn');
        visible.gatherStoneButton = 1;
        state = 5;
    }
};