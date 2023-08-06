function getImageData() {
  const imageFiles = [
    "Avocado",
    "Caleb",
    "Cherries",
    "Crumble",
    "Girl",
    "GirlAndDog",
    "GirlAndRobin",
    "GirlEatingIceCream",
    "GirlLaughing",
    "GirlWithButterflies",
    "GirlWithMulticoloredHair",
    "Honey",
    "Lemon",
    "Parrot",
    "Plant",
    "Robin",
    "Rocket",
    "SnowCat",
    "Sushi",
    "Tiger",
  ];
  const categories = [
    1, 0, 1, 0, 2, 2, 2, 2, 2, 2, 2, 0, 1, 0, 1, 1, 1, 0, 1, 0,
  ];
  const categoryNames = [
    "Animal Portraits",
    "Rough Illustrations",
    "Digital Portraits",
  ];
  return [imageFiles, categories, categoryNames];
}

function toCategoryPage(imageContainer) {
  const children = imageContainer.children;
  let image;
  for (let i = 0; i < children.length; i++) {
    if (children[i].tagName === "IMG") {
      image = children[i];
      break;
    }
  }
  const data = getDescription(image.src);
  sessionStorage.setItem("category", data[1]);
  const imageData = getImageData();
  const fileNames = imageData[0];
  const categories = imageData[1];
  const categoryNames = imageData[2];
  const categoryIndex = categoryNames.indexOf(data[1]);
  const files = [];
  for (let i = 0; i < fileNames.length; i++) {
    if (categories[i] === categoryIndex) {
      files.push(fileNames[i]);
    }
  }
  sessionStorage.setItem("images", files);
  window.location.href = "categoryPage.html";
}

function getDescription(imageFile) {
  const imageData = getImageData();
  const imageFiles = imageData[0];
  const categories = imageData[1];
  const categoryNames = imageData[2];
  const fileSplit = imageFile.split(".")[0].split("/");
  const fileName = fileSplit[fileSplit.length - 1];
  const name = fileName.split(/(?=[A-Z])/).join(" ");
  const data = [name, categoryNames[categories[imageFiles.indexOf(fileName)]]];
  return data;
}

function addDescription(image) {
  const data = getDescription(image.src);
  const container = image.parentElement;
  if (container.childElementCount === 1) {
    const div = document.createElement("div");
    div.classList.add("textContainer");
    const nameText = document.createElement("p");
    nameText.innerText = data[0];
    nameText.style.fontWeight = "300";
    div.appendChild(nameText);
    const category = document.createElement("p");
    category.innerText = data[1];
    category.style.fontWeight = "700";
    div.appendChild(category);
    div.style.width = image.offsetWidth - 20 + "px";
    container.appendChild(div);
  }
}

const images = document.querySelectorAll("img");
images.forEach((image) => {
  image.addEventListener("mouseover", function () {
    addDescription(image);
  });
});

const images2 = document.querySelectorAll(".imgContainer");
images2.forEach((imageContainer) => {
  imageContainer.addEventListener("click", function () {
    toCategoryPage(imageContainer);
  });
});

const categoryCards = document.querySelectorAll(".imgCard");
categoryCards.forEach((card) => {
  card.addEventListener("click", function () {
    toCategoryPage(card);
  });
});
