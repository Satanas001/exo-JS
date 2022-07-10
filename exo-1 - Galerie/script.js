var images = [
    {filename: 'ninja.jpg', title: 'Ninja' },
    {filename: 'censord.jpg', title: 'Censored' },
    {filename: 'edward_kenway.jpg', title: 'Edward Kenway' },
    {filename: 'female_borg.jpg', title: 'Female Cyborg' },
    {filename: 'zombie_claus.jpg', title: 'Zombie Claus © Kerem Beyit' },
    {filename: 'kermit.jpg', title: 'Kermit la Grenouille' },
    {filename: 'baby_girl.jpg', title: 'BabyGirl © Taha Alkan' },
] ;

var thumbnails = document.querySelector('.thumbnails') ;
var image = document.querySelector('.display') ;


for (let i = 0 ; i < images.length ; i++) {
    let newImage = document.createElement('img') ;
    newImage.setAttribute('src', 'images/' + images[i].filename) ;
    newImage.setAttribute('alt', images[i].title) ;
    newImage.setAttribute('title', images[i].title) ;
    newImage.setAttribute('data-noImage', i) ;
    thumbnails.appendChild(newImage) ;
    newImage.addEventListener('click', setImage) ;
}

var thumbs = document.querySelectorAll('.thumbnails img') ;

function setImage() {
    
    thumbs.forEach(element => {
        element.classList.remove('selected') ;
    })

    this.classList.add('selected') ;
    image.style.backgroundImage = 'url(images/' + images[parseInt(this.dataset.noimage)].filename + ')' ;
} 