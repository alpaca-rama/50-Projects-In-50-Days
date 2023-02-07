const buttons = document.querySelectorAll('.ripple')

buttons.forEach(button => {
    button.addEventListener('click', function (e) {
        const x = e.clientX
        const y = e.clientY

        // Show where you click in the entire viewport and NOT just in the buttons viewport.
        // console.log(x, y)

        const buttonTop = e.target.offsetTop
        const buttonLeft = e.target.offsetLeft

        // Will always give the same output as this is where the position of the button is.
        // console.log(buttonTop, buttonLeft)

        const xInside = x - buttonLeft
        const yInside = y - buttonTop

        // Showing the x and y coordinate of where in the button was clicked
        // console.log(xInside, yInside)

        const circle = document.createElement('span')
        circle.classList.add('circle')
        // Remember to add the .px for the format
        circle.style.top = yInside + 'px'
        circle.style.left = xInside + 'px'

        this.appendChild(circle)

        setTimeout(() => circle.remove(), 500)
    })
})