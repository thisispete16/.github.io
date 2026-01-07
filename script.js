// List of JPEG images
const images = [
  "images/image1.jpg",
  "images/image2.jpg",
  "images/image3.jpg",
  "images/image4.jpg"
];

// Pick a random image
const randomIndex = Math.floor(Math.random() * images.length);
const selectedImage = images[randomIndex];

// Set image source
const imgElement = document.getElementById("randomImage");
imgElement.src = selectedImage;
