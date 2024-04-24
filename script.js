const slides = document.querySelectorAll(".item__slider"),
  prev = document.querySelector(".btn_item_prev"),
  next = document.querySelector(".btn_item_next");
total = document.querySelector("#total");
current = document.querySelector("#current");
let slideIndex = 1;

showSlides(slideIndex);

total.textContent = slides.length;
current.textContent = slideIndex;

function showSlides(index) {
  console.log(index);
  if (index > slides.length) {
    slideIndex = 1;
  }
  if (index < 1) {
    slideIndex = slides.length;
  }
  slides.forEach((item) => (item.style.display = "none"));
  slides[slideIndex - 1].style.display = "block";
}

function changeSlide(index) {
  showSlides((slideIndex += index));
  current.textContent = slideIndex;
}
prev.addEventListener("click", () => {
  changeSlide(-1);
});
next.addEventListener("click", () => {
  changeSlide(+1);
});
