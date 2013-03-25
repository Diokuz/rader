window.onload = function() {
    var runnersPos = [1, 3, 5];

    $('.rader_1').rader({
        trackActive: $('.rader_1').find('.rader__track-active'),
        points: $('.rader_1').find('.rader__point'),
        runners: $('.rader_1').find('.rader__runner'),
        pointInRangeCls: 'rader__point_range_in'
    });

    var rader2 = $('.rader_2').rader({
        trackActive: $('.rader_2').find('.rader__track-active'),
        points: $('.rader_2').find('.rader__point'),
        runners: $('.rader_2').find('.rader__runner'),
        pointInRangeCls: 'rader__point_range_in',
        pointsPos: [1, 1.5, 2, 3, 4.3, 5],
        runnersPos: [2, 3, 5],
        stickingRadius: 20,
        bumpRadius: 44,
        transCls: 'rader__track_transition_on'
    });

    rader2.posRunner(2, 4);

    rader({
        root: $('.rader_3'),
        trackActive: $('.rader_3').find('.rader__track-active'),
        points: $('.rader_3').find('.rader__point'),
        runners: $('.rader_3').find('.rader__runner'),
        pointInRangeCls: 'rader__point_range_in',
        pointsPos: [0, 1, 2, 3, 4.3, 5, 7, 9, 10],
        runnersPos: [2, 3, 5, 9],
        stickingRadius: 99999,
        bumpRadius: 22,
        selector: qwery, // Selector engine
        event: function(elem, event, func, mode) { // Events manager
            if (!elem.length) {
                elem = [elem]; // bean not supported arrays
            }

            for (var i = 0 ; i < elem.length ; i++) {
                bean[mode || 'on'](elem[i], event, func);
            }
        },
        dom: bonzo // DOM utility
    });
}