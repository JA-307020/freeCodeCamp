const changeDue = document.getElementById("change-due");
const cash = document.getElementById("cash");
const purchaseBtn = document.getElementById("purchase-btn");
const availableCurrency = document.getElementById("available-currency");
let price = 1.87;
let cid = [
  ["PENNY", 1.01],
  ["NICKEL", 2.05],
  ["DIME", 3.1],
  ["QUARTER", 4.25],
  ["ONE", 90],
  ["FIVE", 55],
  ["TEN", 20],
  ["TWENTY", 60],
  ["ONE HUNDRED", 100]
];

const currency = [
  ["PENNY", 0.01],
  ["NICKEL", 0.05],
  ["DIME", 0.1],
  ["QUARTER", 0.25],
  ["ONE", 1],
  ["FIVE", 5],
  ["TEN", 10],
  ["TWENTY", 20],
  ["ONE HUNDRED", 100]
];

const availableCid = cid.slice();


// const previewCid = () => {
//   availableCurrency.innerHTML = `
//     <li>Pennies: ${availableCid[0][1]}</li>
//     <li>Nickels: ${availableCid[1][1]}</li>
//     <li>Dimes: ${availableCid[2][1]}</li>
//     <li>Quarters: ${availableCid[3][1]}</li>
//     <li>Ones: ${availableCid[4][1]}</li>
//     <li>Fives: ${availableCid[5][1]}</li>
//     <li>Tens: ${availableCid[6][1]}</li>
//     <li>Twenties: ${availableCid[7][1]}</li>
//     <li>Hundreds: ${availableCid[8][1]}</li>
//     `
// }


const initialCheck = () => {
  const cashFromCustomer = Number.parseFloat(cash.value);
  if (cashFromCustomer < price) {
    alert("Customer does not have enough money to purchase this item");
    return;
  }
  if (cashFromCustomer === price) {
    changeDue.innerHTML = `<p>No change due - customer paid with exact cash</p>`;
    return;
  }
  const changeToGive = cashFromCustomer - price;
  return changeToGive;
}

purchaseBtn.addEventListener("click", () => {
  initialCheck();
  console.log(initialCheck());
})