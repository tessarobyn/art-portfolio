const ul = document.getElementById("navbarUl");
ul.style.backgroundColor = "rgba(0,0,0,0)";

window.addEventListener("scroll", (event) => {
  if (window.scrollY >= window.innerHeight - window.innerHeight / 3) {
    ul.style.backgroundColor = "#2e1760";
  } else {
    ul.style.backgroundColor = "rgba(0,0,0,0)";
  }
});
