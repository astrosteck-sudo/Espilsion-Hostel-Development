import { hostels } from "./hostel-data/hostel_data.js";
import { renderFacilitiesAndAmeneties, renderRoomFunish, renderRulesAndRegulations, renderRoomMedia, renderRoomTypes } from "./functions.js";


//THIS IS FOR THE HAMBURGER BUTTON
  const hamburger = document.querySelector('.hamburger-button');
  const navLinks = document.querySelector('.navigation-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});



//THIS TAKES ALL THE CLASSES IN THE DISPLAY_PAGE.HTML
                            //THE LOCATION DETAILS
const imageCard = document.querySelector('.hostel-image-card img');
const overlayText = document.querySelector('.overlay-text');
const locationParagraph = document.querySelector('.js-location-paragraph');
const distanceFromCampus = document.querySelector('.js-distance-from-campus');
const viewLocationButton = document.querySelector('.js-view-location');


                            //THE PRICE AND PAYMENT OPTION
const minimumPrice = document.querySelector('.js-minimum-price');
const maximumPrice = document.querySelector('.js-maximum-price');
const isInstallmentAllowed = document.querySelector('.js-installment-allowed');
const additionalFees = document.querySelector('.js-additional-fees');
const refundPolicy = document.querySelector('.js-refund-policy');

                        //ROOMS TYPES
const roomTypes = document.querySelector('.js-rooms-types');

                        //AMENITIES
const facilitiesAndAmenities = document.querySelector('.js-facilities-and-amenities-perks');
// const funishing = document.querySelector('.js-funishing');

                        //THE RULES AND REGULATIONS
const rulesAndRegulations = document.querySelector('.js-rules-and-regulations');

                        //MEDIA OF THE HOSTEL ROOMS
const mediaRoomInformation = document.querySelector('.js-media-information-cards');

                        //MANAGEMENT DETAILS
const managementPhoneNumber = document.querySelector('.js-phone-number');
const managementWhatsappNumber = document.querySelector('.js-whatsapp-number');
const managementEmailAddress = document.querySelector('.js-email-address');
const managerName = document.querySelector('.js-manager-name');
const managementOfficeHours = document.querySelector('.js-office-hours');

//THIS TAKES THE HOSTEL ID STORED IN THE URL PARAMETER
const params = new URLSearchParams(window.location.search);

const hostelId = params.get('hostelId')
hostels.forEach((hostel) => {
        if(hostelId === hostel.id){
            // console.log()
            // console.log(item.id, item.name)
            // console.log(item.image);

            //THE LOCATION DETAILS
            imageCard.src = hostel.image;
            imageCard.alt = hostel.name;
            overlayText.textContent = hostel.name;
            locationParagraph.textContent = hostel.location.directions;
            distanceFromCampus.textContent = `Its about ${hostel.location.distanceToCampusMinutes} minute${hostel.location.distanceToCampusMinutes > 1 ? 's' : ''} walk from campus`;


            viewLocationButton.addEventListener("click", () => {
            window.open(
                `https://www.google.com/maps?q=${hostel.location.latitude},${hostel.location.longitude}`,
                "_blank"
                );
            });


            const getDirectionsButton = document.querySelector('.js-get-directions');
            getDirectionsButton.addEventListener("click", () => {
                if (!navigator.geolocation) {
                    alert("Geolocation not supported");
                    return;
                }
                navigator.geolocation.getCurrentPosition(
                    (position) => {
                    const userLat = position.coords.latitude;
                    const userLng = position.coords.longitude;

                    window.open(
                        `https://www.google.com/maps/dir/?api=1&origin=${userLat},${userLng}&destination=${hostel.location.latitude},${hostel.location.longitude}`,
                        "_blank"
                    );
                    },
                    () => {
                    alert("Location permission denied");
                    }
                );
            });


            //THE PRICE AND PAYMENT OPTION
            minimumPrice.textContent = `Minimum Price : ${hostel.pricing.priceMin}/${hostel.pricing.billingPeriod}`;
            maximumPrice.textContent = `Maximum: ${hostel.pricing.priceMax}/${hostel.pricing.billingPeriod}`;
            isInstallmentAllowed.textContent = `${hostel.pricing.installmentAllowed === true ? 'Installment Is Allowed' : 'Installment Is Not Allowed'}`;
            additionalFees.innerHTML = `
                <li class="special-font">Utilities (${hostel.pricing.additionalFees.utilities})</li>
                <li class="special-font">Maintenance (${hostel.pricing.additionalFees.maintenance})</li>
                <li class="special-font">Caution Deposit (${hostel.pricing.additionalFees.cautionDeposit})</li>
            `;
            refundPolicy.textContent = hostel.pricing.refundPolicy;
            
            //ROOMS TYPES   
            roomTypes.innerHTML = renderRoomTypes(hostel);

            //AMENITIES
            facilitiesAndAmenities.innerHTML = renderFacilitiesAndAmeneties(hostel);
            facilitiesAndAmenities.innerHTML += renderRoomFunish(hostel);//THIS WILL JUST APPEND THE KLIST CREATED INTO THE THE EXISTING UNORDERED LISTS

            //THE RULES AND REGULATIONS
            rulesAndRegulations.innerHTML = renderRulesAndRegulations(hostel);

            //MEDIA OF THE HOSTEL ROOMS
            mediaRoomInformation.innerHTML = '';
            mediaRoomInformation.innerHTML = renderRoomMedia(hostel);
            mediaRoomInformation.innerHTML += `<video class="hostel-room" muted loop controls src="${hostel.media.video}" poster="${hostel.image}"></video>`;
            
            //MANAGEMENT DETAILS
            managementPhoneNumber.textContent = hostel.contact.phone;
            managementWhatsappNumber.textContent = hostel.contact.whatsapp;
            managementEmailAddress.textContent = hostel.contact.email;
            managerName.textContent = hostel.contact.managerName;
            managementOfficeHours.textContent = hostel.contact.officeHours;
        }
    }
)





// hamburger.addEventListener('click', () => {
//     navLinks.classList.toggle('active');
// });






























/*import { hostels } from "./hostel-data/hostel_data.js";

const hostelCardMoreDetails = document.querySelector('.more-details-container');
// const viewDetailsButton = document.querySelectorAll('.js-view-more-details');
//console.log(hostelCardMoreDetails);
let moreDetailsDataHtml = '';

window.location.href 
export function renderHostelDetails(parameter){
    window.location.href = 'http://127.0.0.1:5500/display_page.html';
    parameter.forEach((button) => {
    button.addEventListener('click', () => {
        const hostelId = button.dataset.hostelId;
        // console.log(hostelId);

        hostels.forEach((item) => {
        if(hostelId === item.id){
            console.log('Yep', item.rooms.types)
            console.log(item.id, item.name, item.rooms.types)
            
            
            // const showRoomTypes = renderRoomTypes(item);
            // value.innerHTML = showRoomTypes;
            
            moreDetailsDataHtml = ` 
            <div class="more-details-container">
                <div class="hostel-image-card">
                    <img src="${item.image}" alt="${item.name}">
                    <div class="overlay">
                        <span class="overlay-text">${item.name}</span>
                    </div>
                </div>
            
                <div class="hostel-information-contaniner">
                    <div class="location-details">
                        <h2 class="font-header">Location</h2>
                        <p class="font-paragraph">
                            Located in the city of ${item.location.city}, ${item.location.area}
                            A major landmark is ${item.location.landmark}
                            Its about ${item.location.distanceToCampusMinutes} minutes walk from campus
                            For directions. ${item.location.directions}
                        </p>
                    </div>
                    
                    <div class="price-and-payment">
                        <h2 class="font-header">Payment Details</h2>
                        <p class="font-paragraph">Minimum Price : ${item.pricing.priceMin}}/Sem</p>
                        <p class="font-paragraph">Maximum: ${item.pricing.priceMax}/Sem</p>
                        <p class="font-paragraph">Installment Is Allowed (${item.pricing.installmentAllowed})</p>
                        <p style="text-align: center; font-weight: bold;" class="font-paragraph">Additional Fees</p>
                        <ul class="additional-fees">
                            <li class="special-font">Utilities (${item.pricing.additionalFees.utilities})</li>
                            <li class="special-font">Maintenance (${item.pricing.additionalFees.maintenance})</li>
                            <li class="special-font">Caution Deposit (${item.pricing.additionalFees.cautionDeposit})</li>
                        </ul>
                        <p class="font-paragraph">${item.pricing.refundPolicy}</p>
                    </div>

                    <div class="room-information">
                        <h2 class="font-header">Room Information(${item.type})</h2>
                        <ul class="types-of-rooms grid">
                            <li class="special-font">
                                1 in 1
                                <p>Price (3000)</p>
                            </li>
                            <li class="special-font">
                                2 in 1
                                <p>Price (3000)</p>
                            </li class="special-font">
                            <li class="special-font">
                                2 in 1
                                <p>Price (3000)</p>
                            </li>
                            <li class="special-font">
                                2 in 1
                                <p>Price (3000)</p>
                            </li>
                        </ul>
                    </div>

                    <div class="facilities-and-amenities">
                        <h2 id="facilities-and-amenities-header" class="font-header">Facilities And Amenities</h2>
                        <ul class="facilities-and-amenities-perks grid">
                            <li class="special-font">Common Room</li>
                            <li class="special-font">Water Supply</li>
                            <li class="special-font">Generator</li>
                            <li class="special-font">Wifi</li>
                            <li class="special-font">Fan</li>
                            <li class="special-font">Conditioning </li>
                            <li class="special-font">laundry Area</li>
                            <li class="special-font">Study Area</li>
                            <li class="special-font">Kitchen</li>
                            <li class="special-font">Electricity</li>
                            <li class="special-font">Security Guard</li>
                            <li class="special-font">Cctv</li>
                            <li class="special-font">Secure Gate</li>
                            <li class="special-font">Fire security</li>
                            <li class="special-font">Bed</li>
                            <li class="special-font">Mattress</li>
                            <li class="special-font">Study Desk</li>
                            <li class="special-font">Wardrobe</li>
                            <li class="special-font">Chair</li>
                        </ul>
                    </div><br>
                    <div class="rules-and-policies">
                        <h2 class="font-header">Rules And Regulations</h2>
                        <ul class="grid rules-and-policies-style">
                            <li class="special-font">Curfew Time (${item.rules.curfewTime})</li>
                            <li class="special-font">Vistors Allowed</li>
                            <li class="special-font">Cooking Allowed</li>
                            <li class="special-font">${item.rules.noisePolicy}</li>
                            <li class="special-font">No smoking</li>
                            <li class="special-font">No Pets</li>
                            <li class="special-font">No Pets</li>
                            <li class="special-font">No Pets</li>
                            
                        </ul>
                    </div>

                    <div class="info-container">
                        <div class="management-contact">
                            <h2 class="font-header">Contacts</h2>
                                <div class="contact-item">
                                <img src="icons/phone.svg" alt="Phone">
                                <p class="font-paragraph">${item.contact.phone}</p>
                            </div>
                            <div class="contact-item">
                                <img src="icons/whatsapp-128.svg" alt="WhatsApp">
                                <p class="font-paragraph">${item.contact.whatsapp}</p>
                            </div>
                            <div class="contact-item">
                                <img src="icons/email-14.svg" alt="Email">
                                <p class="font-paragraph">${item.contact.email}</p>
                            </div>
                            <div class="contact-item">
                                <img src="icons/manager-avatar.svg" alt="Manager">
                                <p class="font-paragraph">${item.contact.managerName}} (Manager)</p>
                            </div>
                            <div class="contact-item">
                                <img src="icons/clock.svg" alt="Office Hours">
                                <p class="font-paragraph">Office Hours (${item.contact.officeHours})</p>
                            </div>
                        </div>

                            <div class="media-information-cards">
                                <a href="hostel_rooms/hostel_room_1.jpeg">
                                    <img class="hostel-room" src="hostel_rooms/hostel_room_1.jpeg" alt="Unity Hostel Room">
                                </a>
                                <a href="hostel_rooms/hostel_room_2.webp">
                                    <img class="hostel-room" src="hostel_rooms/hostel_room_2.webp" alt="Unity Hostel Room">
                                </a>
                                <a href="hostel_rooms/hostel_room_3.jpg">
                                    <img class="hostel-room" src="hostel_rooms/hostel_room_3.jpg" alt="Unity Hostel Room">
                                </a>
                                <video class="hostel-room" muted loop controls src="hostel_room_videos/6 Bed Dorm at Wink Hostel, Singapore - Aaron's Travel and Adventure Network (720p, h264).mp4" poster="hostel_rooms/hostel_room_4.webp"></video>
                            </div>
                        </div>


                    <!-- <div class="review-and-ratings">
                        <p>
                            average Rating (4.3)
                            Total Review (400)
                        </p>
                    </div> -->
                </div>
            </div>
            `
        }
        });
        console.log(moreDetailsDataHtml)

        console.log();
        
    });
    });
}
// hostelCardMoreDetails.innerHTML = moreDetailsDataHtml;

*/


