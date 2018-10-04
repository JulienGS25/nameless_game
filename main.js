var food = 0;
var foragers = 0;
var wood = 0;
var lumberjacks = 0;
var stone = 0;
var miners = 0;
var exploredArea = 0;

function scout(){
    exploredArea++;
    console.log('Explored area is ' + exploredArea);
    document.getElementById('explored').innerHTML = exploredArea; 
    unveilStuff(exploredArea); 
};

function unveilStuff(exploredArea){
    if (exploredArea == 1){
        $('.right-tab').append("<p class='log-text'>You see you are not alone. Friend?</p>");
        $('#people-resource').removeClass("hidden");
    }
    else if (exploredArea == 2){
        $('.right-tab').append("<p class='log-text'>You look around some more....</p>");
    }
    else if (exploredArea == 3){
        $('.right-tab').append("<p class='log-text'>You found a few bushes. They seem to have berries on them.</p>");
        $('#forage-food-btn').removeClass("hidden");
        $('#scout-btn').text('Scout area');
    }
    else if (exploredArea == 5){
        $('.right-tab').append("<p class='log-text'>You found some branches on the ground. You should gather a few.</p>");
        $('#gather-wood-btn').removeClass("hidden");
    }
    else if (exploredArea == 7){
        $('.right-tab').append("<p class='log-text'>You found some stones, they should be useful.</p>");
        $('#gather-stone-btn').removeClass("hidden");
    }
};
    
    

function getFood(number){
    if(food > 0)
        {$('#food-resource').removeClass("hidden");}
    food = food + number;
    document.getElementById("food").innerHTML = food;
}
function getWood(number){
    if(wood > 0)
        {$('#wood-resource').removeClass("hidden");}
    wood = wood + number;
    document.getElementById("wood").innerHTML = wood;
}
function getStone(number){
    if(stone > 0)
        {$('#stone-resource').removeClass("hidden");}
    stone = stone + number;
    document.getElementById("stone").innerHTML = stone;
}


function hireForager(){
    var workerCost = Math.floor(10 * Math.pow(1.1,foragers));       
    if(food >= workerCost){                                        
        foragers = foragers + 1;                                  
    	food = food - workerCost;                                   
        document.getElementById('foragers').innerHTML = foragers;  
        document.getElementById('food').innerHTML = food;           
    };
    var nextCost = Math.floor(10 * Math.pow(1.1,foragers));         
    document.getElementById('foragerCost').innerHTML = nextCost;    
};

function hireLumberjack(){
    var workerCost = Math.floor(10 * Math.pow(1.1,lumberjacks));         //works out the cost of this lumberjack
    if(wood >= workerCost){                                              //checks that the player can afford the lumberjack
        lumberjacks = lumberjacks + 1;                                   //increases number of lumberjacks
    	wood = wood - workerCost;                                        //removes the wood spent
        document.getElementById('lumberjacks').innerHTML = lumberjacks;  //updates the number of lumberjacks for the user
        document.getElementById('wood').innerHTML = wood;                //updates the number of wood for the user
    };
    var nextCost = Math.floor(10 * Math.pow(1.1,lumberjacks));           //works out the cost of the next lumberjack
    document.getElementById('lumberjackCost').innerHTML = nextCost;      //updates the lumberjack cost for the user
};

function hireMiner(){
    var workerCost = Math.floor(10 * Math.pow(1.1,miners));        
    if(stone >= workerCost){                                       
        miners = miners + 1;                               
    	stone = stone - workerCost;                                
        document.getElementById('miners').innerHTML = miners;
        document.getElementById('stone').innerHTML = stone;        
    };
    var nextCost = Math.floor(10 * Math.pow(1.1,miners));          
    document.getElementById('minerCost').innerHTML = nextCost;     
};

//Makes tabs resizable
$(".left-tab, .middle-tab, .right-tab").resizable({containment: ".main"});
$('.left-tab').resize(function(){
   $('.middle-tab').width($(".main").width()-$(".left-tab").width()); 
});
$(window).resize(function(){
   $('.middle-tab').width($(".main").width()-$(".left-tab").width()); 
   $('.left-tab').width($(".main").width()); 
});





//Sets the current age
$('#era').text('Ancient Era')

// Game loop
// Do not put anything below this line
window.setInterval(function(){
    getFood(foragers);
    getWood(lumberjacks);
    getStone(miners);
}, 500);