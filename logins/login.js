import { hostels } from "../hostel-data/hostel_data.js";

//THIS DISPLAYS THE CURRENT IMAGE, THEN INCREASES THE INDEX BY ONE,
//  THEN CHECKS IF THE INDEX IS GREATOR THAN THE LENGTH OF THE ARRAY 
// OF IMGES IF SO IT SETS THE INDEX BACK TO 0 AND STARTS AGAIN
let index = 0;
setInterval(() => {
  document.body.style.backgroundImage = `url(${hostels[index].image})`;
  index++;
  if (index >= hostels.length) {
    index = 0; // loop back to the first image
  }
}, 6000); // change every 6 seconds


//THIS IS FOR THE HAMBURGER BUTTON
const hamburger = document.querySelector('.hamburger-button');
const navLinks = document.querySelector('.navigation-links');

//THIS TOGGLES THE HAMBURGER BUTTON ON AND OFF
hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

const form = document.querySelector('form');
form.addEventListener('click', () => {
  if(navLinks.classList.contains('active')){
    navLinks.classList.toggle('active');
  }
})


//THIS TOGGLES THE EYE BETWEEN OPEN AND CLOSE TO SHOW AND HIDE THE PASSWORD
const eyeImage = document.querySelector('#toggle-eye');
const input = document.querySelector('#user-password');
eyeImage.addEventListener('click', () => {
    if(input.type === 'password'){
        eyeImage.src = '../icons/visible.png';
        input.type = 'text';
    }else{
        input.type = 'password';
        eyeImage.src = '../icons/closed-eyes.png';
        // eyeToggle = 'closed';
    }
    
})