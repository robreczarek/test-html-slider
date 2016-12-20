(function (root) {
    'use strict';

    /**
     * @param {number} [val=0]
     * @constructor
     */
    function Slider() {

        var images = [];

        var setImages = function (arrImages) {
            images = arrImages;
        };

        var previous = function () {

        };

        var next = function (val) {

        };

        var pause = function (val) {

        };

        var stop = function (val) {

        };

        var play = function (val) {

        };

        var printDebug = function () {

            if (debug) {
                console.log('---------------------------');
            }

            return this;
        };

        return {
            previous: previous,
            next: next,
            stop: stop,
            pause: pause,
            play: play,
            images: images
        }
    }

    root.Slider = Slider;

}(this || module.exports));
