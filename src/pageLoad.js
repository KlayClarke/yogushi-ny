export function pageLoad() {
  const content = document.querySelector("#content");
  const logo = document.createElement("h1");
  logo.classList.add("logo");
  logo.innerText = "Yogushi";

  content.appendChild(logo);
}
