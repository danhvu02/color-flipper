const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function () {
  let rgbaColor = "rgba(";
  for (let i = 0; i < 3; i++) {
    rgbaColor += getRandomNumber() + ",";
  }
  const alpha = Math.random().toFixed(2); // Random alpha value between 0 and 1
  rgbaColor += alpha + ")";

  document.body.style.backgroundColor = rgbaColor;
  color.textContent = rgbaColor;
});

function getRandomNumber() {
  return Math.floor(Math.random() * 256);
}
