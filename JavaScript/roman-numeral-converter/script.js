const numberInput = document.getElementById("number");
const convertBtn = document.getElementById("convert-btn");
const output = document.getElementById("output");

const checkInput = () => {
  const regex = /\./;
  if (numberInput.value === "" || numberInput.value === " " || regex.test(numberInput.value)) {
    output.innerHTML = `<p>Please enter a valid number</p>`;
    output.style.display = 'block';
    output.classList.add("warning");
    return true;
  } else if (numberInput.value <= 0 ) {
    output.innerHTML = `<p>Please enter a number greater than or equal to 1</p>`;
    output.style.display = 'block';
    output.classList.add("warning");
    return true;
  } else if (numberInput.value >= 4000) {
    output.innerHTML = `<p>Please enter a number less than or equal to 3999</p>`;
    output.style.display = 'block';
    output.classList.add("warning");
    return true;
  } else {
    output.classList.remove('warning');
    output.style.display = "block";
  }
  return false;
}

 const convertToRomanNumeral = () => {
  const input = numberInput.value;
  const thousandsRoman = ["", "M", "MM", "MMM"];
  const hundredsRoman = ["", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"];
  const tensRoman = ["", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"];
  const onesRoman = ["", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"];

  const calculateThousands = Math.floor(input / 1000);
  const calculateHundreds = Math.floor((input % 1000) / 100);
  const calculateTens = Math.floor((input % 100) / 10);
  const thousands = thousandsRoman[calculateThousands];
  const hundreds = hundredsRoman[calculateHundreds];
  const tens = tensRoman[calculateTens];
  const ones = onesRoman[input % 10];      
  const converted = thousands + hundreds + tens + ones;   
  return converted;
 }

const displayOutput = () => {
  if(!checkInput()){
    output.innerHTML = `<p>${convertToRomanNumeral()}</p>`
  }
}

convertBtn.addEventListener("click", () => {
  checkInput();
  convertToRomanNumeral();
  displayOutput();
})

numberInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    e.preventDefault();
    checkInput();
    convertToRomanNumeral();
    displayOutput();
  } 
})