// Image slider
var currentImageIndex = 0;
var images = document.querySelectorAll("#portfolio img");

function nextImage() {
  images[currentImageIndex].classList.remove("active");
  currentImageIndex++;
  if (currentImageIndex >= images.length) {
    currentImageIndex = 0;
  }
  images[currentImageIndex].classList.add("active");
}

setInterval(nextImage, 2000);

// Form validation
var form = document.querySelector("form");
form.addEventListener("submit", function(event) {
  event.preventDefault();
  var name = form.elements.name.value;
  var email = form.elements.email.value;
  var message = form.elements.message.value;
  if (name && email && message) {
    alert("Thank you for contacting us! We will get back to you soon.");
  } else {
    alert("Please fill out all fields before submitting the form.");
  }
});
