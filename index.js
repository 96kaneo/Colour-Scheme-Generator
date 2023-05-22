const baseURl = "https://www.thecolorapi.com"
const colourGrid = document.getElementById('grid')


document.getElementById('get-scheme-form').addEventListener('submit', (e) => {
    e.preventDefault()
    const seedColour = document.getElementById('seed-colour')
    colourGrid.innerHTML = ''
    const schemeSelector = document.getElementById('scheme')
    const newColour = seedColour.value.replace('#', '')

    const endpoint = `/scheme?hex=${newColour}&mode=${schemeSelector.value}`
    const fullUrl = baseURl + endpoint


    if (schemeSelector.value == 0) {
        alert('Please select a colour scheme')
    } else {
        fetch(fullUrl)
            .then(res => res.json())
            .then(data => {
                console.log(data.colors.length)
                colourGrid.style
                    .gridTemplateColumns = `repeat(${data.colors.length},1fr`
                data.colors.forEach((color) => {
                    colourGrid.innerHTML += `
                    <div class="inner">
                    <div class="figure" id="figure" style="background-color:${color.hex.value};">
                    </div>
                    <div class="text">
                        ${color.hex.value}
                    </div>
                </div>
                    `
                })
            })
    }

})










