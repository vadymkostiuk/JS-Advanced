// 1. Navigation - done
// 2. Add event listeners - done
// 3. Add item - done
// 4. Display item - done

var itemsList = document.querySelector('.plates');
var addItems = document.querySelector('.add-items');


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
            <li>
                <input type="checkbox" id="item${index}" class="check">
                <label for="item${index}">${plate.text}</label>
            </li>
        `
  }).join('');
  // var input = document.querySelector('.plates li input').value;
  // var p = document.createElement('p');
  // input.appendChild(p);
//   if(!input.checked) {
//   console.log("111")
// } else {
//   console.log(input)
// }

}

populateList(items, itemsList);

addItems.addEventListener('submit', addItem);
// var input = document.querySelectorAll('.plates li');
// var p = document.createElement('p');
// input.forEach(function (item) {
//
//   item.innerHTML = "212";
//   console.log(item);
// })