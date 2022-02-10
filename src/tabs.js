export function yogaToggle(div) {
  function render() {
    div.innerHTML = "";
    const tableDiv = document.createElement("div");
    tableDiv.classList.add("table-div");
    const table = document.createElement("table");
    tableDiv.appendChild(table);
    table.classList.add("yoga-table");
    const daysRow = document.createElement("tr");
    const weekdays = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    const sampleEntries = [
      "7:00AM: Steam Yoga",
      "9:00AM: Steam Yoga",
      "11:00AM: Steam Yoga",
      "1:00PM: Yoga In The Sun",
      "3:00PM: Yoga In The Sun",
      "5:00PM: Dark Yoga",
      "7:00PM: Dark Yoga",
    ];
    weekdays.forEach(function (el) {
      const data = document.createElement("th");
      data.classList.add("table-head");
      data.innerText = el;
      daysRow.appendChild(data);
    });

    sampleEntries.forEach(function (e) {
      const row = document.createElement("tr");

      for (let i = 0; i < weekdays.length; i++) {
        const yogaData = document.createElement("td");
        yogaData.innerText = e;
        row.appendChild(yogaData);
        table.appendChild(row);
      }
    });

    table.prepend(daysRow);
    div.appendChild(tableDiv);
  }
  render();
}

export function sushiToggle(div) {
  function render() {
    div.innerHTML = "";
    const menuDiv = document.createElement("div");
    const menuItems = [
      "<h3>Nigri</h3> $12 per serving",
      "<h3>Octopus</h3> $18 per serving",
      "<h3>Salmon</h3> $12 per serving",
      "<h3>Sashimi</h3> $15 per serving",
      "<h3>Scallops</h3> $13 per serving",
      "<h3>Yellowtail</h3> $7 per serving",
    ];

    menuItems.forEach(function (el) {
      const text = document.createElement("div");
      text.classList.add("menu-item");
      text.innerHTML = el;
      menuDiv.appendChild(text);
    });

    div.appendChild(menuDiv);
  }
  render();
}
