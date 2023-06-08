var days = document.querySelectorAll('.week-items a');
var days_c = document.querySelectorAll('.separators .day');
var colapseButton = document.getElementById('colapse-button');

for (let i = 0; i < days.length; i++) {
    days[i].addEventListener('click', function(){
        if(innerWidth <= 991){
            colapseButton.click();
        }

        days_c.forEach(function(element){
            element.style.display = 'none'
        });

        if(days_c[i]){
            days_c[i].style.display = 'block'
        }else{
            days_c.forEach(function(element){
                element.style.display = 'block'
            });
        }
    })    
}