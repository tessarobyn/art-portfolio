function resizeMargin() {
  const separator = document.getElementById("landingSeparator");
  const height = separator.offsetHeight;
  separator.style.marginTop = "-" + height / 2 + "px";
}

resizeMargin();
window.addEventListener("resize", () => {
  resizeMargin();
});
