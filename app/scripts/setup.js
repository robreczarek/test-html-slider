(function (root) {
    'use strict';

    function bootstrap() {

        var libslider = root.Slider();
        libslider.setImages([
            '001.jpg',
            '002.jpg',
            '003.jpg',
            '004.jpg',
            '005.jpg',
            '006.jpg',
            '007.jpg'
        ]);

        var ui = new root.UI();
        ui.setup(libslider);
    }

    root.addEventListener('load', bootstrap);

}(this || module.exports));
