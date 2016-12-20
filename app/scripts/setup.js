(function (root) {
    'use strict';

    function bootstrap() {

        var slider = root.Slider();
        //set to true if you wish to follow values in the console
        slider.debug = true;
        slider.setImages([
            '001.jpg',
            '002.jpg',
            '003.jpg',
            '004.jpg',
            '005.jpg',
            '006.jpg',
            '007.jpg'
        ]);

        var ui = new root.UI();
        ui.setup(slider);

        slider.play();
    }

    root.addEventListener('load', bootstrap);

}(this || module.exports));
