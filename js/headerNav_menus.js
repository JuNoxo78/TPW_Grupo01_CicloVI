// navsHeader Constants
const navNosotros = document.getElementById("headerNav-nosotros");

// menusHeader Constants
const menuNosotros = document.getElementById("headerMenu-nosotros");

// menus opening
navNosotros.addEventListener("click", () => {
    menuNosotros.showModal();
})


// work with linnks
const buttonLinkNosotros = document.querySelector("#hm-nosotros-buttonImage a");
const ubicacionSection = document.getElementById("ubicacion");

buttonLinkNosotros.addEventListener("click", () => {
    ubicacionSection.scrollIntoView({ behavior: 'smooth' });
    menuNosotros.close();
})

// work with events (close with mouseleave)
const divMenuNosotros = document.getElementById("hm-nosotros-all");

divMenuNosotros.addEventListener("mouseleave", () => {
    menuNosotros.close();
})