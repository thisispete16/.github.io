// List of JPEG images
const images = [
  "dailies1.jpg",
  "dailies2.jpg",
  "dailies3.jpg",
  "dailies4.jpg"
];

// Pick a random image
const randomIndex = Math.floor(Math.random() * images.length);
const selectedImage = "images/dailies (1).jpg";

// Set image source
const imgElement = document.getElementById("randomImage");
imgElement.src = selectedImage;
