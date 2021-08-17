const billAmount = document.querySelector("#bill-amount");
const cashGiven = document.querySelector("#cash-given");
const nextButton = document.querySelector("#next-btn");
const checkButton = document.querySelector("#check-btn");
const message = document.querySelector("#error-message");
const cashDiv = document.querySelector("#cash-div");
const noOfNotes = document.querySelectorAll(".no-of-notes");
const noteTable = document.querySelector("#note-table");

const availableNotes = [2000, 500, 100, 20, 10, 5, 1];

noteTable.style.display = "none";
cashDiv.style.display = "none";

nextButton.addEventListener("click", function validateBill() {
  if (billAmount.value > 0) {
    cashDiv.style.display = "block";
  } else {
    showMessage("Invalid Bill Amount");
  }
});

checkButton.addEventListener("click", function validateCash() {
  message.style.display = "none";
  if (cashGiven.value > billAmount.value) {
    const amountReturn = cashGiven.value - billAmount.value;
    calculateChange(amountReturn);
    noteTable.style.display = "block";
  } else {
    noteTable.style.display = "none";
    showMessage("cash should be more than bill amount");
  }
});

function showMessage(messageText) {
  message.style.display = "block";
  message.innerText = messageText;
}

function calculateChange(amountReturn) {
  for (var i = 0; i < availableNotes.length; i++) {
    const number0fNotes = Math.trunc(amountReturn / availableNotes[i]);
    amountReturn %= availableNotes[i];
    noOfNotes[i].innerText = number0fNotes;
  }
}
