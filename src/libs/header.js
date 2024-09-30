// Untuk memunculkan dan menghilangkan menu
const hamburgerMenu = document.getElementById("hamburger-menu");

hamburgerMenu.addEventListener("click", function () {
  const menuToogle = document.getElementsByClassName("menu-toogle")[0];
  const isToggle = hamburgerMenu.classList.contains("toggle");

  if (!isToggle) {
    menuToogle.classList.toggle("hidden");
    hamburgerMenu.classList.toggle("toggle");
    setTimeout(function () {
      menuToogle.classList.toggle("translate-y-[110%]");
    }, 0);
  } else {
    menuToogle.classList.toggle("translate-y-[110%]");
    hamburgerMenu.classList.toggle("toggle");
    setTimeout(function () {
      menuToogle.classList.toggle("hidden");
    }, 1000);
  }
});

// untuk memunculkan dan menghilangkan sub-menu
document.addEventListener("click", function (e) {
  const isMenu = e.target.classList.contains("menu");

  if (isMenu) {
    const iconMenu = e.target.childNodes[1];
    const subMenu = e.target.nextElementSibling;
    const isMuncul = subMenu.classList.contains("muncul");

    if (!isMuncul) {
      subMenu.classList.toggle("hidden");
      setTimeout(function () {
        iconMenu.classList.toggle("rotate-180");
        iconMenu.classList.toggle("translate-x-1");
        subMenu.classList.toggle("muncul");
      }, 0);
    } else {
      subMenu.classList.toggle("muncul");
      iconMenu.classList.toggle("translate-x-1");
      iconMenu.classList.toggle("rotate-180");
      setTimeout(function () {
        subMenu.classList.toggle("hidden");
      }, 1000);
    }
  }
});


