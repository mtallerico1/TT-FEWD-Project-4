let searchBox = document.getElementById('mySearch');
let captions = document.querySelectorAll('figcaption');

searchBox.addEventListener("keyup", searchImage);

function searchImage() {
    for (var i=0; i<captions.length; i++) {
        figureText = captions[i].textContent;
        searchInput = searchBox.value;
        doesContain = figureText.search(searchInput);
        if (doesContain === -1) {
            console.log('does not contain');
        } else {
            console.log(figureText);
        }
    }
};

