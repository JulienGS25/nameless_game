//Adds text to the log
function logText(text){
    $('.right-tab').prepend("<p class='log-text'>" + text + "</p>");
}
function logWarn(text){
    $('.right-tab').prepend("<p class='log-warn'>" + text + "</p>");
}
function logAlert(text){
    $('.right-tab').prepend("<p class='log-alert'>" + text + "</p>");
}

//Makes an element appear with a fadein animation
function show(element, speed){
    $(element).animate({opacity: 1},{duration: speed});
    $(element).removeClass('hidden opacity-zero');
}
function hide(element, speed){
    $(element).animate({opacity: 0},{duration: speed});
    $(element).addClass('opacity-zero');
}


//LEFT TAB
//Left-tab UI Controls
document.getElementById("research-title").addEventListener("click", displayResearch);
document.getElementById("buildings-title").addEventListener("click", displayBuildings);

function displayResearch() {
    //CSS to show active tab on title button
    $('#buildings-title').removeClass('active-button');
    $('#research-title').addClass('active-button');
    $('#research-title').css('text-decoration','underline');
    $('#buildings-title').css('text-decoration','none');
    
    visible.leftTabShown = 'research';

    //Swaps the cells
    hide('.left-tab-cell',10);
    $('.left-tab-cell').remove();
    for (let j = 0; j < research.length; j++){
        if (research[j].displayable == 1 && research[j].researched == 0){
            if (research[j].unique == true){
                $('#grid-left-col-1').append("<div class='game-button left-tab-cell' id='left-tab-cell-" + j + "'>" + research[j].name + "</div>");
            }
            else{
                $('#grid-left-col-2').append("<div class='game-button left-tab-cell' id='left-tab-cell-" + j + "'>" + research[j].name + "</div>");
            }
            $('#left-tab-cell-' + j).addClass('research');
            var varCell = ("left-tab-cell-" + j);
            var cell = document.getElementById(varCell);
            cellClone = cell.cloneNode(true);
            cell.parentNode.replaceChild(cellClone, cell);
            document.getElementById(varCell).addEventListener("click", function(){
                showTooltip(research[j])
            });
            if (research[j].researched == 1){
                $("#left-tab-cell-" + j).addClass('built');
            }
        }
    }
}

function displayBuildings() {
    //CSS to show active tab on title button
    $('#research-title').removeClass('active-button');
    $('#buildings-title').addClass('active-button');
    $('#buildings-title').css('text-decoration','underline');
    $('#research-title').css('text-decoration','none');

    visible.leftTabShown = 'buildings';

    //Swaps the cells
    hide('.left-tab-cell',10);
    $('.left-tab-cell').remove();
    //Variable MUST be let, due to scope
    for (let j = 0; j < buildings.length; j++){
        if (buildings[j].displayable == 1){
            if (buildings[j].unique == true){
                $('#grid-left-col-1').append("<div class='game-button left-tab-cell' id='left-tab-cell-" + j + "'>" + buildings[j].name + "</div>");
            }
            else {
                $('#grid-left-col-2').append("<div class='game-button left-tab-cell' id='left-tab-cell-" + j + "'>" + buildings[j].name + "</div>");
            }
            var varCell = ("left-tab-cell-" + j);
            var cell = document.getElementById(varCell);
            cellClone = cell.cloneNode(true);
            cell.parentNode.replaceChild(cellClone, cell);
            document.getElementById(varCell).addEventListener("click", function(){
                showTooltip(buildings[j])
            });
            
            if (buildings[j].built >= 1 && buildings[j].unique == true){
                $("#left-tab-cell-" + j).addClass('built');
            }
            else if (buildings[j].built >= 1){
                $("#left-tab-cell-" + j).addClass('built-repeatable');
            }
        }
    }
}

function showTooltip(input) {
    if (tooltipShown == 0) {
        tooltipShown = 1;
        $('.work-area').css("border","solid white");
        show('.work-area');
        $('.work-area').append("<div id='tooltip-title'>" + input.name + "</div>" +
            "<div id='tooltip-desc'>" + input.description + "</div>");
        if (input.unique == false && input.hasOwnProperty("built")){
            $('.work-area').append("<div id='tooltip-built'>Built: " + input.built + "</div>"); 
        }
        $('.work-area').append("<div id='tooltip-costs-container'>" +
            "<div id='tooltip-costs-title'>Costs: </div>" +
            "<div id='tooltip-costs-1'><img id='p-res-1-img-tt' class='resource-icons'>" + input.costs_1 + ": " + input.costs_1_amount + "</div>" +
            "<div id='tooltip-costs-2'><img id='p-res-2-img-tt' class='resource-icons'>" + input.costs_2 + ": " + input.costs_2_amount + "</div>" +
            "<div id='tooltip-costs-3'><img id='p-res-3-img-tt' class='resource-icons'>" + input.costs_3 + ": " + input.costs_3_amount + "</div>" +
            "<div id='tooltip-costs-4'><img id='p-res-4-img-tt' class='resource-icons'>" + input.costs_4 + ": " + input.costs_4_amount + "</div>" +
            "<div id='tooltip-costs-5'><img id='p-res-5-img-tt' class='resource-icons'>" + input.costs_5 + ": " + input.costs_5_amount + "</div>" +
            "</div><div id='tooltip-effects-container'>" +
            "<div id='tooltip-effects-title'>Effects: </div>" +
            "<div id='tooltip-effects-1'>" + input.effects_1 + "</div>" +
            "<div id='tooltip-effects-2'>" + input.effects_2 + "</div>" +
            "<div id='tooltip-effects-3'>" + input.effects_3 + "</div>" +
            "<div id='tooltip-effects-4'>" + input.effects_4 + "</div>" +
            "<div id='tooltip-effects-5'>" + input.effects_5 + "</div>");
        //Displays the appropriate button
        if (visible.leftTabShown == 'research'){
            if (input.researched == 0){
                $('.work-area').append("</div><div id='build-button' class='build-button game-button' type='button'>Research</div>");
            }
        }
        if (visible.leftTabShown == 'buildings'){
            if (input.built == 0){
                $('.work-area').append("</div><div id='build-button' class='build-button game-button' type='button'>Build</div>");
            }
            if (input.built > 0 && input.unique == false){
                $('.work-area').append("</div><div id='build-button' class='build-button game-button' type='button'>Build</div>");
            }
        }

        if (document.getElementById("build-button") !== null) {
            //Removes the event listeners on the build button. Prevents bug where a building is selected and Build Button builds another building
            var el = document.getElementById('build-button');
            elClone = el.cloneNode(true);
            el.parentNode.replaceChild(elClone, el);

            // Adds event listener to make the Build button build the selected building
            var clickBuild = function (input) {
                if (visible.leftTabShown == 'buildings') {
                    showTooltip(input);
                    buildBuilding(input);
                }
                else if (visible.leftTabShown == 'research') {
                    showTooltip(input);
                    researchScience(input);
                }
            };
            document.getElementById('build-button').addEventListener('click', clickBuild.bind(this, input));
        }
        //Puts a resource icon and changes the cost color to match the resource
        for (var i = 1; i < 6; i++) {
            //To be improved. Currently forces the source image file to match the resource cost in buildings.js
            var curr = eval('input.costs_' + i);
            if (curr !== undefined) {
                document.getElementById("p-res-" + i + "-img-tt").src = "images/" + curr + ".png";
                document.getElementById("tooltip-costs-" + i).classList.add(curr + "ColorText");
            }
            else if (curr == undefined) {
                hide('#tooltip-costs-' + i, 20);
            }
            else {
                console.log('Issue with building costs. See Campfire in buildings.js for a valid example')
            }
        }
    }

    else if (tooltipShown == 1) {
        $('.work-area').animate({ opacity: 0 }, { duration: 25 });
        tooltipShown = 0;

        setTimeout(function () {
            $('.work-area').empty();
        }, 25)

        setTimeout(function () {
            showTooltip(input);
        }, 100)

    }
}

//Prevents highlighting text
window.addEventListener('mousedown', function(e){ e.preventDefault(); }, false);



//Options Modal section
var optionsModal = document.getElementById('myModal'); // The options modal
var optionsButton = document.getElementById("options");  //The button that opens the modal

// When the user clicks the button, open the modal 
optionsButton.onclick = function() {
    optionsModal.style.display = "block";
}

//Reset confirmation modal section
var resetModal = document.getElementById("reset-confirm-modal"); // The reset confirmation modal
var resetButton = document.getElementById("reset"); //The button that opens the modal

//Adds event handlers on Reset and Cancel buttons
document.getElementById("reset-yes").addEventListener("click", resetGame);
document.getElementById("reset-no").addEventListener("click", function(){
    resetModal.style.display = "none"
    });


function resetGame() {
    localStorage.clear('value');
    console.log('Cleared data. Local storage is now empty.');
    location.reload();
}
    
// When the user clicks the button, open the modal 
resetButton.onclick = function() {
    resetModal.style.display = "block";
}


// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == optionsModal) {
        optionsModal.style.display = "none";
    }
    if (event.target == resetModal){
        resetModal.style.display = "none";
    }
}


function displayGameSavedNotification() {
    // Get the snackbar DIV
    var x = document.getElementById("save-game-notif");

    // Add the "show" class to DIV
    x.className = "show";

    // After 3 seconds, remove the show class from DIV
    setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
}
