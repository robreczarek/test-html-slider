(function (root) {
    'use strict';

    /**
     * @constructor
     */
    function Slider() {

        var images = [];
        var debug = false;
        var index = 0;
        var path = 'images/';
        var playback = false;

        var setImages = function (arrImages) {
            images = arrImages;
            printDebug();
        };

        var imageCount = function() {
            return images.length;
        };

        var previous = function () {

            if (index == 0) {
                index = imageCount() - 1;
            } else {
                index -= 1;
            }

            return path + images[index];

        };

        var next = function () {

            if (index == imageCount() - 1) {
                index = 0;
            } else {
                index += 1;
            }

            return path + images[index];

        };

        var pause = function () {

        };

        var stop = function () {

        };

        var play = function () {

        };

        var printDebug = function () {

            if (debug) {
                console.log('---------------------------');
                console.log('images' + images);
                console.log('---------------------------');
            }

        };

        return {
            previous: previous,
            next: next,
            stop: stop,
            pause: pause,
            play: play,
            images: images,
            debug: debug,
            printDebug: printDebug,
            setImages: setImages,
            imageCount: imageCount
        }
    }

    root.Slider = Slider;

}(this || module.exports));
