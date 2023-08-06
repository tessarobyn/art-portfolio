function checkLayout() {
  const height = document.body.offsetHeight;
  const width = document.body.offsetWidth;
  const sectionA = document.getElementsByClassName("sectionA")[0];
  const introContainer = document.getElementsByClassName("introContainer")[0];
  if (width < height) {
    sectionA.style.height = "95%";
    sectionA.style.flexDirection = "column-reverse";
    sectionA.style.marginTop = "5%";
    introContainer.style.alignItems = "flex-start";
  } else {
    sectionA.style.height = "auto";
    sectionA.style.flexDirection = "row";
    introContainer.style.alignItems = "center";
    sectionA.style.marginTop = "0";
  }
}

function toPortfolio() {
  window.location.href = "portfolio.html";
}

function toContactPage() {
  window.location.href = "contact.html";
}

checkLayout();
window.onresize = checkLayout;

const buttons = document.querySelectorAll(".portfolioButton");
buttons.forEach((button) => {
  button.addEventListener("click", toPortfolio);
});

const buttons2 = document.querySelectorAll(".contactButton");
buttons2.forEach((button2) => {
  button2.addEventListener("click", toContactPage);
});
