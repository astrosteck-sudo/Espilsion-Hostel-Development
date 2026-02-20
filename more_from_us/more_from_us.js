import { projects } from "./projects.js";

//THIS IS FOR THE HAMBURGER BUTTON
const hamburger = document.querySelector('.hamburger-button');
const navLinks = document.querySelector('.navigation-links');

//THIS TOGGLES THE HAMBURGER BUTTON ON AND OFF
hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active');

});


// //THIS CHECKS IF THE navLinks CONTAINS A CLASS NAME active , IF IT DOES THEN IT TOGGLES IT OFF  
// //WHEN ANY PART OF THE HOSTEL CARD IS CLICKED
const moreFromUsSection = document.querySelector('.js-more-from-us-section');
moreFromUsSection.addEventListener('click', () => {
  if(navLinks.classList.contains('active')){
    navLinks.classList.toggle('active');
  }
})

const projectsCards = document.querySelector('.projects-cards');
let projectsHtml = '';
projects.forEach((project) => {
    projectsHtml += `
        <div class="project-card">
            <h2 class="project-heading">${project.Name}</h2>
            <p class="project-description">${project.Role}</p>
            <div class="project-info"><span><span style="color: green; font-weight: bold;"> Status:</span> ${project.StatusComplete === true ? 'Complete' : 'In Progress'}</span> <a href="${project.Link}" style="text-decoration: none;">Click Here</a></div>    
        </div>
    `
})

projectsCards.innerHTML = projectsHtml

const video = document.querySelector('.js-video-background');
video.playbackRate = 0.5