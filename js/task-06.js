const inputEl = document.querySelector("#validation-input");

inputEl.addEventListener("blur", onInputBlur);

const currentLength = Number(inputEl.dataset.length);

function onInputBlur(event) {
  const inputLength = event.currentTarget.value.trim().length;

  if (inputLength === 0) {
    inputEl.classList.remove("invalid");
    inputEl.classList.remove("valid");
  } else if (inputLength === currentLength) {
    inputEl.classList.add("valid");
    inputEl.classList.remove("invalid");
  } else {
    inputEl.classList.add("invalid");
    inputEl.classList.remove("valid");
  }
}
