function sizeImg() {
  const img = document.getElementById("landingImg");
  img.style.height = window.innerHeight + "px";
}

sizeImg();

window.addEventListener("resize", () => {
  sizeImg();
});
