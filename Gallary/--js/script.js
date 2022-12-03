const pictures = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
const colors = ["aqua", "violet", "yellow", "orange", "purple"];

const buttons = document.querySelectorAll(".carousel-button");
const imgDiv = document.querySelector(".imageContainer");
const heading = document.querySelector("#tittle");
let current_image = 0;

function colorChange() {
  const colorIndex = Math.floor(Math.random() * colors.length);
  heading.style.color = colors[colorIndex];
  imgDiv.style.border = `8px solid ${colors[colorIndex]}`;
}

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    if (button.classList.contains("prev")) {
      current_image--;
      if (current_image < 0) {
        current_image = pictures.length - 1;
      }
      imgDiv.style.background = `url(../--images/${pictures[current_image]}.jpg) center/cover`;
      colorChange();
    }

    if (button.classList.contains("next")) {
      current_image++;
      if (current_image > pictures.length - 1) {
        current_image = 0;
      }
      imgDiv.style.background = `url(../--images/${pictures[current_image]}.jpg) center/cover`;
      colorChange();
    }
  });
});
