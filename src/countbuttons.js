/**
 * Created by iVolume on 09.03.2017.
 */

document.addEventListener('DOMContentLoaded', () => {

    (() => {
        let qty = document.querySelectorAll('.qty');
        let decreaseEl = document.querySelectorAll('.decreaseBtn'),
            increaseEl = document.querySelectorAll('.increaseBtn');

        qty.forEach( (current) => current.value == '' ? current.value = 1 : current.value);

        decreaseEl.forEach( (current) => current.addEventListener('click', decrease, false));
        increaseEl.forEach( (current) => current.addEventListener('click', increase, false));
        qty.forEach( (current) => current.addEventListener('keypress', qtyChange, false));

        function decrease(){
            let qty = this.parentElement.querySelector('.qty');

            qty.value > 1 ? qty.value-- : qty.value = 1;
        }

        function increase() {
            let qty = this.parentElement.querySelector('.qty');

            qty.value++;
        }

        function qtyChange(event) {
            if( event.keyCode == 13 ){

                let val = this.value;

                if(val == '' || isNaN(val) || val < 1){
                    this.value = 1;
                    this.blur();
                }
            }
        }

    })();
});