class HiddenList {
  container: HTMLElement;
  btn: HTMLElement | null;
  items: NodeListOf<HTMLElement>;
  closeCount: number;
  openCount: number;

  constructor(container: HTMLElement) {
    this.container = container;
    this.btn = this.container.querySelector<HTMLElement>("[data-hidden-btn]");

    this.items = this.container.querySelectorAll<HTMLElement>("[data-item]");

    this.closeCount =
      Number(this.container.getAttribute("data-hidden-list")) || 10;
    this.openCount =
      Number(this.container.getAttribute("data-hidden-count")) || 10;

    for (let i = this.closeCount; i < this.items.length; i++) {
      this.items[i].classList.add("_hidden-item");
    }

    if (this.btn) {
      this.btn.addEventListener("click", this.show.bind(this));
    }
  }

  show() {
    for (
      let i = this.closeCount;
      i < this.items.length && i < this.closeCount + this.openCount;
      i++
    ) {
      this.items[i].classList.remove("_hidden-item");
    }

    this.closeCount = this.closeCount + this.openCount;

    if (this.closeCount >= this.items.length) {
      this.container.classList.add("_full-open");
    }
  }
}

export function initHiddenList() {
  document
    .querySelectorAll<HTMLElement>("[data-hidden-list]")
    .forEach((container) => new HiddenList(container));
}
