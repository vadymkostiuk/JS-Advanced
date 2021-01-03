function deleteImage (event) {
  var targetData = event.target.parentElement.parentElement.getAttribute('data-li-index');

  if (event.target && event.target.classList.contains('delete-button-img')) {
    modalWindow.style.display = "flex";

    btnYes.addEventListener('click', function(){
      modalWindow.style.display = "none";
      event.target.parentElement.parentElement.parentElement.remove();
      images.splice(targetData, 1);
      localStorage.setItem('images', JSON.stringify(images));
    });

    btnNo.addEventListener('click', function () {
      modalWindow.style.display = "none";
    });

  }

}