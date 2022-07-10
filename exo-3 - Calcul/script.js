var inputNumber = document.getElementById('nombre') ;

inputNumber.addEventListener('keyup', () => {
    let n = parseInt(inputNumber.value) ;
    
    if (isNaN(n)) n = 0 ;
    let n2 = n**2 ;
    let n3 = n**3 ;
    
    
    document.getElementById('calcNombre').innerText = n ;
    document.getElementById('calcCarre').innerText = n2 ;
    document.getElementById('calcCube').innerText = n3 ;
})