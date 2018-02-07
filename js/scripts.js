let searchBox = document.getElementById('mySearch');
let captions = document.querySelectorAll('figcaption');

searchBox.addEventListener("keyup", searchImage);

function searchImage() {
    for (var i=0; i<captions.length; i++) {
        figureText = captions[i].textContent.toLowerCase();
        searchInput = searchBox.value.toLowerCase();
        doesContain = figureText.search(searchInput);
        parentEl = captions[i].parentElement.parentElement;
        if (doesContain === -1) {
            parentEl.classList.add("hideImage");
        } else if (doesContain != -1) {
            parentEl.classList.remove("hideImage");
        }
    }
};

