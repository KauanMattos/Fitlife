let currentWater = 0
const waterGoal = 2500

function addWater(amount) {
    currentWater = currentWater + amount
    updateInterface()
}

function resetWater() {
    currentWater = 0
    updateInterface()
}

function updateInterface() {
    const bar = document.getElementById("water-bar")
    const totalText = document.getElementById("water-total")

    const percentage = (currentWater / waterGoal) * 100

    totalText.innerText = currentWater

    bar.style.width = `${Math.min(percentage, 100)}%` // `` --> Interpola valores
    bar.innerText = `${Math.round(percentage)}%`


    if (currentWater >= waterGoal) {
        bar.style.backgroundColor = "#00b894"
        bar.innerText = "Meta Atingida"
    } else {
        bar.style.backgroundColor = "#0984e3"
    }
}