function scaleImage (event) {

  if (event.target && event.target.classList.contains('img')) {
   event.target.classList.toggle('scale-img');
  }

}