'use strict';

/**
 * navbar toggle
 */

const overlay = document.querySelector("[data-overlay]");
const navOpenBtn = document.querySelector("[data-nav-open-btn]");
const navbar = document.querySelector("[data-navbar]");
const navCloseBtn = document.querySelector("[data-nav-close-btn]");
const navLinks = document.querySelectorAll("[data-nav-link]");

const navElemArr = [navOpenBtn, navCloseBtn, overlay];

const navToggleEvent = function (elem) {
  for (let i = 0; i < elem.length; i++) {
    elem[i].addEventListener("click", function () {
      navbar.classList.toggle("active");
      overlay.classList.toggle("active");
    });
  }
}

navToggleEvent(navElemArr);
navToggleEvent(navLinks);



/**
 * header sticky & go to top
 */

const header = document.querySelector("[data-header]");
const goTopBtn = document.querySelector("[data-go-top]");

window.addEventListener("scroll", function () {

  if (window.scrollY >= 200) {
    header.classList.add("active");
    goTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    goTopBtn.classList.remove("active");
  }

});

// YANG INI BIARIN AJA DULU TAKUTNYA YANG BAWAH ERROR MUACH
// Load More Button

// document.addEventListener('DOMContentLoaded', function () {
//   const loadMoreBtn = document.getElementById('load-more');
//   let currentItem = 3;

//   loadMoreBtn.addEventListener('click', () => {
//     const elementList = [...document.querySelectorAll('.popular-list li')];
    
//     for (let i = currentItem; i < currentItem + 3 && i < elementList.length; i++) {
//       elementList[i].style.display = 'flex';
//     }
    
//     currentItem += 3;

//     if (currentItem >= elementList.length) {
//       loadMoreBtn.style.display = 'none';
//     }
//   });
// });
// MUACH

//show less button
document.addEventListener('DOMContentLoaded', function () {
  const loadMoreBtn = document.getElementById('load-more');
  const showLessBtn = document.getElementById('show-less');
  let currentItem = 3;

  // Function to hide all elements
  function hideAllElements() {
    const elementList = document.querySelectorAll('.popular-list li');
    elementList.forEach((element, index) => {
      if (index >= currentItem) {
        element.style.display = 'none';
      } else {
        element.style.display = 'flex';
      }
    });
  }

  // Initial hide for all elements except the first 3
  hideAllElements();

  // Event listener for Load More button
  loadMoreBtn.addEventListener('click', () => {
    const elementList = document.querySelectorAll('.popular-list li');
    
    for (let i = currentItem; i < currentItem + 3 && i < elementList.length; i++) {
      elementList[i].style.display = 'flex';
    }
    
    currentItem += 3;

    if (currentItem >= elementList.length) {
      loadMoreBtn.style.display = 'none';
      showLessBtn.style.display = 'flex'; // Show the "Show Less" button
    }
  });

  // Event listener for Show Less button
  showLessBtn.addEventListener('click', () => {
    currentItem = 3; // Reset the currentItem to 3
    hideAllElements(); // Hide all elements
    loadMoreBtn.style.display = 'flex'; // Show the "Load More" button
    showLessBtn.style.display = 'none'; // Hide the "Show Less" button
  });
});




//LOAD MORE BAGIAN PACKAGES

document.addEventListener('DOMContentLoaded', function () {
  const viewMoreBtn = document.getElementById('view-more');
  const viewLessBtn = document.getElementById('view-less');
  let currentItem = 8;

  // Function to hide all elements
  function hideAllElement() {
    const elementList = document.querySelectorAll('.package-list li');
    elementList.forEach((element, index) => {
      if (index >= currentItem) {
        element.style.display = 'none';
      } else {
        element.style.display = 'flex';
      }
    });
  }

  // Initial hide for all elements except the first 3
  hideAllElement();

  // Event listener for Load More button
  viewMoreBtn.addEventListener('click', () => {
    const elementList = document.querySelectorAll('.package-list li');
    
    for (let i = currentItem; i < currentItem + 4 && i < elementList.length; i++) {
      elementList[i].style.display = 'flex';
    }
    
    currentItem += 4 ;

    if (currentItem >= elementList.length) {
      viewMoreBtn.style.display = 'none';
      viewLessBtn.style.display = 'block'; // Show the "Show Less" button
    }
  });

  // Event listener for Show Less button
  viewLessBtn.addEventListener('click', () => {
    currentItem = 8; // Reset the currentItem to 3
    hideAllElement(); // Hide all elements
    viewMoreBtn.style.display = 'flex'; // Show the "Load More" button
    viewLessBtn.style.display = 'none'; // Hide the "Show Less" button
  });
});


app.controller('promoCtrl', function($scope) {
  $scope.promoImage = 'images/PROMOCUL.jpg';
  $scope.promoTitle = 'Special Promo!';
  $scope.promoDescription = 'Get exclusive discounts on our amazing Vacation.';
  $scope.promoLink = 'https://www.ancol.com/promo';
  $scope.promoButton = 'Redeem Now !!';
});