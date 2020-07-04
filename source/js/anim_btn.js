const animateButton = function(e) {
    e.preventDefault

    //перезапуск анимации
    e.target.classList.remove('animate')
    e.target.classList.add('animate')

    setTimeout(function(){
        e.target.classList.remove('animate')
    }, 700)
}

const btn = document.getElementsByClassName("btn")

for (var i = 0; i < btn.length; i++) {
    btn[i].addEventListener('click', animateButton, false)
}