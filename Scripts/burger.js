const BURGER_OPENED_CLASSNAME = "mobile-header_open";
const BURGER_BTN_OPENED_CLASSNAME = "mobile-header__button_close";

const burgerNode = document.querySelector(".mobile-header");
const burgerBtnNode = document.querySelector(".mobile-header__button");
const burgerContentNode = document.querySelector(".mobile-header__container");
const burgerLinks = document.querySelectorAll(".mobile-header__menu a");

burgerBtnNode.addEventListener("click", toggleBurger);



burgerNode.addEventListener("click", (event) => {
  const isClickOutsideContent = !event
    .composedPath()
    .includes(burgerContentNode);
  if (isClickOutsideContent) {
    toggleBurger();
  }
});

burgerLinks.forEach((link) => {
    link.onclick = function () {
      toggleBurger()
    };
  });

function toggleBurger() {
  burgerNode.classList.toggle(BURGER_OPENED_CLASSNAME);
  bodyNode.classList.toggle(BODY_FIXED_CLASSNAME);
  burgerBtnNode.classList.toggle(BURGER_BTN_OPENED_CLASSNAME);
}
