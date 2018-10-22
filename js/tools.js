function manageTribe() {
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
        };
        if (buildings[2].built == 1) {
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
        };
        if (buildings[4].built == 1) {
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
        };
        if (buildings[5].built == 1) {
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
        };
        if (buildings[6].built == 1) {
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
        };
    }, 100)
    show('.work-area');
}
