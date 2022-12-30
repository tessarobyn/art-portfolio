const ul = document.getElementById("navbarUl");
const navbar = document.getElementById("navbar");
let prevScrollPos = window.scrollY;
let currentScrollPos;
window.addEventListener("scroll", (event) => {
  if (window.scrollY >= window.innerHeight - window.innerHeight / 3) {
    ul.style.backgroundColor = "#2e1760";
  } else {
    ul.style.backgroundColor = "rgba(0,0,0,0)";
  }

  currentScrollPos = window.scrollY;
  if (prevScrollPos > currentScrollPos) {
    navbar.style.top = "0";
  } else {
    navbar.style.top = "-" + navbar.offsetHeight + "px";
  }
  prevScrollPos = currentScrollPos;
});
