//Adds text to the log
function logText(text){
    $('.right-tab').prepend("<p class='log-text'>" + text + "</p>");
}
function logWarn(text){
    $('.right-tab').prepend("<p class='log-warn'>" + text + "</p>");
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
//document.getElementById("tools-title").addEventListener("click", displayTools);

function displayResearch() {
    //CSS to show active tab on title button
    $('#buildings-title').removeClass('active-button');
    //$('#tools-title').removeClass('active-button');
    $('#research-title').addClass('active-button');
    $('#research-title').css('text-decoration','underline');
    $('#buildings-title').css('text-decoration','none');
    
    visible.leftTabShown = 'research';

    //Swaps the cells
    hide('.left-tab-cell',10);
    $('.left-tab-cell').remove();
    for (j = 0; j < research.length; j++){
        if (research[j].displayable == 1){
            $('.grid-left').append("<div class='game-button left-tab-cell' id='left-tab-cell-" + j + "'>" + research[j].name + "</div>");
            var varCell = ("left-tab-cell-" + j);
            var cell = document.getElementById(varCell);
            cellClone = cell.cloneNode(true);
            cell.parentNode.replaceChild(cellClone, cell);
            document.getElementById(varCell).addEventListener("click", research[j].showFunction);
            if (research[j].researched == 1){
                $("#left-tab-cell-" + j).addClass('built');
            }
        }
    }
}

function displayBuildings() {
    //CSS to show active tab on title button
    $('#research-title').removeClass('active-button');
    //$('#tools-title').removeClass('active-button');
    $('#buildings-title').addClass('active-button');
    $('#buildings-title').css('text-decoration','underline');
    $('#research-title').css('text-decoration','none');

    visible.leftTabShown = 'buildings';

    //Swaps the cells
    hide('.left-tab-cell',10);
    $('.left-tab-cell').remove();
    for (j = 0; j < buildings.length; j++){
        if (buildings[j].displayable == 1){
            $('.grid-left').append("<div class='game-button left-tab-cell' id='left-tab-cell-" + j + "'>" + buildings[j].name + "</div>");
            var varCell = ("left-tab-cell-" + j);
            var cell = document.getElementById(varCell);
            cellClone = cell.cloneNode(true);
            cell.parentNode.replaceChild(cellClone, cell);
            document.getElementById(varCell).addEventListener("click", buildings[j].showFunction);
            if (buildings[j].built == 1){
                $("#left-tab-cell-" + j).addClass('built');
            }
        }
    }
}

/*function displayTools(){
    $('#research-title').removeClass('active-button');
    $('#buildings-title').removeClass('active-button');
    //$('#tools-title').addClass('active-button');

    visible.leftTabShown = 'tools';

    //Swaps the cells
    hide('.left-tab-cell',10);
    $('.left-tab-cell').remove();

    if (buildings[3].built == 1){
        
    }
}*/
 
function manageTribe() {
    console.log('Manage tribe');
    $('.work-area').animate({ opacity: 0 }, { duration: 25 });
    tooltipShown = 1;

    setTimeout(function () {
        $('.work-area').empty();
    }, 25)

    setTimeout(function () {
        $('.work-area').append("<div id='tooltip-title'>Tribe Management</div>" +
            "<div id='tooltip-desc'>You can assign your tribespeople jobs here.</div>" +
            "<span id='tooltip-people-list'>Available tribespeople: </span>" +
            "<span id='free-people'>5</span><span id='free-people-slash'> / </span><span id='total-people'>5</span>");
        if (buildings[1].built == 1) {
            $('.work-area').append("<span id='job-title-1'>Shaman</span>" +
                "<span id='current-shamans'>1</span><span id='job-1-slash'> / </span><span id='total-shamans'>2</span>");
            $('#job-title-1').css("grid-area", "6 / 1 / 6 / 1");
            $('#job-title-1').css("text-decoration", "underline");
            $('#job-1-slash').css("grid-area", "6 / 4 / 6 / 4");
            $('#current-shamans').css("grid-area", "6 / 3 / 6 / 4");
            $('#total-shamans').css("grid-area", "6 / 5 / 6 / 5");
        };
        if (buildings[2].built == 1) {
            $('.work-area').append("<span id='job-title-2'>Hunter</span>" +
                "<span id='current-hunters'>1</span><span id='job-2-slash'> / </span><span id='total-hunters'>2</span>");
            $('#job-title-2').css("grid-area", "8 / 1 / 8 / 1");
            $('#job-title-2').css("text-decoration", "underline");
            $('#job-2-slash').css("grid-area", "8 / 4 / 8 / 4");
            $('#current-hunters').css("grid-area", "8 / 3 / 8 / 4");
            $('#total-hunters').css("grid-area", "8 / 5 / 8 / 5");
        };
        if (buildings[4].built == 1) {
            $('.work-area').append("<span id='job-title-3'>Wood Chopper</span>" +
                "<span id='current-woodchoppers'>1</span><span id='job-3-slash'> / </span><span id='total-woodchoppers'>2</span>");
            $('#job-title-3').css("grid-area", "10 / 1 / 10 / 1");
            $('#job-title-3').css("text-decoration", "underline");
            $('#job-3-slash').css("grid-area", "10 / 4 / 10 / 4");
            $('#current-woodchoppers').css("grid-area", "10 / 3 / 10 / 4");
            $('#total-woodchoppers').css("grid-area", "10 / 5 / 10 / 5");
        };
        if (buildings[5].built == 1) {
            $('.work-area').append("<span id='job-title-4'>Miner</span>" +
                "<span id='current-miners'>1</span><span id='job-4-slash'> / </span><span id='total-miners'>2</span>");
            $('#job-title-4').css("grid-area", "12 / 1 / 12 / 1");
            $('#job-title-4').css("text-decoration", "underline");
            $('#job-4-slash').css("grid-area", "12 / 4 / 12 / 4");
            $('#current-miners').css("grid-area", "12 / 3 / 12 / 4");
            $('#total-miners').css("grid-area", "12 / 5 / 12 / 5");
        };
        if (buildings[6].built == 1) {
            $('.work-area').append("<span id='job-title-5'>Farmer</span>" +
                "<span id='current-farmers'>1</span><span id='job-5-slash'> / </span><span id='total-farmers'>2</span>");
            $('#job-title-5').css("grid-area", "14 / 1 / 14 / 1");
            $('#job-title-5').css("text-decoration", "underline");
            $('#job-5-slash').css("grid-area", "14 / 4 / 14 / 4");
            $('#current-farmers').css("grid-area", "14 / 3 / 14 / 4");
            $('#total-farmers').css("grid-area", "14 / 5 / 14 / 5");
        };
    }, 100)
    show('.work-area');
}





function showTooltip(input) {
    if (tooltipShown == 0) {
        tooltipShown = 1;
        show('.work-area');
        $('.work-area').append("<div id='tooltip-title'>" + input.name + "</div>" +
            "<div id='tooltip-desc'>" + input.description + "</div>" +
            "<div id='tooltip-costs-container'>" +
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
        if (visible.leftTabShown == 'research' && input.researched == 0) {
            $('.work-area').append("</div><div id='build-button' class='build-button game-button' type='button'>Research</div>");
        };
        if (visible.leftTabShown == 'buildings' && input.built == 0) {
            $('.work-area').append("</div><div id='build-button' class='build-button game-button' type='button'>Build</div>");
        };
        if (document.getElementById("build-button") !== null) {
            //Removes the event listeners on the build button. Prevents bug where a building is selected and Build Button builds another building
            var el = document.getElementById('build-button');
            elClone = el.cloneNode(true);
            el.parentNode.replaceChild(elClone, el);

            // Adds event listener to make the Build button build the selected building
            var clickBuild = function (input) {
                if (visible.leftTabShown == 'buildings') {
                    buildBuilding(input);
                }
                else if (visible.leftTabShown == 'research') {
                    researchScience(input);
                }
            };
            document.getElementById('build-button').addEventListener('click', clickBuild.bind(this, input));
        }
        //Puts a resource icon and changes the cost color to match the resource
        for (i = 1; i < 6; i++) {
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



// Get the modal
var modal = document.getElementById('myModal');

// Get the button that opens the modal
var btn = document.getElementById("options");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
    modal.style.display = "block";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}