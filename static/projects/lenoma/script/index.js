let smallMenu = document.querySelector(".small-menu");

smallMenu.addEventListener('click', () => {
  let dropList = document.querySelector(".small-menu-list");
  dropList.classList.remove("hidden");
});

function clickOutside(element) {
  document.addEventListener('click', (evt) => {
    event.stopPropagation();
    if (evt.target === element) return;
    let dropList = document.querySelector(".small-menu-list");

    dropList.classList.add('hidden');
  });
}
clickOutside(smallMenu);

// === slider ===
let pictureUrl = "public/pct/women.png";
let goodsUrl = ["public/pct/armani-1.png", "public/pct/slider-3.png", "public/pct/slider-2.png"];
let titleText = ['идеальный аромат от giorgio armani', 'парфюм в золоте только для вас', 'легендарные ароматы от chanel'];
let slideIndex = 0;
setSlide(slideIndex);

function setSlide (nSlide) {
  let i;
  let title = document.querySelector('h1');
  let slide = document.querySelector(".slider-picture");
  let dots  = document.querySelectorAll(".slider-controls-dot");
  slide.style.backgroundImage = `url('${goodsUrl[nSlide]}'), url('${pictureUrl}')`;
  title.textContent = titleText[nSlide];
  console.log(nSlide);
  for (let cnt = 0; cnt < 3; cnt++) {
    if (cnt == nSlide) dots[cnt].style.backgroundColor = '#c1a067';
    else dots[cnt].style.backgroundColor = 'transparent';
  }

}
// === /slider ===
