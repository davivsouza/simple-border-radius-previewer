let box = document.querySelector("#box");
let inputsRadius = document.querySelectorAll(".edge input");
let tlRadiusInput = document.querySelector(".tl-radius-input");
let trRadiusInput = document.querySelector(".tr-radius-input");
let blRadiusInput = document.querySelector(".bl-radius-input");
let brRadiusInput = document.querySelector(".br-radius-input");

let clipboard = document.querySelector("#result-clipboard");

inputsRadius.forEach((input) => {
  input.addEventListener("pointerdown", updateInput);
});

function updateInput(e) {
  updateBorderRadius(e);
}
function updateTextarea() {
  clipboard.innerHTML = `border-radius: ${tlRadiusInput.value ? tlRadiusInput.value : 0}px ${trRadiusInput.value ? trRadiusInput.value : 0}px ${brRadiusInput.value ? brRadiusInput.value : 0}px ${blRadiusInput.value ? blRadiusInput.value : 0}px; `;
}
function updateBorderRadius(e) {
  let className = e.target.classList.value;

  if (className == "tl-radius-input") {
    tlRadius = e.target.value;
    box.style.borderTopLeftRadius = `${tlRadius}px`;
  } else if (className == "tr-radius-input") {
    trRadius = e.target.value;
    box.style.borderTopRightRadius = `${trRadius}px`;
  } else if (className == "bl-radius-input") {
    brRadius = e.target.value;
    box.style.borderBottomLeftRadius = `${brRadius}px`;
  } else if (className == "br-radius-input") {
    blRadius = e.target.value;
    box.style.borderBottomRightRadius = `${blRadius}px`;
  }

  updateTextarea();
}

function copyToClipBoard() {
  navigator.clipboard.writeText(clipboard.innerHTML)
  alert('Copyed text: ' + clipboard.innerHTML)
}
