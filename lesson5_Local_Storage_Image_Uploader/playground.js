var progress = document.querySelector('.percent'),
    uploader = document.getElementById('uploader'),
    imagesList = document.querySelector('.images'),
    modalWindow = document.querySelector( "#modal-window" ),
    btnYes = document.querySelector( "#yes"),
    btnNo = document.querySelector( "#no"),
    reader,
    extension;

var images = JSON.parse(localStorage.getItem('images')) || [];

function uploadImages() {
  var files = this.files,
      i,
      image,
      fileLength = files.length;

  if(FileReader) {
    for(i = 0; i < fileLength; i += 1) {
      let fileReader = new FileReader(),
          file = files[i];

      fileReader.addEventListener('load', function (event) {
        image = {};
        image['name'] = file.name;
        image['size'] = file.size;
        image['url'] = event.target.result;
        images.push(image);
        displayImages(images, imagesList);
        localStorage.setItem('images', JSON.stringify(images));
      });

      fileReader.readAsDataURL(file);
    }
  } else {
    alert('FileReader API does not support by your browser!');
  }
}

displayImages(images, imagesList);

uploader.addEventListener('change', uploadImages);
imagesList.addEventListener('click', deleteImage);
imagesList.addEventListener('click', editImage);
imagesList.addEventListener('click', saveImage);
imagesList.addEventListener('click', scaleImage);