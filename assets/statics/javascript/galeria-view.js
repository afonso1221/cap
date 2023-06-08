var shareThisGallerySec = document.querySelector('#share-this-gallery-sec');

shareThisGallerySec.addEventListener('click', function(){
    var url = window.location.href;

    if(navigator.share){
        navigator.share({
            url: url
        });
    }else{
        prompt("Copie a URL Abaixo: ", url);
    }
});