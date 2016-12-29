(function (root) {
    'use strict';

    /**
     * @constructor
     */
    function Slider() {

        var images = [];
        var index = 0;
        var path = 'images/';
        var playback = false;
        var interval;

        var setImages = function (arrImages) {
            images = arrImages;
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

        return {
            previous: previous,
            next: next,
            images: images,
            setImages: setImages,
            imageCount: imageCount
        }
    }

    root.Slider = Slider;

}(this || module.exports));
