//menu highlighter
const links = document.querySelectorAll(".header-menu a");

function activateLink(link) {
  const url = location.href;
  const href = link.href;
  if (url.includes(href)) {
    link.classList.add("active");
    console.log(link);
  }
}

links.forEach(activateLink);

//quote parameters
const parameters = new URLSearchParams(location.search);

function activateProduct(parameter) {
  const element = document.getElementById(parameter);
  if (element) {
    element.checked = true;
    console.log(element);
  }
}

parameters.forEach(activateProduct);

//faq expansion
const questions = document.querySelectorAll(".faq button");

function showAnswer(event) {
  const question = event.currentTarget;
  const controls = question.getAttribute("aria-controls");
  const answer = document.getElementById(controls);

  answer.classList.toggle("active");
  const active = answer.classList.contains("active");
  question.setAttribute("aria-expanded", active);
}

function questionClick(click) {
  click.addEventListener("click", showAnswer);
}

questions.forEach(questionClick);

//bicycles images
const images = document.querySelectorAll(".bicycle-images img");
const divImages = document.querySelector(".bicycle-images");

function changeImage(event) {
  const img = event.currentTarget;
  const media = matchMedia("(min-width: 920px)").matches;
  if (media) {
    divImages.prepend(img);
  }
}

function clickImage(img) {
  img.addEventListener("click", changeImage);
}

images.forEach(clickImage);

//animation plugin
if (window.SimpleAnime) {
  new SimpleAnime();
}
