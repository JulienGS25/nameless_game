//Resource gathering
function showFood() {
    { $('#food-resource').removeClass("hidden"); }
    foodResourceVisible = 1;
}
function showWood() {
    { $('#wood-resource').removeClass("hidden"); }
    woodResourceVisible = 1;
}
function showStone() {
    { $('#stone-resource').removeClass("hidden"); }
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