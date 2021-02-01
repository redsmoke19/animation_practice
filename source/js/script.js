// modules
import mobileHeight from "./modules/mobile-height-adjust.js";
import slider from "./modules/slider.js";
import menu from "./modules/menu.js";
import footer from "./modules/footer.js";
import chat from "./modules/chat.js";
import result from "./modules/result.js";
import form from "./modules/form.js";
import social from "./modules/social.js";
import FullPageScroll from "./modules/full-page-scroll";

// init modules
mobileHeight();
slider();
menu();
footer();
chat();
result();
form();
social();

const fullPageScroll = new FullPageScroll();
fullPageScroll.init();

window.addEventListener(`load`, () => {
  let bbb = document.querySelector(`body`);
  bbb.classList.add(`ready`);
  let introSection = document.querySelector(`.screen--intro`);
  let introMessage = document.querySelector(`.intro__message`);
  if (introSection.classList.contains(`active`)) {
    introMessage.classList.add(`active`);
  } else {
    introMessage.classList.remove(`active`);
  }
});
