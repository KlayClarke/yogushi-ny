export function pageLoad() {
  const content = document.querySelector("#content");
  const header = document.createElement("header");
  const footer = document.createElement("footer");
  const top = document.createElement("div");
  const middle = document.createElement("div");
  const bottom = document.createElement("div");
  const btnRow = document.createElement("div");
  const logo = document.createElement("h1");
  const yogaBtn = document.createElement("button");
  const sushiBtn = document.createElement("button");
  const locationsBtn = document.createElement("button");
  const reservationLink = document.createElement("a");

  reservationLink.innerText = "Reserve A Mat";

  top.classList.add("top");
  middle.classList.add("middle");
  bottom.classList.add("bottom");

  logo.innerText = "Yogushi";
  logo.classList.add("logo");

  yogaBtn.innerText = "Yoga";
  sushiBtn.innerText = "Sushi";
  locationsBtn.innerText = "Locations";
  footer.innerHTML = "&#169 2022 Yogushi Group";

  btnRow.appendChild(yogaBtn);
  btnRow.appendChild(sushiBtn);
  btnRow.appendChild(locationsBtn);

  header.appendChild(logo);
  header.appendChild(btnRow);

  bottom.appendChild(reservationLink);

  top.appendChild(header);

  content.appendChild(top);
  content.appendChild(middle);
  content.appendChild(bottom);
  content.appendChild(footer);
}
