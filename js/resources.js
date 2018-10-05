//Resource gathering
function showFood() {
    { $('#food-resource').removeClass("hidden"); }
}
function showWood() {
    { $('#wood-resource').removeClass("hidden"); }
}
function showStone() {
    { $('#stone-resource').removeClass("hidden"); }
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