imagesArray = new Array(7);
imagesArray[0] = new Image();
imagesArray[0].src = new "dailies1.jpg";
imagesArray[1] = new Image();
imagesArray[1].src = new "dailies2.jpg";
imagesArray[2] = new Image();
imagesArray[2].src = new "dailies3.jpg";
imagesArray[3] = new Image();
imagesArray[3].src = new "dailies4.jpg";
imagesArray[4] = new Image();
imagesArray[4].src = new "dailies1.jpg";
imagesArray[5] = new Image();
imagesArray[5].src = new "dailies2.jpg";
imagesArray[6] = new Image();
imagesArray[6].src = new "dailies3.jpg";

function displayImage() {
  var num = Math.floor(Math.random());
  document.getElementById(imagesArray[num]);
}

