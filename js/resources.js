//Resource gathering
function showFood() {
    { $('#primary-res-1').removeClass("hidden"); }
    document.getElementById("primary-res-1").classList.add("foodColorText");
    document.getElementById("res-1-img").src = "images/Apple.png";
    document.getElementById("res-1-name").innerHTML = "Food: ";
    foodResourceVisible = 1;
}
function showWood() {
    { $('#primary-res-2').removeClass("hidden"); }
    document.getElementById("primary-res-2").classList.add("woodColorText");
    document.getElementById("res-2-img").src = "images/Wood_Logs.png";
    document.getElementById("res-2-name").innerHTML = "Wood: ";
    woodResourceVisible = 1;
}
function showStone() {
    { $('#primary-res-3').removeClass("hidden"); }
    document.getElementById("primary-res-3").classList.add("stoneColorText");
    document.getElementById("res-3-img").src = "images/Stone.png";
    document.getElementById("res-3-name").innerHTML = "Stone: ";
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