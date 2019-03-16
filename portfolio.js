

// slideIndex through showSlides function are for carousel
let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  if (n > slides.length) {slideIndex = 1} 
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none"; 
  }
  slides[slideIndex-1].style.display = "block"; 
} 

// Collapsible description
const coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}

// Get the modal
var modal = document.getElementById('myModal');

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}


const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('nav');
const links = document.querySelectorAll('.link');
const myName = document.querySelector('.name');
let click = false;
hamburger.onclick = () => {
  if(click){
    click = false;
    btn.style.display = "none";
    nav.style.gridTemplateColumns = "1fr 100px";
    nav.style.gridTemplateRows = "1fr";
    nav.style.maxHeight = "1000px";

    links.forEach( link => {
      link.style.display = "none";
    });
    myName.style.gridColumn = "1";    
  }
  else {
    click = true;
    btn.style.display = "block";
    btn.style.fontSize = "1em";
    btn.style.padding = "0";
    btn.style.margin = "0";
    btn.style.alignSelf = "center";
    btn.style.backgroundColor = "#00000000";

    nav.style.gridTemplateColumns = "1fr 1fr 1fr";
    nav.style.gridTemplateRows = "60px 60px";
    nav.style.maxHeight = "1000px";

    links.forEach( link => {
      link.style.display = "block";
      link.style.fontSize = "1em";
      link.style.padding = "0";
      link.style.margin = "0";
      link.style.alignSelf = "center";
    });
     
    myName.style.gridColumn = "1 / span 2";

    hamburger.style.justifySelf = "right";
  }

  
};

