'use strict';

/**
 * Created by iVolume on 09.03.2017.
 */

document.addEventListener('DOMContentLoaded', function () {

    (function () {
        var qty = document.querySelectorAll('.qty');
        var decreaseEl = document.querySelectorAll('.decreaseBtn'),
            increaseEl = document.querySelectorAll('.increaseBtn');

        qty.forEach(function (current) {
            return current.value == '' ? current.value = 1 : current.value;
        });

        decreaseEl.forEach(function (current) {
            return current.addEventListener('click', decrease, false);
        });
        increaseEl.forEach(function (current) {
            return current.addEventListener('click', increase, false);
        });
        qty.forEach(function (current) {
            return current.addEventListener('keypress', qtyChange, false);
        });

        function decrease() {
            var qty = this.parentElement.querySelector('.qty');

            qty.value > 1 ? qty.value-- : qty.value = 1;
        }

        function increase() {
            var qty = this.parentElement.querySelector('.qty');

            qty.value++;
        }

        function qtyChange(event) {
            if (event.keyCode == 13) {

                var val = this.value;

                if (val == '' || isNaN(val) || val < 1) {
                    this.value = 1;
                    this.blur();
                }
            }
        }
    })();
});