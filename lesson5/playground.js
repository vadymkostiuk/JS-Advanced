
var reader;
var progress = document.querySelector('.percent');

var extension;
var uploader = document.getElementById('uploader');
var imagesList = document.querySelector('.images');
var modalWindow = document.querySelector( "#modal-window" ),
    btnYes = document.querySelector( "#yes"),
    btnNo = document.querySelector( "#no");

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

      function updateProgress(evt) {

        if (evt.lengthComputable) {
          var percentLoaded = Math.round((evt.loaded / evt.total) * 100);

          if (percentLoaded < 100) {
            progress.style.width = percentLoaded + '%';
            progress.textContent = percentLoaded + '%';
          }
        }
      }

      function handleFileSelect(evt) {
        progress.style.width = '0%';
        progress.textContent = '0%';
        reader = new FileReader();

        reader.onprogress = updateProgress;

        reader.onloadstart = function(e) {
          document.getElementById('progress_bar').className = 'loading';
        };

        reader.onload = function(e) {
          progress.style.width = '100%';
          progress.textContent = '100%';
          setTimeout("document.getElementById('progress_bar').className='';", 2000);
        }

        reader.readAsDataURL(evt.target.files[0]);
      }

      uploader.addEventListener('change', handleFileSelect, false);
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





