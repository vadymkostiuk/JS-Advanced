function displayImages(images, imagesList) {
  imagesList.innerHTML = images.map(function (image, index) {
    return `
            <li data-li-index="${index}">
                <figure>
                    <img class="img" src=${image.url} alt="Image ${index + 1}">
                    <figcaption>
                        <p class="nameImg">${image.name}</p>
                        <p>${(image.size / 1000).toFixed(1)} kB</p>
                    </figcaption>
                    <button class="remove-button"><img class="delete-button-img" src="./img/delete.png" alt="deleteImg"></button>
                    <button class="edit-button"><img class="edit-button-img" src="./img/edit.png" alt="editImg"></button>
                    <button class="save-button"><img class="save-button-img" src="./img/save.png" alt="saveImg"></button>
                </figure>
            </li>
            
        `
  }).join('');
}
