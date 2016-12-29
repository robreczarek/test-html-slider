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
        var $opPlay = document.querySelector('#ui-play');
        var intervalID;

        //UI operator click handlers
        $opPrevious.addEventListener('click', function () {

            updateImage(slider.previous());

        });

        $opNext.addEventListener('click', function () {

            updateImage(slider.next());

        });

        $opStop.addEventListener('click', function () {

            if (self.intervalID) {
                self.intervalID = root.clearInterval(self.intervalID);
            }

        });

        $opPlay.addEventListener('click', function () {

            if (!self.intervalID) {
                self.intervalID = root.setInterval(updateImage, 2000);
            }

        });

        // UI Manipulation methods
        var updateImage = function() {

            $img.src = slider.next();

        }
    };

    root.UI = UI;

}(this || module.exports));
