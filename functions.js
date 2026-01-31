import { hostelCardData } from "./hostel-data/hostel_card_data.js";

export function renderRoomMedia(parameter) {
    let html = '';
    parameter.media.images.forEach((image) => {
    html += `
        <div class="hostel-room-type-image">
            <a href="${image.url}">
                <img class="hostel-room" src="${image.url}" alt="${image.type}">
            </a>
            <div class="hostel-room-type-overlay">
                <span class="hostel-room-type-overlay-text">${image.type}</span>
            </div>
        </div>
    `;
    })
    return html;
}
export function renderRulesAndRegulations(parameter) {
    let html = '';
        parameter.rules.forEach((rule) => {
        html += `
            <li class="special-font">${rule}</li>
        `
    })
    return html;
}

export function renderFacilitiesAndAmeneties(parameter){
    let html = '';
    parameter.amenities.forEach((amenity) => {
        html += `
            <li class="special-font">${amenity}</li>
        `;
    })
    return html;
}

export function renderRoomFunish(parameter) {
    let html = '';
    parameter.rooms.furnishing.forEach((funish) => {
        html += `
            <li class="special-font">${funish}</li>
        `
    });
    return html;
}

export function renderRoomTypes(parameter) {
  let html = '';
    parameter.rooms.types.forEach((object) => {
        html += `
            <li class="special-font">
                ${object.type}
                <p> Price (${object.price})</p>
            </li>
            `;
    });
    return html;
};


//THIS WILL TAKE THE CLASS OF js_hostel_cards 
// AND FOR EACH OBJECT CARD IN hostelCardData  
// IT WIL CREATE THE HTML BELOW AND STORE IT IN 
// THE datahtml , WHICH WILL THEN BE PLACED IN hostelCards.INNHTML
export function renderHostelCards(parameter){
  const hostelCards = document.querySelector('.js-hostel-cards');
  let hostelHtml = '';
  hostelCardData.forEach((parameter) => {
      hostelHtml += `
      <div class="hostel-card">
        <div class="image-container">
            <img id="hostel-card-image" src="${parameter.image}" alt="hostel-image">
            <div class="overlay">
              <span class="overlay-text">${parameter.reviews.averageRating}(${parameter.reviews.totalReviews})</span><br>
            </div>
            <div class="hostel-type-text">
              <span class="overlay-text-hostel-type">${parameter.type}</span>
            </div>
        </div>
        <table border="0" width="100%">
          <tr width="20px">
              <td colspan="2" style="vertical-align: top;"><p id="hostel-name">${parameter.name}</p></td>
              <td rowspan="2" style="vertical-align: top;"><p id="hostel-price">${parameter.price}</p></td>
          </tr>
          <tr width="20px">
            <td colspan="2" style="vertical-align: top;"><p id="hostel-distace">${parameter.distance}</p></td>
          </tr>
          <tr>
            <td colspan="3"><p id="hostel-perks">${parameter.hostelPerks}</p></td>
          </tr>
        </table>
        <td colspan="3"><button class="view-more-details js-view-more-details" data-hostel-id="${parameter.id}">View Details</button></td> 
      </div>
      `
  });
  hostelCards.innerHTML = hostelHtml;
}

// Build HTML string with template literals
//THIS WILL STORE THE HOSTELS ID IN THE url parameter 
// THAT WILL BE SENT TO THE display_page.js
export function renderDisplayDetailsPage(){
  document.querySelectorAll('.js-view-more-details').forEach((button) => {
    button.addEventListener('click', () => {
      const hostelId = button.dataset.hostelId;

      console.log(hostelId);
      window.location.href = `http://127.0.0.1:5500/display_page.html?hostelId=${hostelId}`;
      // hostels.forEach((item) => {})
    });
  });
}




//THIS WILL TAKE THE BUTTON AND FILTET MENU FROM THE DOCUMENT , 
// WHEN THE BUTTON IS CLICKED IT TOOGLLES IT,AND ADDED OR REMOVES THE CLASS OF open 
export function renderfilter(){
  const filterMenu = document.querySelector('.js-filter');
  const filterButton = document.querySelector('.js-filter-image');
  filterButton.addEventListener('click', () => {
    console.log('Filter Button has Been clicked');
    filterMenu.classList.toggle('open');
    console.log(filterMenu.classList.contains('open'));
    console.log(filterMenu.classList);
  });
}

//THIS WILL LOOP THROUGH ALL THE ELEMENTS WITH A CLASS OF 
// .gender-buttons, IF ANT OF THEM IS CLICKED IT GETS THIER DATASET VALUE AND PUTS IT IN THE 
//VARIABLE NAMED GENDER. WHEN THE SEARCH BUTTON IS CLICKED , 
// LOOP THROUGH ALL THE CARDS IN THE HOSTEL CARDS DATA AND ANY OF THEM THAT HAS THE 
// SAME GENDER TYPE AS THE GENDER IN THE GENDER VARIABLE , 
// IT PUTS THEM IN THE hostelCard AND DISPLAYS IT ON THE PAGE
export function renderHostelSearch(){
  const genderButtons = document.querySelectorAll('.gender-button');
  let gender = '';
  genderButtons.forEach((button) => {
    // console.log(button);
    button.addEventListener('click', () => {
      console.log('Gender Button Has Been CLicked')
      const buttonName = button.dataset.genderName;
      gender = buttonName;
      // console.log('Gender', gender);
      // console.log(gender);
    });
  });
  const searchButton = document.querySelector('.js-search-box');
  searchButton.addEventListener('click', () => {
    const filterMenu = document.querySelector('.js-filter');

    //THIS WILL MAKE THE CODE EXIT EARLY IF THE USER DIDN'T SELECT ANY GENDER
    if(gender === ''){
      filterMenu.classList.toggle('open');
      return;

    }
    console.log('Search Button Has Been Clicked', 'Gender: ', gender);
    
    if(filterMenu.classList.contains('open')){
      filterMenu.classList.toggle('open');
    }
    
    
    const hostelCards = document.querySelector('.js-hostel-cards');
    let hostelFilteredData = '';
    hostelCardData.forEach((hostel) => {
      if(hostel.type === gender){
      hostelFilteredData += `
        <div class="hostel-card">
          <div class="image-container">
              <img id="hostel-card-image" src="${hostel.image}" alt="hostel-image">
              <div class="overlay">
                <span class="overlay-text">${hostel.reviews.averageRating}(${hostel.reviews.totalReviews})</span><br>
              </div>
              <div class="hostel-type-text">
                <span class="overlay-text-hostel-type">${hostel.type}</span>
              </div>
          </div>
          <table border="0" width="100%">
            <tr width="20px">
                <td colspan="2" style="vertical-align: top;"><p id="hostel-name">${hostel.name}</p></td>
                <td rowspan="2" style="vertical-align: top;"><p id="hostel-price">${hostel.price}</p></td>
            </tr>
            <tr width="20px">
              <td colspan="2" style="vertical-align: top;"><p id="hostel-distace">${hostel.distance}</p></td>
            </tr>
            <tr>
              <td colspan="3"><p id="hostel-perks">${hostel.hostelPerks}</p></td>
            </tr>
          </table>
          <td colspan="3"><button class="view-more-details js-view-more-details" data-hostel-id="${hostel.id}">View Details</button></td> 
        </div>
        ` 
      }
    });
    hostelCards.innerHTML = hostelFilteredData;
    renderDisplayDetailsPage();
  });
}





/*

<div class="hostel-room-type-image">
            <a href="${image.url}">
                <img class="hostel-room" src="${image.url}" alt="${image.type}">
            </a>
            <div class="overlay">
                <span class="hostel-room-type-overlay-text"></span>
            </div>
        </div>


<div class="hostel-image-card">
                <img src="" alt="">
                <div class="overlay">
                    <span class="overlay-text"></span>
                </div>
            </div>

        <div class="hostel-room-type-image">
            <img class="hostel-room" src="${image.url}" alt="${image.type}">
            <div class="overlay">
                <span class="overlay-text">room</span>
            </div>
        </div>

        <a href="${image.url}">
            <img class="hostel-room" src="${image.url}" alt="${image.type}">
        </a>
 */
