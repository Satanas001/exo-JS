var zone = document.querySelector('.area') ;
var littleBox = document.querySelector('.square') ;

window.addEventListener('wheel', (event) => {
    let move = event.wheelDeltaY * .5 ;
    if ((littleBox.offsetLeft - move) >= 0 && (littleBox.offsetLeft - move) <= (zone.clientWidth - littleBox.clientWidth) )
    {
        let newLeft = littleBox.offsetLeft - move ;
        littleBox.style.left = newLeft + 'px' ;
    }
})