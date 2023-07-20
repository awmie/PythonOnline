const bodyElement = document.querySelector('body');
const invertButton = document.getElementById('invertButton');

function toggleInvert() {
    bodyElement.classList.toggle('inverted');
    invertButton.textContent = bodyElement.classList.contains('inverted') ? 'Dark Theme' : 'Light Theme';
}

invertButton.addEventListener('click', toggleInvert);