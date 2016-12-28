(function (root) {
    'use strict';

    function UI() {

    }

    UI.prototype.setup = function (slider) {
        var self = this;

        //UI numeric output
        var $img = document.querySelector('#img');
        var $opPrevious = document.querySelector('#ui-previous');
        var $opNext = document.querySelector('#ui-next');
        var $opStop = document.querySelector('#ui-stop');
        var $opPause = document.querySelector('#ui-pause');
        var $opPlay = document.querySelector('#ui-play');
        //UI operator click handlers
        $opPrevious.addEventListener('click', function () {
            $img.src = slider.previous();
        });

        $opNext.addEventListener('click', function () {
            $img.src = slider.next();
        });

        $opStop.addEventListener('click', function () {

        });

        $opPause.addEventListener('click', function () {

        });

        $opPlay.addEventListener('click', function () {

        });

    };

    root.UI = UI;

}(this || module.exports));
