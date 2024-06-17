const changeDue = document.getElementById("change-due");
const cash = document.getElementById("cash");
const purchaseBtn = document.getElementById("purchase-btn");
let price = 1.87;
document.getElementsByClassName("display").innerHTML = `<p>Total: ${price}</p>`;
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

const initialCheck = () => {
  if (cash.value < price) {
    alert("Customer does not have enough money to purchase this item");
    return;
  }
  if (cash.value === price) {
    changeDue.innerHTML = `<p>No change due - customer paid with exact cash</p>`;
    return;
  }
}

purchaseBtn.addEventListener("click", () => {
  initialCheck();

})

//TODO: fix the price display