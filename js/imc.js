function calculateIMC (event) {

    //função que não permite refresh
    event.preventDefault()

    const weightInput = document.getElementById('weight')
    const heightInput = document.getElementById('height')

    //caixa de resultado
    const resultBox = document.getElementById('result')
    const valueText = document.getElementById('imc-value')
    const descText = document.getElementById('imc-desc')

    const weight = parseInt(weightInput.value)
    const height = parseFloat(heightInput.value)

    if (weight <= 0 | height <= 0) {
        alert("Por favor, preencha peso e altura com valores válidos")
        return
    }

    const imc = weight / (height * height)

    let classification = ''
    let color = ''

    if (imc < 18.5) {
        classification = "Abaixo do Peso"
        color = "#e67e22"
    }


    valueText.innerText = imc
    valueText.style.color = color

    descText.innerText = classification
    descText.style.color = color
}