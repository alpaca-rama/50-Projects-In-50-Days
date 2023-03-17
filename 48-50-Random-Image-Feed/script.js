const container = document.querySelector('.container')
const loremPicsumURL = 'https://picsum.photos/'
const rows = 10

for (let i = 0; i < rows * 3; i++) {
    const img = document.createElement('img')
    img.src = `${loremPicsumURL}${getRandomSize()}`
    container.appendChild(img)
}

function getRandomNr() {
    return Math.floor(Math.random() * 10) + 300
}

function getRandomSize() {
    return `${getRandomNr()}/${getRandomNr()}`
}