const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

// const list = ingredients.map((ingredient) => {
// const list = document.createElement("li");
// console.log(list);
for (const variable of ingredients) {
  const list = document.createElement("li");
  list.textContent = variable;
  console.log(list);
}

console.log(li);
// console.log(list);
// const createLi = () =>
//   for (const variable of ingredients) {
//     const li = document.createElement("li");
//     li.textContent = variable;
//     console.log(li);
// };

// console.log(createLi);
