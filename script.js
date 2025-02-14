"use strict";

const billInput = document.querySelector("#bill-input");
const billNumber = document.querySelector("#bill-number");
const tipBtn = document.querySelectorAll(".tip-btn");

const btnCustom = document.querySelector(".btn-custom");
const btnActive = document.querySelector(".btn-active");

const amountPerson = document.querySelector(".amountPerPerson");
const tipTotal = document.querySelector(".tip-total");

const numZero = document.querySelector(".numZero");
const reset = document.querySelector(".reset");

let bill, percentage, number;
let tipAmount, totalAmount, amountPerPerson;

billInput.addEventListener("input", function () {
  //   console.log(this.value);
  bill = Number(this.value);
  calculateTip();
});

billNumber.addEventListener("input", function () {
  //   console.log(this.value);
  number = Number(this.value);
  calculateTip();
});

btnCustom.addEventListener("input", function () {
  //   console.log(this.value);
  percentage = Number(this.value);
  calculateTip();
});

for (let i = 0; i < tipBtn.length; i++) {
  // tipBtn[i].onclick = function myFunction() {
  //   // console.log(this.value);
  //   // percentage = Number(this.value);
  //   percentage = Number(this.value);
  //   tipBtn[i].classList.toggle("btn-active");
  //   // tipBtn[i].classList.add("btn-15");

  //   calculateTip();
  // };

  tipBtn[i].addEventListener("click", function () {
    // console.log(this.value);
    percentage = Number(this.value);
    tipBtn[i].classList.toggle("btn-active");

    calculateTip();
  });
}

function calculateTip(
  billAmount = bill,
  tipPercentage = percentage,
  numPeople = number
) {
  if (numPeople === 0) {
    numZero.classList.remove("numZ");
    // numZero.textContent = "Can't be zero";
  } else {
    tipAmount = (tipPercentage / 100) * billAmount;
    let formattedtipAmount = tipAmount.toFixed(2);
    // console.log(formattedtipAmount);

    totalAmount = billAmount + tipAmount;
    let formattedtotalAmount = totalAmount.toFixed(2);
    // console.log(billAmount);
    // console.log(formattedtotalAmount);

    amountPerPerson = totalAmount / numPeople;
    let formattedamountPerPerson = amountPerPerson.toFixed(2);
    // console.log(formattedamountPerPerson);

    amountPerson.textContent = `$${formattedamountPerPerson}`;
    tipTotal.textContent = `$${formattedtotalAmount}`;

    numZero.classList.add("numZ");
    // numZero.textContent = "Can't be empty";
  }
}

reset.addEventListener("click", function () {
  bill = percentage = number = " ";
  billInput.value = null;
  billInput.placeholder = " 142.55";

  billNumber.value = null;
  billNumber.placeholder = "5";

  btnCustom.value = null;
  btnCustom.placeholder = "Custom";

  tipAmount = totalAmount = amountPerPerson = " ";
  amountPerson.textContent = "0.00";
  tipTotal.textContent = "0.00";

  numZero.classList.add("numZ");
});
