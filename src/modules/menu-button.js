export function animateMenuButton(menuButtonClassname, menuClassname) {
  const menuButton = document.querySelector(`.${menuButtonClassname}`);

  menuButton.addEventListener("click", () => {
    const iconContainer = menuButton.querySelector(".icon-container");
    const iconParts = iconContainer.querySelectorAll(".icon-part");
    const menu = document.querySelector(`.${menuClassname}`);

    menuButton.classList.toggle("active");
    iconContainer.classList.toggle("active");
    iconParts.forEach((node) => {
      node.classList.toggle("active");
    });
    menu.classList.toggle("active");
  });
}
