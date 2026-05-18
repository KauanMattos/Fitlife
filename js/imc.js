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

    console.log("O peso não é um número", isNaN(weight))

    if (isNaN (weight) || isNaN(height) || weight <= 0 | height <= 0) {
        alert("Por favor, preencha peso e altura com valores válidos")
        return
    }

    const imc = weight / (height * height)

    let classification = ''
    let color = ''

    if (imc < 18.5) {
        classification = "Abaixo do Peso"
        color = "#e67e22"
    } else if (imc < 24.9){
        classification = "Peso Normal"
        color = "#00b894"
    } else if (imc < 29.9) {
        classification = "Sobrepeso"
        color = "#e67e22"
    } else {
        classification = "Obesidade"
        color = "#d63031"

    }


    valueText.innerText = imc.toFixed(2) // Coloca a quantidade de números decimais
    valueText.style.color = color

    descText.innerText = classification
    descText.style.color = color

    resultBox.classList.add("show")
}