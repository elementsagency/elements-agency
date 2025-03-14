// header

document.addEventListener("DOMContentLoaded", function () {
  const burger = document.querySelector(".header__burger");
  const menu = document.querySelector(".header__menu");
  const body = document.body;
  const links = document.querySelectorAll(".header__link");
  const logo = document.querySelector(".header__logo");
  const header = document.querySelector(".header");

  // Toggle menu on burger click
  burger.addEventListener("click", function () {
    burger.classList.toggle("active");
    menu.classList.toggle("active");
    if (window.innerWidth < 992) {
        body.classList.toggle("lock");
    }
});

  // Close menu when clicking a link or logo on mobile
  function closeMenuOnMobile() {
      if (window.innerWidth < 767) {
          menu.style.display = "none";
          burger.classList.remove("active");
          menu.classList.remove("active");
          body.classList.remove("lock");
      }
  }

  // Avoid closing the menu on desktop
  function closeMenuOnDesktop(event) {
      if (window.innerWidth < 767) return; // Prevent close on desktop
      if (menu.classList.contains("active")) {
          menu.style.display = "block"; // Keep menu open on desktop
      }
  }

  links.forEach(link => {
      link.addEventListener("click", closeMenuOnMobile);
      link.addEventListener("click", closeMenuOnDesktop); // Prevent closing on desktop
  });

  logo.addEventListener("click", closeMenuOnMobile);

  // Show menu when interacting with header elements
  function showMenu() {
      menu.style.display = "block";
  }

  [burger, ...links, logo].forEach(el => el.addEventListener("click", showMenu));

  // Add active class to header on scroll
  window.addEventListener("scroll", function () {
      header.classList.toggle("active", window.scrollY > 50);
  });
});


// header

// Example starter JavaScript for disabling form submissions if there are invalid fields
(() => {
    'use strict'
  
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    const forms = document.querySelectorAll('.needs-validation')
  
    // Loop over them and prevent submission
    Array.from(forms).forEach(form => {
      form.addEventListener('submit', event => {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }
  
        form.classList.add('was-validated')
      }, false)
    })
  })()