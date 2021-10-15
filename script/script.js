const redLightEl = document.querySelector('#redLight');
const amberLightEl = document.querySelector('#amberLight');
const greenLightEl = document.querySelector('#greenLight');

console.log(redLightEl);
console.log(amberLightEl);
console.log(greenLightEl);

function autoButton(){
    setTimeout(() => {
        redLightEl.classList.add('red-active');
        amberLightEl.classList.remove('amber-active');
        greenLightEl.classList.remove('green-active');
    }, 500);
    setTimeout(() => {
        redLightEl.classList.add('red-active');
        amberLightEl.classList.add('amber-active');
        greenLightEl.classList.remove('green-active');
    }, 2000);
    setTimeout(() => {
        redLightEl.classList.remove('red-active');
        amberLightEl.classList.remove('amber-active');
        greenLightEl.classList.add('green-active');
    }, 3500);
    setTimeout(() => {
        redLightEl.classList.remove('red-active');
        amberLightEl.classList.add('amber-active');
        greenLightEl.classList.remove('green-active');
    }, 5000);
    setTimeout(() => {
        redLightEl.classList.add('red-active');
        amberLightEl.classList.remove('amber-active');
        greenLightEl.classList.remove('green-active');
    }, 6500);
    setTimeout(() => {
        redLightEl.classList.remove('red-active');
        amberLightEl.classList.remove('amber-active');
        greenLightEl.classList.remove('green-active');
    }, 8000);
};

function manualButton(){
    if(redLightEl.classList != 'red red-active' && greenLightEl.classList != 'green green-active'){
        redLightEl.classList.add('red-active');
        amberLightEl.classList.remove('amber-active');
        greenLightEl.classList.remove('green-active');
    } else if(redLightEl.classList == 'red red-active' && amberLightEl.classList != 'amber amber-active'){
        redLightEl.classList.add('red-active');
        amberLightEl.classList.add('amber-active');
        greenLightEl.classList.remove('green-active');
    } else if(redLightEl.classList == 'red red-active' && amberLightEl.classList == 'amber amber-active'){
        redLightEl.classList.remove('red-active');
        amberLightEl.classList.remove('amber-active');
        greenLightEl.classList.add('green-active');
    } else if(greenLightEl.classList == 'green green-active' && redLightEl.classList != 'red red-active'){
        redLightEl.classList.remove('red-active');
        amberLightEl.classList.add('amber-active');
        greenLightEl.classList.remove('green-active');
    }

    console.log(redLightEl);
    console.log(amberLightEl);
    console.log(greenLightEl);
};

function clickRed(){
    redLightEl.classList.toggle('red-active');
}

function clickAmber(){
    amberLightEl.classList.toggle('amber-active');
}

function clickGreen(){
    greenLightEl.classList.toggle('green-active');
}
