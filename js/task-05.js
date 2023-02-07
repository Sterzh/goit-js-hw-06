const input = document.querySelector("#name-input");
const output = document.querySelector("#name-output");

input.addEventListener("input", onInputCharge);

function onInputCharge(event) {
  console.log(event.currentTarget.value);
  output.textContent = event.currentTarget.value;
}
