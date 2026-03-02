const slider = document.getElementById("slider");
const fill = document.getElementById("fill");
const label = document.getElementById("label");
const percentage = document.getElementById("percentage");
const message = document.getElementById("faithMessage");

let messageShown = false;

const labels = {
  10: "Pre-faith",
  20: "Listening",
  30: "Effort",
  40: "Consistency",
  50: "Care",
  60: "Time",
  70: "Patience",
  80: "Respect",
  90: "Trust",
  100: "Faith"
};

slider.addEventListener("input", () => {
  const value = slider.value;

  fill.style.width = value + "%";
  percentage.textContent = value + "%";
  label.textContent = labels[value] || "Growing";

  if (value > 10 && !messageShown) {
    message.classList.add("visible");
    messageShown = true;
  }
});
