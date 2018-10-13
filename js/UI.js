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

//Makes the tooltip appear or updates the text
function tooltip(input) {
    if (tooltipShown == 0) {
        tooltipShown = 1;
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
            var el = document.getElementById('build-button');
            elClone = el.cloneNode(true);
            el.parentNode.replaceChild(elClone, el);
        
            document.getElementById("build-button").addEventListener("click", input.buildFunction);

            for (i = 1; i < 6; i++){
                var curr = eval('input.costs_' + i);
                if (curr !== ''){
                    document.getElementById("p-res-" + i + "-img-tt").src = "images/" + curr + ".png";
                    document.getElementById("tooltip-costs-" + i).classList.add(curr + "ColorText");
                }
                else if (curr == ''){
                    hide('#tooltip-costs-' + i, 20);
                }
            }
    }
    else {
        hide('.hideTooltip', 100);
        setTimeout(function () {
            document.getElementById('tooltip-title').innerHTML = input.name;
            document.getElementById('tooltip-desc').innerHTML = input.description;
            document.getElementById('tooltip-costs-1').innerHTML = "<img id='p-res-1-img-tt' class='resource-icons'>" + input.costs_1 + ": " + input.costs_1_amount;
            document.getElementById('tooltip-costs-2').innerHTML = "<img id='p-res-2-img-tt' class='resource-icons'>" + input.costs_2 + ": " + input.costs_2_amount;
            document.getElementById('tooltip-costs-3').innerHTML = "<img id='p-res-3-img-tt' class='resource-icons'>" + input.costs_3 + ": " + input.costs_3_amount;
            document.getElementById('tooltip-costs-4').innerHTML = "<img id='p-res-4-img-tt' class='resource-icons'>" + input.costs_4 + ": " + input.costs_4_amount;
            document.getElementById('tooltip-costs-5').innerHTML = "<img id='p-res-5-img-tt' class='resource-icons'>" + input.costs_5 + ": " + input.costs_5_amount;
            document.getElementById('tooltip-effects-1').innerHTML = input.effects_1;
            document.getElementById('tooltip-effects-2').innerHTML = input.effects_2;
            document.getElementById('tooltip-effects-3').innerHTML = input.effects_3;
            document.getElementById('tooltip-effects-4').innerHTML = input.effects_4;
            document.getElementById('tooltip-effects-5').innerHTML = input.effects_5;
            var el = document.getElementById('build-button');
            elClone = el.cloneNode(true);
            el.parentNode.replaceChild(elClone, el);
        
            document.getElementById("build-button").addEventListener("click", input.buildFunction);
            show('.hideTooltip', 100);
            for (i = 1; i < 6; i++){
                curr = eval('input.costs_' + i);
                if (curr !== ''){
                    document.getElementById("p-res-" + i + "-img-tt").src = "images/" + curr + ".png";
                }
                else if (curr == ''){
                    hide('#tooltip-costs-' + i, 1);
                }
            }
            
        }, 50);

        if (buildings[0].built == 0){
            //TODO
        }
        else if (buildings[0].built == 1){
            //TODO
        }
    }
}


//Left-tab UI Controls
document.getElementById("research-title").addEventListener("click", displayResearch);
document.getElementById("buildings-title").addEventListener("click", displayBuildings);
document.getElementById("tools-title").addEventListener("click", displayTools);

function displayResearch() {
    $('#buildings-title').removeClass('active-button');
    $('#tools-title').removeClass('active-button');
    $('#research-title').addClass('active-button');
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
    $('#research-title').removeClass('active-button');
    $('#tools-title').removeClass('active-button');
    $('#buildings-title').addClass('active-button');
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

//Prevents highlighting text
window.addEventListener('mousedown', function(e){ e.preventDefault(); }, false);
