// Get DOM elements
const checkboxInputs = document.getElementById("checkboxInputs");
const shuffleValues = document.getElementById("shuffleValues");
const changeValues = document.getElementById("changeValues");
const showValues = document.getElementById("showValues");
const selectedValuesDiv = document.getElementById("selectedValues");

// Read checkbox values
let inputElements = checkboxInputs.querySelectorAll("input");
const inputValues = Array.from(inputElements).map(input => input.value);
const selectedValues = [];

// Event listeners
showValues.addEventListener("click", showSelectedValues);
changeValues.addEventListener("click", changeCheckboxValues);
shuffleValues.addEventListener("click", shuffleInputValues);

// Show selected checkboxes
function showSelectedValues() {
  selectedValues.length = 0; // Clear the array

  inputElements.forEach(input => {
    if (input.checked) {
      selectedValues.push(input.value);
    }
  });
  selectedValuesDiv.textContent = `Selected Values: ${selectedValues}`;
}

// Change values of checkboxes
function changeCheckboxValues() {
  inputValues.forEach((value, index) => {
    inputValues[index] = value.toUpperCase();
  });
  updateCheckboxLabels();
}

// Shuffle array elements
function shuffleInputValues() {
  shuffle(inputValues);
  updateCheckboxLabels();
}

function shuffle(array) {
  let j, x, i;
  for (i = array.length - 1; i > 0; i--) {
    j = Math.floor(Math.random() * (i + 1));
    x = array[i];
    array[i] = array[j];
    array[j] = x;
  }
  return array;
}

// Update checkbox labels
function updateCheckboxLabels() {
  const labels = checkboxInputs.querySelectorAll("label");
  labels.forEach((label, index) => {
    label.innerHTML = `<input type="checkbox" value="${inputValues[index]}" name="pabau">${inputValues[index]}`;
  });
  const checkboxes = checkboxInputs.querySelectorAll("input[type='checkbox']");
  checkboxes.forEach((checkbox, index) => {
    checkbox.value = inputValues[index];
  });
  inputElements = checkboxes;
}
