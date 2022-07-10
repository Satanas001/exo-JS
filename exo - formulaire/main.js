'use strict' ;

const INVALID_FEEDBACK = 'invalid-feedback' ;

// Objectif : Contrôle du formulaire lors de la soumission ou lorsque l'utilisateur quitte le champ.

// Récupération du noeud <form>
let form = document.querySelector('[name=registration]') ;

// Ajoute une petite étoile sur les champs required
requiredSymbol() ;

// Contrôle du formulaire
// Lors de la soumission du formulaire
form.addEventListener('submit', event => {

    // Cette variable considère que le formulaire est valide avant les tests
    var isValid = true ;

    if (!checkFirstname()) {
        isValid = false ;
    }

    if (!checkLastname()) {
        isValid = false ;
    }

    if (!checkEMail()) {
        isValid = false ;
    }

    if (!checkPassword()) {
        isValid = false ;
    }

    if (!confirmPassword()) {
        isValid = false ;
    }
    
    // On stoppe la soumission du form
    if (!isValid) {
        event.preventDefault() ;
    }
}) ;

// Contrôle du champ "firstname" lorsque l'utilisateur quitte le champ
form.firstname.addEventListener('blur', checkFirstname) ;
form.lastname.addEventListener('blur', checkLastname) ;
form.email.addEventListener('blur', checkEMail) ;
form.plain_password.addEventListener('blur', checkPassword) ;
form.confirm_password.addEventListener('blur', confirmPassword) ;

// Fonctions

// Fonction de contrôle du champ "firstname"

/**
 * Check the firstname value and show error if it's not correct
 * @returns bool
 */
function checkFirstname() {
    // Récupération du noeud HTML
    let firstname = form.firstname ;
    
    // Suppression des messages d'erreur
    resetErrorMessage(firstname) ;

    // Contrôle de la donnée
    // Champ obligatoire
    if (firstname.required && firstname.value.length == 0) {
        showErrorMessage(firstname, 'Le prénom est obligatoire') ;
        return false ;
    }

    if (!firstname.value.match(/^[a-z]+$/i)) {
        showErrorMessage(firstname, 'Le prénom n\'est pas valide') ;
        
        return false ;
    }

    return true ;
}

// Fonction de contrôle du champ "lastname"
/**
 * Check the lastname value and show error if it's not correct
 * @returns bool
 */
function checkLastname() {
    let lastname = form.lastname ;

    // Suppression des messages d'erreur
    resetErrorMessage(lastname) ;

    // Contrôle de la donnée
    // Champ obligatoire
    if (lastname.required && lastname.value.length == 0) {
        showErrorMessage(lastname, 'Le NOM est obligatoire') ;
        return false ;
    }

    if (!lastname.value.match(/^[a-z]+$/i)) {
        showErrorMessage(lastname, 'Le NOM n\'est pas valide') ;
        return false ;
    }

    return true ;
}

function checkEMail() {
    let email = form.email ;

    // Suppression des messages d'erreur
    resetErrorMessage(email) ;
    
    // Contrôle de la donnée
    // Champ obligatoire
    if (email.required && email.value.length == 0) {
        showErrorMessage(email, 'Le mail est obligatoire') ;
        return false ;
    }

    if (!email.value.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/)) {
        showErrorMessage(email, 'Le mail n\'est pas valide') ;
        return false ;
    }

    return true ;
}

function checkPassword() {
    let plain_password = form.plain_password ;

    // Suppression des messages d'erreur
    resetErrorMessage(plain_password) ;
    
    // Contrôle de la donnée
    // Champ obligatoire
    if (plain_password.required && plain_password.value.length == 0) {
        showErrorMessage(plain_password, 'Le mot de passe est obligatoire') ;
        return false ;
    }

    if (!plain_password.value.match(/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[-+!*$@%_])([-+!*$@%_\w]{8,15})$/)) {
        showErrorMessage(plain_password, 'Le mot de passe doit comporter au moins une minuscule, une majuscule, un chiffre et un caractère spécial') ;
        return false ;
    }

    return true ;
}

function confirmPassword() {
    let plain_password = form.plain_password ;
    let confirm_password = form.confirm_password ;

    // Suppression des messages d'erreur
    resetErrorMessage(confirm_password) ;
    
    // Contrôle de la donnée
    // Champ obligatoire
    if (confirm_password.value != plain_password.value) {
        showErrorMessage(confirm_password, 'Les mots de passe ne sont pas identiques') ;
        return false ;
    }

    return true ;
}

/**
 * Generate the error message next the form field
 * @param {htmlnode} field 
 * @param {string} errorMessage 
 */
function showErrorMessage(field, errorMessage) {
    let error = document.createElement('div') ;
    error.classList.add(INVALID_FEEDBACK) ;
    error.innerText = errorMessage ;

    field.parentNode.appendChild(error) ;
}

/**
 * Delete the error message next the form field
 * @param {HtmlNode} field 
 */
function resetErrorMessage(field) {
    field.parentNode
        .querySelectorAll('.' + INVALID_FEEDBACK)
        .forEach(element => {
            element.remove() ;
        }) ;
}

/**
 * Set a star after the label on each required field
 */
function requiredSymbol() {
    let elements = form.querySelectorAll('[required]') ;

    elements.forEach(element => {
        let parent = element.parentNode ;
        let label = parent.getElementsByTagName('label') ;
        label = label[0] ;

        if (label) {
            label.classList.add('required') ;
        }
    }) ;
}