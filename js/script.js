let burgerBtn = document.getElementById("burgerBtn");
let navBar = document.getElementById("navBar");
let closeNav = document.getElementById("closeNav");

burgerBtn.addEventListener("click", () => {
  //console.log(navBar);
  navBar.classList.add("nav-active");
});
closeNav.addEventListener("click", () => {
  console.log("clicked");

  navBar.classList.remove("nav-active");
});

/*********about section********* */

(() => {
  const aboutSection = document.querySelector(".about"),
    tabsContainer = document.querySelector(".about-tab");

  tabsContainer.addEventListener("click", (e) => {
    // console.log(e.target);
    if (
      e.target.classList.contains("tab-item") &&
      !e.target.classList.contains("active")
    ) {
      const target = e.target.getAttribute("data-target");
      console.log(target);
      tabsContainer.querySelector(".active").classList.remove("active");
      e.target.classList.add("active");
    }
  });
})();
const skillsHead = document.getElementById("skills");
const experienceHead = document.getElementById("experience");
const educationHead = document.getElementById("education");
skillsHead.addEventListener("click", () => {
  const skills = document.querySelector(".skills");
  const experience = document.querySelector(".experience");
  const education = document.querySelector(".education");
  skills.classList.remove("activee");
  experience.classList.add("activee");
  education.classList.add("activee");
});
experienceHead.addEventListener("click", () => {
  const skills = document.querySelector(".skills");
  const experience = document.querySelector(".experience");
  const education = document.querySelector(".education");
  skills.classList.add("activee");
  experience.classList.remove("activee");
  education.classList.add("activee");
});
educationHead.addEventListener("click", () => {
  const education = document.querySelector(".education");
  const skills = document.querySelector(".skills");
  const experience = document.querySelector(".experience");
  education.classList.remove("activee");
  skills.classList.add("activee");
  experience.classList.add("activee");
});

/***************testimonial section************* */
// emmediate evoke function
(() => {
  const sliderContainer = document.querySelector(".test-slider-container"),
    slides = sliderContainer.querySelectorAll(".testi-item"),
    slideWidth = sliderContainer.offsetWidth, //to get the width of the container
    prevBtn = document.querySelector(".testi-slider-nav .prev"),
    nextBtn = document.querySelector(".testi-slider-nav .next"),
    activeSlide = sliderContainer.querySelector(".testi-item.active");
  let slideIndex = Array.from(activeSlide.parentElement.children).indexOf(
    activeSlide
  );

  slides.forEach((slide) => {
    slide.style.width = slideWidth + "px";
  });
  sliderContainer.style.width = slideWidth * slides.length + "px";

  nextBtn.addEventListener("click", () => {
    if (slideIndex === slides.length - 1) {
      slideIndex = 0;
    } else {
      slideIndex++;
    }
    slider();
  });
  prevBtn.addEventListener("click", () => {
    if (slideIndex === 0) {
      slideIndex = slides.length - 1;
    } else {
      slideIndex--;
    }
    slider();
  });
  function slider() {
    sliderContainer
      .querySelector(".testi-item.active")
      .classList.remove("active");
    slides[slideIndex].classList.add("active");
    sliderContainer.style.marginLeft = -(slideWidth * slideIndex) + "px";
  }
  slider();
})();
