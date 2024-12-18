import Swiper from "swiper";

export function initSwipers() {
  document
    .querySelectorAll<HTMLElement>("[data-swiper-init]")
    .forEach((wrapper) => {
      const swiperContainer =
        wrapper.querySelector<HTMLElement>("[data-swiper]") || wrapper;

      console.log(swiperContainer);

      const prevBtn = wrapper.querySelector<HTMLElement>("[data-prev]");
      const nextBtn = wrapper.querySelector<HTMLElement>("[data-next]");
      const scrollbarContainer =
        wrapper.querySelector<HTMLElement>("[data-scrollbar]");

      const swiperProps =
        JSON.parse(swiperContainer.getAttribute("data-props") || "{}") || {};

      swiperContainer.removeAttribute("data-props");

      new Swiper(swiperContainer, {
        slidesPerView: "auto",
        scrollbar: scrollbarContainer
          ? {
              el: scrollbarContainer,
              scrollbarDisabledClass: "_disable",
            }
          : undefined,
        navigation: {
          prevEl: prevBtn,
          nextEl: nextBtn,
        },
        ...swiperProps,
      });
    });
}
