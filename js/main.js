/*** BOARD ***/
$("#board-overlay").mouseenter(function(){

    $( ".mission-cards, .building-tokens, .building-costs, .mission-cards, .resources-cards, .resources-tokens, .road-card, .dice" ).addClass( "game-opacity" );
    $( "#modal-board" ).addClass( "enter-modal" );

}).mouseleave(function(){

    $( ".mission-cards, .building-tokens, .building-costs, .mission-cards, .resources-cards, .resources-tokens, .road-card, .dice" ).removeClass( "game-opacity" );
    $( "#modal-board" ).addClass( "leave-modal" );

    setTimeout(function () {
        $( "#modal-board" ).removeClass( "enter-modal leave-modal" );
    }, 250);

});

/*** TOKENS ***/
$("ul.building-tokens-ghost li").mouseenter(function(){

    $( ".mission-cards, .game-board, .building-costs, .mission-cards, .resources-cards, .resources-tokens, .road-card, .dice" ).addClass( "game-opacity" );
    $( "#modal-building-tokens" ).addClass( "enter-modal" );

}).mouseleave(function(){

    $( ".mission-cards, .game-board, .building-costs, .mission-cards, .resources-cards, .resources-tokens, .road-card, .dice" ).removeClass( "game-opacity" );
    $( "#modal-building-tokens" ).addClass( "leave-modal" );

    setTimeout(function () {
        $( "#modal-building-tokens" ).removeClass( "enter-modal leave-modal" );
    }, 250);

});

/*** DICE ***/
$(".dice").mouseenter(function(){

    $( ".mission-cards, .game-board, .building-costs, .mission-cards, .resources-cards, .resources-tokens, .road-card, .building-tokens" ).addClass( "game-opacity" );
    $( "#modal-dice" ).addClass( "enter-modal" );

}).mouseleave(function(){

    $( ".mission-cards, .game-board, .building-costs, .mission-cards, .resources-cards, .resources-tokens, .road-card, .building-tokens" ).removeClass( "game-opacity" );
    $( "#modal-dice" ).addClass( "leave-modal" );

    setTimeout(function () {
        $( "#modal-dice" ).removeClass( "enter-modal leave-modal" );
    }, 250);

});

/*** MISSION CARDS ***/
$(".mission-cards").mouseenter(function(){

    $( ".dice, .game-board, .building-costs, .resources-cards, .resources-tokens, .road-card, .building-tokens" ).addClass( "game-opacity" );
    $( "#modal-mission-cards" ).addClass( "enter-modal" );

}).mouseleave(function(){

    $( ".dice, .game-board, .building-costs, .resources-cards, .resources-tokens, .road-card, .building-tokens" ).removeClass( "game-opacity" );
    $( "#modal-mission-cards" ).addClass( "leave-modal" );

    setTimeout(function () {
        $( "#modal-mission-cards" ).removeClass( "enter-modal leave-modal" );
    }, 250);

});

/*** BUILDING COSTS ***/
$(".building-costs").mouseenter(function(){

    $( ".dice, .game-board, .mission-cards, .resources-cards, .resources-tokens, .road-card, .building-tokens" ).addClass( "game-opacity" );
    $( "#modal-building-costs" ).addClass( "enter-modal" );

}).mouseleave(function(){

    $( ".dice, .game-board, .mission-cards, .resources-cards, .resources-tokens, .road-card, .building-tokens" ).removeClass( "game-opacity" );
    $( "#modal-building-costs" ).addClass( "leave-modal" );

    setTimeout(function () {
        $( "#modal-building-costs" ).removeClass( "enter-modal leave-modal" );
    }, 250);

});

/*** RESOURCE CARDS ***/
$(".resources-cards").mouseenter(function(){

    $( ".dice, .game-board, .mission-cards, .building-costs, .resources-tokens, .road-card, .building-tokens" ).addClass( "game-opacity" );
    $( "#modal-resources-cards" ).addClass( "enter-modal" );

}).mouseleave(function(){

    $( ".dice, .game-board, .mission-cards, .building-costs, .resources-tokens, .road-card, .building-tokens" ).removeClass( "game-opacity" );
    $( "#modal-resources-cards" ).addClass( "leave-modal" );

    setTimeout(function () {
        $( "#modal-resources-cards" ).removeClass( "enter-modal leave-modal" );
    }, 250);

});

/*** ROAD CARDS ***/
$(".road-card").mouseenter(function(){

    $( ".dice, .game-board, .mission-cards, .building-costs, .resources-tokens, .resources-cards, .building-tokens" ).addClass( "game-opacity" );
    $( "#modal-road-card" ).addClass( "enter-modal" );

}).mouseleave(function(){

    $( ".dice, .game-board, .mission-cards, .building-costs, .resources-tokens, .resources-cards, .building-tokens" ).removeClass( "game-opacity" );
    $( "#modal-road-card" ).addClass( "leave-modal" );

    setTimeout(function () {
        $( "#modal-road-card" ).removeClass( "enter-modal leave-modal" );
    }, 250);

});

/*** RESOURCES TOKENS ***/
$(".resources-tokens").mouseenter(function(){

    $( ".dice, .game-board, .mission-cards, .building-costs, .road-card, .resources-cards, .building-tokens" ).addClass( "game-opacity" );
    $( "#modal-resources-tokens" ).addClass( "enter-modal" );

}).mouseleave(function(){

    $( ".dice, .game-board, .mission-cards, .building-costs, .road-card, .resources-cards, .building-tokens" ).removeClass( "game-opacity" );
    $( "#modal-resources-tokens" ).addClass( "leave-modal" );

    setTimeout(function () {
        $( "#modal-resources-tokens" ).removeClass( "enter-modal leave-modal" );
    }, 250);

});/** Navicon **/$( ".navbar-toggle" ).click(function() {	$( "#naviconOne" ).toggleClass( "transformFirst" );	$( "#naviconTwo" ).toggleClass( "transformSecond" );	$( "#naviconThree" ).toggleClass( "transformThird" );});


/*** 
//Navigācija mobīlajiem
function openMenu() {
    $('#mainNav ul').toggleClass('menuHeight');
}

// Smooth scrolls
$('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'')
        || location.hostname == this.hostname) {

        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
        if (target.length) {
            $('html,body').animate({
                scrollTop: target.offset().top
            }, 1000);
            return false;
        }
    }
});
***/