export default function responsiveNavBarLogo() {
  const logo = document.querySelector(".js-icone");
  const mobileScreen = window.innerWidth;

  if (mobileScreen < 720) {
    logo.classList.add("responsive");
  } else {
    logo.classList.remove("responsive");
  }

  window.addEventListener("resize", responsiveNavBarLogo);
}
