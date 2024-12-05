import Swiper from "swiper";
import { Navigation } from "swiper/modules";
import { initDropdownItems } from "./utils/dropdown";
import { initSwipers } from "./utils/swiper";
import { initHiddenList } from "./utils/hiddenList";

Swiper.use([Navigation]);

document.addEventListener("DOMContentLoaded", () => {
  // Инициализация компонентов и обработчиков
  // общие
  initDropdownItems();
  initSwipers();

  // компоненты
  initHiddenList();
  // <--

  // События
  // document.addEventListener("click", (e) => {
  //   const target = e.target as HTMLElement;

  //   vBoxHandler(e, target);

  // });

  // document.addEventListener("vBoxContentLoaded", () => {
  //   lazyLoad.update();

  // });
});
