export function animateMenuButton(menuButtonClassName, menuClassName) {
  const menuButton = document.querySelector(`.${menuButtonClassName}`);

  menuButton.addEventListener("click", () => {
    const iconContainer = menuButton.querySelector(".icon-container");
    const iconParts = iconContainer.querySelectorAll(".icon-part");

    menuButton.classList.toggle("active");
    iconContainer.classList.toggle("active");
    iconParts.forEach((node) => {
      node.classList.toggle("active");
    });

    animateMenu(menuButtonClassName, menuClassName);
  });
}

function animateMenu(menuButtonClassName, menuClassName) {
  const menuButton = document.querySelector(`.${menuButtonClassName}`);
  const menu = document.querySelector(`.${menuClassName}`);

  if (menuButton.classList.contains("active")) {
    menu.classList.add("active");
    menu.children[0].classList.add("active");
    console.log(menu.children[0].children);
    Array.from(menu.children[0].children).forEach((menuItem) => {
      menuItem.classList.add("active");
      menuItem.children[0].classList.add("active");
    });
  } else {
    menu.classList.remove("active");
    menu.children[0].classList.remove("active");
    console.log(menu.children[0].children);
    Array.from(menu.children[0].children).forEach((menuItem) => {
      menuItem.classList.remove("active");
      menuItem.children[0].classList.remove("active");
    });
  }
}

export function animateSubmenu(menuItemClassName) {
  const menuItemList = document.querySelectorAll(`.${menuItemClassName}`);

  menuItemList.forEach((menuItem) => {
    const menuItemHeader = menuItem.children[0];
    const submenu = menuItem.children[1];
    const submenuItemHeaderList = Array.from(submenu.children);

    menuItemHeader.addEventListener("click", () => {
      menuItemList.forEach((menuItem) => {
        const submenu = menuItem.children[1];
        const menuItemHeader = menuItem.children[0];
        const submenuItemHeaderList = Array.from(submenu.children);

        submenuItemHeaderList.forEach((submenuItemHeader) => {
          submenuItemHeader.classList.remove("active");
        });
        submenu.classList.remove("active");
        menuItemHeader.classList.remove("selected");
      });

      submenuItemHeaderList.forEach((submenuItemHeader) => {
        submenuItemHeader.classList.add("active");
      });
      submenu.classList.add("active");
      menuItemHeader.classList.add("selected");
    });
  });
}
