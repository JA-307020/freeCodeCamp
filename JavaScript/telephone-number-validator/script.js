const userInput = document.getElementById('user-input');
const results = document.getElementById('results-div');
const checkBtn = document.getElementById('check-btn');
const clearResults = document.getElementById('clear-btn');

const validateInput = () => {
  const regex = /^(1?[\s]?)(\(\d{3}\)|(\d{3}))([\s-]?\d{3})([\s-]\d{4})$|^(\d{10})$/gi;
  if (userInput.value === "") {
    alert("Please provide a phone number");
  } else if (regex.test(userInput.value)) {
    results.innerHTML += `<p class="valid">Valid US number:<br>${userInput.value}</p>`;
  } else {
    results.innerHTML += `<p class="invalid">Invalid US number:<br>${userInput.value}</p>`;
  }
}

const resetInput = () => userInput.value = "";

checkBtn.addEventListener("click", () => {  
  validateInput();
  resetInput();
})

userInput.addEventListener("keydown", (e) => {
  if(e.key === "Enter") {
    validateInput();
    resetInput()
  }
})

clearResults.addEventListener("click", () => results.innerHTML = "");