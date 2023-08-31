const decreaseButton = document.getElementById('decrease');
const increaseButton = document.getElementById('increase');
const autocounterButton = document.getElementById('autocounter');
const resetButton = document.getElementById('reset');
const counterDisplay = document.getElementById('counter');

let counterValue = 0;
let autocounterId = null;

function updateCounterDisplay() {
    counterDisplay.textContent = counterValue;
}

function decreaseCounter() {
    counterValue--;
    updateCounterDisplay();
}

function increaseCounter() {
    counterValue++;
    updateCounterDisplay();
}

function toggleAutocounter() {
    if (autocounterId === null) {
        autocounterId = setInterval(increaseCounter, 1000);
        autocounterButton.innerHTML = "STOP";
    } else {
        clearInterval(autocounterId);
        autocounterId = null;
        autocounterButton.innerHTML = "Auto-counter";
    }
}

function resetCounter(){
    counterValue = 0;
    updateCounterDisplay();
}

decreaseButton.addEventListener('click', decreaseCounter);
increaseButton.addEventListener('click', increaseCounter);
autocounterButton.addEventListener('click', toggleAutocounter);
resetButton.addEventListener('click', resetCounter);

updateCounterDisplay(); // Initial display