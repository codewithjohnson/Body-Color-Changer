btn = document.querySelector('button');

function random(number) {
    return Math.floor(Math.random() * (number));
}

function alterBackgroundColor() {
    const randomColor = `rgb(${random(255)},${random(255)},${random(255)})`;
    document.body.style.backgroundColor = randomColor;
    document.body.btn.color = 'red';
}

btn.addEventListener('click', alterBackgroundColor);