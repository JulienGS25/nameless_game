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
            "<span id='free-people'></span><span id='free-people-slash'> / </span><span id='total-people'></span>");
        if (buildings[1].built == 1) {
            $('.work-area').append("<span id='job-title-1'>Shaman</span>" +
                "<span id='current-shamans'></span><span id='job-1-slash'> / </span><span id='total-shamans'></span>");
            $('#job-title-1').css("grid-area", "6 / 1 / 6 / 1");
            $('#job-title-1').css("text-decoration", "underline");
            $('#job-1-slash').css("grid-area", "6 / 4 / 6 / 4");
            $('#current-shamans').css("grid-area", "6 / 3 / 6 / 4");
            $('#total-shamans').css("grid-area", "6 / 5 / 6 / 5");
        };
        if (buildings[2].built == 1) {
            $('.work-area').append("<span id='job-title-2'>Hunter</span>" +
                "<span id='current-hunters'></span><span id='job-2-slash'> / </span><span id='total-hunters'></span>");
            $('#job-title-2').css("grid-area", "8 / 1 / 8 / 1");
            $('#job-title-2').css("text-decoration", "underline");
            $('#job-2-slash').css("grid-area", "8 / 4 / 8 / 4");
            $('#current-hunters').css("grid-area", "8 / 3 / 8 / 4");
            $('#total-hunters').css("grid-area", "8 / 5 / 8 / 5");
        };
        if (buildings[4].built == 1) {
            $('.work-area').append("<span id='job-title-3'>Wood Chopper</span>" +
                "<span id='current-woodchoppers'></span><span id='job-3-slash'> / </span><span id='total-woodchoppers'></span>");
            $('#job-title-3').css("grid-area", "10 / 1 / 10 / 1");
            $('#job-title-3').css("text-decoration", "underline");
            $('#job-3-slash').css("grid-area", "10 / 4 / 10 / 4");
            $('#current-woodchoppers').css("grid-area", "10 / 3 / 10 / 4");
            $('#total-woodchoppers').css("grid-area", "10 / 5 / 10 / 5");
        };
        if (buildings[5].built == 1) {
            $('.work-area').append("<span id='job-title-4'>Miner</span>" +
                "<span id='current-miners'></span><span id='job-4-slash'> / </span><span id='total-miners'></span>");
            $('#job-title-4').css("grid-area", "12 / 1 / 12 / 1");
            $('#job-title-4').css("text-decoration", "underline");
            $('#job-4-slash').css("grid-area", "12 / 4 / 12 / 4");
            $('#current-miners').css("grid-area", "12 / 3 / 12 / 4");
            $('#total-miners').css("grid-area", "12 / 5 / 12 / 5");
        };
        if (buildings[6].built == 1) {
            $('.work-area').append("<span id='job-title-5'>Farmer</span>" +
                "<span id='current-farmers'></span><span id='job-5-slash'> / </span><span id='total-farmers'></span>");
            $('#job-title-5').css("grid-area", "14 / 1 / 14 / 1");
            $('#job-title-5').css("text-decoration", "underline");
            $('#job-5-slash').css("grid-area", "14 / 4 / 14 / 4");
            $('#current-farmers').css("grid-area", "14 / 3 / 14 / 4");
            $('#total-farmers').css("grid-area", "14 / 5 / 14 / 5");
        };
    }, 100)
    show('.work-area');
}
