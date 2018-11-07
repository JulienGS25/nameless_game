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
            "<div id='furnace-description'>The furnace smelts ore into bars.</div>" +
            "<div id='furnace-mode-button' class='furnace-button'>Smelt Mode</div>" +
            "<div id='furnace-image'>Fire Image</div>" +
            "<div id='smelt-count-area'>" +
            "<div id='smelt-count-title'>Smelt Count</div>" +
            "<i id='smelt-count-less' class='fas fa-minus'></i>" +
            "<div id='current-smelt-count'>1</div>" +
            "<div id='smelt-slash'>/</div>" +
            "<div id='total-smelt-count'>5</div>" +
            "<i id='smelt-count-more' class='fas fa-plus'></i>" +
            "<div class='furnace-button' id='smelt-button'>Smelt</div>" +
            "</div>" +
            "<div class='furnace-button' id='burn-wood'>Burn Wood</div>" +
            "<div id='input-text-1'>Input 1</div>" +
            "<div id='output-text'>Output</div>" +
            "<div class='furnace-slot' id='input-slot-1'></div>" +
            "<div class='progress' id='progress-1' value='100'></div>" +
            "<div  class='furnace-slot' id='output-slot'>" +
            "<div id='output-resource-name'></div>" +
            "<div id='output-resource-count'></div>" +
            "</div>" +
            "<div class='furnace-resource furnace-copper-bg' id='furnace-copper'>Copper</div>" +
            "<div class='furnace-resource furnace-tin-bg' id='furnace-tin'>Tin</div>" +
            "<div class='furnace-resource furnace-iron-bg' id='furnace-iron'>Iron</div>" +
            "<div class='furnace-resource furnace-coal-bg' id='furnace-coal'>Coal</div>" +
            "<div class='furnace-resource furnace-gold-bg' id='furnace-gold'>Gold</div>" +
            "<div class='furnace-resource furnace-sand-bg' id='furnace-sand'>Sand</div>" +
            "<div class='furnace-resource furnace-titanium-bg' id='furnace-titanium'>Titanium</div>" +
            "</div>");
    }, 100);

    show('.work-area');

    //Adds event listeners
    setTimeout(function () {
    document.getElementById("furnace-mode-button").addEventListener("click", toggleMode);
    document.getElementById("smelt-button").addEventListener("click", activateFurnace);
    document.getElementById("furnace-copper").addEventListener("click", addCopper);
    document.getElementById("furnace-tin").addEventListener("click", addTin);
    document.getElementById("furnace-iron").addEventListener("click", addIron);
    document.getElementById("furnace-coal").addEventListener("click", addCoal);
    document.getElementById("furnace-gold").addEventListener("click", addGold);
    document.getElementById("furnace-sand").addEventListener("click", addSand);
    document.getElementById("furnace-titanium").addEventListener("click", addTitanium);
    document.getElementById("input-slot-1").addEventListener("click", clearInput1);
    document.getElementById("output-slot").addEventListener("click", clearOutput);
    },110);
}




var furnaceMode = "smelt"; //can be alloy or smelt
var smeltTime = 1500;
var inputOneContent = "";
var inputTwoContent = "";
var outputResourceName = "";
var outputResourceCount = "";
var smeltInProgress = false;

function toggleMode() {
  if (furnaceMode == "smelt") {
    furnaceMode = "alloy";
    $("#furnace-mode-button").text("Alloy Mode");
    $("#furnace-inside").append(
      "<div class='progress' id='progress-2' value='100'></div>"
    );
    $("#furnace-inside").append("<div id='input-text-2'>Input 2</div>");
    $("#furnace-inside").append(
      "<div class='furnace-slot' id='input-slot-2'></div>"
    );
    document
      .getElementById("input-slot-2")
      .addEventListener("click", clearInput2);
  } else if (furnaceMode == "alloy") {
    furnaceMode = "smelt";
    $("#furnace-mode-button").text("Smelt Mode");
    $("#progress-2").remove();
    document
      .getElementById("input-slot-2")
      .removeEventListener("click", clearInput2);
    $("#input-slot-2").remove();
    $("#input-text-2").remove();
  }
}

function activateFurnace() {
  var startColor = "#e8d830";
  var endColor = "#c66715";
  if (furnaceMode == "smelt") {

    if (inputOneContent == "copper" && (outputResourceName == "copperBar" || outputResourceName == "") && smeltInProgress == false){
    smeltAnimation();
      setTimeout(function() {
      outputResourceName = "copperBar";
      $("#output-resource-name").text("Copper Bar");
      $("#output-slot").addClass("furnace-copper-bar-bg");
      $("#output-slot").addClass("output-slot-filled");
      outputResourceCount++;
      $("#output-resource-count").text(outputResourceCount);
    }, smeltTime);
    }
    if (outputResourceName !== ""){
        if (inputOneContent == "copper" && outputResourceName !== "copperBar"){
            logText('Please empty output slot first!')
        }
    }
    else if (inputOneContent == "tin" && (outputResourceName == "tinBar" || outputResourceName == "") && smeltInProgress == false){
    smeltAnimation();
      setTimeout(function() {
      outputResourceName = "tinBar";
      $("#output-resource-name").text("Tin Bar");
      $("#output-slot").addClass("furnace-tin-bar-bg");
      $("#output-slot").addClass("output-slot-filled");
      outputResourceCount++;
      $("#output-resource-count").text(outputResourceCount);
    }, smeltTime);
    }
    if (outputResourceName !== ""){
        if (inputOneContent == "tin" && outputResourceName !== "tinBar"){
            logText('Please empty output slot first!')
        }
    }
    else if (inputOneContent == "iron" && (outputResourceName == "ironBar" || outputResourceName == "") && smeltInProgress == false){
        smeltAnimation();
      setTimeout(function() {
      outputResourceName = "ironBar";
      $("#output-resource-name").text("Iron Bar");
      $("#output-slot").addClass("furnace-iron-bar-bg");
      outputResourceCount++;
      $("#output-resource-count").text(outputResourceCount);
    }, smeltTime);
    }
    if (outputResourceName !== ""){
        if (inputOneContent == "iron" && outputResourceName !== "ironBar"){
            logText('Please empty output slot first!')
        }
    }
    else if (inputOneContent == "gold" && (outputResourceName == "goldBar" || outputResourceName == "") && smeltInProgress == false){
        smeltAnimation();
      setTimeout(function() {
      outputResourceName = "goldBar";
      $("#output-resource-name").text("Gold Bar");
      $("#output-slot").addClass("furnace-gold-bar-bg");
      outputResourceCount++;
      $("#output-resource-count").text(outputResourceCount);
    }, smeltTime);
    }
    if (outputResourceName !== ""){
        if (inputOneContent == "gold" && outputResourceName !== "goldBar"){
            logText('Please empty output slot first!')
        }
    }
    else if (inputOneContent == "sand" && (outputResourceName == "glassPanel" || outputResourceName == "") && smeltInProgress == false){
        smeltAnimation();
      setTimeout(function() {
      outputResourceName = "glassPanel";
      $("#output-resource-name").text("Glass Panel");
      $("#output-slot").addClass("furnace-glass-panel-bg");
      outputResourceCount++;
      $("#output-resource-count").text(outputResourceCount);
    }, smeltTime);
    }
    if (outputResourceName !== ""){
        if (inputOneContent == "sand" && outputResourceName !== "glassPanel"){
            logText('Please empty output slot first!')
        }
    }
    else if (inputOneContent == "titanium" && (outputResourceName == "titaniumBar" || outputResourceName == "") && smeltInProgress == false){
        smeltAnimation();
      setTimeout(function() {
      outputResourceName = "titaniumBar";
      $("#output-resource-name").text("Titanium Bar");
      $("#output-slot").addClass("furnace-titanium-bar-bg");
      outputResourceCount++;
      $("#output-resource-count").text(outputResourceCount);
    }, smeltTime);
    }
    if (outputResourceName !== ""){
        if (inputOneContent == "titanium" && outputResourceName !== "titaniumBar"){
            logText('Please empty output slot first!')
        }
    }
    
  } 
  
  else if (furnaceMode == "alloy") {
    setTimeout(function() {
      $("#progress-1 svg").remove();
    }, smeltTime);
    setTimeout(function() {
      $("#progress-2 svg").remove();
    }, smeltTime);
    smeltAnimation();
  }

  function smeltAnimation() {
    //Removes the progress bar after it has finished
    smeltInProgress = true;
    setTimeout(function() {
      $("#progress-1 svg").remove();
      smeltInProgress = false;
    }, smeltTime);
    
    //Creates the progress bar
    $(".progress").each(function(i) {
      var line = new ProgressBar.Line(this, {
        color: startColor,
        easing: "linear",
        strokeWidth: 10,
        duration: smeltTime
      });

      var value = $(this).attr("value") / 100;

      line.animate(value, {
        from: {
          color: startColor
        },
        to: {
          color: endColor
        },
        step: function(state, line, bar) {
          line.path.setAttribute("stroke", state.color);
        }
      });
    });
  }
}

function clearInput1() {
  $("#input-slot-1").text("");
  $("#input-slot-1").css("background-color", "black");
  $("#furnace-copper").css("opacity", "0.7");
  $("#furnace-tin").css("opacity", "0.7");
  $("#furnace-iron").css("opacity", "0.7");
  $("#furnace-gold").css("opacity", "0.7");
  $("#furnace-sand").css("opacity", "0.7");
  $("#furnace-titanium").css("opacity", "0.7");
  $("#input-slot-1").removeClass("furnace-copper-bg");
  $("#input-slot-1").removeClass("furnace-tin-bg");
  $("#input-slot-1").removeClass("furnace-iron-bg");
  $("#input-slot-1").removeClass("furnace-gold-bg");
  $("#input-slot-1").removeClass("furnace-sand-bg");
  $("#input-slot-1").removeClass("furnace-titanium-bg");
  if (furnaceMode == "smelt"){
    $("#furnace-coal").css("opacity", "0.7");   
  }
  inputOneContent = "";
}

function clearInput2() {
  $("#input-slot-2").text("");
  $("#input-slot-2").removeClass("furnace-coal-bg");
  $("#furnace-coal").css("opacity", "0.5");
  
  inputTwoContent = "";
}

function clearOutput(){
  $("#output-resource-name").text("");
  $("#output-resource-count").text("");
  $("#output-slot").removeClass("furnace-copper-bar-bg");
  $("#output-slot").removeClass("furnace-tin-bar-bg");
  $("#output-slot").removeClass("furnace-iron-bar-bg");
  $("#output-slot").removeClass("furnace-gold-bar-bg");
  $("#output-slot").removeClass("furnace-glass-panel-bg");
  $("#output-slot").removeClass("furnace-titanium-bar-bg");
  outputResourceCount = 0;
  outputResourceName = "";
  
}

function addCopper() {
  $("#input-slot-1").text("Copper");
  $("#input-slot-1").css("font-size", "1vh");
  $("#input-slot-1").addClass("furnace-copper-bg");
  $("#input-slot-1").removeClass("furnace-tin-bg");
  $("#input-slot-1").removeClass("furnace-iron-bg");
  $("#input-slot-1").removeClass("furnace-gold-bg");
  $("#input-slot-1").removeClass("furnace-sand-bg");
  $("#input-slot-1").removeClass("furnace-titanium-bg");
  $("#furnace-copper").css("opacity", "1");
  $("#furnace-tin").css("opacity", "0.5");
  $("#furnace-iron").css("opacity", "0.5");
  $("#furnace-gold").css("opacity", "0.5");
  $("#furnace-sand").css("opacity", "0.5");
  $("#furnace-titanium").css("opacity", "0.5");
  inputOneContent = "copper";
  if (inputTwoContent == ""){
        $("#furnace-coal").css("opacity", "0.5");
  }
}

function addTin() {
  $("#input-slot-1").text("Tin");
  $("#input-slot-1").css("font-size", "1vh");
  $("#input-slot-1").addClass("furnace-tin-bg");
  $("#input-slot-1").removeClass("furnace-copper-bg");
  $("#input-slot-1").removeClass("furnace-iron-bg");
  $("#input-slot-1").removeClass("furnace-gold-bg");
  $("#input-slot-1").removeClass("furnace-sand-bg");
  $("#input-slot-1").removeClass("furnace-titanium-bg");
  $("#furnace-tin").css("opacity", "1");
  $("#furnace-copper").css("opacity", "0.5");
  $("#furnace-iron").css("opacity", "0.5");
  $("#furnace-gold").css("opacity", "0.5");
  $("#furnace-sand").css("opacity", "0.5");
  $("#furnace-titanium").css("opacity", "0.5");
  inputOneContent = "tin";
  if (inputTwoContent == ""){
    $("#furnace-coal").css("opacity", "0.5");
}
}

function addIron() {
  $("#input-slot-1").text("Iron");
  $("#input-slot-1").css("font-size", "1vh");
  $("#input-slot-1").addClass("furnace-iron-bg");
  $("#input-slot-1").removeClass("furnace-copper-bg");
  $("#input-slot-1").removeClass("furnace-tin-bg");
  $("#input-slot-1").removeClass("furnace-gold-bg");
  $("#input-slot-1").removeClass("furnace-sand-bg");
  $("#input-slot-1").removeClass("furnace-titanium-bg");
  $("#furnace-iron").css("opacity", "1");
  $("#furnace-copper").css("opacity", "0.5");
  $("#furnace-tin").css("opacity", "0.5");
  $("#furnace-gold").css("opacity", "0.5");
  $("#furnace-sand").css("opacity", "0.5");
  $("#furnace-titanium").css("opacity", "0.5");
  inputOneContent = "iron";
  if (inputTwoContent == ""){
    $("#furnace-coal").css("opacity", "0.5");
}
}

function addCoal() {
  if (furnaceMode == "alloy") {
    $("#input-slot-2").text("Coal");
    $("#input-slot-2").css("font-size", "1vh");
    $("#input-slot-2").addClass("furnace-coal-bg");
    $("#input-slot-2").css("color", "white");
    $("#furnace-coal").css("opacity", "1");
    inputTwoContent = "coal";
  }
}

function addGold() {
  $("#input-slot-1").text("Gold");
  $("#input-slot-1").css("font-size", "1vh");
  $("#input-slot-1").addClass("furnace-gold-bg");
  $("#input-slot-1").removeClass("furnace-copper-bg");
  $("#input-slot-1").removeClass("furnace-tin-bg");
  $("#input-slot-1").removeClass("furnace-iron-bg");
  $("#input-slot-1").removeClass("furnace-sand-bg");
  $("#input-slot-1").removeClass("furnace-titanium-bg");
  $("#furnace-gold").css("opacity", "1");
  $("#furnace-copper").css("opacity", "0.5");
  $("#furnace-tin").css("opacity", "0.5");
  $("#furnace-iron").css("opacity", "0.5");
  $("#furnace-sand").css("opacity", "0.5");
  $("#furnace-titanium").css("opacity", "0.5");
  inputOneContent = "gold";
  if (inputTwoContent == ""){
    $("#furnace-coal").css("opacity", "0.5");
}
}

function addSand() {
  $("#input-slot-1").text("Sand");
  $("#input-slot-1").css("font-size", "1vh");
  $("#input-slot-1").addClass("furnace-sand-bg");
  $("#input-slot-1").removeClass("furnace-copper-bg");
  $("#input-slot-1").removeClass("furnace-tin-bg");
  $("#input-slot-1").removeClass("furnace-gold-bg");
  $("#input-slot-1").removeClass("furnace-iron-bg");
  $("#input-slot-1").removeClass("furnace-titanium-bg");
  $("#furnace-sand").css("opacity", "1");
  $("#furnace-copper").css("opacity", "0.5");
  $("#furnace-tin").css("opacity", "0.5");
  $("#furnace-iron").css("opacity", "0.5");
  $("#furnace-gold").css("opacity", "0.5");
  $("#furnace-titanium").css("opacity", "0.5");
  inputOneContent = "sand";
  if (inputTwoContent == ""){
    $("#furnace-coal").css("opacity", "0.5");
}
}

function addTitanium() {
  $("#input-slot-1").text("Titanium");
  $("#input-slot-1").css("font-size", "1vh");
  $("#input-slot-1").addClass("furnace-titanium-bg");
  $("#input-slot-1").removeClass("furnace-copper-bg");
  $("#input-slot-1").removeClass("furnace-tin-bg");
  $("#input-slot-1").removeClass("furnace-iron-bg");
  $("#input-slot-1").removeClass("furnace-gold-bg");
  $("#input-slot-1").removeClass("furnace-sand-bg");
  $("#furnace-titanium").css("opacity", "1");
  $("#furnace-copper").css("opacity", "0.5");
  $("#furnace-tin").css("opacity", "0.5");
  $("#furnace-iron").css("opacity", "0.5");
  $("#furnace-gold").css("opacity", "0.5");
  $("#furnace-sand").css("opacity", "0.5");
  inputOneContent = "titanium";
  if (inputTwoContent == ""){
    $("#furnace-coal").css("opacity", "0.5");
}
}
