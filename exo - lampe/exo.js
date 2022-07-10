'use strict' ;

var buttons = document.querySelectorAll('[data-switch]') ;
var light = document.querySelector('.light') ;

buttons.forEach(button => {
    button.addEventListener('click', switchTheLight);
});

function switchTheLight() {
    let status = this.dataset.switch ;
    
    if (status == 'on') {
        light.classList.add('on') ;
    }
    else if (status == 'off') {
        light.classList.remove('on') ;
    }
    else {
        light.classList.toggle('on') ;
    }
}