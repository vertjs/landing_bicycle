const button = document.querySelector(".saddle__btn")
const inp = document.querySelector(".saddle__input")
const req = document.querySelector(".email")

function validateEmail(email) {
    let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    
    if( re.test(String(email).toLowerCase()) === false ) {
        inp.classList.add('warning')
    } else inp.classList.remove('warning')
  
}


button.addEventListener('click', (e) => {
    e.preventDefault()
    validateEmail(req.value)
})