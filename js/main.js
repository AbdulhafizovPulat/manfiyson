const elForm = document.querySelector("#form");
const elInput = document.querySelector("#input");
const elnumb = document.querySelector("#info");
const elFind = document.querySelector("#find-btn");
const elFinder = document.querySelector("#finder-number");
const elLabel = document.querySelector("#label");

const massiv = [];
elForm.addEventListener("submit", function (evt) {
  evt.preventDefault();
  elLabel.className = "form__label d-flex gap-4";
  if (input.value == "") {
    elLabel.className += " text-danger";
  } else {
    massiv.push(input.value);
    elnumb.textContent = massiv;
    elInput.value = "";
  }
});

elFind.addEventListener("click", function (evt) {
  evt.preventDefault();

  elFinder.textContent = massiv.filter((n) => n < 0);
});
