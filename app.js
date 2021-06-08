const selector = document.getElementById("selector");
const slider = document.getElementById("slider");
const progressBar = document.querySelector(".progressBar");
const views = document.querySelector(".views");
const price = document.querySelector(".price");

price.innerHTML = "$" + slider.value;
views.innerHTML = slider.value + "k";
slider.oninput = function() {
  selector.style.left = this.value + "%";
  progressBar.style.width = this.value + "%";
  price.innerHTML = `$${Number(this.value) + 10}`;
  views.innerHTML = Number(this.value) + 30 + "k";
};
