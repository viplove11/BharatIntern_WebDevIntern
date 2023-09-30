let celciusInput = document.querySelector('#celcius > input');
let fahInput = document.querySelector('#fahrenhiet > input');
let kelvinInput = document.querySelector('#kelvin > input');


let btn = document.querySelector('.button button')

function roundNumber(number)
{
    return Math.round(number*100)/100;
}

celciusInput.addEventListener('input', function(){
    let ctemp = parseFloat(celciusInput.value);
    let ftemp = (ctemp*(9/5))+32;
    let ktemp = ctemp + 273.15

    fahInput.value = roundNumber(ftemp);
    kelvinInput.value = roundNumber(ktemp);
})

fahInput.addEventListener('input', function(){
    let ftemp = parseFloat(fahInput.value);
    let ctemp = (ftemp-32)*(5/9);
    let ktemp = (ftemp -32) * (5/9) + 273.15

    celciusInput.value = roundNumber(ctemp);
    kelvinInput.value = roundNumber(ktemp);
})

kelvinInput.addEventListener('input', function(){
    let ktemp = parseFloat(kelvinInput.value);
    let ctemp = ktemp - 273.15
    let ftemp = (ktemp - 273.15) *(9/5) + 32;

    celciusInput.value = roundNumber(ctemp);
    fahInput.value = roundNumber(ftemp);
})

btn.addEventListener('click', ()=>{
    celciusInput.value = ""
    fahInput.value = ""
    kelvinInput.value = ""
})