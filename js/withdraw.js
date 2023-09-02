document.getElementById("btn-withdraw").addEventListener("click", () => {
  // getting withdraw amount from withdraw input field

  const newWithdrawAmount = getInputFieldValueById("withdraw-field");

  if (isNaN(newWithdrawAmount)) {
    alert("Please provide a valid number");
    return;
  }
  const previousWithdrawTotal = getElementValueById("withdraw-total");

  const newWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;

  setTextElementValueById("withdraw-total", newWithdrawTotal);
  // get total balance

  const previousBalanceTotal = getElementValueById("balance-total");
  const currentBalanceTotal = previousBalanceTotal - newWithdrawAmount;

  setTextElementValueById("balance-total", currentBalanceTotal);
});
