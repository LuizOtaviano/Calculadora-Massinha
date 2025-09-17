const custos = {
  farinha: 0.5,
  sal: 0.25,
  agua: 0.05,
  oleo: 0.1,
  corante: 0.15,
}

const sliders = document.querySelectorAll(".input-slider")

sliders.forEach((slider) => {
  const display = slider.nextElementSibling

  slider.addEventListener("input", () => {
    display.textContent = slider.value
  })
})

const btn = document.getElementById("btn-calcular")
const resultado = document.getElementById("resultado")

btn.addEventListener("click", () => {
  let total = 0

  sliders.forEach((slider) => {
    const item = slider.dataset.item
    const valor = parseFloat(slider.value)
    total += valor * custos[item]
  })

  resultado.textContent = `Custo total: R$ ${total.toFixed(2)}`
})