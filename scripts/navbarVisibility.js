const navbar = document.getElementById("navbar");
let prevScrollPos = window.scrollY;
let currentScrollPos;
window.addEventListener("scroll", (event) => {
  currentScrollPos = window.scrollY;
  if (prevScrollPos > currentScrollPos) {
    navbar.style.top = "0";
  } else {
    navbar.style.top = "-" + navbar.offsetHeight + "px";
  }
  prevScrollPos = currentScrollPos;
});
