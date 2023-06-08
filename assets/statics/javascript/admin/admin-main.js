var stremingBtn = document.getElementById('streming-btn');

var leavePopup = document.getElementById('leave-popup');
var containEl = document.getElementById('contain-el');

stremingBtn.addEventListener('click', function(event){
    event.preventDefault();
});

leavePopup.addEventListener('click', function(){
    containEl.style.display = 'none';
});