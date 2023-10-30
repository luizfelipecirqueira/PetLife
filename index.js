var elementos = document.querySelectorAll('.duvida');

elementos.forEach(function (duvida){
    duvida.addEventListener('click', function(){
        duvida.classList.toggle("ativa");
    })
});