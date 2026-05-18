function calculateTMB(event) {

    event.preventDefault()

    const gender = document.getElementById("gender").value 

    const age = parseInt(document.getElementById("age").value)
    const height = parseFloat(document.getElementById("height").value)
    const weight = parseInt(document.getElementById("weight").value)

    const resultBox = document.getElementById("result")
    const valueText = document.getElementById("tmb-value")

    if (!weight || !age || !height) { // ! --> verifica se é false
        alert("Preencha todos os campos corretamente")
        return
    }

    let tmb = 0

    if (gender === "male") { // === --> verifica além do valor, o tipo primitivo
        tmb = 88.36 + 13.4 * weight + 4.8 * height - 5.7 * age

    } else {
        tmb= 447.6 + 9.2 * weight + 3.1 * height - 4.3 * age
    }

    valueText.innerText = Math.round(tmb)
    resultBox.classList.add('show')

    
    
}