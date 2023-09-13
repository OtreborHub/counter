
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
        autoCounterButton.innerHTML = "STOP";
    } else {
        clearInterval(autocounterId);
        autocounterId = null;
        autoCounterButton.innerHTML = "Auto-counter";
    }
}

function resetCounter(){
    counterValue = 0;
    updateCounterDisplay();
}


//------------------------------------------------------------------------------------------------------
// Creazione degli elementi HTML
const mainContainer = document.createElement('div');
mainContainer.classList.add('text-white', 'text-center');

const h1 = document.createElement('h1');
const spanTitle = document.createElement('span');
spanTitle.classList.add('title');
spanTitle.textContent = 'THE COUNTER!';
h1.textContent = 'Welcome to ';
h1.appendChild(spanTitle);

const container = document.createElement('div');
container.classList.add('container', 'py-5');

const row = document.createElement('div');
row.classList.add('row');

const colLeft = document.createElement('div');
colLeft.classList.add('col-6', 'col-left');

const increaseButton = document.createElement('button');
increaseButton.id = 'increase';
increaseButton.classList.add('btn', 'btn-outline-light', 'btn-block');
increaseButton.innerHTML = `
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="orange" class="bi bi-plus-square-fill" viewBox="0 0 16 16">
    <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm6.5 4.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3a.5.5 0 0 1 1 0z"/>
  </svg> 
  Increase
`;

const decreaseButton = document.createElement('button');
decreaseButton.id = 'decrease';
decreaseButton.classList.add('btn', 'btn-outline-light', 'btn-block');
decreaseButton.innerHTML = `
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="orange" class="bi bi-dash-square-fill" viewBox="0 0 16 16">
    <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm2.5 7.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1 0-1z"/>
  </svg> 
  Decrease
`;

const colRight = document.createElement('div');
colRight.classList.add('col-6', 'col-right');

const counterDisplay = document.createElement('div');
counterDisplay.id = 'value';
counterDisplay.classList.add('display-4');
counterDisplay.textContent = '0';

const manageCounterContainer = document.createElement('div');
manageCounterContainer.classList.add('container', 'manage-counter', 'py-5');

const manageCounterRow = document.createElement('div');
manageCounterRow.classList.add('row');

const manageCounterColLeft = document.createElement('div');
manageCounterColLeft.classList.add('col-6', 'col-left');

const resetButton = document.createElement('button');
resetButton.id = 'reset';
resetButton.classList.add('btn', 'btn-outline-light', 'btn-block');
resetButton.textContent = 'Reset';

const manageCounterColRight = document.createElement('div');
manageCounterColRight.classList.add('col-6', 'col-right');

const autoCounterButton = document.createElement('button');
autoCounterButton.id = 'autocounter';
autoCounterButton.classList.add('btn', 'btn-outline-light', 'btn-block');
autoCounterButton.textContent = 'Auto-counter';

// Aggiunta degli elementi al DOM
colLeft.appendChild(increaseButton);
colLeft.appendChild(decreaseButton);

colRight.appendChild(counterDisplay);

row.appendChild(colLeft);
row.appendChild(colRight);

container.appendChild(row);

manageCounterColLeft.appendChild(resetButton);
manageCounterColRight.appendChild(autoCounterButton);

manageCounterRow.appendChild(manageCounterColLeft);
manageCounterRow.appendChild(manageCounterColRight);

manageCounterContainer.appendChild(manageCounterRow);

// Aggiunta dei container principali al DOM
mainContainer.appendChild(h1);
mainContainer.appendChild(container);

document.body.appendChild(mainContainer);
document.body.appendChild(manageCounterContainer);
//------------------------------------------------------------------------------------------------------
// createTitle(); // Initial display

decreaseButton.addEventListener('click', decreaseCounter);
increaseButton.addEventListener('click', increaseCounter);
autoCounterButton.addEventListener('click', toggleAutocounter);
resetButton.addEventListener('click', resetCounter);

updateCounterDisplay(); 