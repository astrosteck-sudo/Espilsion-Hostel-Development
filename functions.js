import { hostels } from "./hostel-data/hostel_data.js";

//THIS WILL A PARAMETER. AND FOR EACH IMAGE IN IT, IT WILL PUT THE IMAGE TYPE, URL INTO AN HTML LINE
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

//WITH THIS FOR EACH RULE, THE RULE IS PLACED IN AN HTML LINE
export function renderRulesAndRegulations(parameter) {
    let html = '';
        parameter.rules.forEach((rule) => {
        html += `
            <li class="special-font">${rule}</li>
        `
    })
    return html;
}

//WITH THIS FOR EACH AMENITIES, IT IS PLACED IN AN HTML LINE
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
// AND FOR EACH OBJECT HOSTEL OBJECT IN THE hostel DATA
// IT WIL CREATE THE HTML BELOW AND STORE IT IN 
// THE datahtml , WHICH WILL THEN BE PLACED IN hostelCards.INNHTML
export function renderHostelCards(parameter){
  const hostelCards = document.querySelector('.js-hostel-cards');
  let hostelHtml = '';
  parameter.forEach((hostel) => {
      hostelHtml += `
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
              <td rowspan="2" style="vertical-align: top;"><p id="hostel-price">$${hostel.pricing.priceMin}</p></td>
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
  });
  hostelCards.innerHTML = hostelHtml;
}

// Build HTML string with template literals
//THIS WILL STORE THE HOSTELS ID IN THE url parameter 
// THAT WILL BE SENT TO THE display_page.js
//THEN THE WINDOW WILL SWITCH TO THE DISPLAY HTML
export function renderDisplayDetailsPage(){
  document.querySelectorAll('.js-view-more-details').forEach((button) => {
    button.addEventListener('click', () => {
      const hostelId = button.dataset.hostelId;

      // console.log(hostelId);
      window.location.href = `http://127.0.0.1:5500/more-details/display_page.html?hostelId=${hostelId}`;
      // hostels.forEach((item) => {})
    });
  });
}




//THIS WILL TAKE THE BUTTON AND FILTER MENU FROM THE DOCUMENT , 
// WHEN THE BUTTON IS CLICKED IT TOOGLLES IT,AND ADDED OR REMOVES THE CLASS OF open 
export function renderfilter(){
  const filterMenu = document.querySelector('.js-filter');
  const filterButton = document.querySelector('.js-filter-image');
  filterButton.addEventListener('click', () => {
    filterMenu.classList.toggle('open');

    //this will check if the navLinks contains a class name active , if it does then it toggles it off
    const navLinks = document.querySelector('.navigation-links');
    if(navLinks.classList.contains('active')){
      console.log('Hamburger has active')
      navLinks.classList.toggle('active');
    }
  });
}



//THIS WILL TAKE THE HOSTEL NAME THE USER ENTERS IN THE INPUT BOX, 
// THEN LOOP THROUGH THE HOSTEL CARD DAT ANY HOSTEL WITH THE SAME NAME WILL BE DISPLAYED ON THE PAGE
export function renderHostelSearchByName(){
  const hostelCards = document.querySelector('.js-hostel-cards')
  const searchButton = document.querySelector('.search-icon');
  const searchInputArea = document.querySelector('#search-box-text');
  let userSearchInput = '';
  let searchedHostel = '';

  searchButton.addEventListener('click', () => {
    searchedHostel = '';
    userSearchInput = searchInputArea.value;

    //THIS WILL MAKE SURE NOTHING HAPPENS WHEN THE SEARCH BUTTON  
    // IS CLICKED AND THE USER DID NOT ENTER ANY HOSTEL NAME
    if(!userSearchInput){
      return;
    }
    hostels.forEach((hostel) => {
      if(hostel.name === userSearchInput){
        searchedHostel = `
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
                  <td rowspan="2" style="vertical-align: top;"><p id="hostel-price">$${hostel.pricing.priceMin}</p></td>
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
    })
    //THIS IS TO MAKE THE SITE FOOTER TO STICKS TO THE BOTTOM OF THE PAGE ONLY WHEN A HOSTEL SEARCHED BY NAME
    const siteFooter = document.querySelector('.site-footer');
    siteFooter.style.position = 'fixed';
    if (searchedHostel === '') {
      console.log(userSearchInput);
      hostelCards.innerHTML = `
        <div class="no-results">
          <p class="not-found-text">No Hostel Found With Name <span class="not-found-hostel-name">${userSearchInput}</span></p>
          <img src="icons/no-results.png" class="not-found-icon" alt="Sort">
        </div>
      `;
      console.log("No hostels matched the filter");
    } else {
      hostelCards.innerHTML = searchedHostel;
      renderDisplayDetailsPage();
    }

    // hostelCards.innerHTML = searchedHostel;
    // renderDisplayDetailsPage();
  })
}



export function renderSugestedTyping(){
  // Get references to the input box and the suggestions container
  const input = document.getElementById('search-box-text');
  const suggestionsDiv = document.getElementById('suggestions');

  // Listen for typing inside the input field
  input.addEventListener('input', function() {
      // Get the current value typed by the user, in lowercase (for case-insensitive search)
      const value = input.value.toLowerCase();

      // Clear out any old suggestions before adding new ones
      suggestionsDiv.innerHTML = '';
      
      // If the input is empty, hide the suggestions box and stop
      if (value.length === 0) {
          suggestionsDiv.style.display = 'none';
          return;
      }
      
      // Filter the HOSTEL array to only include hostels whose names contain the typed value
      const filtered = hostels.filter(hostel => 
          hostel.name.toLowerCase().includes(value)
      );
      
      // If we found matching hostels...
      if (filtered.length > 0) {
          // Loop through each matching hostel
          filtered.forEach(hostel => {
              // Create a new <div> element for the suggestion
              const div = document.createElement('div');
              div.className = 'suggestion-item'; // add a CSS class for styling
              div.textContent = hostel.name;     // show the hostel name as text

              // When the user clicks this suggestion:
              div.onclick = () => {
                  input.value = hostel.name;          // fill the input with the clicked name
                  suggestionsDiv.style.display = 'none'; // hide the suggestions box
              };

              // Add this suggestion <div> into the suggestions container
              suggestionsDiv.appendChild(div);
          });

          // Show the suggestions box since we have results
          suggestionsDiv.style.display = 'block';
      } else {
          // If no matches, hide the suggestions box
          suggestionsDiv.style.display = 'none';
      }
  });

  // Hide suggestions when clicking anywhere outside the search container
  document.addEventListener('click', function(e) {
      // If the click target is NOT inside an element with class "search-container"
      if (!e.target.closest('.search-container')) {
          suggestionsDiv.style.display = 'none'; // hide the suggestions box
      }
  });
}



//THIS WILL LOOP THROUGH ALL THE ELEMENTS WITH A CLASS OF 
// .gender-buttons, IF ANT OF THEM IS CLICKED IT GETS THIER DATASET VALUE AND PUTS IT IN THE 
//VARIABLE NAMED GENDER. WHEN THE SEARCH BUTTON IS CLICKED , 
// LOOP THROUGH ALL THE HOSTELS IN THE HOSTEL DATA AND ANY OF THEM THAT HAS THE 
// SAME GENDER TYPE AS THE GENDER IN THE GENDER VARIABLE , 
// IT PUTS THEM IN THE hostelCard AND DISPLAYS IT ON THE PAGE
export function renderHostelSearch(){
  const genderButtons = document.querySelectorAll('.gender-button');
  const filterMenu = document.querySelector('.js-filter');
  const closeButton = document.querySelector('.js-close-button');
  const searchButton = document.querySelector('.js-search-box');
  const hostelCards = document.querySelector('.js-hostel-cards');
  const searchWord = document.querySelector('.js-search-box-text');

  let gender = '';
  genderButtons.forEach((button) => {
    button.addEventListener('click', () => {
      const buttonName = button.dataset.genderName;
      gender = buttonName;
      searchWord.textContent = gender;
      console.log(gender)
    });
  });
  
  
  closeButton.addEventListener('click', () => {
    filterMenu.classList.toggle('open')
  });
  //THIS CHECKS IF THE filterMenu CONTAINS A CLASS NAME active , IF IT DOES THEN IT TOGGLES IT OFF 
  hostelCards.addEventListener('click', () => {
    if(filterMenu.classList.contains('open')){
      filterMenu.classList.toggle('open');
    }
  })

  searchButton.addEventListener('click', () => {

    // const minUserPrice = document.querySelector('.js-min-price-input').value;
    // const maxUserPrice = document.querySelector('.js-max-price-input').value;
    let minUserPrice = 0;
    let maxUserPrice = 0;

    minUserPrice = Number(document.querySelector('.js-min-price-input').value);
    maxUserPrice = Number(document.querySelector('.js-max-price-input').value);
    //THIS WILL SWITCH THE VALUE WHEN THE minUserPrice IS GREATOR THAN THE maxUserPrice
    if(minUserPrice > maxUserPrice){
      [minUserPrice, maxUserPrice] =[maxUserPrice, minUserPrice]
    }
    
    //console.log(hostel.type)

    //THIS WILL MAKE THE CODE EXIT EARLY IF THE USER DIDN'T SELECT ANY OPTION
    if(!gender && maxUserPrice === 0 && minUserPrice === 0){
      filterMenu.classList.toggle('open');
      return;
    }
    //THIS WILL CLOSE THE FILTER MENU WHEN THE SEARCH BUTTON IS CLICKED
    if(filterMenu.classList.contains('open')){
      filterMenu.classList.toggle('open');
    }
    
    let hostelFilteredData = '';
    hostels.forEach((hostel) => { 

      //THIS CHECKS IF THERE ARE VALUES IN THE gender , minUserPrice , 
      // AND maxUserPrice VARIABLE. IF THERE ARE THEN IT WILL 
      // RUN THE CODE BELOW IT IF NOT THE else if CODE WILL BE RUN
      if(gender && minUserPrice && maxUserPrice){
        if(hostel.type === gender && hostel.pricing.priceMin >= minUserPrice && hostel.pricing.priceMin <= maxUserPrice){
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
                    <td rowspan="2" style="vertical-align: top;"><p id="hostel-price">$${hostel.pricing.priceMin}</p></td>
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
      }else if(hostel.type === gender || hostel.pricing.priceMin >= minUserPrice && hostel.pricing.priceMin <= maxUserPrice){
      // hostelFilteredData = '';
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
                <td rowspan="2" style="vertical-align: top;"><p id="hostel-price">$${hostel.pricing.priceMin}</p></td>
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
    if (hostelFilteredData === '') {
      //THIS IS TO MAKE THE SITE FOOTER TO STICKS TO THE BOTTOM OF THE PAGE ONLY WHEN A HOSTEL SEARCHED BY NAME
      const siteFooter = document.querySelector('.site-footer');
      siteFooter.style.position = 'fixed';
      hostelCards.innerHTML = `
        <div class="no-results">
          <p class="not-found-text">No Hostel Found</p>
          <img src="icons/no-results.png" class="not-found-icon" alt="Sort">
        </div>
      `;
      console.log("No hostels matched the filter");
    } else {
      hostelCards.innerHTML = hostelFilteredData;
      renderDisplayDetailsPage();
    }
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

















//CODE UPDATE FOR THE FILTER 
/*
hostelCardData.forEach((hostel) => {
  const genderOk = !gender || hostel.type === gender;
  const priceOk = (!minUserPrice && !maxUserPrice) || 
                  (hostel.price >= minUserPrice && hostel.price <= maxUserPrice);

  if (genderOk && priceOk) {
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
          <tr>
              <td colspan="2"><p id="hostel-name">${hostel.name}</p></td>
              <td rowspan="2"><p id="hostel-price">$${hostel.price}</p></td>
          </tr>
          <tr>
            <td colspan="2"><p id="hostel-distace">${hostel.distance}</p></td>
          </tr>
          <tr>
            <td colspan="3"><p id="hostel-perks">${hostel.hostelPerks}</p></td>
          </tr>
        </table>
        <button class="view-more-details js-view-more-details" data-hostel-id="${hostel.id}">View Details</button>
      </div>
    `;
  }
});

*/