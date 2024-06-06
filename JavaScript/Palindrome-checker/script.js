const textInput = document.getElementById("text-input");
const checkBtn = document.getElementById("check-btn");
const result = document.getElementById("result");


const checkUserInput = () => {
  if (textInput.value === "" || textInput.value === " ") {
    alert("Please input a value");
  }
}

const normalizeUserInput = () => {
  const regex = /[\W\s_]/g;
  const formattedInput = textInput.value.replaceAll(regex, '').toLowerCase();
  return formattedInput;
}

const reverse = () => {
  const initial = normalizeUserInput();
  const reversed = initial.split('').reverse().join('');
  return reversed;
}

const compareStrings = () => {
  const formattedInput = normalizeUserInput();
  const reversed = reverse();
  if (formattedInput === reversed) {
   return result.innerHTML = `<p><strong>${textInput.value}</strong> is a palindrome</p>`;
  } else {
    return result.innerHTML = `<p><strong>${textInput.value}</strong> is not a palindrome</p>`;
  }
}

const resetInput = () => {
  textInput.value = '';
}

checkBtn.addEventListener("click", () => {
   checkUserInput()
   normalizeUserInput();
   reverse();
   compareStrings();
   resetInput();;
  });

textInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    checkUserInput();
    normalizeUserInput();
    reverse();
    compareStrings();
    resetInput();
  }
});