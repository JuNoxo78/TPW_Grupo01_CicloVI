const button = document.querySelector('#ubicacionButton');
const image = document.querySelector('#ubicacionContent img');

button.addEventListener('mouseover', () => {
    image.style.boxShadow = '0px 4px 15px rgba(255, 255, 255, 0.377))';
});

button.addEventListener('mouseout', () => {
    image.style.boxShadow = 'none';
});