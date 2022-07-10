var texteOrigine = document.getElementById('origine') ;
var texteDestination = document.getElementById('destination') ;

texteOrigine.addEventListener('keyup', () => {
    texteDestination.value = texteOrigine.value ;
})