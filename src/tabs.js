export function yogaToggle(div) {
  function render() {
    div.innerHTML = "";
    const header = document.createElement("h1");
    header.innerText = "I am header for Yoga tab";
    div.appendChild(header);
  }
  render();
}

export function sushiToggle(div) {
  function render() {
    div.innerHTML = "";
    const header = document.createElement("h1");
    header.innerText = "I am header for Sushi tab";
    div.appendChild(header);
  }
  render();
}

export function locationsToggle(div) {
  function render() {
    div.innerHTML = "";
    const header = document.createElement("h1");
    header.innerText = "I am header for Locations tab";
    div.appendChild(header);
  }
  render();
}
