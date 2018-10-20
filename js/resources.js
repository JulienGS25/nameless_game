//Resource gathering
function showFood() {
    { $('#primary-res-1').removeClass("hidden"); }
    document.getElementById("primary-res-1").classList.add("FoodColorText");
    document.getElementById("p-res-1-img").src = "images/Food.png";
    document.getElementById("p-res-1-name").innerHTML = "Food: ";
    visible.foodResource = true;
}
function showWood() {
    { $('#primary-res-2').removeClass("hidden"); }
    document.getElementById("primary-res-2").classList.add("WoodColorText");
    document.getElementById("p-res-2-img").src = "images/Wood.png";
    document.getElementById("p-res-2-name").innerHTML = "Wood: ";
    visible.woodResource = true;
}
function showStone() {
    { $('#primary-res-3').removeClass("hidden"); }
    document.getElementById("primary-res-3").classList.add("StoneColorText");
    document.getElementById("p-res-3-img").src = "images/Stone.png";
    document.getElementById("p-res-3-name").innerHTML = "Stone: ";
    visible.stoneResource = true;
}

//Manual resource gathering
function getFood(forageEfficiency){
    $('#forage-food-btn').css("pointer-events","none");
    $('#forage-food-btn').animate({opacity: 0.25},(forageSpeed * 250));
    setTimeout(function(){
        $('#forage-food-btn').css("pointer-events","auto");
        $('#forage-food-btn').animate({opacity: 1},(forageSpeed * 250));
        if (resource.food < storage.food) {
            resource.food = resource.food + forageEfficiency;
            document.getElementById("p-res-1-amt").innerHTML = resource.food;
        }
    },forageSpeed * 1000);
    forageSpeed = forageSpeed * 1.1;
};

function getWood(woodGatherEfficiency){
    $('#gather-wood-btn').css("pointer-events","none");
    $('#gather-wood-btn').animate({opacity: 0.25},(woodGatherSpeed * 250));
    setTimeout(function(){
        $('#gather-wood-btn').css("pointer-events","auto");
        $('#gather-wood-btn').animate({opacity: 1},(woodGatherSpeed * 250));
        if (resource.wood < storage.wood) {
            resource.wood = resource.wood + woodGatherEfficiency;
            document.getElementById("p-res-2-amt").innerHTML = resource.wood;
        }
    },woodGatherSpeed * 1000);
    woodGatherSpeed = woodGatherSpeed * 1.1;
};

function getStone(stoneGatherEfficiency){
    $('#gather-stone-btn').css("pointer-events","none");
    $('#gather-stone-btn').animate({opacity: 0.25},(stoneGatherSpeed * 250));
    setTimeout(function(){
        $('#gather-stone-btn').css("pointer-events","auto");
        $('#gather-stone-btn').animate({opacity: 1},(stoneGatherSpeed * 250));
        if (resource.stone < storage.stone) {
            resource.stone = resource.stone + stoneGatherEfficiency;
            document.getElementById("p-res-3-amt").innerHTML = resource.stone;
        }
    },stoneGatherSpeed * 1000);
    stoneGatherSpeed = stoneGatherSpeed * 1.1;
};