document.getElementById("forage-food-btn").addEventListener("click", function(){
    getFood(efficiency.foodGather,'manual');
});

document.getElementById("forage-food-btn").addEventListener("click", showFood);

document.getElementById("gather-wood-btn").addEventListener("click", function(){
    getWood(efficiency.woodGather,'manual');
});

document.getElementById("gather-wood-btn").addEventListener("click", showWood);

document.getElementById("gather-stone-btn").addEventListener("click", function(){
    getStone(efficiency.stoneGather,'manual');
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
        getScience(efficiency.shaman, 'auto')
    }
    if (jobs.woodchopper > 0){
        getWood(efficiency.woodChopper, 'auto')
    }
    if (jobs.hunter > 0){
        getFood(efficiency.hunter, 'auto')
    }
    if (jobs.miner > 0){
        getStone(efficiency.miner, 'auto')
    }
    if (jobs.farmer > 0){
        getFood(efficiency.farmer, 'auto')
    }
}


//Resource gathering
function getFood(eff, mode, type) {
    //efficiency is how much resources are gained per time this function is ran
    //mode is manual or automatic
    //type is farmer or hunter
    if (mode == 'manual') {
        $('#forage-food-btn').css("pointer-events", "none");
        $('#forage-food-btn').animate({ opacity: 0.25 }, (speed.foodGather * 250));
        setTimeout(function () {
            $('#forage-food-btn').css("pointer-events", "auto");
            $('#forage-food-btn').animate({ opacity: 1 }, (speed.foodGather * 250));
            if (resource.food < storage.food) {
                resource.food = resource.food + eff;
                document.getElementById("p-res-1-amt").innerHTML = resource.food;
            }
        }, speed.foodGather * 1000);
        speed.foodGather = speed.foodGather * 1.1;
    }
    else if (mode == 'auto') {
        if (type == 'hunter'){
            eff = efficiency.hunter;
            exploredArea = exploredArea + efficiency.explore;
        }
        else if (type == 'farmer'){
            eff = efficiency.farmer;
        }
        if (resource.food < storage.food) {
            resource.food = resource.food + eff;
            document.getElementById("p-res-1-amt").innerHTML = resource.food;
        }
    }
};

function getWood(eff, mode) {
    if (mode == 'manual') {
        $('#gather-wood-btn').css("pointer-events", "none");
        $('#gather-wood-btn').animate({ opacity: 0.25 }, (speed.woodGather * 250));
        setTimeout(function () {
            $('#gather-wood-btn').css("pointer-events", "auto");
            $('#gather-wood-btn').animate({ opacity: 1 }, (speed.woodGather * 250));
            if (resource.wood < storage.wood) {
                resource.wood = resource.wood + eff;
                document.getElementById("p-res-2-amt").innerHTML = resource.wood;
            }
        }, speed.woodGather * 1000);
        speed.woodGather = speed.woodGather * 1.1;
    }
    else if (mode == 'auto') {
        if (resource.wood < storage.wood) {
            resource.wood = resource.wood + eff;
            document.getElementById("p-res-2-amt").innerHTML = resource.wood;
        }
    }
};



function getStone(eff, mode) {
    if (mode == 'manual') {
        $('#gather-stone-btn').css("pointer-events", "none");
        $('#gather-stone-btn').animate({ opacity: 0.25 }, (speed.stoneGather * 250));
        setTimeout(function () {
            $('#gather-stone-btn').css("pointer-events", "auto");
            $('#gather-stone-btn').animate({ opacity: 1 }, (speed.stoneGather * 250));
            if (resource.stone < storage.stone) {
                resource.stone = resource.stone + eff;
                document.getElementById("p-res-3-amt").innerHTML = resource.stone;
            }
        }, speed.stoneGather * 1000);
        speed.stoneGather = speed.stoneGather * 1.1;
    }
    else if (mode == 'auto') {
        if (resource.stone < storage.stone) {
            resource.stone = resource.stone + eff;
            document.getElementById("p-res-3-amt").innerHTML = resource.stone;
        }
    }
};

function getScience(eff) {
    if (visible.scienceResource == false){
        showScience();
    }
    if (resource.science < storage.science) {
        resource.science = resource.science + eff;
        document.getElementById("p-res-4-amt").innerHTML = resource.science;
    }
};