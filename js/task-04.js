const decrementButton = document.querySelector("[data-action='decrement']");

const value = document.querySelector("#value");

const incrementButton = document.querySelector("[data-action='increment']");

let counterValue = 0;

const decrement = () => {
  counterValue -= 1;
  value.textContent = counterValue;
};
const increment = () => {
  counterValue += 1;
  value.textContent = counterValue;
};

decrementButton.addEventListener("click", decrement);
incrementButton.addEventListener("click", increment);
