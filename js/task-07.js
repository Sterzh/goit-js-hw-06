const inputFontControl = document.querySelector("#font-size-control");
const outputText = document.querySelector("#text");

inputFontControl.addEventListener("input", outputFontSize);

function outputFontSize(event) {
  outputText.style.fontSize = event.currentTarget.value + "px";
  console.log(event.currentTarget.value);
}
