// #region navsHeader Constants
const navNosotros = document.getElementById("headerNav-nosotros");
// #endregion

// #region menusHeader Constants
const menuNosotros = document.getElementById("headerMenu-nosotros");
// #endregion

// #region open/close functions for menus

//// MenuNosotros
function openMenuNosotros() {
    menuNosotros.show();
    document.querySelector("body").style.overflowY = "hidden";
}

function closeMenuNosotros() {
    menuNosotros.close();
    document.querySelector("body").style.overflowY = "auto";
}
////

// #endregion

// #region menus opening
navNosotros.addEventListener("click", openMenuNosotros);
// #endregion

// #region work with linnks

//// MenuNosotros Options
const buttonLinkNosotros = document.querySelector("#hm-nosotros-buttonImage a");
const ubicacionSection = document.getElementById("ubicacion");

buttonLinkNosotros.addEventListener("click", () => {
    ubicacionSection.scrollIntoView({ behavior: 'smooth' });
    closeMenuNosotros();
})
/////

// #endregion

// #region work with events (close with mouseleave)

///// MenuNosotros events
const menuNosotrosAll = document.getElementById("hm-nosotros-all");

menuNosotros.addEventListener("mouseenter", () => {
    if (!menuNosotrosAll.matches(":hover")) {
        closeMenuNosotros();
    }
});

menuNosotrosAll.addEventListener("mouseleave", () => {
    if (menuNosotros.matches(":hover")) {
        closeMenuNosotros();
    }
});
/////

// #endregion
