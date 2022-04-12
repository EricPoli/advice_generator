fetch("https://api.adviceslip.com/advice", {
    method: "GET",
})
    .then((res) => res.json())     
    .then((data) => {
        displayData(data)
    })
    .catch((err) => console.log(err))

function displayData(data) {
    const getQuote = data.slip
    const displayAdvice = document.getElementById('advice')
    const advice = getQuote.advice
    displayAdvice.innerHTML = `"${advice}"`

    const displayNumberAdv = document.getElementById('advice-number')
    const adviceNumber = getQuote.id
    displayNumberAdv.innerHTML = `Advice #${adviceNumber}`
}

const btnNewQuote = document.getElementById('quote-btn')
btnNewQuote.addEventListener("click", quote)
    
function quote() {
    fetch("https://api.adviceslip.com/advice", {
        method: "GET",
    })
        .then((res) => res.json())     
        .then((data) => {
            displayData(data)
        })
        .catch((err) => console.log(err))
}