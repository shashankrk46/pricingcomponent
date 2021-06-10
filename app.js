const selector = document.getElementById("selector");
const selectorBtn = document.querySelector(".selector-btn");
console.log(selectorBtn);

const slider = document.getElementById("slider");
const progressBar = document.querySelector(".progressBar");
const views = document.querySelector(".views");
const price = document.querySelector(".price");
const year = document.querySelector(".year");
const switchBtn = document.querySelector(".switch-btn");
const ball = document.querySelector(".ball");
const checkbox = document.querySelector(".check-box");
checkbox.addEventListener("click", changeAnnual);

price.innerHTML = "$" + slider.value;
views.innerHTML = slider.value + "k";
slider.oninput = function() {
  selector.style.left = this.value + "%";
  progressBar.style.width = this.value + "%";
  price.innerHTML = `$${Number(this.value) + 5}`;
  views.innerHTML = Number(this.value) + 30 + "k";
};

function changeAnnual(e) {
  if (e.target.checked == true) {
    year.innerHTML = "/yearly";
    price.innerHTML = `$85`;
    views.innerHTML = "140K";
    progressBar.style.width = "110%";
    selectorBtn.style.display = "none";
    // selectorBtn.style.width = "110%";
    // month.innerHTML = "/yearly";
  } else if (e.target.checked == false) {
    year.innerHTML = "/monthly";
    price.innerHTML = `$5`;
    views.innerHTML = "$30";
    progressBar.style.width = "0%";
    selectorBtn.style.display = "block";
  }
}
