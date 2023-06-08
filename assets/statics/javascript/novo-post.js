var includeMidea = document.getElementById('include-midea');
var clickIncludeMidea = document.getElementById('click-include-midea');
var arrayimages = document.querySelector('#array-images');

clickIncludeMidea.addEventListener('click', function(){
    includeMidea.click();
});

includeMidea.addEventListener('change', function(e){
    const files = e.target.files;
    
    Array.from(files).forEach(function(file){
        const imageURL = URL.createObjectURL(file);
        
        arrayimages.innerHTML += `
            <div class="block -click-opacity">
                <a href="${imageURL}" data-lightbox="newpost-preview"><img src="${imageURL}" alt=""></a>
            </div>
        `
    })
});