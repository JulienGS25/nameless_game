var food = 0;
var foragers = 0;
var wood = 0;
var lumberjacks = 0;
var stone = 0;
var miners = 0;

function getFood(number){
    food = food + number;
    document.getElementById("food").innerHTML = food;
}
function getWood(number){
    wood = wood + number;
    document.getElementById("wood").innerHTML = wood;
}
function getStone(number){
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



// Game loop
// Do not put anything below this line
window.setInterval(function(){
    getFood(foragers);
    getWood(lumberjacks);
    getStone(miners);
}, 500);