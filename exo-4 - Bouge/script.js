var bouge = document.getElementById('btnBouge') ;
var littleBox = document.querySelector('.square') ;

bouge.addEventListener('click', () => {
    console.log('début', littleBox.offsetLeft, littleBox.offsetTop);

    if (littleBox.offsetLeft == 0) {
        if (littleBox.offsetTop == 0) {
            littleBox.style.top = '100px' ;
        }
        else {
            littleBox.style.left = '100px' ;
        }
    }
    else {
        if (littleBox.offsetTop == 0) {
            littleBox.style.left = '0' ;
        }
        else {
            littleBox.style.top = '0' ;
        }
    }
    
    console.log('Fin', littleBox.offsetLeft, littleBox.offsetTop);
}) ;