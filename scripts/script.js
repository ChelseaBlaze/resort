//IMAGE SLIDER

function carousel() {


const carouselSlide = document.querySelector('.carousel-slide');
const carouselImages = document.querySelectorAll('.carousel-slide img');
console.log(carouselImages)


//Buttons
const prevBtn = document.querySelector('#prevBtn');
const nextBtn = document.querySelector('#nextBtn');


//Counter - keeps track of which image user is on
let counter = 1;
const size = 100; //tells the slider how far to slide using the image width. 
//const size = carouselImages[0].clientWidth;

carouselSlide.style.transform = 'translateX(' + (-size * counter) + '%)'; //The math makes the slider start on the beach image (original first) rather than the clone of the last, which is technically image 0


//Button listeners
nextBtn.addEventListener('click', () => {
    if (counter >= carouselImages.length - 1) return; 
    //understand this better
    carouselSlide.style.transition = "transform 0.4s ease-in-out"; //transition effect
    counter++; //add 1, go to next image 
    carouselSlide.style.transform = 'translateX(' + (-size * counter) + '%)';

});

prevBtn.addEventListener('click', () => {
  if (counter <= 0) return; // understand this better
  carouselSlide.style.transition = "transform 0.4s ease-in-out"; //transition effect
  counter--; //subtract 1, go to prev image 
  carouselSlide.style.transform = 'translateX(' + (-size * counter) + '%)';

});

//This event listener stops the transition and translates back to the original picture
carouselSlide.addEventListener('transitionend', () => {
        console.log('Fired');
    if (carouselImages[counter].id === 'lastClone'){
        carouselSlide.style.transition = 'none'; //none makes the "jump" back to the original look better by taking away the transition. Or else it jumps back, not nice on the eyes
        counter = carouselImages.length - 2;
        carouselSlide.style.transform = 'translateX(' + (-size * counter) + '%)';
    }
    if (carouselImages[counter].id === 'firstClone'){
      carouselSlide.style.transition = 'none'; //none makes the "jump" back to the original look better by taking away the transition. Or else it jumps back, not nice on the eyes
      counter = carouselImages.length - counter;
      carouselSlide.style.transform = 'translateX(' + (-size * counter) + '%)';
  }
})
}



//HAMBURGER MENU

//Declaring variables for Hamburger menu
  const menuBtn = document.querySelector('.hamburger');
  const mobile_menu = document.querySelector('.mobile-nav');

//Event listener waiting for click 
  menuBtn.addEventListener('click', function() {
    menuBtn.classList.toggle('is-active');
    mobile_menu.classList.toggle('is-active');
  });

