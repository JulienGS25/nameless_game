//Adds text to the log
function logText(text){
    $('.right-tab').prepend("<p class='log-text'>" + text + "</p>");
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
document.getElementById("tools-title").addEventListener("click", displayTools);

function displayResearch() {
    $('#buildings-title').removeClass('active-button');
    $('#tools-title').removeClass('active-button');
    $('#research-title').addClass('active-button');
    $('#research-title').css('text-decoration','underline');
    $('#buildings-title').css('text-decoration','none');
    for (i = 0; i < 18; i++) {
        hide('#left-tab-cell-' + i, 100);
    }
    //Delay to give time for tabs to disappear before making new tabs appear
    setTimeout(function () {
        for (i = 0; i < research.length; i++) {
            if (research[i].displayable == 1) {
                document.getElementById('left-tab-cell-' + i).innerHTML = research[i].name;
                show('#left-tab-cell-' + i, 100);
            }
        }
    }, 100);
}

function displayBuildings() {
    //TODO
    //Add event handling

    $('#research-title').removeClass('active-button');
    $('#tools-title').removeClass('active-button');
    $('#buildings-title').addClass('active-button');
    $('#buildings-title').css('text-decoration','underline');
    $('#research-title').css('text-decoration','none');
    for (i = 0; i < 18; i++) {
        hide('#left-tab-cell-' + i, 100);
    }
    //Delay to give time for tabs to disappear before making new tabs appear
    setTimeout(function () {
        for (i = 0; i < buildings.length; i++) {
            if (buildings[i].displayable == 1) {
                hide('#left-tab-cell-' + i, 100);
                document.getElementById('left-tab-cell-' + i).innerHTML = buildings[i].name;
                show('#left-tab-cell-' + i, 100);
            }
        }
    }, 100);

}
function displayTools(){
    $('#research-title').removeClass('active-button');
    $('#buildings-title').removeClass('active-button');
    $('#tools-title').addClass('active-button');
//No tools created yet
}

function showTooltip(input){
    if (tooltipShown == 0){
        tooltipShown = 1;
        show('.work-area')
        $('.work-area').append("<div class='hideTooltip' id='tooltip-title'>" + input.name + "</div>" +
            "<div class='hideTooltip' id='tooltip-desc'>" + input.description + "</div>" +
            "<div class='hideTooltip' id='tooltip-costs-container'>" +
            "<div class='hideTooltip' id='tooltip-costs-title'>Costs: </div>" +
            "<div class='hideTooltip' id='tooltip-costs-1'><img id='p-res-1-img-tt' class='resource-icons'>" + input.costs_1 + ": " + input.costs_1_amount + "</div>" +
            "<div class='hideTooltip' id='tooltip-costs-2'><img id='p-res-2-img-tt' class='resource-icons'>" + input.costs_2 + ": " + input.costs_2_amount + "</div>" +
            "<div class='hideTooltip' id='tooltip-costs-3'><img id='p-res-3-img-tt' class='resource-icons'>" + input.costs_3 + ": " + input.costs_3_amount + "</div>" +
            "<div class='hideTooltip' id='tooltip-costs-4'><img id='p-res-4-img-tt' class='resource-icons'>" + input.costs_4 + ": " + input.costs_4_amount + "</div>" +
            "<div class='hideTooltip' id='tooltip-costs-5'><img id='p-res-5-img-tt' class='resource-icons'>" + input.costs_5 + ": " + input.costs_5_amount + "</div>" +
            "</div><div class='hideTooltip' id='tooltip-effects-container'>" +
            "<div class='hideTooltip'id='tooltip-effects-title'>Effects: </div>" +
            "<div class='hideTooltip'id='tooltip-effects-1'>" + input.effects_1 + "</div>" +
            "<div class='hideTooltip'id='tooltip-effects-2'>" + input.effects_2 + "</div>" +
            "<div class='hideTooltip'id='tooltip-effects-3'>" + input.effects_3 + "</div>" +
            "<div class='hideTooltip'id='tooltip-effects-4'>" + input.effects_4 + "</div>" +
            "<div class='hideTooltip'id='tooltip-effects-5'>" + input.effects_5 + "</div>" +
            "</div><div id='build-button' class='hideTooltip build-button game-button' type='button'>Build</div>");
            //Removes the event listeners on the build button. Prevents bug where a building is selected and Build Button builds another building
            var el = document.getElementById('build-button');
            elClone = el.cloneNode(true);
            el.parentNode.replaceChild(elClone, el);
            // Adds event listener to make the Build button build the select building
            var clickBuild = function(input) {
                buildBuilding(input)
              };
            document.getElementById('build-button').addEventListener('click', clickBuild.bind(this, input));
            //Puts a resource icon and changes the cost color to match the resource
            for (i = 1; i < 6; i++){
                //To be improved. Currently forces the source image file to match the resource cost in buildings.js
                var curr = eval('input.costs_' + i);
                if (curr !== undefined){
                    document.getElementById("p-res-" + i + "-img-tt").src = "images/" + curr + ".png";
                    document.getElementById("tooltip-costs-" + i).classList.add(curr + "ColorText");
                }
                else if (curr == undefined){
                    hide('#tooltip-costs-' + i, 20);
                }
                else{
                    console.log('Issue with building costs. See Campfire in buildings.js for a valid example')
                }
            }
            
    }
    else if (tooltipShown == 1){
        $('.work-area').animate({opacity: 0},{duration: 150});
        tooltipShown = 0;
        
        setTimeout(function(){
            $('.work-area').empty();
        },100)
        
        setTimeout(function(){
            showTooltip(input);
        },200)
        
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