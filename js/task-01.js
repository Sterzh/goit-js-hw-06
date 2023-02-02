const categoriesNumber = document.querySelectorAll("li.item").length;
console.log(`Number of categories: ${categoriesNumber}`);

const cat = document.querySelectorAll(".item h2");

for (const variable of cat) {
  console.log(`Category: ${variable.textContent}`);
  console.log(`Elements: ${variable.nextElementSibling.children.length}`);
}
