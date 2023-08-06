function setTitle() {
  const title = document.getElementsByClassName("categoryTitle")[0];
  title.innerText = sessionStorage.getItem("category");
}

function addImages() {
  const gallery = document.getElementsByClassName("gallery")[0];
  const childDivs = gallery.children;
  let divCount = 0;
  let fileNames = sessionStorage.getItem("images");
  fileNames = fileNames.split(",");
  for (let i = 0; i < fileNames.length; i++) {
    const container = document.createElement("div");
    container.classList.add("imgContainer");
    const img = document.createElement("img");
    img.src = "img/" + fileNames[i] + ".PNG";
    container.appendChild(img);
    childDivs[divCount].appendChild(container);
    divCount += 1;
    if (divCount === 4) {
      divCount = 0;
    }
  }
}

setTitle();
addImages();
