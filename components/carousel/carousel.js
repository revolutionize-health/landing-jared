const carouselFrame = document.querySelector('.carousel-frame');
const carouselPics = document.querySelectorAll('.carousel-frame img');

//buttons
const nextBtn = document.querySelector('#nextBtn');
const prevBtn = document.querySelector('#prevBtn');

//counter

let counter = 1;
const size = carouselPics[0].clientWidth;

carouselFrame.style.transform = 'translateX(' + (-size * counter) +'px)';

//listeners

nextBtn.addEventListener('click', () =>{
    if (counter >= carouselPics.length - 1){
        return;
    }
    carouselFrame.style.transition = "transform 0.3s ease-in-out";
    counter++;
    carouselFrame.style.transform = 'translateX(' + (-size * counter) +'px)';
    /* TRY TRANSITION WITH ADDING / REMOVING CLASS */
});

prevBtn.addEventListener('click', () =>{
    if (counter <= 0){
        return;
    }
    carouselFrame.style.transition = "transform 0.3s ease-in-out";
    counter--;
    carouselFrame.style.transform = 'translateX(' + (-size * counter) +'px)';
    /* TRY TRANSITION WITH ADDING / REMOVING CLASS */
});

carouselFrame.addEventListener('transitionend', () =>{
    if (carouselPics[counter].id === 'firstPic2'){
        carouselFrame.style.transition = "none";
        counter = carouselPics.length - counter;
        carouselFrame.style.transform = 'translateX(' + (-size * counter) +'px)';
    }
    if (carouselPics[counter].id === 'lastPic2'){
        carouselFrame.style.transition = "none";
        counter = carouselPics.length - 2;
        carouselFrame.style.transform = 'translateX(' + (-size * counter) +'px)';
    }
});

