'use strict';

// element toggle function
const elementToggleFunc = function (elem) { elem.classList.toggle("active"); }

// Function to filter project items
const filterProjectItems = (category) => {
  const projectItems = document.querySelectorAll('.project-item');
  projectItems.forEach((item) => {
    const itemCategory = item.getAttribute('data-category').toLowerCase();
    if (category === 'all' || itemCategory === category) {
      item.classList.add('active');
    } else {
      item.classList.remove('active');
    }
  });
};

// sidebar variables
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

// sidebar toggle functionality for mobile
sidebarBtn.addEventListener("click", function () { elementToggleFunc(sidebar); });


// Testimonials variables
const testimonialsItem = document.querySelectorAll("[data-testimonials-item]");
const modalContainer = document.querySelector("[data-modal-container]");
const modalCloseBtn = document.querySelector("[data-modal-close-btn]");
const overlay = document.querySelector("[data-overlay]");

// Modal variables
const modalImg = document.querySelector("[data-modal-img]");
const modalTitle = document.querySelector("[data-modal-title]");
const modalText = document.querySelector("[data-modal-text]");

// Modal toggle function
const testimonialsModalFunc = function () {
  modalContainer.classList.toggle("active");
  overlay.classList.toggle("active");
}
// Add click event to all modal items
for (let i = 0; i < testimonialsItem.length; i++) {

  testimonialsItem[i].addEventListener("click", function () {

    modalImg.src = this.querySelector("[data-testimonials-avatar]").src;
    modalImg.alt = this.querySelector("[data-testimonials-avatar]").alt;
    modalTitle.innerHTML = this.querySelector("[data-testimonials-title]").innerHTML;
    modalText.innerHTML = this.querySelector("[data-testimonials-text]").innerHTML;

    testimonialsModalFunc();

  });

}
// Add click event to modal close button
modalCloseBtn.addEventListener("click", testimonialsModalFunc);
overlay.addEventListener("click", testimonialsModalFunc);
// Custom select variables
const select = document.querySelector("[data-select]");
const selectItems = document.querySelectorAll("[data-select-item]");
const selectValue = document.querySelector("[data-selecct-value]");
const filterBtn = document.querySelectorAll("[data-filter-btn]");

select.addEventListener("click", function () { elementToggleFunc(this); });

// Function to handle select item click
const handleSelectItemClick = (selectedValue) => {
  selectValue.innerText = selectedValue;
  elementToggleFunc(select);
  filterProjectItems(selectedValue.toLowerCase());
};

// Add event in all select items
selectItems.forEach((item) => {
  item.addEventListener('click', () => {
    const selectedValue = item.innerText;
    handleSelectItemClick(selectedValue);
  });
});

// Filter buttons for project items
const filterButtons = document.querySelectorAll('[data-filter-btn]');

// Handle filter button click
const handleFilterButtonClick = (selectedCategory) => {
  filterButtons.forEach((button) => {
    button.classList.toggle('active', button.textContent.toLowerCase() === selectedCategory.toLowerCase());
  });
  filterProjectItems(selectedCategory.toLowerCase());
};

// Add event in all filter button items for large screen
filterButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const selectedCategory = button.textContent;
    handleFilterButtonClick(selectedCategory);
  });
});

// Contact form variables
const form = document.querySelector('[data-form]');
const formInputs = document.querySelectorAll('[data-form-input]');
const formBtn = document.querySelector('[data-form-btn]');

// Add event to all form input fields
formInputs.forEach((input) => {
  input.addEventListener('input', () => {
    formBtn.disabled = !form.checkValidity();
  });
});

// Page navigation variables
const navigationLinks = document.querySelectorAll('[data-nav-link]');
const pages = document.querySelectorAll('[data-page]');

// Handle navigation link click
const handleNavLinkClick = (targetPage) => {
  pages.forEach((page) => {
    const pageName = page.getAttribute('data-page');
    page.classList.toggle('active', pageName.toLowerCase() === targetPage.toLowerCase());
  });

  navigationLinks.forEach((link) => {
    link.classList.toggle('active', link.textContent.toLowerCase() === targetPage.toLowerCase());
  });

  window.scrollTo(0, 0);
};

// Add event to all navigation links
navigationLinks.forEach((link) => {
  link.addEventListener('click', () => {
    const targetPage = link.textContent;
    handleNavLinkClick(targetPage);
  });
});
