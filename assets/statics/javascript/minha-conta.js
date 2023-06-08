var profilePhoto = document.querySelector('#profile-photo');
var profileForm_ = document.querySelector('#profile-pic-form');

profilePhoto.addEventListener('change', function(){
    profileForm_.submit();
});