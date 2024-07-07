// ! Slider Bar Section Start
let barBtn = document.querySelector(".fa-bars");
let nav = document.querySelector("nav");
barBtn.addEventListener("click", () => {
  nav.classList.toggle("activeNav");
  barBtn.classList.toggle("fa-xmark");
});
// ! Slider Bar Section End

// ! Position Enquire Now Form Start
let enquireBtn = document.querySelector("#enquireBtn");
let posClose = document.querySelector("#posClose");
let formOuter = document.querySelector(".form-outer");
enquireBtn.addEventListener("click", () => {
  formOuter.classList.add("activeFormOuter");
});
posClose.addEventListener("click", () => {
  formOuter.classList.remove("activeFormOuter");
});
// ! Position Enquire Now Form End

// ! Gallery Section Start
let galleryContainer = document.querySelector(".gallery-container");
let activeImageBox = document.querySelector(".activeImageBox");
let activeImageDiv = document.querySelector(".activeImageDiv");
let activeImage = document.querySelector(".activeImage");
galleryContainer.addEventListener("click", (event) => {
  if (event.target.tagName == "IMG") {
    let currentSrc = event.target.src;
    console.log(currentSrc);
    activeImageBox.classList.add("activeImageBox-open");
    activeImageDiv.classList.add("activeImageDiv-open");
    activeImage.src = currentSrc;
  }
});

let xMark = document.querySelector(".fa-xmark");
xMark.addEventListener("click", () => {
  activeImageBox.classList.remove("activeImageBox-open");
  activeImageDiv.classList.remove("activeImageDiv-open");
});

activeImageBox.addEventListener("click", () => {
  activeImageBox.classList.remove("activeImageBox-open");
  activeImageDiv.classList.remove("activeImageDiv-open");
});
// ! Gallery Section End

// ! Floor Plan Section Start
let floorPlanContainer = document.querySelector(".floor-plan--container");

floorPlanContainer.addEventListener("click", (event) => {
  if (event.target.tagName == "IMG") {
    let currentSrc = event.target.src;
    console.log(currentSrc);
    activeImageBox.classList.add("activeImageBox-open");
    activeImageDiv.classList.add("activeImageDiv-open");
    activeImage.src = currentSrc;
  }
});
// ! Floor Plan Section End

// ! Amenities Section Start
let AllBtn = document.querySelectorAll(".btn-box button");
let allContent = document.querySelectorAll(".tab-content .aminities-btn-items");

console.log(allContent);
AllBtn.forEach((Btn, index) => {
  Btn.addEventListener("click", () => {
    AllBtn.forEach((el, i) => {
      allContent[i].classList.remove("activeAmenities-btn-items");
      el.classList.remove("ActiveredBtn");
    });
    Btn.classList.add("ActiveredBtn");
    allContent[index].classList.add("activeAmenities-btn-items");
  });
});
// ! Amenities Section End