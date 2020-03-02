/*

Menu Section

*/
function ourMenu(evt, pageName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("menu-tab-content");
  tablinks = document.getElementsByClassName("res-menu-tab-head");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  document.getElementById(pageName).style.display = "block";
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace("white", "");
  }
  evt.currentTarget.className += " white";
}

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
    dots[i].className = dots[i].className.replace(" active-dots", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active-dots";
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
var topButton = document.getElementById("bottomToTopButton");
window.onscroll = function() {
  scrollFunction();
  headerChange();
};
function scrollFunction() {
  if (
    document.body.scrollTop > 400 ||
    document.documentElement.scrollTop > 400
  ) {
    topButton.style.display = "block";
  } else {
    topButton.style.display = "none";
  }
}
function headerChange() {
  var element = document.getElementById("header");
  if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
    element.classList.add("active-header");
  } else {
    element.classList.remove("active-header");
  }
}
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

var x, i, j, selElmnt, a, b, c;
/*look for any elements with the class "custom-select":*/
x = document.getElementsByClassName("custom-select");
for (i = 0; i < x.length; i++) {
  selElmnt = x[i].getElementsByTagName("select")[0];
  /*for each element, create a new DIV that will act as the selected item:*/
  a = document.createElement("DIV");
  a.setAttribute("class", "select-selected");
  a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
  x[i].appendChild(a);
  /*for each element, create a new DIV that will contain the option list:*/
  b = document.createElement("DIV");
  b.setAttribute("class", "select-items select-hide");
  for (j = 1; j < selElmnt.length; j++) {
    /*for each option in the original select element,
          create a new DIV that will act as an option item:*/
    c = document.createElement("DIV");
    c.innerHTML = selElmnt.options[j].innerHTML;
    c.addEventListener("click", function(e) {
      /*when an item is clicked, update the original select box,
              and the selected item:*/
      var y, i, k, s, h;
      s = this.parentNode.parentNode.getElementsByTagName("select")[0];
      h = this.parentNode.previousSibling;
      for (i = 0; i < s.length; i++) {
        if (s.options[i].innerHTML == this.innerHTML) {
          s.selectedIndex = i;
          h.innerHTML = this.innerHTML;
          y = this.parentNode.getElementsByClassName("same-as-selected");
          for (k = 0; k < y.length; k++) {
            y[k].removeAttribute("class");
          }
          this.setAttribute("class", "same-as-selected");
          break;
        }
      }
      h.click();
    });
    b.appendChild(c);
  }
  x[i].appendChild(b);
  a.addEventListener("click", function(e) {
    /*when the select box is clicked, close any other select boxes,
            and open/close the current select box:*/
    e.stopPropagation();
    closeAllSelect(this);
    this.nextSibling.classList.toggle("select-hide");
    this.classList.toggle("select-arrow-active");
  });
}
function closeAllSelect(elmnt) {
  /*a function that will close all select boxes in the document,
        except the current select box:*/
  var x,
    y,
    i,
    arrNo = [];
  x = document.getElementsByClassName("select-items");
  y = document.getElementsByClassName("select-selected");
  for (i = 0; i < y.length; i++) {
    if (elmnt == y[i]) {
      arrNo.push(i);
    } else {
      y[i].classList.remove("select-arrow-active");
    }
  }
  for (i = 0; i < x.length; i++) {
    if (arrNo.indexOf(i)) {
      x[i].classList.add("select-hide");
    }
  }
}
/*if the user clicks anywhere outside the select box,
      then close all select boxes:*/
document.addEventListener("click", closeAllSelect);
