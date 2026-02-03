import { hostelCardData } from "./hostel-data/hostel_card_data.js";
import { renderHostelCards, renderDisplayDetailsPage, renderfilter, renderHostelSearch } from "./functions.js";


renderHostelCards(hostelCardData);
renderDisplayDetailsPage();
renderfilter();
renderHostelSearch();
//renderfilter();
//renderFilteredHostelDataByGender();


//THIS IS FOR THE HAMBURGER BUTTON
const hamburger = document.querySelector('.hamburger-button');
const navLinks = document.querySelector('.navigation-links');

//THIS TOGGLES THE HAMBURGER BUTTON ON AND OFF
hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// const hostCardSection = document.querySelector('.js-hostel-cards');
// console.log(hostCardSection);
// hostCardSection.addEventListener('click', () => {
//   console.log("Hostel Card Section Has Been CLicked")
//   const filterMenu = document.querySelector('.js-filter');
//   console.log(filterMenu.classList)
// })

// document.addEventListener("click", () => {
//   console.log("Document Has Been Clicked")
//   if(filterMenu.classList.contains('open')){
//     filterMenu.classList.toggle('open');
//   }
//   });

  // Optional: close menu when clicking a link inside
  // mobileNav.querySelectorAll("a").forEach(link => {
  //   link.addEventListener("click", () => {
  //     mobileNav.classList.remove("open");
  //   });
  // });

  




  // document.addEventListener('click', (event) => {
  //   if (!filterMenu.contains(event.target) && !filterButton.contains(event.target)) {
  //     filterMenu.classList.remove('open');
  //   }
  // });


// filterButton.addEventListener('click', () => {
//   filterMenu.classList.toggle('active');
// })




// const filterButton = document.querySelector('.js-filter-button');
//   const filter = document.querySelector('.js-filter');

//   filterButton.addEventListener('click', ()=> {
//     filter.innerHTML +=`
//       <select class="filter-by-gender js-filter-by-gender" name="filter" id="filter">
//         <optgroup label="Gender">
//             <option value="Boys">Male</option>
//             <option value="Girls">Female</option>
//             <option value="Mixed">Mixed</option>
//         </optgroup>
//       </select>
//       <img class="search-icon js-search-icon" src="icons/glass.png">
//     `;

//     const searchIcon = document.querySelector('.js-search-icon');
//     searchIcon.addEventListener('click', () => {
//       const filterByGender = document.querySelector('.js-filter-by-gender').value;
      
//     });
//   });







// console.log(filterMenu);
// console.log(filterButton);
// console.log(filterMenu.style)

// filterButton.addEventListener('click', () => {
//   console.log(filterButton)
//   console.log('Filter Button has Been clicked')
// })

// filterButton.addEventListener('click', () => {
//   if (filterButtonToggle === 'close') {
//     filterMenu.style.opacity = 1;
//     filterMenu.style.pointerEvents = 'auto'; // clickable when visible
//     filterButtonToggle = 'open';
//   } else {
//     filterMenu.style.opacity = 0;
//     filterMenu.style.pointerEvents = 'none'; // not blocking clicks when hidden
//     filterButtonToggle = 'close';
//   }
// });







// filter.addEventListener('click', () => {
//   filter.innerHTML += `
    // <select class="filter-by-gender" name="filter" id="filter">
    //   <optgroup label="Gender">
    //       <option value="Male">Male</option>
    //       <option value="Female">Female</option>
    //   </optgroup>
    // </select>
//   `

//   console.log(filter);
// });





























// const hostelsSection = document.querySelector('.hostels-section');
// console.log(hostelsSection);
// hostelsSection.addEventListener('click', () => {
//   console.log('Document Has Been Clicked')
// })











// // Example dynamic data
// const hostelId = "HSTL001";
// const hostelName = "Unity Hostel";
// const manager = "Mr. John Doe";








// const show = document.querySelector('.more-details')
// show.addEventListener('click', () => {
//     console.log(show)
// })









// const url =  new URL(window.location.href)//this get the url at the top of the browser
// console.log(url.searchParams.get('order'))//this will let us get the indivual parameters
// console.log(url.searchParams.get('product')) 
// console.log(url);





// ((button) => {
//     button.addEventListener('click', () => {
//         const hostelId = button.dataset.hostelId;
//         // console.log(hostelId);

//         hostels.forEach((item) => {
//         if(hostelId === item.id){
//             console.log('Yep', item.rooms.types)
//             console.log(item.id, item.name, item.rooms.types)
//         }
//       }
//     }
// )}





// const dispay ={
//   rooms: {
//       types: [
//         { type: "1-in-1", price: 1800, availableRooms: 5 },
//         { type: "2-in-1", price: 1500, availableRooms: 10 },
//         { type: "3-in-1", price: 1200, availableRooms: 20 },
//         { type: "4-in-1", price: 1000, availableRooms: 40 }
//       ],
//       furnishing: ["Bed", "Mattress", "Wardrobe", "Study Desk", "Chair"]
//     }
//   }
// console.log(dispay.rooms)
// display = hostels.rooms.types;
// console.log(hostels)

// function renderRoomTypes() {
//   let html = '';
//   hostels.rooms.types.forEach((object) => {
//     html += `
//       <ul>
//         <li class="special-font">
//           ${object.type}
//           <p>${object.price}</p>
//         </li>
        
//       </ul>
//     `;
//     console.log(html);
    
// })
// }

// renderRoomTypes();





// function renderProductsGrid() {
//   let productHtml = '';

//   products.forEach((product) => {
//     productHtml += `
//       <div class="product-container">
//             <div class="product-image-container">
//               <img class="product-image"
//                 src="${product.image}">
//             </div>

//             <div class="product-name limit-text-to-2-lines">
//               ${product.name}
//             </div>

//             <div class="product-rating-container">
//               <img class="product-rating-stars"
//                 src="${product.getStarsUrl()}">
//               <div class="product-rating-count link-primary">
//                 ${product.rating.count}
//               </div>
//             </div>

//             <div class="product-price">
//               $${product.getPrice()}
//             </div>

//             <div class="product-quantity-container">
//               <select class="js-quantity-selector-${product.id}">
//                 <option selected value="1">1</option>
//                 <option value="2">2</option>
//                 <option value="3">3</option>
//                 <option value="4">4</option>
//                 <option value="5">5</option>
//                 <option value="6">6</option>
//                 <option value="7">7</option>
//                 <option value="8">8</option>
//                 <option value="9">9</option>
//                 <option value="10">10</option>
//               </select>
//             </div>

//             ${product.extraInfoHtml()}

//             <div class="product-spacer"></div>

//             <div class="added-to-cart js-added-to-cart-${product.id}">
//               <img src="images/icons/checkmark.png">
//               Added
//             </div>

//             <button class="add-to-cart-button button-primary js-add-to-cart" data-product-id="${product.id}">
//               Add to Cart
//             </button>
//           </div>
//     `;
//   });
/*
<div class="added-to-cart js-added-to-cart-${product.id}">
              <img src="images/icons/checkmark.png">
              Added
            </div>

            <button class="add-to-cart-button button-primary js-add-to-cart" data-product-id="${product.id}">
              Add to Cart
            </button>
          </div>*/
// data-product-id="${product.id}
// document.querySelectorAll('.js-add-to-cart').forEach((button) => {
//     button.addEventListener('click', () => {
//       const productId = button.dataset.productId;

//       //THIS WILL TAKE THE CLASS CREATED IN THE HTML
//       const addedText = document.querySelector(`.js-added-to-cart-${productId}`);
//       //THIS WILL INCREASED THE OPACITY WHEN CLICKED
//       addedText.style.opacity = 90;
//       //THEN THIS WILL DECREASE IT BACK TO ZERO
//       setTimeout(() => {
//         console.log(addedText.style.opacity = 0);
//       }, 1500);
      
      
//       addToCart(productId);
//       updateCartQuantity();

//     });





