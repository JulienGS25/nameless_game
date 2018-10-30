//Exploration
document.getElementById("scout-btn").addEventListener("click", scout);


function scout() {
    exploredArea++;

    document.getElementById('explored').innerHTML = exploredArea;
    unveilStuff(exploredArea);
    if (speed.foodGather > 1){
        speed.foodGather = speed.foodGather / 1.1;
        //console.log('Foraging speed is ' + speed.foodGather);
        };
    if (speed.woodGather > 1){
        speed.woodGather = speed.woodGather / 1.1;
        //console.log('Wood gathering speed is ' + speed.woodGather);
        };
    if (speed.stoneGather > 1){
        speed.stoneGather = speed.stoneGather / 1.1;
        //console.log('Stone gathering speed is ' + speed.stoneGather);
        };
};

function unveilStuff(exploredArea) {
    if (exploredArea == 1) {
        logText('You see you are not alone. Friends?');
        show('#people-resource');
        visible.peopleResource = true;
        show('.bottom-tab');
        visible.bottomTab = true;
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
        visible.forageFoodButton = true;
        $('#scout-btn').text('Scout area');
        state = 3;
    }
    else if (exploredArea == 5) {
        logText('You found some branches on the ground. You should gather a few.');
        show('#gather-wood-btn');
        visible.gatherWoodButton = true;
        state = 4;
    }
    else if (exploredArea == 7) {
        logText('You found some stones, they should be useful.');
        show('#gather-stone-btn');
        visible.gatherStoneButton = true;
        state = 5;
    }
};