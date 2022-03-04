const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */
const imagens = ['pic1.jpg', 'pic2.jpg','pic3.jpg','pic4.jpg', 'pic5.jpg']

/* Looping through images */
for(let i = 1; i <= imagens.length; i++){
    const newImage = document.createElement('img');
    newImage.setAttribute('src', `images/pic${i}.jpg`);
    thumbBar.appendChild(newImage);
    newImage.addEventListener('click', function(e) {
        displayedImage.setAttribute('src', e.target.getAttribute('src'));
    })
}

/* Wiring up the Darken/Lighten button */

btn.addEventListener('click', function() {
    btn.getAttribute('class')
    if(btn.getAttribute('class') === 'dark'){
        btn.setAttribute('class', 'light')
        btn.textContent = 'Lighten'
        overlay.style.backgroundColor = 'rgba(0,0,0,0.5)';
    }else if(btn.getAttribute('class') != 'dark') {
        btn.setAttribute('class', 'dark')
        btn.textContent = 'Darken'
        overlay.style.backgroundColor = 'rgba(0,0,0,0)';
    }
    
})