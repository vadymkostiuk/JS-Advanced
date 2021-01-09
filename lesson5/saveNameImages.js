function saveImage (event) {

  if (event.target && event.target.classList.contains('save-button-img')) {
    var index = event.target.parentElement.parentElement.parentElement.dataset.liIndex;
    var innerValue = event.target.parentElement.parentElement.children[1].children[0].innerText;
    var nameSplitName = `.${innerValue.split('.')[1]}`;
    var nameSplitExtension = `${innerValue.split('.')[0]}`;

    event.target.parentElement.parentElement.children[1].children[0].setAttribute("contenteditable", "false");
    event.target.parentElement.style.display = "none";
    event.target.parentElement.parentElement.children[3].style.display = "inline-block";

    if (!(innerValue.indexOf('.') > -1)) {
      images[index].name = innerValue + extension;
      event.target.parentElement.parentElement.children[1].children[0].innerHTML = images[index].name;
    } else {
      images[index].name = innerValue;
    }

    if (!(extension===nameSplitName)) {
      images[index].name = nameSplitExtension + extension;
      event.target.parentElement.parentElement.children[1].children[0].innerHTML = images[index].name;
    }

    localStorage.setItem('images', JSON.stringify(images));
  }

}
