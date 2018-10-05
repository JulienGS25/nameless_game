//Exploration
document.getElementById("scout-btn").addEventListener("click", scout);

function scout() {
    exploredArea++;
    document.getElementById('explored').innerHTML = exploredArea;
    unveilStuff(exploredArea);
};


function unveilStuff(exploredArea) {
    if (exploredArea == 1) {
        logText('You see you are not alone. Friend?');
        $('#people-resource').removeClass("hidden");
        $('.bottom-tab').animate({opacity: 1},{duration: 500});
    }
    else if (exploredArea == 2) {
        logText('You look around some more...');
    }
    else if (exploredArea == 3) {
        logText('You found a few bushes. They seem to have berries on them.');
        $('#forage-food-btn').removeClass("hidden");
        $('#forage-food-btn').animate({opacity: 1},{duration: 500});
        $('#scout-btn').text('Scout area');
    }
    else if (exploredArea == 5) {
        logText('You found some branches on the ground. You should gather a few.');
        $('#gather-wood-btn').removeClass("hidden");
        $('#gather-wood-btn').animate({opacity: 1},{duration: 500});
    }
    else if (exploredArea == 7) {
        logText('You found some stones, they should be useful.');
        $('#gather-stone-btn').removeClass("hidden");
        $('#gather-stone-btn').animate({opacity: 1},{duration: 500});
    }
};