const counters = document.querySelectorAll('.counter')

counters.forEach(counter => {
    counter.innerText = '0'

    const updateCounter = () => {
        // The addition of the '+' sign before the counter, makes the variable a number from a string.
        const target = +counter.getAttribute('data-target')
        // Testing the output
        // console.log(typeof target, target)

        const c = +counter.innerText
        // Change the value of 100 to alter the speed of the increment
        const increment = target / 100
        // Testing output
        // console.log(increment)

        if (c < target) {
            counter.innerText = `${Math.ceil(c + increment)}`
            setTimeout(updateCounter, 1)
        } else {
            counter.innerText = target
        }
    }

    updateCounter()
})