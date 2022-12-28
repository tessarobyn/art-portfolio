function sizeImg() {
  const img = document.getElementById("landingImg");
  const titleSection = document.getElementById("titleSection");
  const titleText = document.getElementById("titleText");
  if (window.innerWidth > 1000) {
    img.style.height = window.innerHeight + "px";
    img.style.width = "auto";
  } else if (window.innerWidth < 650) {
    titleSection.style.height = window.innerHeight + "px";
    titleText.style.height = window.innerHeight + "px";
  } else {
    img.style.width = window.innerWidth + "px";
    img.style.height = "auto";
  }
}

sizeImg();

window.addEventListener("resize", () => {
  sizeImg();
});
