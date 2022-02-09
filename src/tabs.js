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
    const header = document.createElement("h1");
    header.innerText = "I am header for Sushi tab";
    div.appendChild(header);
  }
  render();
}
