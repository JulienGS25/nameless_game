// Timed events
function wakeUp(){
    show('.right-tab');
    visible.rightTab = true;
    logText('You wake up in an empty field...');
    events.wakeUp = 1;
}

function discoverFire() {
    logText('You hear an ear-shattering explosion nearby!');
    if (disableLightningEffect == 0){
        $('#body')
        .animate({backgroundColor:'#ffffff'},{duration: 100})
        .animate({backgroundColor:'#000000'},{duration: 100})
        .animate({backgroundColor:'#ffffff'},{duration: 100})
        .animate({backgroundColor:'#000000'},{duration: 100})};
    $('.middle-right-col').append("<div class='mid-tab-button game-button hidden opacity-zero' id='observe-button' type='button'>Observe</div>");
    show('#observe-button');
    document.getElementById("observe-button").addEventListener("click", observe);
    var callFunction = 1;
    function observeOne() {
        $('#observe-button').text('Stare');
        logText('There is something bright moving on a nearby tree. As you get closer, you realize that it hurts!');
    }
    function observeTwo() {
        $('#observe-button').text('Experiment');
        logText('You notice the tree is changing under the effects of this. You start to wonder if other things could be changed by this.');
    }
    function observeThree() {
        $('.right-tab').animate({backgroundColor:'#e25822'},{duration: 250});
        $('#observe-button').text('Panic');
        logText('You take a nearby branch and stick it in this. The \'thing\' jumped onto your branch!');
    }
    function observeFour() {
        $('.right-tab').animate({backgroundColor:'black'},{duration: 1500});
        $('#observe-button').text('Discover');
        logText('In a panic, you drop the branch and see the \'thing\' slowly disappear. Looks like it\'s not that dangerous after all.');
    }
    function observeFive() {
        logText('Trying again with more branches, you start assembling them into a pile. You name this new discovery: <span style=\'color: red\'> Fire!');
        $('#observe-button').remove();
        show('.left-tab');
        visible.leftTab = true;
        show('#era');
        visible.era = true;
        $('#grid-left-col-1').append("<div class='game-button left-tab-cell' id='left-tab-cell-0'>Campfire</div>")
        document.getElementById("left-tab-cell-0").addEventListener("click", function(){
            showTooltip(campFire);
        });
        events.lightningStrike = 1;
        events.fireAppeared = 1;
        
    }
    function observe() {
        if (callFunction == 1) { observeOne(); callFunction++ }
        else if (callFunction == 2) { observeTwo(); callFunction++ }
        else if (callFunction == 3) { observeThree(); callFunction++ }
        else if (callFunction == 4) { observeFour(); callFunction++ }
        else if (callFunction == 5) { observeFive(); callFunction++ }
    }
}

