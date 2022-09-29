const billInput = document.getElementById('bill-input');
const peopleInput = document.getElementById('people-input');
const tipPerperson = document.getElementById('calculated-tip');
const totalPerPerson = document.getElementById('calculated-total');
const selectTipBtns = document.querySelectorAll('.tip-btn');
const customBtn = document.getElementById('custom-percent');
const btnReset = document.querySelector('.reset');
const error = document.querySelector('.error');

billInput.addEventListener('input', handleBillInput);
peopleInput.addEventListener('input', handlePeopleInput);
selectTipBtns.forEach((eachBtn) => {
	eachBtn.addEventListener('click', handleClick);
});
customBtn.addEventListener('input', handleCustom);
btnReset.addEventListener('click', handleReset);

billInput.value = '0';
peopleInput.value = '1';
tipPerperson.innerHTML = '$' + (0.0).toFixed(2);
totalPerPerson.innerHTML = '$' + (0.0).toFixed(2);

let billValue = 0.0;
let peopleValue = 1;
let tipValue = 0.15;

function handleBillInput() {
	billValue = parseFloat(billInput.value);
	calculateTip();
}

function handlePeopleInput() {
	peopleValue = parseFloat(peopleInput.value);
	calculateTip();
	if (peopleValue < 1) {
		error.classList.remove('hidden');
	} else {
		error.classList.add('hidden');
	}
}

function handleCustom() {
	tipValue = parseFloat(customBtn.value) / 100;
	selectTipBtns.forEach((eachBtn) => {
		eachBtn.classList.remove('active-tip');
	});
	calculateTip();
}

function handleClick(event) {
	selectTipBtns.forEach((eachBtn) => {
		eachBtn.classList.remove('active-tip');
		if (event.target.innerHTML === eachBtn.innerHTML) {
			eachBtn.classList.add('active-tip');
			tipValue = parseFloat(eachBtn.innerHTML) / 100;
		}
	});
	calculateTip();
}

function calculateTip() {
	if (peopleValue >= 1) {
		let tipAmount = (billValue * tipValue) / peopleValue;
		let totalAmount = billValue / peopleValue + tipAmount;
		tipPerperson.innerHTML = '$' + tipAmount.toFixed(2);
		totalPerPerson.innerHTML = '$' + totalAmount.toFixed(2);
	}
}

function handleReset() {
	billValue = 0.0;
	handleBillInput();
	peopleValue = 1;
	handlePeopleInput();
	customBtn.value = '';
}
