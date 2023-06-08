const inputFile     = document.getElementById('inputFile');
const imagesPlace   = document.querySelector('.images-content');
const imagesLength  = document.querySelector('.images-length b');

function setHtml(url){
    const imageHtml = `
        <div class="image-show">
            <img src="${url}" alt="">
        </div>
    `
    imagesPlace.innerHTML += imageHtml
}

inputFile.addEventListener('change', function(event){
    const files = event.target.files;
    var actualNum = parseInt(imagesLength.textContent) + files.length
    
    imagesLength.innerHTML = actualNum 

    Array.from(files).forEach(function(file){
        const imageURL = URL.createObjectURL(file);
        setHtml(imageURL);
    })
});

