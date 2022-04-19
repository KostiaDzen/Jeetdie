// burger-menu
const menuButton = document.querySelector('.header__menu');
const menu = document.querySelector('.side-bar');

menuButton.addEventListener('click', function() {
    menu.classList.toggle('active');
    menuButton.classList.toggle('active')
})

// =============  <STAR> ============== 
const startWars = document.querySelector('.history');
// Sets the number of stars we wish to display
const numStars = 100;

// For every star we want to display
for (let i = 0; i < numStars; i++) {
    let star = document.createElement("div");  
    star.className = "star";
    var xy = getRandomPosition();
    star.style.top = xy[0] + 'px';
    star.style.left = xy[1] + 'px';
    startWars.append(star);
}

// Gets random x, y values based on the size of the container
function getRandomPosition() {  
    var y = startWars.clientWidth;
    var x = startWars.clientHeight;
    var randomX = Math.floor(Math.random()*x);
    var randomY = Math.floor(Math.random()*y);
    return [randomX,randomY];
}

// =============  <!STAR> ============== 

// adaptiv-foto 
function ibg(){
    let ibg = document.querySelectorAll('.ibg');
    for (var i = 0; i < ibg.length; i++) {
        if (ibg[i].querySelector('img')) {
            ibg[i].style.backgroundImage = 'url('+ibg[i].querySelector('img').getAttribute('src')+')';
        }
    }   
}

ibg();