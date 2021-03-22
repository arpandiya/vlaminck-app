

// const slideImage =  document.querySelector('.image_slide');
//     const imgSrc =  slideImage.src = '/images/slider' + randomNum + '.jpg';

//     console.log(imgSrc);
const reviews = [
    {star: '★★☆☆☆', comment: 'That was awesome 2 comment', source: 'Amazon'},
    {star: '★★★☆☆', comment: 'That was awesome 3 comment', source: 'AWS'},
    {star: '★★★★☆', comment: 'That was awesome 4 comment', source: 'trip advisor'},
    {star: '★★★★★', comment: 'That was awesome 5th comment', source: 'facebook'},
];

const comment = document.querySelector('.reviews__content > h6 > q > i');
const stars = document.querySelector('.reviews__content > h1');
const source = document.querySelector('.reviews__content > h5');

setInterval(() => {
    const randomNum = Math.floor(Math.random() * 4) + 1;
    const slideImage = document.querySelector('.image_slide');
    const imgSrc =  slideImage.src = '/images/slider' + randomNum + '.jpg';
    
stars.innerHTML = reviews[randomNum].star;
comment.innerHTML = reviews[randomNum].comment;
source.innerHTML = reviews[randomNum].source;
}, 6000);

 

const hamburger = document.querySelector('.hamburger');
hamburger.addEventListener('click', ()=> {
  const navItems = document.querySelector('.nav__items');
const test =  navItems.classList.toggle('mobile__items');

});


// // When the user scrolls the page, execute myFunction
// window.onscroll = function() {myFunction()};

// // Get the navbar
// var navbar = document.querySelector(".menu__filter");

// // Get the offset position of the navbar
// var sticky = navbar.offsetTop;

// // Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
// function myFunction() {
//   if (window.pageYOffset >= sticky) {
//     navbar.classList.add("sticky")
//   } else {
//     navbar.classList.remove("sticky");
//   }
// }




