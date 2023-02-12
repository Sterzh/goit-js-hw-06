const categoriesNumber = document.querySelectorAll("li.item").length;
console.log(`Number of categories: ${categoriesNumber}`);

const categories = document.querySelectorAll(".item h2");

for (const variable of categories) {
  console.log(`Category: ${variable.querySelector("h2").textContent}`);
  console.log(`Elements: ${variable.querySelectorAll("li").length}`);
}
