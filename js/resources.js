document.getElementById("forage-food-btn").addEventListener("click", function(){
    getFood(foodGatherEfficiency,'manual');
});

document.getElementById("forage-food-btn").addEventListener("click", showFood);

document.getElementById("gather-wood-btn").addEventListener("click", function(){
    getWood(woodGatherEfficiency,'manual');
});

document.getElementById("gather-wood-btn").addEventListener("click", showWood);

document.getElementById("gather-stone-btn").addEventListener("click", function(){
    getStone(stoneGatherEfficiency,'manual');
});
document.getElementById("gather-stone-btn").addEventListener("click", showStone);



function showFood() {
    show('#primary-res-1',150);
    document.getElementById("primary-res-1").classList.add("FoodColorText");
    document.getElementById("p-res-1-img").src = "images/Food.png";
    document.getElementById("p-res-1-name").innerHTML = "Food: ";
    visible.foodResource = true;
}
function showWood() {
    show('#primary-res-2',150);
    document.getElementById("primary-res-2").classList.add("WoodColorText");
    document.getElementById("p-res-2-img").src = "images/Wood.png";
    document.getElementById("p-res-2-name").innerHTML = "Wood: ";
    visible.woodResource = true;
}
function showStone() {
    show('#primary-res-3',150);
    document.getElementById("primary-res-3").classList.add("StoneColorText");
    document.getElementById("p-res-3-img").src = "images/Stone.png";
    document.getElementById("p-res-3-name").innerHTML = "Stone: ";
    visible.stoneResource = true;
}
function showScience(){
    show('#primary-res-4',150);
    document.getElementById("primary-res-4").classList.add("ScienceColorText");
    document.getElementById("p-res-4-img").src = "images/Science.png";
    document.getElementById("p-res-4-name").innerHTML = "Science: ";
    visible.scienceResource = true;
}


//Automatic resource gathering
function autoResource(){
    if (jobs.shaman > 0){
        getScience(shamanEfficiency, 'auto')
    }
    if (jobs.woodchopper > 0){
        getWood(woodChopperEfficiency, 'auto')
    }
    if (jobs.hunter > 0){
        getFood(hunterEfficiency, 'auto')
    }
    if (jobs.miner > 0){
        getStone(minerEfficiency, 'auto')
    }
    if (jobs.farmer > 0){
        getFood(farmerEfficiency, 'auto')
    }
}


//Resource gathering
function getFood(efficiency, mode, type) {
    //efficiency is how much resources are gained per time this function is ran
    //mode is manual or automatic
    //type is farmer or hunter
    if (mode == 'manual') {
        $('#forage-food-btn').css("pointer-events", "none");
        $('#forage-food-btn').animate({ opacity: 0.25 }, (foodGatherSpeed * 250));
        setTimeout(function () {
            $('#forage-food-btn').css("pointer-events", "auto");
            $('#forage-food-btn').animate({ opacity: 1 }, (foodGatherSpeed * 250));
            if (resource.food < storage.food) {
                resource.food = resource.food + efficiency;
                document.getElementById("p-res-1-amt").innerHTML = resource.food;
            }
        }, foodGatherSpeed * 1000);
        foodGatherSpeed = foodGatherSpeed * 1.1;
    }
    else if (mode == 'auto') {
        if (type == 'hunter'){
            efficiency = hunterEfficiency;
            exploredArea = exploredArea + exploreEfficiency;
        }
        else if (type == 'farmer'){
            efficiency = farmerEfficiency;
        }
        if (resource.food < storage.food) {
            resource.food = resource.food + efficiency;
            document.getElementById("p-res-1-amt").innerHTML = resource.food;
        }
    }
};

function getWood(efficiency, mode) {
    if (mode == 'manual') {
        $('#gather-wood-btn').css("pointer-events", "none");
        $('#gather-wood-btn').animate({ opacity: 0.25 }, (woodGatherSpeed * 250));
        setTimeout(function () {
            $('#gather-wood-btn').css("pointer-events", "auto");
            $('#gather-wood-btn').animate({ opacity: 1 }, (woodGatherSpeed * 250));
            if (resource.wood < storage.wood) {
                resource.wood = resource.wood + woodGatherEfficiency;
                document.getElementById("p-res-2-amt").innerHTML = resource.wood;
            }
        }, woodGatherSpeed * 1000);
        woodGatherSpeed = woodGatherSpeed * 1.1;
    }
    else if (mode == 'auto') {
        efficiency = woodChopperEfficiency;
        if (resource.wood < storage.wood) {
            resource.wood = resource.wood + efficiency;
            document.getElementById("p-res-2-amt").innerHTML = resource.wood;
        }
    }
};

function getStone(efficiency, mode) {
    if (mode == 'manual') {
        $('#gather-stone-btn').css("pointer-events", "none");
        $('#gather-stone-btn').animate({ opacity: 0.25 }, (stoneGatherSpeed * 250));
        setTimeout(function () {
            $('#gather-stone-btn').css("pointer-events", "auto");
            $('#gather-stone-btn').animate({ opacity: 1 }, (stoneGatherSpeed * 250));
            if (resource.stone < storage.stone) {
                resource.stone = resource.stone + stoneGatherEfficiency;
                document.getElementById("p-res-3-amt").innerHTML = resource.stone;
            }
        }, stoneGatherSpeed * 1000);
        stoneGatherSpeed = stoneGatherSpeed * 1.1;
    }
    else if (mode == 'auto') {
        efficiency = stoneGatherEfficiency;
        if (resource.stone < storage.stone) {
            resource.stone = resource.stone + efficiency;
            document.getElementById("p-res-3-amt").innerHTML = resource.stone;
        }
    }
};

function getScience(efficiency) {
    if (visible.scienceResource == false){
        showScience();
    }
    efficiency = shamanEfficiency;
        if (resource.science < storage.science) {
            resource.science = resource.science + efficiency;
            document.getElementById("p-res-4-amt").innerHTML = resource.science;
        }
};