var itemsList = document.querySelector('.plates'),
    addItems = document.querySelector('.add-items'),
    food = document.querySelector( ".plates" ),
    modalWindow = document.querySelector( "#modal-window" ),
    btnYes = document.querySelector( "#yes"),
    btnNo = document.querySelector( "#no");

var items = JSON.parse(localStorage.getItem('items')) || [];

function addItem(event) {
  event.preventDefault();

  var text = this.querySelector('[name=item]').value;
  var item = {
    text: text,
    done: false
  };

  items.push(item);
  populateList(items, itemsList);
  localStorage.setItem('items', JSON.stringify(items));
  this.reset();
}

function populateList(plates, platesList) {

  platesList.innerHTML = plates.map(function (plate, index) {
    return `
            <li data-li-index="${index}" class="container-item">
                <input data-index="${index}" type="checkbox" id="item${index}" class="check">
                <label for="item${index}">${plate.text}</label>
                <img class="edit-button" src="img/edit.png" alt="edit">
                <img class="remove-button" src="img/delete.png" alt="delete">
                <img class="save-button" src="img/save.png" alt="delete">
            </li>
        `
  }).join('');

}

populateList(items, itemsList);

function deleteItem (event) {
  var targetData = event.target.parentNode.getAttribute('data-li-index');

  if (event.target.className != 'remove-button' ) {
    return;
  }

  modalWindow.style.display = "flex";

  btnYes.addEventListener('click', function(){
      event.target.parentNode.remove()
      modalWindow.style.display = "none";
      items.splice(targetData, 1);
      localStorage.setItem('items', JSON.stringify(items));
  });

  btnNo.addEventListener('click', function () {
    modalWindow.style.display = "none";
  });

}

function editItem (event) {
  if (event.target.className != 'edit-button' ) {
    return;
  }

  event.target.parentNode.children[1].setAttribute("contenteditable", "true");
  event.target.parentNode.children[1].focus();
  event.target.style.display = "none";
  event.target.parentNode.children[4].style.display = "block"
  event.target.parentNode.children[3].style.order = "1"

  localStorage.setItem('items', JSON.stringify(items));
}

function saveItem (event) {
  var itemId = event.target.parentNode.children[0].id,
      innerValue = event.target.parentNode.children[1].innerText,
      numId = parseInt(itemId.match(/\d+/));

  if (event.target.className != 'save-button' ) {
    return;
  }

  event.target.parentNode.children[1].setAttribute("contenteditable", "false");
  event.target.style.display = "none";
  event.target.parentNode.children[2].style.display = "block";

  items[numId].text = innerValue;
  localStorage.setItem('items', JSON.stringify(items));
}

function changeCheckbox (event) {

  if (event.target.className != 'check' ) {
    return;
  }

  if(event.target.checked) {
    items[event.target.getAttribute('data-index')].done = true;
    event.target.checked = true;
    console.log()
  } else {
    items[event.target.getAttribute('data-index')].done = false;
  }

  localStorage.setItem('items', JSON.stringify(items));
}

function checkCheckbox () {
  var checkbox = document.querySelectorAll(".check");

  checkbox.forEach(function(item,i){

    if(items[i].done) {
      item.checked = true;
    }

  })
}

checkCheckbox()

addItems.addEventListener('submit', addItem);
food.addEventListener('click', deleteItem);
food.addEventListener('click', editItem);
food.addEventListener('click', saveItem);
food.addEventListener('click', changeCheckbox);