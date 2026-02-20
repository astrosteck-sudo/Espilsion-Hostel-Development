//import { hostelCardData } from "./hostel-data/hostel_card_data.js";
import { hostels } from "./hostel-data/hostel_data.js";
import { renderHostelCards, renderDisplayDetailsPage, renderfilter, renderHostelSearchByName, renderSugestedTyping, renderHostelSearch } from "./functions.js";


renderHostelCards(hostels);
renderDisplayDetailsPage();
renderfilter();
renderHostelSearch();
renderHostelSearchByName();
renderSugestedTyping();


//THIS IS FOR THE HAMBURGER BUTTON
const hamburger = document.querySelector('.hamburger-button');
const navLinks = document.querySelector('.navigation-links');

//THIS TOGGLES THE HAMBURGER BUTTON ON AND OFF
hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active');

  //this will check if the filterMenu contains a class name open , if it does then it toggles it off
  const filterMenu = document.querySelector('.js-filter');
  if(filterMenu.classList.contains('open')){
    filterMenu.classList.toggle('open');
  }
});


// // Hide suggestions when clicking anywhere outside the search container
//   const filterMenu = document.querySelector('.js-filter')
//     document.addEventListener('click', (e) => {
//         // If the click target is NOT inside an element with class "search-container"
//         if (!e.target.closest('.js-filter')) {
//             // suggestionsDiv.style.display = 'none'; // hide the suggestions box
//             filterMenu.classList.toggle('open');
            
//         }
//     });

// //THIS CHECKS IF THE navLinks CONTAINS A CLASS NAME active , IF IT DOES THEN IT TOGGLES IT OFF  
// //WHEN ANY PART OF THE HOSTEL CARD IS CLICKED
const hostelCards = document.querySelector('.js-hostel-cards');
hostelCards.addEventListener('click', () => {
  if(navLinks.classList.contains('active')){
    navLinks.classList.toggle('active');
  }
})

//THIS IS FOR THE SMOOTH RELOAD OF THE NAVIGATION BAR
// Create a GSAP timeline
let tl = gsap.timeline();

// Animate the nav element
tl.from("#episilion", {
  y: -100,
  duration: 0.2,
  opacity: 0,
  stagger: 0.2,
  ease: "power2.out"
});

// Animate the logo and nav links
tl.from("a", {
  y: -20,
  opacity: 0,
  duration: 1,
  stagger: 0.2,
  ease: "back.out(1.7)"
});
