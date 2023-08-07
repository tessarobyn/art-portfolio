function toPortfolio() {
  window.location.href = "portfolio.html";
}

const buttons = document.querySelectorAll(".portfolioButton");
buttons.forEach((button) => {
  button.addEventListener("click", toPortfolio);
});
