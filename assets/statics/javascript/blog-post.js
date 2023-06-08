var shareBtn = document.getElementById('share-link');

shareBtn.addEventListener('click', async function(){
    var url = window.location.href;

    if(navigator.share){
        navigator.share({
            url: url
        });
    }else{
        prompt("Copie a URL Abaixo: ", url);
    }
});

var shareLinkElement = document.querySelectorAll('.share-link-el');

for (let i = 0; i < shareLinkElement.length; i++) {
    const hrefEl = shareLinkElement[i].href += window.location.href
}