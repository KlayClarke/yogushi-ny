export function pageLoad() {
  const content = document.querySelector("#content");
  const top = document.createElement("div");
  const middle = document.createElement("div");
  const bottom = document.createElement("div");
  const header = document.createElement("header");
  const logo = document.createElement("h1");
  const btnRow = document.createElement("div");
  const yogaBtn = document.createElement("button");
  const sushiBtn = document.createElement("button");
  const locationsBtn = document.createElement("button");

  top.classList.add("top");
  middle.classList.add("middle");
  bottom.classList.add("bottom");

  logo.innerText = "Yogushi";
  logo.classList.add("logo");

  yogaBtn.innerText = "Yoga";
  sushiBtn.innerText = "Sushi";
  locationsBtn.innerText = "Locations";

  top.appendChild(header);

  header.appendChild(logo);
  header.appendChild(btnRow);

  btnRow.appendChild(yogaBtn);
  btnRow.appendChild(sushiBtn);
  btnRow.appendChild(locationsBtn);

  content.appendChild(top);
  content.appendChild(middle);
  content.appendChild(bottom);
}
