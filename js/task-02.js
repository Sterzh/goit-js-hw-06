const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientsList = document.querySelector("#ingredients");

const list = ingredients.map((ingredient) => {
  const item = document.createElement("li");
  item.setAttribute("class", "item");
  item.textContent = ingredient;
  return item;
});

ingredientsList.append(...list);
