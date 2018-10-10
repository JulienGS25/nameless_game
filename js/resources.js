//Resource gathering
function showFood() {
    { $('#primary-res-1').removeClass("hidden"); }
    foodResourceVisible = 1;
}
function showWood() {
    { $('#primary-res-2').removeClass("hidden"); }
    woodResourceVisible = 1;
}
function showStone() {
    { $('#primary-res-3').removeClass("hidden"); }
    stoneResourceVisible = 1;
}


function getFood(number) {
    if (food < foodStorage) {
        food = food + number;
    }
}
function getWood(number) {
    if (wood < woodStorage) {
        wood = wood + number;
    }
}
function getStone(number) {
    if (stone < stoneStorage) {
        stone = stone + number;
    }
}