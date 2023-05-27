var images = document.querySelectorAll('.gallery img');
var currentImage = 0;

function showImage(index) {
  images[currentImage].classList.remove('active');
  images[index].classList.add('active');
  currentImage = index;
}

function nextImage() {
  var newIndex = (currentImage + 1) % images.length;
  showImage(newIndex);
}

function previousImage() {
  var newIndex = (currentImage - 1 + images.length) % images.length;
  showImage(newIndex);
}
document.addEventListener('DOMContentLoaded', function() {
  var nextButton = document.getElementById('next');
  var previousButton = document.getElementById('previous');

  nextButton.addEventListener('click', nextImage);
  previousButton.addEventListener('click', previousImage);
});
