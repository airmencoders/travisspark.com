var buttons = {};
var events = {};
var activeFilters = ["all"];

var dimButton = function (event, link) {
  event.target.classList.add("card-action-clicked");
  window.open(link);
}

var toggleSelected = function (button) {
  var isActive = true;

  if (button.classList.contains("event-toggle-buttons-selected")) {
    button.classList.remove("event-toggle-buttons-selected");
    button.classList.add("event-toggle-buttons-deselected");

    isActive = false;
  } else {
    button.classList.remove("event-toggle-buttons-deselected");
    button.classList.add("event-toggle-buttons-selected");

    isActive = true;
    button.id === "all" || toggleOffAll();
  }

  if (isActive) {
    activeFilters.push(button.id);
  } else {
    var index = activeFilters.indexOf(button.id);
    index > -1 ? activeFilters.splice(index, 1) : "";
  }

  renderEvents(activeFilters);
};

var toggleOffAll = function () {
  var buttonAll = document.getElementById("all");
  buttonAll.classList.remove("event-toggle-buttons-selected");
  buttonAll.classList.add("event-toggle-buttons-deselected");

  var index = activeFilters.indexOf("all");
  index > -1 ? activeFilters.splice(index, 1) : "";
};

var renderEvents = function (activeFilters) {
  if (!Array.isArray(activeFilters) || activeFilters.includes("all")) {
    events.forEach((event) => (event.style.display = "inline-block"));
    return;
  }

  if (activeFilters.length === 0) {
    events.forEach((event) => (event.style.display = "none"));
    return;
  }

  events.forEach((event) => {
    for (var i = 0; i < activeFilters.length; i++) {
      if (event.classList.contains(activeFilters[i])) {
        event.style.display = "inline-block";
        break;
      }

      event.style.display = "none";
    }
  });
};

document.addEventListener("DOMContentLoaded", () => {
  buttons = document.querySelectorAll("button.event-toggle-buttons");
  console.log(buttons);
  events = document.querySelectorAll("div.card");

  buttons.forEach((button) =>
    button.addEventListener("click", function () {
      toggleSelected(button);
    })
  );

  //pull filter from query params
  const urlParams = new URLSearchParams(window.location.search);
  const filter = urlParams.get("filter");

  buttons.forEach(button => (button.id === filter) ? toggleSelected(button): "");

});
