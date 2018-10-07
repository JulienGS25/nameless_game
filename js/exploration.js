//Exploration
document.getElementById("scout-btn").addEventListener("click", scout);

function scout() {
    exploredArea++;
    document.getElementById('explored').innerHTML = exploredArea;
    unveilStuff(exploredArea);
};


function unveilStuff(exploredArea) {
    if (exploredArea == 1) {
        logText('You see you are not alone. Friends?');
        show('#people-resource');
        show('.bottom-tab');
        //$('#people-resource').removeClass("hidden");
        //$('#people-resource').removeClass('opacity-zero');
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
        /*$('#forage-food-btn').removeClass("hidden");
        $('#forage-food-btn').removeClass('opacity-zero');
        $('#forage-food-btn').animate({opacity: 1},{duration: 500});*/
        $('#scout-btn').text('Scout area');
        state = 3;
    }
    else if (exploredArea == 5) {
        logText('You found some branches on the ground. You should gather a few.');
        show('#gather-wood-btn');
        /*$('#gather-wood-btn').removeClass("hidden");
        $('#gather-wood-btn').animate({opacity: 1},{duration: 500});
        $('#gather-wood-btn').removeClass('opacity-zero');*/
        state = 4;
    }
    else if (exploredArea == 7) {
        logText('You found some stones, they should be useful.');
        show('#gather-stone-btn');
        /*$('#gather-stone-btn').removeClass("hidden");
        $('#gather-stone-btn').animate({opacity: 1},{duration: 500});
        $('#gather-stone-btn').removeClass('opacity-zero');*/
        state = 5;
    }
};