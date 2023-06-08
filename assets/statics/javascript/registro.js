var getStarted = document.getElementById('get-started');

var section1 = document.querySelector('#section-1')
var section2 = document.querySelector('#section-2')
var section3 = document.querySelector('#section-3')

getStarted.addEventListener('click', function () {
    section1.style.opacity = '0'

    setTimeout(() => {
        section1.style.display = 'none'
        section2.style.display = 'block'

        setTimeout(() => {
            section2.style.opacity = '1'
        }, 100);
    }, 300);
});