//////////////////////
///Tribe Management///
//////////////////////
function manageTribe() {
    $('.work-area').animate({ opacity: 0 }, { duration: 25 });
    tooltipShown = 1;

    setTimeout(function () {
        $('.work-area').empty();
    }, 25)

    //Creates the work area tribe management page
    setTimeout(function () {
        $('.work-area').append("<div id='tooltip-title'>Tribe Management</div>" +
            "<div id='tooltip-desc'>You can assign your tribespeople jobs here.</div>" +
            "<span id='tooltip-people-list'>Available tribespeople: </span>" +
            "<span id='free-people'></span><span id='free-people-slash'> / </span><span id='total-people'></span>");
        if (buildings[1].built >= 1) {
            $('.work-area').append("<span id='job-title-1'>Shaman</span>" +
                "<span id='current-shamans'></span><span id='job-1-slash'> / </span><span id='total-shamans'></span>" +
                "<span id='job-desc-1' class='job-desc'>Performs research to improve your tribe.</span>" + 
                "<i id='minus-btn-1' class='fas fa-minus'></i>" +
                "<i id='plus-btn-1' class='fas fa-plus'></i>");
            $('#job-desc-1').css("grid-area", "7 / 1 / 7 / 1");
            $('#job-title-1').css("grid-area", "6 / 1 / 6 / 1");
            $('#job-title-1').css("text-decoration", "underline");
            $('#job-1-slash').css("grid-area", "6 / 4 / 6 / 5");
            $('#current-shamans').css("grid-area", "6 / 3 / 6 / 4");
            $('#total-shamans').css("grid-area", "6 / 5 / 6 / 6");
            $('#minus-btn-1').css("grid-area", "6 / 2 / 6 / 3");
            $('#plus-btn-1').css("grid-area", "6 / 6 / 6 / 7");
            $('#current-shamans').text(jobs.shaman);
            $('#total-shamans').text(buildings[1].built);
            document.getElementById("plus-btn-1").addEventListener("click", addJobOne);
            document.getElementById("minus-btn-1").addEventListener("click", removeJobOne);
        };
        if (buildings[2].built >= 1) {
            $('.work-area').append("<span id='job-title-2'>Hunter</span>" +
                "<span id='current-hunters'></span><span id='job-2-slash'> / </span><span id='total-hunters'></span>" +
                "<span id='job-desc-2' class='job-desc'>Hunts animals and explores the area.</span>" + 
                "<i id='minus-btn-2' class='fas fa-minus'></i>" +
                "<i id='plus-btn-2' class='fas fa-plus'></i>");
            $('#job-desc-2').css("grid-area", "9 / 1 / 9 / 1");
            $('#job-title-2').css("grid-area", "8 / 1 / 8 / 1");
            $('#job-title-2').css("text-decoration", "underline");
            $('#job-2-slash').css("grid-area", "8 / 4 / 8 / 5");
            $('#current-hunters').css("grid-area", "8 / 3 / 8 / 4");
            $('#total-hunters').css("grid-area", "8 / 5 / 8 / 6");
            $('#minus-btn-2').css("grid-area", "8 / 2 / 8 / 3");
            $('#plus-btn-2').css("grid-area", "8 / 6 / 8 / 7");
            $('#current-hunters').text(jobs.hunter);
            $('#total-hunters').text(buildings[2].built);
            document.getElementById("plus-btn-2").addEventListener("click", addJobTwo);
            document.getElementById("minus-btn-2").addEventListener("click", removeJobTwo);
        };
        if (buildings[4].built >= 1) {
            $('.work-area').append("<span id='job-title-3'>Wood Chopper</span>" +
                "<span id='current-woodchoppers'></span><span id='job-3-slash'> / </span><span id='total-woodchoppers'></span>" +
                "<span id='job-desc-3' class='job-desc'>Cuts down trees for wood.</span>" +
                "<i id='minus-btn-3' class='fas fa-minus'></i>" +
                "<i id='plus-btn-3' class='fas fa-plus'></i>");
            $('#job-desc-3').css("grid-area", "11 / 1 / 11 / 1");
            $('#job-title-3').css("grid-area", "10 / 1 / 10 / 1");
            $('#job-title-3').css("text-decoration", "underline");
            $('#job-3-slash').css("grid-area", "10 / 4 / 10 / 5");
            $('#current-woodchoppers').css("grid-area", "10 / 3 / 10 / 4");
            $('#total-woodchoppers').css("grid-area", "10 / 5 / 10 / 6");
            $('#minus-btn-3').css("grid-area", "10 / 2 / 10 / 3");
            $('#plus-btn-3').css("grid-area", "10 / 6 / 10 / 7");
            $('#current-woodchoppers').text(jobs.woodchopper);
            $('#total-woodchoppers').text(buildings[4].built);
            document.getElementById("plus-btn-3").addEventListener("click", addJobThree);
            document.getElementById("minus-btn-3").addEventListener("click", removeJobThree);
        };
        if (buildings[5].built >= 1) {
            $('.work-area').append("<span id='job-title-4'>Miner</span>" +
                "<span id='current-miners'></span><span id='job-4-slash'> / </span><span id='total-miners'></span>" +
                "<span id='job-desc-4' class='job-desc'>Mines rocks for stone.</span>" +
                "<i id='minus-btn-4' class='fas fa-minus'></i>" +
                "<i id='plus-btn-4' class='fas fa-plus'></i>");       
            $('#job-desc-4').css("grid-area", "13 / 1 / 13 / 1");
            $('#job-title-4').css("grid-area", "12 / 1 / 12 / 1");
            $('#job-title-4').css("text-decoration", "underline");
            $('#job-4-slash').css("grid-area", "12 / 4 / 12 / 5");
            $('#current-miners').css("grid-area", "12 / 3 / 12 / 4");
            $('#total-miners').css("grid-area", "12 / 5 / 12 / 6");
            $('#minus-btn-4').css("grid-area", "12 / 2 / 12 / 3");
            $('#plus-btn-4').css("grid-area", "12 / 6 / 12 / 7");
            $('#current-miners').text(jobs.miner);
            $('#total-miners').text(buildings[5].built);
            document.getElementById("plus-btn-4").addEventListener("click", addJobFour);
            document.getElementById("minus-btn-4").addEventListener("click", removeJobFour);
        };
        if (buildings[6].built >= 1) {
            $('.work-area').append("<span id='job-title-5'>Farmer</span>" +
                "<span id='current-farmers'></span><span id='job-5-slash'> / </span><span id='total-farmers'></span>" +
                "<span id='job-desc-5' class='job-desc'>Harvests wheat from fields.</span>" +
                "<i id='minus-btn-5' class='fas fa-minus'></i>" +
                "<i id='plus-btn-5' class='fas fa-plus'></i>");         
            $('#job-desc-5').css("grid-area", "15 / 1 / 15 / 1");
            $('#job-title-5').css("grid-area", "14 / 1 / 14 / 1");
            $('#job-title-5').css("text-decoration", "underline");
            $('#job-5-slash').css("grid-area", "14 / 4 / 14 / 5");
            $('#current-farmers').css("grid-area", "14 / 3 / 14 / 4");
            $('#total-farmers').css("grid-area", "14 / 5 / 14 / 6");
            $('#minus-btn-5').css("grid-area", "14 / 2 / 14 / 3");
            $('#plus-btn-5').css("grid-area", "14 / 6 / 14 / 7");
            $('#current-farmers').text(jobs.farmer);
            $('#total-farmers').text(buildings[6].built);
            document.getElementById("plus-btn-5").addEventListener("click", addJobFive);
            document.getElementById("minus-btn-5").addEventListener("click", removeJobFive);
        };
    }, 100)

    show('.work-area');
}

function addJobOne(){
    if (jobs.shaman < buildings[1].built && (resource.people - (jobs.shaman + jobs.hunter + jobs.woodchopper + jobs.miner + jobs.farmer)) > 0){
        jobs.shaman++;
    }
}
function removeJobOne(){
    if (jobs.shaman > 0){
        jobs.shaman--;
    }
}
function addJobTwo(){
    if (jobs.hunter < buildings[2].built && (resource.people - (jobs.shaman + jobs.hunter + jobs.woodchopper + jobs.miner + jobs.farmer)) > 0){
    jobs.hunter++;
    }
}
function removeJobTwo(){
    if (jobs.hunter > 0){
        jobs.hunter--;
    }
}
function addJobThree(){
    if (jobs.woodchopper < buildings[4].built && (resource.people - (jobs.shaman + jobs.hunter + jobs.woodchopper + jobs.miner + jobs.farmer)) > 0){
        jobs.woodchopper++
    }
}
function removeJobThree(){
    if (jobs.woodchopper > 0){
        jobs.woodchopper--
    }
}
function addJobFour(){
    if (jobs.miner < buildings[5].built && (resource.people - (jobs.shaman + jobs.hunter + jobs.woodchopper + jobs.miner + jobs.farmer)) > 0){
        jobs.miner++;
    }
}
function removeJobFour(){
    if (jobs.miner > 0){
        jobs.miner--;
    }
}
function addJobFive(){
    if (jobs.farmer < buildings[6].built && (resource.people - (jobs.shaman + jobs.hunter + jobs.woodchopper + jobs.miner + jobs.farmer)) > 0){
        jobs.farmer++;
    }
}
function removeJobFive(){
    if (jobs.farmer > 0){
        jobs.farmer--;
    }
}

/////////////
///Furnace///
/////////////
function openFurnace(){
    $('.work-area').animate({ opacity: 0 }, { duration: 25 });
    tooltipShown = 1;

    setTimeout(function () {
        $('.work-area').empty();
    }, 25)

    //Creates the furnace page
    setTimeout(function () {
        $('.work-area').append("<div id='furnace-inside'>" +
            "<div id='furnace-title'>Furnace</div>" +
            "<div id='furnace-description'>Current mode: Smelt</div>" +
            "<div id='furnace-mode-button' class='furnace-button'>Smelt Mode</div>" +
            "<div id='furnace-temp'></div>" +
            "<div id='furnace-image'></div>" +
            "<div id='smelt-count-area'>" +
            "<div id='smelt-count-title'>Smelt Count</div>" +
            "<i id='smelt-count-less' class='fas fa-minus'></i>" +
            "<div id='current-smelt-count'>1</div>" +
            "<div id='smelt-slash'>/</div>" +
            "<div id='total-smelt-count'>5</div>" +
            "<i id='smelt-count-more' class='fas fa-plus'></i>" +
            "<div class='furnace-button' id='smelt-button'>Smelt</div>" +
            "</div>" +
            "<div class='furnace-button' id='feed-fire'>Feed Fire</div>" +
            "<div id='input-text-1'>Input 1</div>" +
            "<div id='output-text'>Output</div>" +
            "<div class='furnace-slot' id='input-slot-1'></div>" +
            "<div class='progress' id='progress-1' value='100'></div>" +
            "<div class='furnace-slot' id='output-slot'>" +
            "<div id='output-resource-name'></div>" +
            "<div id='output-resource-count'></div>" +
            "</div>");
            if (visible.copperOreResource == true){
                $('#furnace-inside').append("<div class='furnace-resource furnace-copper-bg' id='furnace-copper'>" +
                "<div class='furnace-resource-name' id='furnace-copper-name'>Copper</div>" + 
                "<div class='furnace-resource-count' id='furnace-copper-count'>0</div>" + 
                "</div>");
                document.getElementById("furnace-copper").addEventListener("click", function(){
                    addOre('Copper')
                });
                $("#furnace-copper-count").text(resource.copperOre);
            }
            if (visible.tinOreResource == true){
                $('#furnace-inside').append("<div class='furnace-resource furnace-tin-bg' id='furnace-tin'>" +
                "<div class='furnace-resource-name' id='furnace-tin-name'>Tin</div>" + 
                "<div class='furnace-resource-count' id='furnace-tin-count'>0</div>" + 
                "</div>");
                document.getElementById("furnace-tin").addEventListener("click", function(){
                    addOre('Tin')
                });
                $("#furnace-tin-count").text(resource.tinOre);
            }
            if (visible.ironOreResource == true){
                $('#furnace-inside').append("<div class='furnace-resource furnace-iron-bg' id='furnace-iron'>" +
                "<div class='furnace-resource-name' id='furnace-iron-name'>Iron</div>" + 
                "<div class='furnace-resource-count' id='furnace-iron-count'>0</div>" + 
                "</div>");
                document.getElementById("furnace-iron").addEventListener("click", function(){
                    addOre('Iron')
                });
                $("#furnace-iron-count").text(resource.ironOre);
            }
            if (visible.goldOreResource == true){
                $('#furnace-inside').append("<div class='furnace-resource furnace-gold-bg' id='furnace-gold'>" +
                "<div class='furnace-resource-name' id='furnace-gold-name'>Gold</div>" + 
                "<div class='furnace-resource-count' id='furnace-gold-count'>0</div>" + 
                "</div>");
                document.getElementById("furnace-gold").addEventListener("click", function(){
                    addOre('Gold')
                });
                $("#furnace-gold-count").text(resource.goldOre);
            }
            if (visible.coalOreResource == true){
                $('#furnace-inside').append("<div class='furnace-resource furnace-coal-bg' id='furnace-coal'>" +
                "<div class='furnace-resource-name' id='furnace-coal-name'>Coal</div>" + 
                "<div class='furnace-resource-count' id='furnace-coal-count'>0</div>" + 
                "</div>");
                document.getElementById("furnace-coal").addEventListener("click", function(){
                    addOre('Coal')
                });
                $("#furnace-coal-count").text(resource.coal);
            }
            if (visible.sandResource == true){
                $('#furnace-inside').append("<div class='furnace-resource furnace-sand-bg' id='furnace-sand'>" +
                "<div class='furnace-resource-name' id='furnace-sand-name'>Sand</div>" + 
                "<div class='furnace-resource-count' id='furnace-sand-count'>0</div>" + 
                "</div>");
                document.getElementById("furnace-sand").addEventListener("click", function(){
                    addOre('Sand')
                });
                $("#furnace-coal-count").text(resource.sand);
            }
            if (visible.titaniumOreResource == true){
                $('#furnace-inside').append("<div class='furnace-resource furnace-titanium-bg' id='furnace-titanium'>" +
                "<div class='furnace-resource-name' id='furnace-titanium-name'>Titanium</div>" + 
                "<div class='furnace-resource-count' id='furnace-titanium-count'>0</div>" + 
                "</div>");
                document.getElementById("furnace-titanium").addEventListener("click", function(){
                    addOre('Titanium')
                });
                $("#furnace-titanium-count").text(resource.titaniumOre);
            }
            $('#furnace-inside').append("</div>");

            furnaceObj.furnaceMode == "smelt";
    }, 100);
    
    show('.work-area');

    //Adds event listeners
    setTimeout(function () {
    document.getElementById("furnace-mode-button").addEventListener("click", toggleMode);
    document.getElementById("smelt-button").addEventListener("click", activateFurnace);
    document.getElementById("input-slot-1").addEventListener("click", clearInput1);
    document.getElementById("output-slot").addEventListener("click", clearOutput);
    document.getElementById("feed-fire").addEventListener("click", feedFurnace);
    },110);
}


function toggleMode() {
    if (furnaceObj.furnaceMode == "smelt") {
        furnaceObj.furnaceMode = "alloy";
        $("#furnace-mode-button").text("Alloy Mode");
        hide("#furnace-description",100);
        setTimeout(function () {
            $("#furnace-description").text("Current mode: Alloy");
        },100);
        show("#furnace-description",100);
        $("#furnace-inside").append("<div class='progress' id='progress-2' value='100'></div>");
        $("#furnace-inside").append("<div class='opacity-zero' id='input-text-2'>Input 2</div>");
        $("#furnace-inside").append("<div class='furnace-slot' id='input-slot-2'></div>");
        $("#input-slot-2").animate({
            opacity: 1,
        },250);
        document.getElementById("input-slot-2").addEventListener("click", clearInput2);
        show("#input-slot-2",250);
        show("#input-text-2",250);
        
    }
    else if (furnaceObj.furnaceMode == "alloy") {
        furnaceObj.furnaceMode = "smelt";
        $("#furnace-mode-button").text("Smelt Mode");
        hide("#furnace-description",100);
        setTimeout(function(){
            $("#furnace-description").text("Current mode: Smelt");
        },100)
        show("#furnace-description",100);
        $("#progress-2").remove();
        document.getElementById("input-slot-2").removeEventListener("click", clearInput2);
        hide("#input-slot-2",250);
        hide("#input-text-2",250);
        setTimeout(function(){
            $("#input-slot-2").remove();
            $("#input-text-2").remove();
        },250);
    }
}

function activateFurnace() {

    if (furnaceObj.smeltTime < 0){
        logWarn('The furnace is cold!');
        $("#feed-fire").effect("shake",{distance:3}, 250);
    }
    else{
    if (furnaceObj.furnaceMode == "smelt") {

        if (furnaceObj.inputOneContent == "Copper" && (furnaceObj.outputResourceName == "copperBar" || furnaceObj.outputResourceName == "") && furnaceObj.smeltInProgress == false) {
            if (resource.copperOre > 0) {
                smeltAnimation();
                setTimeout(function () {
                    furnaceObj.outputResourceName = "copperBar";
                    $("#output-resource-name").text("Copper Bar");
                    $("#output-slot").addClass("furnace-copper-bar-bg");
                    $("#output-slot").addClass("output-slot-filled");
                    furnaceObj.outputResourceCount++;
                    $("#output-resource-count").text(furnaceObj.outputResourceCount);
                    resource.copperOre--;
                    $("#furnace-copper-count").text(resource.copperOre);
                }, furnaceObj.smeltTime);
            }
            else if (resource.copperOre == 0) {
                $("#furnace-copper").effect("shake", { distance: 3 }, 250);
                logWarn("Not enough Copper!");
            }
        }
        if (furnaceObj.inputOneContent == "Tin" && (furnaceObj.outputResourceName == "tinBar" || furnaceObj.outputResourceName == "") && furnaceObj.smeltInProgress == false) {
            if (resource.tinOre > 0) {
                smeltAnimation();
                setTimeout(function () {
                    furnaceObj.outputResourceName = "tinBar";
                    $("#output-resource-name").text("Tin Bar");
                    $("#output-slot").addClass("furnace-tin-bar-bg");
                    $("#output-slot").addClass("output-slot-filled");
                    furnaceObj.outputResourceCount++;
                    $("#output-resource-count").text(furnaceObj.outputResourceCount);
                    resource.tinOre--;
                    $("#furnace-tin-count").text(resource.tinOre);
                }, furnaceObj.smeltTime);
            }
            else if (resource.tinOre == 0) {
                $("#furnace-tin").effect("shake", { distance: 3 }, 250);
                logWarn("Not enough Tin!");
            }
        }
        if (furnaceObj.inputOneContent == "Iron" && (furnaceObj.outputResourceName == "ironBar" || furnaceObj.outputResourceName == "") && furnaceObj.smeltInProgress == false) {
            if (resource.ironOre > 0) {
                smeltAnimation();
                setTimeout(function () {
                    furnaceObj.outputResourceName = "ironBar";
                    $("#output-resource-name").text("Iron Bar");
                    $("#output-slot").addClass("furnace-iron-bar-bg");
                    $("#output-slot").addClass("output-slot-filled");
                    furnaceObj.outputResourceCount++;
                    $("#output-resource-count").text(furnaceObj.outputResourceCount);
                    resource.ironOre--;
                    $("#furnace-iron-count").text(resource.ironOre);
                }, furnaceObj.smeltTime);
            }
            else if (resource.ironOre == 0) {
                $("#furnace-iron").effect("shake", { distance: 3 }, 250);
                logWarn("Not enough Iron!");
            }
        }
        if (furnaceObj.inputOneContent == "Coal") {
            $("#input-slot-1").effect("shake",{distance:3}, 250);
            logText('Coal cannot be smelted on its own!')
        }
        if (furnaceObj.inputOneContent == "Gold" && (furnaceObj.outputResourceName == "goldBar" || furnaceObj.outputResourceName == "") && furnaceObj.smeltInProgress == false) {
            if (resource.goldOre > 0) {
                smeltAnimation();
                setTimeout(function () {
                    furnaceObj.outputResourceName = "goldBar";
                    $("#output-resource-name").text("Gold Bar");
                    $("#output-slot").addClass("furnace-gold-bar-bg");
                    $("#output-slot").addClass("output-slot-filled");
                    furnaceObj.outputResourceCount++;
                    $("#output-resource-count").text(furnaceObj.outputResourceCount);
                    resource.goldOre--;
                    $("#furnace-gold-count").text(resource.goldOre);
                }, furnaceObj.smeltTime);
            }
            else if (resource.goldOre == 0) {
                $("#furnace-gold").effect("shake", { distance: 3 }, 250);
                logWarn("Not enough Gold!");
            }
        }
        if (furnaceObj.inputOneContent == "Sand" && (furnaceObj.outputResourceName == "glassPanel" || furnaceObj.outputResourceName == "") && furnaceObj.smeltInProgress == false) {
            smeltAnimation();
            setTimeout(function () {
                furnaceObj.outputResourceName = "glassPanel";
                $("#output-resource-name").text("Glass Panel");
                $("#output-slot").addClass("furnace-glass-panel-bg");
                $("#output-slot").addClass("output-slot-filled");
                furnaceObj.outputResourceCount++;
                $("#output-resource-count").text(furnaceObj.outputResourceCount);
            }, furnaceObj.smeltTime);
        }

        if (furnaceObj.inputOneContent == "Titanium" && (furnaceObj.outputResourceName == "titaniumBar" || furnaceObj.outputResourceName == "") && furnaceObj.smeltInProgress == false) {
            smeltAnimation();
            setTimeout(function () {
                furnaceObj.outputResourceName = "titaniumBar";
                $("#output-resource-name").text("Titanium Plate");
                $("#output-slot").addClass("furnace-titanium-plate-bg");
                $("#output-slot").addClass("output-slot-filled");
                furnaceObj.outputResourceCount++;
                $("#output-resource-count").text(furnaceObj.outputResourceCount);
            }, furnaceObj.smeltTime);
        }

        if (furnaceObj.outputResourceName !== "") {
            if (furnaceObj.inputOneContent == "Copper" && furnaceObj.outputResourceName !== "copperBar") {
                logText('Please empty output slot first!');
                $("#output-slot").effect("shake",{distance:3}, 250);
            }
            if (furnaceObj.inputOneContent == "Tin" && furnaceObj.outputResourceName !== "tinBar") {
                logText('Please empty output slot first!');
                $("#output-slot").effect("shake",{distance:3}, 250);
            }
            if (furnaceObj.inputOneContent == "Iron" && furnaceObj.outputResourceName !== "ironBar") {
                logText('Please empty output slot first!');
                $("#output-slot").effect("shake",{distance:3}, 250);
            }
            if (furnaceObj.inputOneContent == "Gold" && furnaceObj.outputResourceName !== "goldBar") {
                logText('Please empty output slot first!');
                $("#output-slot").effect("shake",{distance:3}, 250);
            }
            if (furnaceObj.inputOneContent == "Sand" && furnaceObj.outputResourceName !== "glassPanel") {
                logText('Please empty output slot first!');
                $("#output-slot").effect("shake",{distance:3}, 250);
            }
            if (furnaceObj.inputOneContent == "Titanium" && furnaceObj.outputResourceName !== "titaniumBar") {
                logText('Please empty output slot first!');
                $("#output-slot").effect("shake",{distance:3}, 250);
            }
        }

    }

    else if (furnaceObj.furnaceMode == "alloy") {
        if (furnaceObj.inputOneContent == "Iron" && furnaceObj.inputTwoContent == "Coal" && (furnaceObj.outputResourceName == "steelBar" || furnaceObj.outputResourceName == "") && furnaceObj.smeltInProgress == false) {
            smeltAnimation();
            setTimeout(function () {
                furnaceObj.outputResourceName = "steelBar";
                $("#output-resource-name").text("Steel Plate");
                $("#output-slot").addClass("furnace-steel-plate-bg");
                furnaceObj.outputResourceCount++;
                $("#output-resource-count").text(furnaceObj.outputResourceCount);
                resource.ironOre--;
                $("#furnace-iron-count").text(resource.ironOre);
                resource.coal--;
                $("#furnace-coal-count").text(resource.coal);
            }, furnaceObj.smeltTime);
        }
        else if (furnaceObj.inputOneContent == "Coal" && furnaceObj.inputTwoContent == "Iron" && (furnaceObj.outputResourceName == "steelBar" || furnaceObj.outputResourceName == "") && furnaceObj.smeltInProgress == false) {
            smeltAnimation();
            setTimeout(function () {
                furnaceObj.outputResourceName = "steelBar";
                $("#output-resource-name").text("Steel Plate");
                $("#output-slot").addClass("furnace-steel-plate-bg");
                furnaceObj.outputResourceCount++;
                $("#output-resource-count").text(furnaceObj.outputResourceCount);
                resource.ironOre--;
                $("#furnace-iron-count").text(resource.ironOre);
                resource.coal--;
                $("#furnace-coal-count").text(resource.coal);
            }, furnaceObj.smeltTime);
        }
        else if (furnaceObj.inputOneContent == "Copper" && furnaceObj.inputTwoContent == "Tin" && (furnaceObj.outputResourceName == "bronzeBar" || furnaceObj.outputResourceName == "") && furnaceObj.smeltInProgress == false) {
            smeltAnimation();
            setTimeout(function () {
                furnaceObj.outputResourceName = "bronzeBar";
                $("#output-resource-name").text("Bronze Bar");
                $("#output-slot").addClass("furnace-bronze-bar-bg");
                furnaceObj.outputResourceCount++;
                $("#output-resource-count").text(furnaceObj.outputResourceCount);
                resource.copperOre--;
                $("#furnace-copper-count").text(resource.copperOre);
                resource.tinOre--;
                $("#furnace-tin-count").text(resource.tinOre);
            }, furnaceObj.smeltTime);
        }
        else if (furnaceObj.inputOneContent == "Tin" && furnaceObj.inputTwoContent == "Copper" && (furnaceObj.outputResourceName == "bronzeBar" || furnaceObj.outputResourceName == "") && furnaceObj.smeltInProgress == false) {
            smeltAnimation();
            setTimeout(function () {
                furnaceObj.outputResourceName = "bronzeBar";
                $("#output-resource-name").text("Bronze Bar");
                $("#output-slot").addClass("furnace-bronze-bar-bg");
                furnaceObj.outputResourceCount++;
                $("#output-resource-count").text(furnaceObj.outputResourceCount);
                resource.copperOre--;
                $("#furnace-copper-count").text(resource.copperOre);
                resource.tinOre--;
                $("#furnace-tin-count").text(resource.tinOre);
            }, furnaceObj.smeltTime);
        }
        else{
            logText("Invalid alloy!");
            $("#input-slot-1").effect("shake",{distance:3}, 250);
            $("#input-slot-2").effect("shake",{distance:3}, 250);
        }

        setTimeout(function () {
            $("#progress-1 svg").remove();
        }, furnaceObj.smeltTime);
        setTimeout(function () {
            $("#progress-2 svg").remove();
        }, furnaceObj.smeltTime);
    }
}

    function smeltAnimation() {
        //Removes the progress bar after it has finished
        furnaceObj.smeltInProgress = true;
        setTimeout(function () {
            $("#progress-1 svg").remove();
            furnaceObj.smeltInProgress = false;
        }, furnaceObj.smeltTime);
        var startColor = "#e8d830";
        var endColor = "#c66715";
        //Creates the progress bar
        $(".progress").each(function (i) {
            var line = new ProgressBar.Line(this, {
                color: startColor,
                easing: "linear",
                strokeWidth: 10,
                duration: furnaceObj.smeltTime
            });

            var value = $(this).attr("value") / 100;

            line.animate(value, {
                from: {
                    color: startColor
                },
                to: {
                    color: endColor
                },
                step: function (state, line, bar) {
                    line.path.setAttribute("stroke", state.color);
                }
            });
        });
    }
}

function clearInput1() {
    if (furnaceObj.smeltInProgress == false){
        $("#input-slot-1").text("");
        $("#input-slot-1").css("background-color", "black");
        $('#input-slot-1').attr("class", "furnace-slot");
        $("#furnace-" + furnaceObj.inputOneContent.toLowerCase()).css("opacity", 0.7);
        furnaceObj.inputOneContent = "";    
    }
    else{
        logText("You must wait until smelting has completed!");
    }
}

function clearInput2() {
    if (furnaceObj.smeltInProgress == false){
        $("#input-slot-2").text("");
        $('#input-slot-2').attr("class", "furnace-slot");
        $("#furnace-" + furnaceObj.inputTwoContent.toLowerCase()).css("opacity", 0.7);
        furnaceObj.inputTwoContent = "";
    }
    else{
        logText("You must wait until smelting has completed!");
    }
}

function clearOutput(){
  $("#output-resource-name").text("");
  $("#output-resource-count").text("");
  $('#output-slot').attr("class", "furnace-slot");
  furnaceObj.outputResourceCount = 0;
  furnaceObj.outputResourceName = "";
}

function addOre(ore){
    if (furnaceObj.furnaceMode == "smelt") {
        $("#input-slot-1").css("font-size", "1vh");
        refreshFurnaceUI(ore);
    }
    if (furnaceObj.furnaceMode == "alloy" && furnaceObj.inputOneContent == "") {
        $("#input-slot-1").css("font-size", "1vh");
        refreshFurnaceUI(ore);
    }
    else if (furnaceObj.furnaceMode == "alloy" && furnaceObj.inputOneContent !== "") {
        $("#input-slot-2").css("font-size", "1vh");
        refreshFurnaceUI(ore);
    }
}

function refreshFurnaceUI(ore) {
    var activeOpacity = 1;
    var lowerOre = ore.toLowerCase();
    if (furnaceObj.furnaceMode == "smelt") {
        $("#input-slot-1").text(ore);
        $("#input-slot-1").attr("class", "furnace-slot");
        $("#input-slot-1").addClass("furnace-" + lowerOre + "-bg");
        furnaceObj.inputOneContent = ore;
    }
    else if (furnaceObj.furnaceMode == "alloy") {
        if (furnaceObj.inputOneContent == "") {
            //Ore goes into input 1
            $("#input-slot-1").text(ore);
            $("#input-slot-1").attr("class", "furnace-slot");
            $("#input-slot-1").addClass("furnace-" + lowerOre + "-bg");
            furnaceObj.inputOneContent = ore;
        }
        else {
            //Ore goes into input 2
            $("#input-slot-2").text(ore);
            $("#input-slot-2").attr("class", "furnace-slot");
            $("#input-slot-2").addClass("furnace-" + lowerOre + "-bg");
            furnaceObj.inputTwoContent = ore;
        }
    }

    $("#furnace-" + lowerOre).css("opacity", activeOpacity);
}

function furnaceTemperature(){
    if (furnaceObj.furnaceTemp > 0){
        furnaceObj.furnaceTemp = furnaceObj.furnaceTemp - (currentTemp * 0.005);
        furnaceObj.smeltTime = 100000 / furnaceObj.furnaceTemp;
    }
    
    $("#furnace-temp").text('Furnace Temperature: ' + prettify(furnaceObj.furnaceTemp));
}

function feedFurnace() {
    if (furnaceObj.furnaceTemp < furnaceObj.maxTemp) {
        if (furnaceObj.furnaceTemp < 10) {
            furnaceObj.furnaceTemp = furnaceObj.furnaceTemp + 5;
        }
        else if (furnaceObj.furnaceTemp < 40) {
            furnaceObj.furnaceTemp = furnaceObj.furnaceTemp + 10;
        }
        else if (furnaceObj.furnaceTemp < 80) {
            furnaceObj.furnaceTemp = furnaceObj.furnaceTemp + 15;
        }
        else if (furnaceObj.furnaceTemp < 150) {
            furnaceObj.furnaceTemp = furnaceObj.furnaceTemp + 20
        }
        else {
            furnaceObj.furnaceTemp = furnaceObj.furnaceTemp + 20;
        }
    }
    furnaceTemperature();
}
var tempGaugeCreated = false;


//This allows selecting all of a class but not two IDs
//$(".furnace-resource").not("#furnace-copper, #furnace-tin").text("TEST");
