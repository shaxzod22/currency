let elInput = document.querySelector('.input');
let elBtn = document.querySelector('.btn');
let elSelect = document.querySelector('.select')
let result = document.querySelector('.result')

const USDTOUZS = 11450.00
const EUROTOUZS = 12514.85
const RUBLTOUZS = 151.14

elBtn.addEventListener('click' , function(event) {
    event.preventDefault()
    
    let elValueSelect = elSelect.value
    let elValueInput = elInput.value
    
    if(elValueSelect === 'usd'){
        result.textContent = `~ ${Math.round(elValueInput * USDTOUZS)} so'm`
    } else if(elValueSelect === 'euro'){
        result.textContent = `~ ${Math.round(elValueInput * EUROTOUZS)} so'm`
    } else{
        result.textContent = `~ ${Math.round(elValueInput * RUBLTOUZS)} so'm`
    }
})