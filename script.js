'use strict';

const billInput = document.querySelector('#bill-input');
const billNumber = document.querySelector('#bill-number');
const tipBtn = document.querySelectorAll('.tip-btn');
const Btn = document.querySelectorAll('button');

const btnCustom = document.querySelector('.btn-custom');
const btnActive = document.querySelector('.btn-active');

const amountPerson = document.querySelector('.amountPerPerson');
const tipTotal = document.querySelector('.tip-total');

const numZero = document.querySelector('.numZero');
const reset = document.querySelector('.reset');

let bill, percentage, number;
let tipAmount, totalAmount, amountPerPerson;

billInput.addEventListener('input', function () {
  //   console.log(this.value);
  bill = Number(this.value);
  calculateTip();
});

billNumber.addEventListener('input', function () {
  //   console.log(this.value);
  number = Number(this.value);
  calculateTip();
});

btnCustom.addEventListener('input', function () {
  //   console.log(this.value);
  percentage = Number(this.value);
  calculateTip();
});

for (let i = 0; i < tipBtn.length; i++) {
  tipBtn[i].addEventListener('click', function () {
    // console.log(this.value);
    percentage = Number(this.value);
    // tipBtn[i].classList.toggle("btn-active");
    tipBtn.forEach(function (e) {
      e.classList.remove('btn-active');
    });
    this.classList.add('btn-active');

    calculateTip();
  });
}

function calculateTip(
  billAmount = +bill,
  tipPercentage = +percentage,
  numPeople = +number
) {
  if (numPeople == 0) {
    numZero.classList.remove('numZ');
    return;
  } else if (!isNaN(billAmount) && !isNaN(tipPercentage) && !isNaN(numPeople)) {
    tipAmount = (tipPercentage / 100) * billAmount;
    const formattedTipAmount = tipAmount / numPeople;

    totalAmount = billAmount + tipAmount;
    const formattedTotalAmount = totalAmount;

    amountPerPerson = totalAmount / numPeople;
    const formattedAmountPerPerson = amountPerPerson;

    amountPerson.textContent = `$${+formattedTipAmount.toFixed(2)}`;
    tipTotal.textContent = `$${+formattedAmountPerPerson.toFixed(2)}`;

    numZero.classList.add('numZ');
  }
}

reset.addEventListener('click', function () {
  bill = percentage = number = ' ';
  billInput.value = null;
  billInput.placeholder = '0';

  billNumber.value = null;
  billNumber.placehoslder = '0';

  btnCustom.value = null;
  btnCustom.placeholder = 'Custom';

  tipAmount = totalAmount = amountPerPerson = ' ';

  amountPerson.textContent = '$0.00';
  tipTotal.textContent = '$0.00';

  numZero.classList.add('numZ');

  tipBtn.forEach(function (e) {
    e.classList.remove('btn-active');
  });
});
