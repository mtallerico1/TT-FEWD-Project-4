let searchInput = document.getElementById('mySearch').value;
let captions = document.querySelectorAll('figcaption');
let textWords;

// let figureText = captions.textContent;

function searchImage(input) {
    for (i=0; i<=captions.length; i++) {
        figureText = captions[i].textContent;
        // figureText = textWords.textContent;
        if (figureText.search() === searchInput) {
            console.log(yeah);
        }
    };
}

