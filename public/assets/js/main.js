/*

Menu Section

*/

function ourMenu(pageName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("menu-tab-content");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablink");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].style.backgroundColor = "";
  }
  document.getElementById(pageName).style.display = "block";
}

// Get the element with id="defaultOpen" and click on it
document.getElementById("AlwaysOpen").click();

// js code for recent
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("recent-news");
  var dots = document.getElementsByClassName("recent-news-dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}

/* 

Gallary Code 

*/
function gallaryOpenModal() {
  document.getElementById("gallaryModal").style.display = "block";
}

function gallaryCloseModal() {
  document.getElementById("gallaryModal").style.display = "none";
}

var gallarySlideIndex = 1;
displaySlides(gallarySlideIndex);

function plusGallarySlides(n) {
  displaySlides((gallarySlideIndex += n));
}

function currentGallarySlide(n) {
  displaySlides((gallarySlideIndex = n));
}

function displaySlides(n) {
  var i;
  var gallarySlide = document.getElementsByClassName("gallarySlides");
  if (n > gallarySlide.length) {
    gallarySlideIndex = 1;
  }
  if (n < 1) {
    gallarySlideIndex = gallarySlide.length;
  }
  for (i = 0; i < gallarySlide.length; i++) {
    gallarySlide[i].style.display = "none";
  }
  gallarySlide[gallarySlideIndex - 1].style.display = "block";
}
/*

Top Button Function 

*/
var mybutton = document.getElementById("topBtn");
window.onscroll = function() {
  scrollFunction();
};
function scrollFunction() {
  if (
    document.body.scrollTop > 700 ||
    document.documentElement.scrollTop > 700
  ) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
