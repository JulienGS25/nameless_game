// Timed events
function wakeUp(){
    $('.right-tab').animate({opacity: 1},{duration: 500});
    logText('You wake up in an empty field...');
    wakeUpHappened = 1;
}

