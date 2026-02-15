import { teamMembers } from "./team-Members_data.js";

const hamburger = document.querySelector('.hamburger-button');
const navLinks = document.querySelector('.navigation-links');

//THIS TOGGLES THE HAMBURGER BUTTON ON AND OFF
hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});


const mainElement = document.querySelector('main');
mainElement.addEventListener('click', () => {
  if(navLinks.classList.contains('active')){
    navLinks.classList.toggle('active');
  }
})

const teamCards = document.querySelector('.team-cards');
let teamCardHtml = '';
teamMembers.forEach((member) => {
  teamCardHtml += `
      <div class="team-card">  
        <table>
            <tr>
                <th>
                    <div class="team-member-image">
                        <img src="${member.memberPicture}">
                    </div>
                </th>
            </tr>
            <tr>
                <td>
                    <h4>${member.memberName}</h4>
                </td>
            </tr>
            <tr>
                <td>
                    <p class="member-position-text">${member.memberPosition}</p>
                </td>
            </tr>
            <tr>
                <td><p class="member-role-text">${member.memberRole}.</p></td>
            </tr>
        </table>
      </div>
  `
})

teamCards.innerHTML = teamCardHtml;



