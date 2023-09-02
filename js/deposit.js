document.getElementById("btn-deposit").addEventListener("click", () => {
  /* 

  1. get the element by id
  2. get the value from element
  3. convert string value to a number
  */

  const newDepositAmount = getInputFieldValueById("deposit-field");

  if (isNaN(newDepositAmount)) {
    alert("please provide a valid number");
    return;
  }
  /* 
  1. get previous deposit total byh id
  */
  const previousDepositTotal = getElementValueById("deposit-total");

  // calculate new deposit total

  const newDepositTotal = previousDepositTotal + newDepositAmount;
  setTextElementValueById("deposit-total", newDepositTotal);

  // get the balance total

  const previousBalanceTotal = getElementValueById("balance-total");
  const currentBalanceTotal = previousBalanceTotal + newDepositAmount;

  setTextElementValueById("balance-total", currentBalanceTotal);
});
