function editImage (event) {

  if (event.target && event.target.classList.contains('edit-button-img')) {
    var index = event.target.parentElement.parentElement.parentElement.dataset.liIndex;
    extension = `.${images[index].name.split('.')[1]}`;

    event.target.parentElement.parentElement.children[1].children[0].setAttribute("contenteditable", "true");
    event.target.parentElement.parentElement.children[1].children[0].focus();
    event.target.parentElement.style.display = "none";
    event.target.parentElement.parentElement.children[4].style.display = "inline-block"

    localStorage.setItem('images', JSON.stringify(images));
  }

}
