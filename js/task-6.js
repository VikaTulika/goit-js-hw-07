function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const input = document.querySelector("#controls input")
const create = document.querySelector("[data-create]")
const destroy = document.querySelector("[data-destroy]")
const boxes = document.querySelector("#boxes")
create.addEventListener("click", () => {
  const value = input.value 
  if (value >= 1 && value <= 100) {
    destroyBoxes()
    createBoxes(value)
  }
})

function createBoxes(amount) {
  let size = 30
  const divs = []
  for (let i = 1; i <= amount; i += 1) {
    console.log(i)
    const div = document.createElement("div")
    div.style.width = `${size}px`
    div.style.height = `${size}px`
    div.style.backgroundColor = getRandomHexColor()
    divs.push(div)
    size += 10
  }
  boxes.append(...divs)
}
function destroyBoxes() { 
  boxes.innerHTML = ""
  input.value = ""
}
destroy.addEventListener("click", destroyBoxes)
