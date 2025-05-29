document.addEventListener("DOMContentLoaded", function () {
  //Nav profile DropDown
  const dropdownContent = document.querySelector(".nav-rightCol-dropdownContent");
  const dropdownLabel = document.querySelector(".nav-rightCol-dropdownLabel");
  const dropdownLiWrap = document.querySelector(".nav-rightCol-dropdown");
  dropdownLabel.addEventListener("click", function () {
    dropdownContent.classList.toggle("nav-dropdown-open");
    dropdownLiWrap.classList.toggle("nav-arrow-effect");
  });

  //sidebar expand
  const sidebarToggleBtn = document.querySelector(".view-menu");
  const sidebarWrap = document.querySelector(".sidebar-wrap");
  const contentWrap = document.querySelector(".content-wrap");
  const sideOverlay = document.querySelector(".side-overlay");
  const sm_sidebarclose = document.querySelector(".sidebar-close");
  const sidebarToggle_XSBtn = document.querySelector(".sidebar-btn");

  sidebarToggleBtn.addEventListener("click", function () {
    sidebarWrap.classList.toggle("sidebar-md");
    contentWrap.classList.toggle("content-wrap-md");
    sideOverlay.classList.toggle("overlay--width");
  });

  //sidebar mobile
  function checkWindowWidth() {
    if (window.innerWidth <= 575) {
      sidebarWrap.classList.add("sidebar-xs");
      contentWrap.classList.add("content-wrap-xs");
    } else {
      sidebarWrap.classList.remove("sidebar-xs");
      contentWrap.classList.remove("content-wrap-xs");
    }
  }
  checkWindowWidth();
  window.addEventListener("resize", checkWindowWidth);

  sidebarToggle_XSBtn.addEventListener("click", function () {
    sidebarWrap.classList.remove("sidebar-xs");
    sidebarWrap.classList.toggle("zIndex--10");
    sideOverlay.classList.add("overlay--width--xs");
  });

  sm_sidebarclose.addEventListener("click", function () {
    sidebarWrap.classList.add("sidebar-xs");
    sidebarWrap.classList.remove("zIndex--10");
    sideOverlay.classList.remove("overlay--width--xs");
    if (sideOverlay.classList.contains("overlay--width")) {
      sideOverlay.classList.remove("overlay--width");
    }
    if (sidebarWrap.classList.contains("sidebar-md")) {
      sidebarWrap.classList.remove("sidebar-md");
    }
  });
});

//Slick Slide
$(function () {
  $(".sliderWraap").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    arrows: false,
  });
})
