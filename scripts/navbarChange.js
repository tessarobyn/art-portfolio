const ul = document.getElementById("navbarUl");
window.addEventListener("scroll", (event) => {
  if (window.scrollY >= window.innerHeight) {
    ul.style.backgroundColor = "#2e1760";
  } else {
    ul.style.backgroundColor = "rgba(0,0,0,0)";
  }
});
