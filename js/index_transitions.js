const button = document.getElementById('ubicacionButton');
const imageDiv = document.getElementById('imagenSede');
const image = document.querySelector('#imagenSede img');
const ubicacionText = document.getElementById
    ('ubicacionText');
const rrssIconsLinks = document.getElementsByClassName('iconsLinks');
const rrssIcons = document.querySelector('#rrssIcons i');

button.addEventListener('mouseover', () => {
    ubicacionText.style.transition = "text-shadow 0.2s ease";
    ubicacionText.style.textShadow = "0px 0px 20px rgba(255, 255, 255, 0.4)";

    button.style.transition = "all 0.2s ease";
    button.style.transform = "scale(1.02)";
    button.style.boxShadow = "0px 0px 20px rgba(255, 255, 255, 0.4)";
    button.style.backgroundColor = "#00beab";

    imageDiv.style.transition = "all 0.5s ease";
    imageDiv.style.boxShadow = "0px 0px 30px rgba(255, 255, 255, 0.6)";
    image.style.transition = "all 0.5s ease";
    image.style.transform = "scale(1.03)";
});

button.addEventListener('mouseout', () => {
    ubicacionText.style.textShadow = "0px 0px 10px rgba(255, 255, 255, 0.35)";

    button.style.transform = "none";
    button.style.boxShadow = "0px 0px 10px rgba(255, 255, 255, 0.35)";
    button.style.backgroundColor = "#00A291";

    imageDiv.style.boxShadow = "0px 0px 10px rgba(255, 255, 255, 0.35)";
    image.style.transform = "scale(1.0)";
});

button.addEventListener('mousedown', () => {
    ubicacionText.style.transition = "text-shadow 0s linear";
    ubicacionText.style.textShadow = "0px 0px 10px rgba(255, 255, 255, 0.35)";

    button.style.transition = "all 0s linear";
    button.style.boxShadow = "0px 0px 10px rgba(255, 255, 255, 0.35)";
    button.style.backgroundColor = "#00A291";
    button.style.transform = "none";

    imageDiv.style.transition = "box-shadow 0s linear";
    imageDiv.style.boxShadow = "0px 0px 10px rgba(255, 255, 255, 0.35)";
    image.style.transition = "all 0s linear";
    image.style.transform = "scale(1.0)";
});