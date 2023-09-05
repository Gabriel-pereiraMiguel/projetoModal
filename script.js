let botaoOpen = document.querySelector('#open-btn')
let modalCont = document.getElementById('modal-container')
let botaoClose = document.getElementById('close-btn')

botaoOpen.addEventListener('click', function(){
    modalCont.style.display='block'
})

botaoClose.addEventListener('click', sairModal)

function sairModal(){
    modalCont.style.display='none'
}

window.addEventListener('click', function(e){
    if(e.target === modalCont){
        modalCont.style.display='none'
    }
})

