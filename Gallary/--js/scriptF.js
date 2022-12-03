const pictures = [
  "img11",
  "img12",
  "img13",
  "img14",
  "img15",
  "img16",
  "img17",
  "img18",
  "img19",
];
const colors = ["aqua", "violet", "yellow", "orange", "purple"];
const btns = document.querySelectorAll(".carousel-button");
const image_container = document.querySelector(".image_container");
const image_title = document.getElementById("title");
let current_image = 0;

function colorChange() {
  colorIndex = Math.floor(Math.random() * colors.length);
  image_title.style.color = colors[colorIndex];
  image_container.style.border = `8px solid ${colors[colorIndex]}`;
}

btns.forEach((button) => {
  button.addEventListener("click", () => {
    if (button.classList.contains("prev")) {
      current_image--;
      if (current_image < 0) {
        current_image = pictures.length - 1;
      }
      image_container.style.background = `url(../--img/${pictures[current_image]}.jpg) center/cover`;
      colorChange();
    }

    if (button.classList.contains("next")) {
      current_image++;
      if (current_image > pictures.length - 1) {
        current_image = 0;
      }
      image_container.style.background = `url(../--img/${pictures[current_image]}.jpg) center/cover`;
      colorChange();
    }
  });
});
