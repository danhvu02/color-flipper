const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function () {
  let rgbColor = "rgb(";
  for (let i = 0; i < 3; i++) {
    rgbColor += getRandomNumber() + ",";
  }
  rgbColor = rgbColor.slice(0, -1); // Remove the trailing comma
  rgbColor += ")";

  document.body.style.backgroundColor = rgbColor;
  color.textContent = rgbColor;
});

function getRandomNumber() {
  return Math.floor(Math.random() * 256);
}
