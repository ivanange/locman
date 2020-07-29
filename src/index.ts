import "./index.html";
import "./font.css";
import "./index.css";
import "./spritesheet.css";
import "animate.css";

import slideInit from "./slide";
import "./video";
import { CountUp } from "countup.js";
import fscreen from "fscreen";

var stats = [2, 138, 240, 5];
var isInViewport: (
  elem: HTMLElement,
  bounding?: DOMRect
) => boolean = function (elem: HTMLElement, bounding: DOMRect = null) {
  bounding = bounding || elem.getBoundingClientRect();
  return (
    bounding.top >= 0 &&
    bounding.bottom - (bounding.height * 2) / 3 <=
      document.documentElement.clientHeight
  );
};

window.onload = () => {
  //fscreen.requestFullscreen(document.documentElement);

  //nav links logic
  let navbar = document.querySelector("div.nav");
  let nav = document.getElementById("nav");
  let marker = document.getElementById("marker");
  let links = nav.querySelectorAll("a");
  let menuTrigger = document.getElementById("menutrigger");
  let navMenu = document.getElementById("menu");

  links.forEach((e) =>
    e.addEventListener("click", () => {
      marker.style.width = `${e.offsetWidth}px`;
      marker.style.left = `${e.offsetLeft}px`;
      navMenu.click();
    })
  );
  (links[0] as HTMLElement).click();

  //count Up logic
  let counters = [];
  let counter = document.getElementById("portfolio");
  let counted = false;
  counter.querySelectorAll(".countup").forEach((e, i) => {
    counters.push(new CountUp(e, stats[i]));
  });

  let scrollHandler = () => {
    if (isInViewport(counter.children[0] as HTMLElement) && !counted) {
      counters.forEach((c) => c.start());
      let counted = true;
    }

    //nav scroll logic
    if (
      (document.documentElement.scrollTop - 50 > navbar.clientHeight &&
        !navbar.classList.contains("bg-black")) ||
      (document.documentElement.scrollTop - 50 < navbar.clientHeight &&
        navbar.classList.contains("bg-black"))
    ) {
      navbar.classList.toggle("bg-black");
      navbar.classList.toggle("py-2");
    }
  };

  window.addEventListener("scroll", scrollHandler);

  //responsive nav logic
  menuTrigger.addEventListener("click", (e) => {
    e.stopPropagation();
    navMenu.style.right = "0px";
  });
  navMenu.addEventListener("click", (e) => {
    e.stopPropagation();
    navMenu.style.right = "-100%";
  });
  nav.addEventListener("click", (e) => {
    e.stopPropagation();
  });

  //slide logic
  slideInit();
  scrollHandler();
};
