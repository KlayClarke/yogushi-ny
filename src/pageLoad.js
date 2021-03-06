import { yogaToggle, sushiToggle } from "./tabs";

export function pageLoad() {
  const content = document.querySelector("#content");
  const header = document.createElement("header");
  const footer = document.createElement("footer");
  const top = document.createElement("div");
  const middle = document.createElement("div");
  const bottom = document.createElement("div");
  const btnRow = document.createElement("div");
  const logo = document.createElement("a");
  const yogaBtn = document.createElement("button");
  const sushiBtn = document.createElement("button");
  const reservationLink = document.createElement("a");
  const tabBtns = [yogaBtn, sushiBtn];
  reservationLink.innerText = "Reserve A Mat";

  top.classList.add("top");
  middle.classList.add("middle-img");
  middle.classList.add("middle-space");
  bottom.classList.add("bottom");

  logo.innerHTML = "<h1>Yogushi</h1>";
  logo.classList.add("logo");

  yogaBtn.innerText = "Yoga";
  sushiBtn.innerText = "Sushi";

  function removeUnderline() {
    document
      .querySelectorAll("button")
      .forEach((b) => b.classList.remove("active"));
  }

  tabBtns.forEach((btn) =>
    btn.addEventListener("click", function () {
      removeUnderline();
      btn.classList.add("active");
    })
  );

  logo.addEventListener("click", function () {
    removeUnderline();
    middle.innerHTML = "";
    middle.classList.add("middle-img");
  });

  yogaBtn.addEventListener("click", function () {
    middle.classList.remove("middle-img");
    middle.classList.add("showYoga");
    yogaToggle(middle);
  });

  sushiBtn.addEventListener("click", function () {
    middle.classList.remove("middle-img");
    middle.classList.add("showSushi");
    sushiToggle(middle);
  });

  footer.innerHTML = "&#169 2022 Yogushi Group";

  btnRow.appendChild(yogaBtn);
  btnRow.appendChild(sushiBtn);

  header.appendChild(logo);
  header.appendChild(btnRow);

  bottom.appendChild(reservationLink);

  top.appendChild(header);

  content.appendChild(top);
  content.appendChild(middle);
  content.appendChild(bottom);
  content.appendChild(footer);
}
