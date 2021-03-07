function deleteImage (event) {
  var targetData = event.target.parentElement.parentElement.parentElement;

  if (event.target && event.target.classList.contains('delete-button-img')) {
    modalWindow.style.display = "flex";
    modalWindow.style.top = `${event.pageY - 200}px`;

    btnYes.addEventListener('click', function(){
      modalWindow.style.display = "none";
      targetData.remove();
      images.splice(targetData.getAttribute('data-li-index'), 1);

      localStorage.setItem('images', JSON.stringify(images));
      window.location.reload()
    });

    btnNo.addEventListener('click', function () {
      modalWindow.style.display = "none";
    });

  }

}