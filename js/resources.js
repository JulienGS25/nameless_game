//Resource gathering
function showFood() {
    { $('#primary-res-1').removeClass("hidden"); }
    document.getElementById("primary-res-1").classList.add("FoodColorText");
    document.getElementById("p-res-1-img").src = "images/Food.png";
    document.getElementById("p-res-1-name").innerHTML = "Food: ";
    visible.foodResource = 1;
}
function showWood() {
    { $('#primary-res-2').removeClass("hidden"); }
    document.getElementById("primary-res-2").classList.add("WoodColorText");
    document.getElementById("p-res-2-img").src = "images/Wood.png";
    document.getElementById("p-res-2-name").innerHTML = "Wood: ";
    visible.woodResource = 1;
}
function showStone() {
    { $('#primary-res-3').removeClass("hidden"); }
    document.getElementById("primary-res-3").classList.add("StoneColorText");
    document.getElementById("p-res-3-img").src = "images/Stone.png";
    document.getElementById("p-res-3-name").innerHTML = "Stone: ";
    visible.stoneResource = 1;
}


function getFood(number){
    $('#forage-food-btn').css("pointer-events","none");
    setTimeout(function(){
        $('#forage-food-btn').css("pointer-events","auto");
        if (resource.food < storage.food) {
            resource.food = resource.food + number;
            document.getElementById("p-res-1-amt").innerHTML = resource.food;
        }
    },forageSpeed * 1000);
};


function getWood(number){
    $('#gather-wood-btn').css("pointer-events","none");
    setTimeout(function(){
        $('#gather-wood-btn').css("pointer-events","auto");
        if (resource.wood < storage.wood) {
            resource.wood = resource.wood + number;
            document.getElementById("p-res-2-amt").innerHTML = resource.wood;
        }
    },woodGatherSpeed * 1000);
};

function getStone(number){
    $('#gather-stone-btn').css("pointer-events","none");
    setTimeout(function(){
        $('#gather-stone-btn').css("pointer-events","auto");
        if (resource.stone < storage.stone) {
            resource.stone = resource.stone + number;
            document.getElementById("p-res-3-amt").innerHTML = resource.stone;
        }
    },stoneGatherSpeed * 1000);
};