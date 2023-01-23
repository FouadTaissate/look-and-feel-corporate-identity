let slidesContainer = document.getElementById("slides-container");
let slide = document.querySelector(".slide");
let prevButton = document.getElementById("slide-arrow-prev");
let nextButton = document.getElementById("slide-arrow-next");

prevButton.addEventListener("click", () => {
  let slideWidth = slide.clientWidth;

  slidesContainer.scrollLeft -= slideWidth;
});

nextButton.addEventListener("click", () => {
  let slideWidth = slide.clientWidth;

  slidesContainer.scrollLeft += slideWidth;
});
