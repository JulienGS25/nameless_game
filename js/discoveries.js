var discovery = {
    fire: {
        name: 'fire',
        message: 'You discovered fire!'
    }

}


function discoverFire() {
    lightningStrikeHappened = 1;
    fireAppeared = 1;
    state = 6;
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
        learnedFire = 1;
        state = 7;
        show('.left-tab');
        leftTabVisible = 1;
        show('#era');
        eraVisible = 1;
        $('.building-list').append("<div class='left-tab-button game-button' id='build-campfire' type='button'>Build Campfire</div>");
        document.getElementById("build-campfire").addEventListener("click", buildCampfire)
    }
    function observe() {
        if (callFunction == 1) { observeOne(); callFunction++ }
        else if (callFunction == 2) { observeTwo(); callFunction++ }
        else if (callFunction == 3) { observeThree(); callFunction++ }
        else if (callFunction == 4) { observeFour(); callFunction++ }
        else if (callFunction == 5) { observeFive(); callFunction++ }
    }
}

