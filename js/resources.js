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
function showCopperOre(){
    show('#primary-res-6',150);
    document.getElementById("primary-res-6").classList.add("CopperColorText");
    document.getElementById("p-res-6-img").src = "images/Copper Ore.png";
    document.getElementById("p-res-6-name").innerHTML = "Copper Ore: ";
    visible.copperOreResource = true;
}
function showTinOre(){
    show('#primary-res-7',150);
    document.getElementById("primary-res-7").classList.add("TinColorText");
    document.getElementById("p-res-7-img").src = "images/Tin Ore.png";
    document.getElementById("p-res-7-name").innerHTML = "Tin Ore: ";
    visible.tinOreResource = true;
}
function showIronOre(){
    show('#primary-res-8',150);
    document.getElementById("primary-res-8").classList.add("IronColorText");
    document.getElementById("p-res-8-img").src = "images/Iron Ore.png";
    document.getElementById("p-res-8-name").innerHTML = "Iron Ore: ";
    visible.ironOreResource = true;
}
function showGoldOre(){
    show('#primary-res-9',150);
    document.getElementById("primary-res-9").classList.add("GoldColorText");
    document.getElementById("p-res-9-img").src = "images/Gold Ore.png";
    document.getElementById("p-res-9-name").innerHTML = "Gold Ore: ";
    visible.goldOreResource = true;
}


function updateResourceDisplay(){
    document.getElementById('time').innerHTML = passedTime + ' seconds.';
    document.getElementById('temp').innerHTML = prettify(currentTemp) + '°C.';
    document.getElementById("people").innerHTML = prettify(resource.people);
    document.getElementById("people-storage").innerHTML = prettify(storage.people);
    document.getElementById("p-res-1-amt").innerHTML = prettify(resource.food);
    document.getElementById("p-res-1-storage").innerHTML = prettify(storage.food);
    document.getElementById("p-res-2-amt").innerHTML = prettify(resource.wood);
    document.getElementById("p-res-2-storage").innerHTML = prettify(storage.wood);
    document.getElementById("p-res-3-amt").innerHTML = prettify(resource.stone);
    document.getElementById("p-res-3-storage").innerHTML = prettify(storage.stone);
    document.getElementById("p-res-4-amt").innerHTML = prettify(resource.science);
    document.getElementById("p-res-4-storage").innerHTML = prettify(storage.science);
    document.getElementById("p-res-6-amt").innerHTML = prettify(resource.copperOre);
    document.getElementById("p-res-6-storage").innerHTML = prettify(storage.copperOre);
    document.getElementById("p-res-7-amt").innerHTML = prettify(resource.tinOre);
    document.getElementById("p-res-7-storage").innerHTML = prettify(storage.tinOre);
    document.getElementById("p-res-8-amt").innerHTML = prettify(resource.ironOre);
    document.getElementById("p-res-8-storage").innerHTML = prettify(storage.ironOre);
    document.getElementById("p-res-9-amt").innerHTML = prettify(resource.goldOre);
    document.getElementById("p-res-9-storage").innerHTML = prettify(storage.goldOre);

    if (document.getElementById("furnace-copper") !== null) {
        $("#furnace-copper-count").text(resource.copperOre);
    }
    if (document.getElementById("furnace-tin") !== null) {
        $("#furnace-tin-count").text(resource.tinOre);
    }
    if (document.getElementById("furnace-iron") !== null) {
        $("#furnace-iron-count").text(resource.ironOre);
    }
    if (document.getElementById("furnace-coal") !== null) {
        $("#furnace-coal-count").text(resource.coal);
    }
    if (document.getElementById("furnace-gold") !== null) {
        $("#furnace-gold-count").text(resource.goldOre);
    }
    if (document.getElementById("furnace-sand") !== null) {
        $("#furnace-sand-count").text(resource.sand);
    }
    if (document.getElementById("furnace-titanium") !== null) {
        $("#furnace-titanium-count").text(resource.titaniumOre);
    }
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
        //Gathers stone
        if (resource.stone < storage.stone) {
            resource.stone = resource.stone + eff;
            document.getElementById("p-res-3-amt").innerHTML = resource.stone;
        }
        //Gathers copper ore
        if (research[3].researched == 1){
            if(resource.copperOre < storage.copperOre){
                resource.copperOre = resource.copperOre + eff;
                document.getElementById("p-res-6-amt").innerHTML = resource.copperOre;
            }
        }
        //Gathers tin ore
        if (research[9].researched == 1){
            if(resource.tinOre < storage.tinOre){
                resource.tinOre = resource.tinOre + eff;
                document.getElementById("p-res-7-amt").innerHTML = resource.tinOre;
            }
        }
        //Gathers iron ore
        if (research[20].researched == 1){
            if(resource.ironOre < storage.ironOre){
                resource.ironOre = resource.ironOre + eff;
                document.getElementById("p-res-8-amt").innerHTML = resource.ironOre;
            }
        }
        //Gathers gold ore
        if (research[29].researched == 1){
            if(resource.goldOre < storage.goldOre){
                resource.goldOre = resource.goldOre + eff;
                document.getElementById("p-res-9-amt").innerHTML = resource.goldOre;
            }
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