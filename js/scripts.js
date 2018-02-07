let searchBox = document.getElementById('mySearch');
let captions = document.querySelectorAll('figcaption');

searchBox.addEventListener("keyup", searchImage);

function searchImage() {
    for (var i=0; i<captions.length; i++) {
        let figureText = captions[i].textContent.toLowerCase();
        let searchInput = searchBox.value.toLowerCase();
        let doesContain = figureText.search(searchInput);
        let parentEl = captions[i].parentElement.parentElement;
        if (doesContain === -1) {
            parentEl.classList.add("hideImage");
        } else if (doesContain != -1) {
            parentEl.classList.remove("hideImage");
        }
    }
}

